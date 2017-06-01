goog.require('Blockly.JavaScript');

Blockly.JavaScript['set_var'] = function(block) {
	var varName = block.getFieldValue('VAR')
	var val = Blockly.JavaScript.valueToCode(block, 'VAL', Blockly.JavaScript.ORDER_NONE) || 0;
	var code = varName + ' = ' + val  + ';\n'
	return code;
}
Blockly.JavaScript['get_var'] = function(block) {
	var val = block.getFieldValue('VAR');
	return [val, Blockly.JavaScript.ORDER_NONE + '\n'];
}
Blockly.JavaScript['create_var'] = function(block) {
	var type = block.getFieldValue('VAR_TYPE').toLowerCase();
	var varName = block.getFieldValue('VAR');
	var code = type + ' ' + varName + ';\n';
	return code;
}