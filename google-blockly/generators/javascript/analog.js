goog.require('Blockly.JavaScript');


Blockly.JavaScript['adc_done'] = function(block) {
	var code = 'adc_done()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['adc_read'] = function(block) {
	var option = block.getFieldValue('ADCoptions');
	var code;
	if (option === 'ADC_START_ONLY') {
		code = 'read_adc(ADC_START_ONLY)';
	} else if (option === 'ADC_READ_ONLY'){
		code = 'read_adc(ADC_READ_ONLY)';
	} else {
		code = 'read_adc()';
	}
	return code;
};
Blockly.JavaScript['adc_channel'] = function(block) {
	var channel = block.getFieldValue('channel');
	var code = 'set_adc_channel(' + channel +');\n';
	return code;
};
Blockly.JavaScript['adc_setup'] = function(block) {
	var option = block.getFieldValue('CLOCKoptions');
	var code;
	if (option === 'ADC_OFF') {
		code = 'setup_adc(ADC_OFF);\n';
	} else if (option === 'ADC_CLOCK_DIV_2'){
		code = 'setup_adc(ADC_CLOCK_DIV_2);\n';
	} else if (option === 'ADC_CLOCK_DIV_4'){
		code = 'setup_adc(ADC_CLOCK_DIV_4);\n';
	} else if (option === 'ADC_CLOCK_DIV_8'){
		code = 'setup_adc(ADC_CLOCK_DIV_8);\n';
	} else if (option === 'ADC_CLOCK_DIV_16'){
		code = 'read_adc(ADC_CLOCK_DIV_16);\n';
	} else if (option === 'ADC_CLOCK_DIV_32'){
		code = 'setup_adc(ADC_CLOCK_DIV_32);\n';
	} else if (option === 'ADC_CLOCK_DIV_64'){
		code = 'setup_adc(ADC_CLOCK_DIV_64);\n';
	} else {
		code = 'setup_adc(ADC_CLOCK_INTERNAL);\n';
	}
	return code;
};