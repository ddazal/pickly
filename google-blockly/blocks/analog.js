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
        .appendField("ADC Finalizado");
    this.setOutput(true, null);
    this.setColour(0);
  }
};
Blockly.Blocks['adc_read'] = {
	init: function(){
		var PROPERTIES=[['Iniciar ADC','ADC_START_ONLY'],	['Leer ADC','ADC_READ_ONLY'],['Iniciar y Leer ADC','ADC_START_AND_READ']];
		var dropdown = new Blockly.FieldDropdown (PROPERTIES,function(option){
			var whenStartSelect = (option == 'ADC_START_ONLY');
      		this.sourceBlock_.updateShape_(whenStartSelect);
		});
		this.appendDummyInput()
	        .appendField(dropdown, "ADCoptions");
	    this.setPreviousStatement(true, null);
	    this.setNextStatement(true, null);
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
        .appendField("Canal ADC")
        .appendField(new Blockly.FieldNumber(0, 0, 7), "channel");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
  }
};
Blockly.Blocks['adc_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Reloj ADC")
        .appendField(new Blockly.FieldDropdown([["Apagado", "ADC_OFF"], ["Frec/2", "ADC_CLOCK_DIV_2"], ["Frec/4", "ADC_CLOCK_DIV_4"], ["Frec/8", "ADC_CLOCK_DIV_8"], ["Frec/16", "ADC_CLOCK_DIV_16"], ["Frec/32", "ADC_CLOCK_DIV_32"], ["Frec/64", "ADC_CLOCK_DIV_64"], ["Interno", "ADC_CLOCK_INTERNAL"]]), "CLOCKoptions");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
  }
};