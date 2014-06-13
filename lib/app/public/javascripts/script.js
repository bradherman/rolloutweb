$(function() {
  var flagList, options;
  $("[type='checkbox']").bootstrapSwitch({
    onSwitchChange: function(event, state) {
      var $tgt, name;
      $tgt = $(event.target);
      name = $tgt.attr('name');
      return $.post('/rollout/flag/' + name + '?val=' + state);
    }
  });
  $(".flag").each(function() {
    var $name, $this;
    $this = $(this);
    $name = $('.checkbox', $this).attr('name');
    $(".slider", $this).slider({
      min: 0,
      max: 100,
      values: parseInt($(".pct", $this).html()),
      slide: function(event, ui) {
        $(".pct", $this).html(ui.value);
      },
      stop: function(event, ui) {
        var $chk;
        $.post('/rollout/flag/' + $name + '?pct=' + ui.value);
        $chk = $('input[type=checkbox]', $this);
        if (ui.value > 0) {
          $chk.bootstrapSwitch('state', true, true);
        } else {
          $chk.bootstrapSwitch('state', false, false);
        }
      }
    });
  });
  options = {
    valueNames: ['name']
  };
  return flagList = new List('flags', options);
});
