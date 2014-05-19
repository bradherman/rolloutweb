path  = File.join(File.dirname(__FILE__), "/../../../../../../../config/rollout.yml")
FLAGS = YAML.load(IO.read(path)) rescue nil

