#!/usr/bin/env ruby

require "fileutils"
require "open-uri"
require "openssl"

@debug = (ENV["DEBUG"] == "true" or ARGV.include?("--debug"))

def download(url, output_path=nil)
  ssl_verify_mode = nil
  if /mingw/ =~ RUBY_PLATFORM
    ssl_verify_mode = OpenSSL::SSL::VERIFY_NONE
  end

  output_path ||= File.basename(url)
  URI(url).open(:ssl_verify_mode => ssl_verify_mode) do |input|
    File.open(output_path, "wb") do |output|
      IO.copy_stream(input, output)
    end
  end

  if block_given?
    base_dir = output_path.sub(/\.tar\..*\z/, "")
    FileUtils.rm_rf(base_dir)
    system("tar", "xf", output_path)
    Dir.chdir(base_dir) do
      yield
    end
    system("tar", "czf", output_path, base_dir)
    FileUtils.rm_rf(base_dir)
  end
end

all_targets = [
  "croaring",
  "zstd",
]

if ARGV.empty?
  targets = all_targets
else
  targets = ARGV
end

cmakelists = File.read(File.join(__dir__, "..", "CMakeLists.txt"))
targets.each do |target|
  case target
  when "croaring"
    version = cmakelists[/set\(GRN_CROARING_EP_VERSION \"(.+)"\)/, 1]
    url = "https://github.com/RoaringBitmap/CRoaring/archive/refs/tags/"
    url << "v#{version}.tar.gz"
    download(url, "CRoaring-#{version}.tar.gz") do
      FileUtils.rm_rf("benchmarks/realdata/")
    end
  when "zstd"
    version = cmakelists[/set\(GRN_ZSTD_EP_VERSION \"(.+)"\)/, 1]
    url = "https://github.com/facebook/zstd/releases/download/"
    url << "v#{version}/zstd-#{version}.tar.gz"
    download(url)
  else
    $stderr.puts("Unsupported target #{target}")
    exit(false)
  end
end
