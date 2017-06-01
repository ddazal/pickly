goog.require(Blockly.JavaScript);

Blockly.JavaScript['create_arr'] = function(block) {
	var type = block.getFieldValue('ARR_TYPE').toLowerCase();
	var varName = block.getFieldValue('VAR');
	var code = type + ' ' + varName + '[];\n';
	return code;
}