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
Blockly.JavaScript['adc_ports'] = function(block) {
	var option;
	var value = block.getFieldValue('ADC_PORTS');
	switch(value) {
		case 'NO':
			option = 'NO_ANALOGS';
			break;
		case 'ONE':
			if(block.getFieldValue('ONE_VREF') == 'TRUE')
				option = 'AN0_VREF_VREF';
			else
				option = 'AN0';
			break;
		case 'TWO':
			if(block.getFieldValue('TWO_VREF') == 'TRUE')
				option = 'AN0_AN1_VREF_VREF';
			else
				option = 'AN0_AN1_VSS_VREF';
			break;
		case 'THREE':
			if(block.getFieldValue('THREE_VREF') == 'TRUE')
				option = 'AN0_AN1_AN4_VREF_VREF';
			else
				option = 'AN0_AN1_AN3';
			break;
		case 'FOUR':
			if(block.getFieldValue('FOUR_VREF') == 'TRUE')
				option = 'AN0_AN1_AN4_AN5_VREF_VREF';
			else
				option = 'AN0_AN1_AN2_AN4_VSS_VREF';
			break;
		case 'FIVE':
			if(block.getFieldValue('FIVE_VREF') == 'TRUE')
				option = 'AN0_AN1_AN2_AN4_AN5_VSS_VREF';
			else
				option = 'AN0_AN1_AN2_AN3_AN4';
			break;
		case 'SIX':
			if(block.getFieldValue('SIX_VREF') == 'TRUE')
				option = 'AN0_AN1_AN2_AN4_AN5_VSS_VREF';
			else
				option = 'AN0_AN1_AN2_AN3_AN4_AN5';
			break;
		default:
				option = 'ALL_ANALOG';
	}
	var code = 'setup_adc_ports(' + option + ');\n';
	return code;
}