Blockly.Blocks['set_var'] = {
  init: function() {
    this.appendValueInput("VAL")
        .setCheck(["Number", "String", "Var"])
        .appendField(Blockly.Msg.VAR_SET)
        .appendField(new Blockly.FieldTextInput("variable"), "VAR")
        .appendField(Blockly.Msg.VAR_TO);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
  }
};
Blockly.Blocks['get_var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("variable"), "VAR");
    this.setOutput(true, "Var");
    this.setColour(330);
  }
};