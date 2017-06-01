goog.require(Blockly.JavaScript);

Blockly.JavaScript['create_arr'] = function(block) {
	var type = block.getFieldValue('ARR_TYPE').toLowerCase();
	var varName = block.getFieldValue('VAR');
	var code = type + ' ' + varName + '[];\n';
	return code;
}
Blockly.JavaScript['set_arr'] = function(block) {
	var index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_NONE) || 0;
	var varName = block.getFieldValue('VAR');
	var val = Blockly.JavaScript.valueToCode(block, 'VAL', Blockly.JavaScript.ORDER_NONE) || 0;
	var code = varName + '[' + index + '] = ' + val + ';\n';
	return code;
}
Blockly.JavaScript['get_arr'] = function(block) {
	var val = Blockly.JavaScript.valueToCode(block, 'VAL', Blockly.JavaScript.ORDER_NONE) || 0;
	var varName = block.getFieldValue('VAR');
	var code = varName + '[' + val + ']';
	return [code, Blockly.JavaScript.ORDER_NONE + '\n'];
}