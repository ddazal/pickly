Blockly.Blocks['int_enable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField()
        .appendField(new Blockly.FieldDropdown([["Timer 0", "INT_TIMER0"], ["Timer 1", "INT_TIMER1"], ["Timer 2", "INT_TIMER2"], [Blockly.Msg.INT_ENABLE_RB, "INT_RB"], [Blockly.Msg.INT_ENABLE_EXT, "INT_EXT"], [Blockly.Msg.INT_ENABLE_AD, "INT_AD"], [Blockly.Msg.INT_ENABLE_TBE, "INT_TBE"], [Blockly.Msg.INT_ENABLE_RDA, "INT_RDA"]]), "ISRoptions");
    this.setColour(85);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks['int_timer0'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Timer 0");
    this.appendStatementInput("INT_TIMER0");
    this.setColour(85);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks['int_timer1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Timer 1");
    this.appendStatementInput("INT_TIMER1");
    this.setColour(85);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks['int_timer2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Timer 2");
    this.appendStatementInput("INT_TIMER2");
    this.setColour(85);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks['int_rb'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.INT_ENABLE_RB);
    this.appendStatementInput("INT_RB");
    this.setColour(85);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks['int_ext'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.INT_ENABLE_EXT);
    this.appendStatementInput("INT_EXT");
    this.setColour(85);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks['int_ad'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.INT_ENABLE_AD);
    this.appendStatementInput("INT_AD");
    this.setColour(85);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks['int_tbe'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.INT_ENABLE_TBE);
    this.appendStatementInput("INT_TBE");
    this.setColour(85);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks['int_rda'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.INT_ENABLE_RDA);
    this.appendStatementInput("INT_RDA");
    this.setColour(85);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};