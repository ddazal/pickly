goog.require('Blockly.JavaScript');

Blockly.JavaScript['delay_block'] = function(block) {
	var option = block.getFieldValue("delay_options");
	var value = block.getFieldValue("delay_value");
	var code = option + '(' + value + ');\n';
	return code;
};

Blockly.JavaScript['main_function'] = function(block) {
	var content = Blockly.JavaScript.statementToCode(block, 'main');
	var code = 'void main() { \n' + content +'}' ;
	return code;
};

Blockly.JavaScript['loop'] = function(block) {
	var content = Blockly.JavaScript.statementToCode(block, 'loop');
	var code = 'while(true) {\n' + content + '}\n';
	return code;
}
