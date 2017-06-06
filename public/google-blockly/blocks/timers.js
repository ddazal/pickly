/**
* Los bloques se encuentran basados en las siguientes funciones del software PICC
* The following blocks are based on the next PICC software functions
* setup_timer_0(mode);
* set_timer0(value):
* get_timer0(value);
* setup_timer_1(mode); 
* set_timer1(value);
* get_timer1(value);
* set_timer2(value);
* get_timer2(value);
* setup_timer_2(mode,period,postscale)
*/

// TIMER 0
Blockly.Blocks['tmr_tmr0_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.TMR0_GET);
    this.setOutput(true, null);
    this.setColour(180);
  }
};
Blockly.Blocks['tmr_tmr0_set'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Timer0")
        .appendField(new Blockly.FieldNumber(0, 0, 255), "tmr0_value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
  }
};
Blockly.Blocks['tmr_tmr0_setup'] = {
  init: function() {
  	var PROPERTIES = [[Blockly.Msg.TMR0_SETUP_T0_INTERNAL, "T0_INTERNAL"], [Blockly.Msg.TMR0_SETUP_T0_EXTERNAL, "T0_EXTERNAL"]];
  	var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option){
  		var whenExternalSelect = (option == "T0_EXTERNAL");
  		this.sourceBlock_.updateShape_(whenExternalSelect);
  	})
    this.appendDummyInput()
        .appendField(Blockly.Msg.TMR0_SETUP_F1);
    this.appendDummyInput("Setup")
        .appendField("Prescaler")
        .appendField(new Blockly.FieldDropdown([["1", "T0_DIV_1"], ["2", "T0_DIV_2"], ["4", "T0_DIV_4"], ["8", "T0_DIV_8"], ["16", "T0_DIV_16"], ["32", "T0_DIV_32"], ["64", "T0_DIV_64"], ["128", "T0_DIV_128"], ["256", "T0_DIV_256"]]), "PSAoptions")
        .appendField(Blockly.Msg.TMR0_SETUP_F2)
        .appendField(dropdown, "CLKoptions");
    this.setColour(180);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
  mutationToDom: function(){
  	var container = document.createElement("mutation");
  	var whenExternalSelect = (this.getFieldValue("CLKoptions") == "T0_EXTERNAL");
  	container.setAttribute("when_external_select", whenExternalSelect);
  	return container;
  },
  domToMutation: function(xmlElement){
  	var whenExternalSelect = (xmlElement.getAttribute("when_external_select") == "true");
  	this.updateShape_(whenExternalSelect);
  },
  updateShape_: function(whenExternalSelect){
	  var fieldExists = this.getInput("TMR0Mutator");
    if (whenExternalSelect) {
      if (!fieldExists) {
        this.appendDummyInput("TMR0Mutator")
            .appendField(Blockly.Msg.TMR0_SETUP_SIGNAL_EDGE)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TMR0_SETUP_RISE_EDGE,'LOW2HIGH'],[Blockly.Msg.TMR0_SETUP_FALL_EDGE,'HIGH2LOW']]),'EDGEoptions');
      }
    } else if (fieldExists) {
      this.removeInput("TMR0Mutator");
    }
  }
};
Blockly.Blocks['tmr_tmr0_set_18'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Timer0")
        .appendField(new Blockly.FieldNumber(0, 0, 65535), "tmr0_value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
  }
};
Blockly.Blocks['tmr_tmr0_setup_18'] = {
  init: function() {
    var PROPERTIES = [[Blockly.Msg.TMR0_SETUP_T0_INTERNAL, "T0_INTERNAL"], [Blockly.Msg.TMR0_SETUP_T0_EXTERNAL, "T0_EXTERNAL"]];
    var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option){
      var whenExternalSelect = (option == "T0_EXTERNAL");
      this.sourceBlock_.updateShape_(whenExternalSelect);
    })
    var checkbox = new Blockly.FieldCheckbox("FALSE");
    this.appendDummyInput()
        .appendField(Blockly.Msg.TMR0_SETUP_F1);
    this.appendDummyInput("Setup")
        .appendField("Prescaler")
        .appendField(new Blockly.FieldDropdown([["1", "T0_DIV_1"], ["2", "T0_DIV_2"], ["4", "T0_DIV_4"], ["8", "T0_DIV_8"], ["16", "T0_DIV_16"], ["32", "T0_DIV_32"], ["64", "T0_DIV_64"], ["128", "T0_DIV_128"], ["256", "T0_DIV_256"]]), "PSAoptions")
        .appendField(Blockly.Msg.TMR0_SETUP_F2)
        .appendField(dropdown, "CLKoptions")
        .appendField('8 bits')
        .appendField(checkbox, "8BITMODE");
    this.setColour(180);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
  mutationToDom: function(){
    var container = document.createElement("mutation");
    var whenExternalSelect = (this.getFieldValue("CLKoptions") == "T0_EXTERNAL");
    container.setAttribute("when_external_select", whenExternalSelect);
    return container;
  },
  domToMutation: function(xmlElement){
    var whenExternalSelect = (xmlElement.getAttribute("when_external_select") == "true");
    this.updateShape_(whenExternalSelect);
  },
  updateShape_: function(whenExternalSelect){
    var fieldExists = this.getInput("TMR0Mutator");
    if (whenExternalSelect) {
      if (!fieldExists) {
        this.appendDummyInput("TMR0Mutator")
            .appendField(Blockly.Msg.TMR0_SETUP_SIGNAL_EDGE)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TMR0_SETUP_RISE_EDGE,'LOW2HIGH'],[Blockly.Msg.TMR0_SETUP_FALL_EDGE,'HIGH2LOW']]),'EDGEoptions');
      }
    } else if (fieldExists) {
      this.removeInput("TMR0Mutator");
    }
  }
};
// TIMER 1
Blockly.Blocks['tmr_tmr1_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Obtener Timer1");
    this.setOutput(true, null);
    this.setColour(180);
  }
};
Blockly.Blocks['tmr_tmr1_set'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Timer1")
        .appendField(new Blockly.FieldNumber(0, 0, 65535), "tmr1_value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
  }
};
Blockly.Blocks['tmr_tmr1_setup'] = {
  init: function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.TMR1_SETUP_F1)
        .appendField(new Blockly.FieldCheckbox("FALSE",function(whenCheck) {
          this.sourceBlock_.updateShape_(whenCheck);
        }),"ENABLEtmr1")
        .appendField(Blockly.Msg.TMR1_SETUP_F2)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TMR1_SETUP_T1_INTERNAL,"T1_INTERNAL"],[Blockly.Msg.TMR1_SETUP_T1_EXTERNAL,"T1_EXTERNAL"]]),"CLKoptions");
    this.setInputsInline(null);
    this.setColour(180);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
  mutationToDom: function(){
    var container = document.createElement("mutation");
    var whenCheck = (this.getFieldValue("ENABLEtmr1") == 'TRUE');
    container.setAttribute('when_check', whenCheck);
    return container;
  },
  domToMutation: function(xmlElement){
    var whenCheck = (xmlElement.getAttribute('when_check') == 'TRUE');
    this.updateShape_(whenCheck);
  },
  updateShape_: function(whenCheck){
    var fieldExists = this.getInput("TMR1FirstMutator");
    if (whenCheck) {
      if (!fieldExists) {
        this.appendDummyInput("TMR1FirstMutator")
            .appendField("Prescaler")
            .appendField(new Blockly.FieldDropdown([["1","T1_DIV_BY_1"],["2","T1_DIV_BY_2"],["4","T1_DIV_BY_4"],["8","T1_DIV_BY_8"]]),"PSAoptions");
      }
    } else if (fieldExists) {
      this.removeInput("TMR1FirstMutator");
    }
  },
};
// TIMER 2
Blockly.Blocks['tmr_tmr2_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.TMR2_GET);
    this.setOutput(true, null);
    this.setColour(180);
  }
};
Blockly.Blocks['tmr_tmr2_set'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Timer2")
        .appendField(new Blockly.FieldNumber(0, 0, 255), "tmr2_value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
  }
};
Blockly.Blocks['tmr_tmr2_setup'] = {
  init: function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.TMR2_SETUP_F1)
        .appendField(new Blockly.FieldCheckbox("FALSE",function(whenCheck) {
          this.sourceBlock_.updateShape_(whenCheck);
        }),"ENABLEtmr2");
    this.setInputsInline(null);
    this.setColour(180);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
  mutationToDom: function(){
    var container = document.createElement("mutation");
    var whenCheck = (this.getFieldValue("ENABLEtmr2") == 'TRUE');  
    container.setAttribute('when_check', whenCheck);
    return container;
  },
  domToMutation: function(xmlElement){
    var whenCheck = (xmlElement.getAttribute('when_check') == 'TRUE');
    this.updateShape_(whenCheck);
  },
  updateShape_: function(whenCheck){
    var checked = this.getInput("TMR2mutator");
    if(whenCheck){
      if(!checked){
        this.appendDummyInput("TMR2mutator")
            .appendField("Prescaler")
            .appendField(new Blockly.FieldDropdown([["1", "T2_DIV_BY_1"], ["4", "T2_DIV_BY_4"], ["16", "T2_DIV_BY_16"]]), "PSAoptions")
            .appendField(Blockly.Msg.TMR2_SETUP_F2)
            .appendField(new Blockly.FieldNumber(0, 0, 255), "PR2value")
            .appendField("Postscaler")
            .appendField(new Blockly.FieldNumber(1, 1, 16), "POSAvalue");
      }
    } else if(checked){
      this.removeInput("TMR2mutator");
    }
  }
};