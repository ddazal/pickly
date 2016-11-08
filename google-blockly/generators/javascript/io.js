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
Blockly.JavaScript['io_ports'] = function(block) {
	var value = Blockly.JavaScript.valueToCode(block,'io_mode', Blockly.JavaScript.ORDER_NONE);
	var option = block.getFieldValue("PORToptions");
	value = value ? value:'null';
	var code;
	if(option == 'PORT_A'){
		code = 'set_tris_a(' + value + ');';
	}
	if(option == 'PORT_B'){
		code = 'set_tris_b(' + value + ');';
	}
	if(option == 'PORT_C'){
		code = 'set_tris_c(' + value + ');';
	}
	if(option == 'PORT_D'){
		code = 'set_tris_d(' + value + ');';
	}
	if(option == 'PORT_E'){
		code = 'set_tris_e(' + value + ');';
	}
	return code;
};
Blockly.JavaScript['io_get'] = function(block) {
	var code;
	return code;
};
Blockly.JavaScript['io_set'] = function(block) {
	var code;
	return code;
};
Blockly.JavaScript['io_pins'] = function(block) {
	var code;
	return code;
};
Blockly.JavaScript['io_pin_set'] = function(block) {
	var code;
	return code;
};
Blockly.JavaScript['io_pin_get'] = function(block) {
	var code;
	return code;
};