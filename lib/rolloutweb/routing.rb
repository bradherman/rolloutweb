module Rolloutweb #:nodoc:
  module Routing #:nodoc:
    module MapperExtensions
      def rollouts
        @set.add_route("/rollout", {:controller => "flags", :action => "index"})
        @set.add_route("/rollout/flag/:id", {:controller => "flags", :action => "update", :constraints => {:method => 'post'}})
      end
    end
  end
end

ActionController::Routing::RouteSet::Mapper.send :include, Rolloutweb::Routing::MapperExtensions