goog.require('Blockly.JavaScript');


/* Timer 0 */
Blockly.JavaScript['tmr_tmr0_get'] = function(block) {
	var code = 'get_timer0()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['tmr_tmr0_set'] = function(block) {
	var value = block.getFieldValue('tmr0_value');
	var code = 'set_timer0(' + value + ');\n';
	return code
};
Blockly.JavaScript['tmr_tmr0_setup'] = function(block) {
	var prescaler = block.getFieldValue('PSAoptions');
	var edge = block.getFieldValue('EDGEoptions');
	var clk = block.getFieldValue('CLKoptions');
	var code, code_psa;
	if(prescaler == 'T0_DIV_1') {
		code_psa = 'T0_DIV_1';
	}
	if(prescaler == 'T0_DIV_2') {
		code_psa = 'T0_DIV_2';		
	}
	if(prescaler == 'T0_DIV_4') {
		code_psa = 'T0_DIV_4';		
	}
	if(prescaler == 'T0_DIV_8') {
		code_psa = 'T0_DIV_8';		
	}
	if(prescaler == 'T0_DIV_16') {
		code_psa = 'T0_DIV_16';		
	}
	if(prescaler == 'T0_DIV_32') {
		code_psa = 'T0_DIV_32';		
	}
	if(prescaler == 'T0_DIV_64') {
		code_psa = 'T0_DIV_64';		
	}
	if(prescaler == 'T0_DIV_128') {
		code_psa = 'T0_DIV_128';		
	}
	if(prescaler == 'T0_DIV_256') {
		code_psa = 'T0_DIV_256';		
	}

	if(clk == 'T0_INTERNAL') {
		code = 'setup_timer_0(T0_INTERNAL|' + code_psa +')';
	} else if(clk == 'T0_EXTERNAL') {
		if(edge == 'LOW2HIGH') {
			code = 'setup_timer_0(T0_EXT_L_TO_H|'+ code_psa +')';
		} else {
			code = 'setup_timer_0(T0_EXT_H_TO_L|'+ code_psa +')';
		}
	}
	return code + ';\n';
};
/* Timer 1 */
Blockly.JavaScript['tmr_tmr1_get'] = function(block) {
	var code = 'get_timer1()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['tmr_tmr1_set'] = function(block) {
	var value = block.getFieldValue('tmr1_value');
	var code = 'set_timer1(' + value + ');\n';
	return code
};
Blockly.JavaScript['tmr_tmr1_setup'] = function(block) {
	var enable = block.getFieldValue('ENABLEtmr1');
	var clk = block.getFieldValue('CLKoptions');
	var prescaler = block.getFieldValue('PSAoptions');
	var code,code_psa;
	if(prescaler == 'T1_DIV_BY_1'){
		code_psa = 'T1_DIV_BY_1';
	}
	if(prescaler == 'T1_DIV_BY_2'){
		code_psa = 'T1_DIV_BY_2';
	}
	if(prescaler == 'T1_DIV_BY_4'){
		code_psa = 'T1_DIV_BY_4';
	}
	if(prescaler == 'T1_DIV_BY_8'){
		code_psa = 'T1_DIV_BY_8';
	}
	
	if(enable == 'TRUE') {
		if(clk == 'T1_INTERNAL') {
			code = 'setup_timer_1(T1_INTERNAL|'+ code_psa +');\n';
		} else {
			code = 'setup_timer_1(T1_EXTERNAL|'+ code_psa + ');\n';
		}
	} else {
		code = 'setup_timer_1(T1_DISABLED);\n';
	}
	return code;
};
/* Timer 2 */
Blockly.JavaScript['tmr_tmr2_get'] = function(block) {
	var code = 'get_timer2()\n';
	return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['tmr_tmr2_set'] = function(block) {
	var value = block.getFieldValue('tmr2_value');
	var code = 'set_timer2('+ value +');\n';
	return code;
};
Blockly.JavaScript['tmr_tmr2_setup'] = function(block) {
	var enable = block.getFieldValue('ENABLEtmr2');
	var prescaler = block.getFieldValue("PSAoptions");
	var period = block.getFieldValue('PR2value');
	var postscaler = block.getFieldValue('POSAvalue');
	var code,code_psa;

	if(prescaler == 'T2_DIV_BY_1'){
		code_psa = 'T2_DIV_BY_1';
	}
	if(prescaler == 'T2_DIV_BY_4'){
		code_psa = 'T2_DIV_BY_4';
	}
	if(prescaler == 'T2_DIV_BY_16'){
		code_psa = 'T2_DIV_BY_16';
	}

	if(enable === "TRUE"){
		code = 'setup_timer_2('+ code_psa + ', ' + period + ', ' + postscaler + ');\n';
	} else {
		code = 'setup_timer_2(T2_DISABLED);\n';
	}
	return code;
};