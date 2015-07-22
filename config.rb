Time.zone = "Melbourne"

activate :blog do |blog|
  blog.name = "work"
  blog.prefix = "work"

  blog.taglink = "categories/{tag}.html"
  blog.permalink = "{year}/{month}/{day}/{title}.html"
  blog.layout = "post"
  blog.summary_separator = /(READMORE)/
  blog.summary_length = 250
  blog.default_extension = ".md"

  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"

  # Enable pagination
  blog.paginate = true
  blog.per_page = 6
  blog.page_link = "page/{num}"
end

activate :blog do |blog|
  blog.name = "collab"
  blog.prefix = "collab"

  blog.taglink = "categories/{tag}.html"
  blog.permalink = "{year}/{month}/{day}/{title}.html"
  blog.layout = "post"
  blog.summary_separator = /(READMORE)/
  blog.summary_length = 250
  blog.default_extension = ".md"

  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"

  # Enable pagination
  blog.paginate = true
  blog.per_page = 6
  blog.page_link = "page/{num}"
end

page "/feed.xml", layout: false

###
# Helpers
###

activate :autoprefixer do |config|
  config.browsers = ['last 2 versions']
end

# Automatic image dimensions on image_tag helper
activate :automatic_image_sizes

# Reload the browser automatically whenever files change
activate :livereload

set :relative_links, true

activate :directory_indexes

set :fonts_dir,  "source/fonts"
activate :bootstrap_navbar

sprockets.append_path File.join root, 'source/javascripts'

# Methods defined in the helpers block are available in templates
helpers do
  def nav_active(path)
    current_page.path == path ? {:class => "active"} : {}
  end
end

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  activate :asset_hash

  # Use relative URLs
  activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"

  activate :imageoptim

  activate :minify_html

  activate :gzip
end

activate :deploy do |deploy|
  deploy.method = :git
  deploy.branch = 'gh-pages'
  deploy.build_before = true
end
