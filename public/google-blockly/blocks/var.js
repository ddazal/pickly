Blockly.Blocks['set_var'] = {
  init: function() {
    this.appendValueInput("VAL")
        .setCheck(["Number", "String", "Var","Boolean"])
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
    this.setOutput(true, ["Var","Boolean","Number","String"]);
    this.setColour(330);
  }
};
Blockly.Blocks['create_var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.VAR_CREATE)
        .appendField(new Blockly.FieldDropdown([["int","INT"], ["float","FLOAT"], ["char","CHAR"]]), "VAR_TYPE")
        .appendField(new Blockly.FieldTextInput("variable"), "VAR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
  }
};