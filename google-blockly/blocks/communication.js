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
Blockly.Blocks['comm_receive'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Recibir y guardar en");
    this.appendValueInput("get_data")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
