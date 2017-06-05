goog.require('Blockly.JavaScript');

Blockly.JavaScript['delay_block'] = function(block) {
	var option = block.getFieldValue("delay_options");
	var value = block.getFieldValue("delay_value");
	var code = option + '(' + value + ');\n';
	return code;
};

Blockly.JavaScript['main_function'] = function(block) {
	var content = Blockly.JavaScript.statementToCode(block, 'main');
	var currentBlocks = block.workspace.blockDB_;
	var blockKeys = Object.keys(currentBlocks);
	var existLcd = blockKeys.filter(function(element) {
		if (currentBlocks[element].type == 'lcd_init')
			return true;
		return false;
	})
	if (!existLcd.length) {
		var code = 'void main() { \n' + content +'}' ;
	} else {
		var code = "#define LCD_ENABLE_PIN  PIN_E0\n" + 
							 "#define LCD_RS_PIN PIN_E1\n" +
							 "#define LCD_RW_PIN PIN_E2\n" +          
							 "#define LCD_DATA4 PIN_D4\n" + 
							 "#define LCD_DATA5 PIN_D5\n" + 
							 "#define LCD_DATA6 PIN_D6\n" +
							 "#define LCD_DATA7 PIN_D7\n\n" +
							 "#include &lt;lcd.c&gt;\n\n" + "void main() { \n" + content + '}';
	}
	
	return code;
};

Blockly.JavaScript['loop'] = function(block) {
	var content = Blockly.JavaScript.statementToCode(block, 'loop');
	var code = 'while(true) {\n' + content + '}\n';
	return code;
}
Blockly.JavaScript['loop_for'] = function(block) {
  var value_var = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_NONE) || 'variable';
  var value_from = Blockly.JavaScript.valueToCode(block, 'FROM', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_to = Blockly.JavaScript.valueToCode(block, 'TO', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_by = parseInt(Blockly.JavaScript.valueToCode(block, 'BY', Blockly.JavaScript.ORDER_ATOMIC));
  var statements_stack = Blockly.JavaScript.statementToCode(block, 'STACK');
  if (!value_by) {
  	var code = 'for (' + value_var + ' = ' + value_from + '; ' + value_var + ' <= ' + value_to + '; ' + value_var + '++) {\n' + statements_stack + '}\n';	
  } else {
  	var code = 'for (' + value_var + ' = ' + value_from + '; ' + value_var + ' <= ' + value_to + '; ' + value_var + ' = ' + value_var + ' + (' + value_by + ')) {\n' + statements_stack + '}\n';	
  }
  
  return code;
};