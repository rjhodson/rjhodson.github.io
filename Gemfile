source "https://rubygems.org"
ruby RUBY_VERSION

# gem "jekyll", "~> 3.8.5"
# gem "github-pages", "~> 204", group: :jekyll_plugins

# We'll need rake to build our site in TravisCI
gem "rake", "~> 12"
gem "jekyll"

group :jekyll_plugins do
  gem "jekyll-postcss"
  gem "jekyll-purgecss"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?

