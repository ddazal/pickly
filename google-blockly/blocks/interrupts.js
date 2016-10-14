Blockly.Blocks['int_enable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Habilitar interrupción")
        .appendField(new Blockly.FieldDropdown([["Global", "GLOBAL"], ["Timer 0", "INT_TIMER0"], ["Timer 1", "INT_TIMER1"], ["Timer 2", "INT_TIMER2"], ["Cambio en RB4-RB7", "INT_RB"], ["Cambio en RB0", "INT_EXT"], ["ADC finalizado", "INT_AD"], ["Buffer vacío", "INT_TBE"], ["Dato disponible", "INT_RDA"]]), "ISRoptions");
    this.setColour(85);
  }
};
Blockly.Blocks['int_timer0'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Timer 0");
    this.appendStatementInput("INT_TIMER0");
    this.setColour(85);
  }
};
Blockly.Blocks['int_timer1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Timer 1");
    this.appendStatementInput("INT_TIMER1");
    this.setColour(85);
  }
};
Blockly.Blocks['int_timer2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Timer 2");
    this.appendStatementInput("INT_TIMER2");
    this.setColour(85);
  }
};
Blockly.Blocks['int_rb'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Cambio en RB4-RB7");
    this.appendStatementInput("INT_RB");
    this.setColour(85);
  }
};
Blockly.Blocks['int_ext'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Cambio en RB0");
    this.appendStatementInput("INT_EXT");
    this.setColour(85);
  }
};
Blockly.Blocks['int_ad'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ADC Finalizado");
    this.appendStatementInput("INT_AD");
    this.setColour(85);
  }
};
Blockly.Blocks['int_tbe'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Buffer de transmisión vacío");
    this.appendStatementInput("INT_TBE");
    this.setColour(85);
  }
};
Blockly.Blocks['int_rda'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Dato disponible");
    this.appendStatementInput("INT_RDA");
    this.setColour(85);
  }
};