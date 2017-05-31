goog.require('Blockly.JavaScript');

Blockly.JavaScript['adc_done'] = function(block) {
	var code = 'adc_done()';
	return [code, Blockly.JavaScript.ORDER_NONE + '\n']
};
Blockly.JavaScript['adc_read'] = function(block) {
	var option = block.getFieldValue('ADCoptions');
	var code = 'read_adc(' + option +')';
	if (block.outputConnection) {
		if ( option === 'ADC_START_AND_READ')
			return ['read_adc()'	, Blockly.JavaScript.ORDER_NONE + '\n'];
		return [code, Blockly.JavaScript.ORDER_NONE + '\n'];
	} else {
		return code + ';\n';
	}
};
Blockly.JavaScript['adc_channel'] = function(block) {
	var channel = block.getFieldValue('channel');
	var code = 'set_adc_channel(' + channel +');\n';
	return code;
};
Blockly.JavaScript['adc_setup'] = function(block) {
	var option = block.getFieldValue('CLOCKoptions');
	var code = 'setup_adc(' + option +');\n';
	return code;
};