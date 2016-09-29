Blockly.Blocks['delay_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("esperar")
        .appendField(new Blockly.FieldDropdown([["us", "delay_us"], ["ms", "delay_ms"]]), "delay_options")
        .appendField(new Blockly.FieldNumber(0, 0, 65535), "delay_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
