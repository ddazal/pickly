goog.require(Blockly.JavaScript);

Blockly.JavaScript['fun_create'] = function(block) {
	var type = block.getFieldValue('TYPE').toLowerCase();
	var funName = block.getFieldValue('FUN_NAME');
	var stack = Blockly.JavaScript.statementToCode(block, 'FUNCTION');
	var code = type + ' ' + funName + '() {\n' + stack + '}\n';
	return code;
}
Blockly.JavaScript['fun_exec'] = function(block) {
	var funName = block.getFieldValue('FUN_NAME');
	var code = funName + '();\n';	
	return code;
}
Blockly.JavaScript['fun_get'] = function(block) {
	var funName = block.getFieldValue('FUN_NAME');
	var code = funName + '()';	
	return [code, Blockly.JavaScript.ORDER_ATOMIC + '\n'];
}
Blockly.JavaScript['fun_return'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'RETURN', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'return(' + value_name + ');\n';
  return code;
};