Blockly.Blocks['main_function'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("void main");
    this.appendStatementInput("main")
        .setCheck(null);
    this.setColour(295);
    this.setTooltip('TODO code');
    this.setDeletable(false);
    this.setPreviousStatement(true, null);
    this.moveBy(50,50);
  }
};
Blockly.Blocks['delay_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.DELAY)
        .appendField(new Blockly.FieldNumber(0, 0, 65535), "delay_value")
        .appendField(new Blockly.FieldDropdown([["us", "delay_us"], ["ms", "delay_ms"]]), "delay_options");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
  }
};
Blockly.Blocks['loop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.LOOP);
    this.appendStatementInput("loop")
        .setCheck(null);
    this.setColour(120);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks['loop_for'] = {
  init: function() {
    this.appendValueInput("VAR")
        .setCheck("Var")
        .appendField(Blockly.Msg.LOOP_FOR_TITLE);
    this.appendValueInput("FROM")
        .setCheck(["Number", "Var"])
        .appendField(Blockly.Msg.LOOP_FOR_FROM);
    this.appendValueInput("TO")
        .setCheck(["Number", "Var"])
        .appendField(Blockly.Msg.LOOP_FOR_TO);
    this.appendValueInput("BY")
        .setCheck(["Number", "Var"])
        .appendField(Blockly.Msg.LOOP_FOR_BY);
    this.appendStatementInput("STACK")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
  }
};