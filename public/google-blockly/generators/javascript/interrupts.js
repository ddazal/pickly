goog.require('Blockly.JavaScript');

Blockly.JavaScript['int_enable'] = function (block){
	var option = block.getFieldValue('ISRoptions');
	var code = 'enable_interrupts('+ option + ');\nenable_interrupts(GLOBAL);\n';
	return code;
};

Blockly.JavaScript['int_timer0'] = function(block) {
	var content = Blockly.JavaScript.statementToCode(block, 'INT_TIMER0');
	var code = '#INT_TIMER0 \nvoid tmr0_isr() { \n' + content + '}\n' ;
	return code;
};

Blockly.JavaScript['int_timer1'] = function(block) {
	var content = Blockly.JavaScript.statementToCode(block, 'INT_TIMER1');
	var code = '#INT_TIMER1 \nvoid tmr1_isr() { \n' + content + '}\n' ;
	return code;
};

Blockly.JavaScript['int_timer2'] = function(block) {
	var content = Blockly.JavaScript.statementToCode(block, 'INT_TIMER2');
	var code = '#INT_TIMER2 \nvoid tmr2_isr() { \n' + content + '}\n' ;
	return code;
};

Blockly.JavaScript['int_rb'] = function(block) {
	var content = Blockly.JavaScript.statementToCode(block, 'INT_RB');
	var code = '#INT_RB \nvoid rb_isr() { \n' + content + '}\n' ;
	return code;
};

Blockly.JavaScript['int_ext'] = function(block) {
	var content = Blockly.JavaScript.statementToCode(block, 'INT_EXT');
	var code = '#INT_EXT \nvoid ext_isr() { \n' + content + '}\n' ;
	return code;
};

Blockly.JavaScript['int_ad'] = function(block) {
	var content = Blockly.JavaScript.statementToCode(block, 'INT_AD');
	var code = '#INT_AD \nvoid ad_isr() { \n' + content + '}\n' ;
	return code;
};

Blockly.JavaScript['int_tbe'] = function(block) {
	var content = Blockly.JavaScript.statementToCode(block, 'INT_TBE');
	var code = '#INT_TBE \nvoid tbe_isr() { \n' + content + '}\n' ;
	return code;
};

Blockly.JavaScript['int_rda'] = function(block) {
	var content = Blockly.JavaScript.statementToCode(block, 'INT_RDA');
	var code = '#INT_RDA \nvoid rda_isr() { \n' + content + '}\n' ;
	return code;
};