Rolloutweb
==========

Quick port of rollout_web for rails 2.3

First copy this whole folder over into vendor/plugins

Next, add the following to routes.rb
    
    # config/routes.rb
    map.rollouts

Add a config/rollout.yml with features that aren't dynamically loaded (since otherwise Rollout is unaware of them unless they've been explicitly set to on).

    # config/rollout.yml
    - feature1
    - feature2

Only does global switches for now.  If you're into Rails 3 or better, get github.com/bradherman/rollout_web.

If you want to protect with basic auth, set ENV['ROLLOUT_WEB_HTTP_BASIC_AUTH_USER'] and ENV['ROLLOUT_WEB_HTTP_BASIC_AUTH_PASSWORD']

Example
=======

Example goes here.


Copyright (c) 2014 [name of plugin creator], released under the MIT license