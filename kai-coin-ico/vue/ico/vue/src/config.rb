require 'compass/import-once/activate'
Encoding.default_external = "utf-8"
# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "assets/css"
sass_dir = "assets/scss"
# images_dir = "assets"
javascripts_dir = "assets/js"

environment = :development

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true
# relative_assets = false

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass

# ************************************
#  Other
# ************************************
# 出力 CSS の画像 URL にクエリを付けない
# asset_cache_buster :none
# generated_image =

# ************************************
#  Sprites
# ************************************
# Make a copy of sprites with a name that has no uniqueness of the hash.
# on_sprite_saved do |filename|
#   if File.exists?(filename)
#     FileUtils.cp filename, filename.gsub(%r{-s[a-z0-9]{10}\.png$}, '.png')
#      # FileUtils.mv filename, filename.gsub(%r{-s[a-z0-9]{10}\.png$}, '.png').gsub('images/../images/', '')
#     # FileUtils.rm_rf(filename)
#   end
# end

# Replace in stylesheets generated references to sprites
# by their counterparts without the hash uniqueness.
# on_stylesheet_saved do |filename|
#   if File.exists?(filename)
#     css = File.read filename
#     File.open(filename, 'w+') do |f|
#       f << css.gsub(%r{-s[a-z0-9]{10}\.png}, '.png')
#     end
#   end
# end

# on_stylesheet_saved do |filename|
#   if File.exists?(filename)
#     css = File.read filename
#     File.open(filename, 'w+') do |f|
#       f << css.gsub(%r{(?<start>-s)(?<hash>[a-z0-9]{10})(?<file>\.png)}, '.png?v=\k<hash>')
#     end
#   end
# end