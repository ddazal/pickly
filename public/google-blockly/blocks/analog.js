/**
* Los bloques se encuentran basados en las siguientes funciones del software PICC
* The following blocks are based on the next PICC software functions
* setup_adc(mode);
* set_adc_channel(channel):
* read_adc(mode);
* adc_done();
* Pendiente: Mutador para bloques de función setup_adc_ports(value);
* Pending: Mutator for function setup_adc_ports(value);
*/

Blockly.Blocks['adc_done'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ADC_DONE);
    this.setOutput(true, null);
    this.setColour(0);
  }
};
Blockly.Blocks['adc_read'] = {
	init: function(){
		var PROPERTIES=[[Blockly.Msg.ADC_START_ONLY,'ADC_START_ONLY'],[Blockly.Msg.ADC_READ_ONLY,'ADC_READ_ONLY'],[Blockly.Msg.ADC_START_AND_READ,'ADC_START_AND_READ']];
		var dropdown = new Blockly.FieldDropdown (PROPERTIES,function(option){
			var whenStartSelect = (option == 'ADC_START_ONLY');
      		this.sourceBlock_.updateShape_(whenStartSelect);
		});
		this.appendDummyInput()
	        .appendField(dropdown, "ADCoptions");
	    this.setPreviousStatement(true);
	    this.setNextStatement(true);
	    this.setColour(0);
	},
	mutationToDom: function(){
		var container = document.createElement("mutation");
		var whenStartSelect= (this.getFieldValue('ADCoptions') == 'ADC_START_ONLY');
		container.setAttribute('when_start_select', whenStartSelect);
		return container;
	},
	domToMutation: function(xmlElement){
		var whenStartSelect = (xmlElement.getAttribute('when_start_select') == 'true');
		this.updateShape_(whenStartSelect);
	},
	updateShape_: function(whenStartSelect){
		if(whenStartSelect){
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setOutput(false);
		} else {
			this.setPreviousStatement(false);
			this.setNextStatement(false);
			this.setOutput(true);
		}
	}
};
Blockly.Blocks['adc_channel'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ADC_CHANNEL)
        .appendField(new Blockly.FieldNumber(0, 0, 7), "channel");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
  }
};
Blockly.Blocks['adc_channel_18'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ADC_CHANNEL)
        .appendField(new Blockly.FieldNumber(0, 0, 12), "channel");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
  }
};
Blockly.Blocks['adc_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ADC_SETUP_F1)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ADC_SETUP_ADC_OFF, "ADC_OFF"], ["Frec/2", "ADC_CLOCK_DIV_2"], ["Frec/4", "ADC_CLOCK_DIV_4"], ["Frec/8", "ADC_CLOCK_DIV_8"], ["Frec/16", "ADC_CLOCK_DIV_16"], ["Frec/32", "ADC_CLOCK_DIV_32"], ["Frec/64", "ADC_CLOCK_DIV_64"], [Blockly.Msg.ADC_SETUP_ADC_CLOCK_INTERNAL, "ADC_CLOCK_INTERNAL"]]), "CLOCKoptions");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
  }
};
Blockly.Blocks['adc_ports'] = {
	init: function() {
		var PROPERTIES = [['0','NO'],
											['1','ONE'],
											['2','TWO'],
											['3','THREE'],
											['4','FOUR'],
											['5','FIVE'],
											['6','SIX'],
											['7','ALL']];
		var dropdown = new Blockly.FieldDropdown (PROPERTIES,function(option){
			var whenOneAnalog = (option == 'ONE');
      this.sourceBlock_.oneAnalog_(whenOneAnalog);
      var whenTwoAnalog = (option == 'TWO');
      this.sourceBlock_.twoAnalog_(whenTwoAnalog);
      var whenThreeAnalog = (option == 'THREE');
      this.sourceBlock_.threeAnalog_(whenThreeAnalog);
      var whenFourAnalog = (option == 'FOUR');
      this.sourceBlock_.fourAnalog_(whenFourAnalog);
      var whenFiveAnalog = (option == 'FIVE');
      this.sourceBlock_.fiveAnalog_(whenFiveAnalog);
      var whenSixAnalog = (option == 'SIX');
      this.sourceBlock_.sixAnalog_(whenSixAnalog);
		});
		this.appendDummyInput()
				.appendField(Blockly.Msg.ADC_PORTS_DEFAULT)
				.appendField(dropdown, 'ADC_PORTS');
		this.setColour(0);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setInputsInline(true);
	},
	mutationToDom: function() {
		var container = document.createElement('mutation');
		var whenOneAnalog = (this.getFieldValue('ADC_PORTS') == 'ONE');
		var whenTwoAnalog = (this.getFieldValue('ADC_PORTS') == 'TWO');
		var whenThreeAnalog = (this.getFieldValue('ADC_PORTS') == 'THREE');
		var whenFourAnalog = (this.getFieldValue('ADC_PORTS') == 'FOUR');
		var whenFiveAnalog = (this.getFieldValue('ADC_PORTS') == 'FIVE');
		var whenSixAnalog = (this.getFieldValue('ADC_PORTS') == 'SIX');
		container.setAttribute('one-analog', whenOneAnalog);
		container.setAttribute('two-analog', whenTwoAnalog);
		container.setAttribute('three-analog', whenThreeAnalog);
		container.setAttribute('four-analog', whenFourAnalog);
		container.setAttribute('five-analog', whenFiveAnalog);
		container.setAttribute('six-analog', whenSixAnalog);
		return container;
	},
	domToMutation: function(xmlElement) {
		var whenOneAnalog = (xmlElement.getAttribute('one-analog') == 'true');
		var whenTwoAnalog = (xmlElement.getAttribute('two-analog') == 'true');
		var whenThreeAnalog = (xmlElement.getAttribute('three-analog') == 'true');
		var whenFourAnalog = (xmlElement.getAttribute('four-analog') == 'true');
		var whenFiveAnalog = (xmlElement.getAttribute('five-analog') == 'true');
		var whenSixAnalog = (xmlElement.getAttribute('six-analog') == 'true');
		this.oneAnalog_(whenOneAnalog);
		this.twoAnalog_(whenTwoAnalog);
		this.threeAnalog_(whenThreeAnalog);
		this.fourAnalog_(whenFourAnalog);
		this.fiveAnalog_(whenFiveAnalog);
		this.sixAnalog_(whenSixAnalog);
	},
	oneAnalog_: function(whenOneAnalog) {
		if (this.getInput('one_analog')) this.removeInput('one_analog');
		if (whenOneAnalog) {
			this.appendDummyInput('one_analog')
					.appendField('¿Vref+ (AN3) Vref- (AN2)?')
					.appendField(new Blockly.FieldCheckbox('FALSE'), 'ONE_VREF');
		}
	},
	twoAnalog_: function(whenTwoAnalog) {
		if (this.getInput('two_analog')) this.removeInput('two_analog');
		if (whenTwoAnalog) {
			this.appendDummyInput('two_analog')
					.appendField('Vref+ (AN3) ¿Vref- (AN2)?')
					.appendField(new Blockly.FieldCheckbox('FALSE'), 'TWO_VREF');
		}
	},
	threeAnalog_: function(whenThreeAnalog) {
		if (this.getInput('three_analog')) this.removeInput('three_analog');
		if (whenThreeAnalog) {
			this.appendDummyInput('three_analog')
					.appendField('¿Vref+ (AN3) Vref- (AN2)?')
					.appendField(new Blockly.FieldCheckbox('FALSE'), 'THREE_VREF');
		}
	},
	fourAnalog_: function(whenFourAnalog) {
		if (this.getInput('four_analog')) this.removeInput('four_analog');
		if (whenFourAnalog) {
			this.appendDummyInput('four_analog')
					.appendField('Vref+ (AN3) ¿Vref- (AN2)?')
					.appendField(new Blockly.FieldCheckbox('FALSE'), 'FOUR_VREF');
		}
	},
	fiveAnalog_: function(whenFiveAnalog) {
		if (this.getInput('five_analog')) this.removeInput('five_analog');
		if (whenFiveAnalog) {
			this.appendDummyInput('five_analog')
					.appendField('¿Vref+ (AN3)?')
					.appendField(new Blockly.FieldCheckbox('FALSE'), 'FIVE_VREF');
		}
	},
	sixAnalog_: function(whenSixAnalog) {
		if (this.getInput('six_analog')) this.removeInput('six_analog');
		if (whenSixAnalog) {
			this.appendDummyInput('six_analog')
					.appendField('¿Vref+ (AN3) Vref- (AN2)?')
					.appendField(new Blockly.FieldCheckbox('FALSE'), 'FIVE_VREF');
		}
	}
}
Blockly.Blocks['adc_ports_18'] = {
	init: function() {
		var PROPERTIES = [['0','NO_ANALOGS'],
											['1','AN0'],
											['2','AN0_TO_AN1'],
											['3','AN0_TO_AN2'],
											['4','AN0_TO_AN3'],
											['5','AN0_TO_AN4'],
											['6','AN0_TO_AN5'],
											['7','AN0_TO_AN6'],
											['8','AN0_TO_AN7'],
											['9','AN0_TO_AN8'],
											['10','AN0_TO_AN9'],
											['11','AN0_TO_AN10'],
											['12','AN0_TO_AN11'],
											['13','ALL_ANALOG']];
		var dropdown = new Blockly.FieldDropdown (PROPERTIES);
		this.appendDummyInput()
				.appendField(Blockly.Msg.ADC_PORTS_DEFAULT)
				.appendField(dropdown, 'ADC_PORTS');
		this.setColour(0);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setInputsInline(true);
	}
}
Blockly.Blocks['duty_pwm'] = {
  init: function() {
    this.appendValueInput("pwm")
        .setCheck(["Number", "Var"])
        .appendField("Ciclo util PWM")
        .appendField(new Blockly.FieldDropdown([["RC1","2"], ["RC2","1"]]), "pwm");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
  }
}
Blockly.Blocks['ccp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Configurar CCP")
        .appendField(new Blockly.FieldDropdown([["RC1","2"], ["RC2","1"]]), "channel")
        .appendField("Modo")
        .appendField(new Blockly.FieldDropdown([["Apagado","CCP_OFF"], ["Flanco de Bajada","CCP_CAPTURE_FE"], ["Flanco de Subida","CCP_CAPTURE_RE"], ["PWM","CCP_PWM"]]), "option");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
  }
};