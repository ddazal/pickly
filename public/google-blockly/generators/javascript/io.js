goog.require('Blockly.JavaScript');

Blockly.JavaScript['io_type'] = function(block) {
	var option = block.getFieldValue('IOptions');
	var code;
	if(option === 'IO_INPUT'){
		code = "255";
	} else { 
		code = "0";
	}
	return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['io_tris'] = function(block) {
	var value = Blockly.JavaScript.valueToCode(block,'io_mode', Blockly.JavaScript.ORDER_NONE);
	var option = block.getFieldValue("PORToptions");
	value = value ? value:'0';
	var code = 'set_tris_'+ option.toLowerCase() + '(' + value + ');\n';
	return code;
};
Blockly.JavaScript['io_get'] = function(block) {
	var value = Blockly.JavaScript.valueToCode(block, 'var', Blockly.JavaScript.ORDER_NONE) || 'variable';
	var option = block.getFieldValue('PORTget');
	var code = value + ' = ' + 'input_' + option.toLowerCase() + '();\n';
	return code;
};
Blockly.JavaScript['io_set'] = function(block) {
	var value = Blockly.JavaScript.valueToCode(block,'port_value', Blockly.JavaScript.ORDER_NONE) || 0;
	var option = block.getFieldValue('PORTset');
	var code = 'output_' + option.toLowerCase() + '(' + value + ');\n';
	return code;
};
Blockly.JavaScript['io_pin_set'] = function(block) {
	var state = block.getFieldValue('PINstate');
	var port = block.getFieldValue('PORToptions').toLowerCase();
	var pinNumber = block.getFieldValue('PINnumber');
	var code;
	if(state == 'HIGH') {
		code = 'output_high(pin_'+ port + pinNumber + ');\n';
	} else {
		code = 'output_low(pin_'+ port + pinNumber + ');\n';
	}
	return code;
};
Blockly.JavaScript['io_pin_get'] = function(block) {
	var port = block.getFieldValue("PORToptions").toLowerCase();
	var pinNumber = block.getFieldValue("PINnumber");
	var code = 'input(pin_'+ port + pinNumber+')';
	return [code, Blockly.JavaScript.ORDER_NONE];
};