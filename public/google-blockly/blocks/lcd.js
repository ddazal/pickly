Blockly.Blocks['lcd_init'] = {
	init: function() {
		this.appendDummyInput()
				.appendField(Blockly.Msg.LCD_INIT);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(105);
	}
}