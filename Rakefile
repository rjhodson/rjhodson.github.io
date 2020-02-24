# filename: Rakefile
task :default do
    puts "Running CI tasks..."

    # Runs the jekyll build command for production
    # TravisCI will now have a site directory with our
    # statically generated files.
    sh("yarn run tailwind init _includes/tailwind.config.js")
    sh("JEKYLL_ENV=production bundle exec jekyll build")
    puts "Jekyll successfully built"
  end