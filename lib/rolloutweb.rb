# Rolloutweb
require 'rolloutweb/routing'
require 'app/config/initializers/rollout'

%w{ controllers views config }.each do |dir|
  path = File.join(File.dirname(__FILE__), 'app', dir)
  $LOAD_PATH << path
  ActiveSupport::Dependencies.load_paths << path
  ActiveSupport::Dependencies.load_once_paths.delete(path)
end

ActionController::Base.prepend_view_path File.dirname(__FILE__) + "/app/views"