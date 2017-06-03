goog.require(Blockly.JavaScript);

Blockly.JavaScript['lcd_init'] = function(block) {
	var code = "lcd_init();\n";
	return code;
}
Blockly.JavaScript['lcd_print'] = function(block) {
	var val = Blockly.JavaScript.valueToCode(block, 'LCD_PRINT', Blockly.JavaScript.ORDER_NONE);
	var code = 'lcd_putc(' + val + ');\n';
	return code;
}
Blockly.JavaScript['lcd_clear'] = function(block) {
	var code = 'lcd_putc("&#92;f");\n';
	return code;
}
Blockly.JavaScript['lcd_move'] = function(block) {
  var number_row = block.getFieldValue('ROW');
  var number_column = block.getFieldValue('COLUMN');
  var code = 'lcd_gotoxy(' + number_row + ',' + number_column + ');\n';
  return code;
};