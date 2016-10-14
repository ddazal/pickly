Blockly.Blocks['int_enable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Habilitar interrupción")
        .appendField(new Blockly.FieldDropdown([["Global", "GLOBAL"], ["Timer 0", "INT_TIMER0"], ["Timer 1", "INT_TIMER1"], ["Timer 2", "INT_TIMER2"], ["Cambio en RB4-RB7", "INT_RB"], ["Cambio en RB0", "INT_EXT"], ["ADC finalizado", "INT_AD"], ["Buffer vacío", "INT_TBE"], ["Dato disponible", "INT_RDA"]]), "NAME");
    this.setColour(85);
  }
};