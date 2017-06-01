goog.require('Blockly.JavaScript');

Blockly.JavaScript['set_var'] = function(block) {
	var varName = block.getFieldValue('VAR')
	var val = Blockly.JavaScript.valueToCode(block, 'VAL', Blockly.JavaScript.ORDER_NONE) || 0;
	var aux = parseFloat(val)
	if(isInteger(aux)) var type = 'int';
	else if(isText(aux, val)) var type = 'char';
	else var type = 'float';
	var code = type + ' ' + varName + ' = ' + val  + ';\n'
	return code;
}
Blockly.JavaScript['get_var'] = function(block) {
	var val = block.getFieldValue('VAR');
	return [val, Blockly.JavaScript.ORDER_NONE + '\n'];
}

function isInteger(value) {
	if (value % 1 == 0) return true;
	return false;
}
function isText(value, aux) {
	if (isNaN(value)) return true;
	return false;
}