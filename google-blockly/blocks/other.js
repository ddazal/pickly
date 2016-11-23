Blockly.Blocks['main_function'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("void main");
    this.appendStatementInput("main")
        .setCheck(null);
    this.setColour(290);
    this.setTooltip('TODO code');
    this.setDeletable(false);
    this.setPreviousStatement(true, null);
    this.moveBy(50,50);
  }
};
Blockly.Blocks['delay_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("esperar")
        .appendField(new Blockly.FieldDropdown([["us", "delay_us"], ["ms", "delay_ms"]]), "delay_options")
        .appendField(new Blockly.FieldNumber(0, 0, 65535), "delay_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
  }
};