$(function() {
  var flagList, options;
  $("[type='checkbox']").bootstrapSwitch({
    onSwitchChange: function(event, state) {
      var name;
      name = $(event.target).attr('name');
      return $.post('/rollout/flag/' + name + '?val=' + state);
    }
  });
  options = {
    valueNames: ['name']
  };
  return flagList = new List('flags', options);
});
