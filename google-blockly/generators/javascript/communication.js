goog.require('Blockly.JavaScript');

Blockly.JavaScript['comm_send'] = function(block) {
	var data = Blockly.JavaScript.valueToCode(block, 'set_data', Blockly.JavaScript.ORDER_NONE);
	var code = 'putc('+ data + ');\n';
	return code;
};
Blockly.JavaScript['comm_receive'] = function(block) {
	var data = Blockly.JavaScript.valueToCode(block, 'get_data', Blockly.JavaScript.ORDER_NONE) || 'variable';
	var code = data + ' = getc();\n';
	return code;
}; 
Blockly.JavaScript['comm_baud_rate'] = function(block){
	var option = block.getFieldValue('baud_rate');
	var code = '#use rs232(baud='+ option +',xmit=PIN_C6,rcv=PIN_C7,bits=8)';
	return code;
};