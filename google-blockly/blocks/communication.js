Blockly.Blocks['comm_send'] = {
  init: function() {
    this.appendValueInput("set_data")
        .setCheck(["Number", "String"])
        .appendField("Enviar");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};