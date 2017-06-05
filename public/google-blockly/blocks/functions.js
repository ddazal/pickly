Blockly.Blocks['fun_create'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.FUN)
        .appendField(new Blockly.FieldDropdown([["void","VOID"], ["int","INT"], ["float","FLOAT"], ["char","CHAR"]]), "TYPE")
        .appendField(new Blockly.FieldTextInput(Blockly.Msg.FUN_NAME), "FUN_NAME");
    this.appendStatementInput("FUNCTION")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
  }
};
Blockly.Blocks['fun_exec'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.FUN)
        .appendField(new Blockly.FieldTextInput(Blockly.Msg.FUN_NAME), "FUN_NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
  }
};
Blockly.Blocks['fun_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.FUN)
        .appendField(new Blockly.FieldTextInput(Blockly.Msg.FUN_NAME), "FUN_NAME");
    this.setOutput(true, null);
    this.setColour(290);
  }
}
Blockly.Blocks['fun_return'] = {
  init: function() {
    this.appendValueInput("RETURN")
        .setCheck(null)
        .appendField(Blockly.Msg.FUN_RETURN);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
  }
};