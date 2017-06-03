Blockly.Blocks['lcd_init'] = {
	init: function() {
		this.appendDummyInput()
				.appendField(Blockly.Msg.LCD_INIT);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(105);
	},
	onchange: function(e) {
		var connection = this.previousConnection.targetConnection;
		var regexp = /lcd*/
		if (connection) {
			if (!regexp.exec(connection.sourceBlock_.type)) {
				this.setWarningText(null)
			} else {
				this.setWarningText(Blockly.Msg.LCD_WARNING);
			}
		}
	}
}
Blockly.Blocks['lcd_print'] = {
  init: function() {
    this.appendValueInput("LCD_PRINT")
        .setCheck("String")
        .appendField(Blockly.Msg.LCD_PRINT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
  }
};
Blockly.Blocks['lcd_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCD_CLEAR);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
  }
};
Blockly.Blocks['lcd_move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCD_MOVE_X)
        .appendField(new Blockly.FieldNumber(0, 1, 16), "ROW")
        .appendField("y:")
        .appendField(new Blockly.FieldNumber(0, 1, 2), "COLUMN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
  }
};