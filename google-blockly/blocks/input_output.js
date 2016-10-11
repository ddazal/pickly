/**
 * Los bloques se encuentran basados en las siguientes funciones del software PICC
 * The following blocks are based on the next PICC software functions
 * output_high(pin);
 * output_low(pin);
 * output_x(value);
 * output_bit(pin,value);
 * input_state(pin)
 * set_tris_x(value)
 */

Blockly.Blocks['io_type'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([['entrada', "IO_INPUT"],["salida", "IO_OUTPUT"]]),"IOptions");
    this.setInputsInline(true);
    this.setOutput(true, "io");
    this.setColour(65);
  }
};
Blockly.Blocks['io_ports'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Puerto")
        .appendField(new Blockly.FieldDropdown([["A", "PORT_A"], ["B", "PORT_B"], ["C", "PORT_C"], ["D", "PORT_D"], ["E", "PORT_E"]]), "PORToptions");
    this.appendValueInput("io_mode")
        .setCheck("io");
    this.setInputsInline(true);
    this.setColour(65);
  }
};
Blockly.Blocks['io_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Guardar valor de puerto")
        .appendField(new Blockly.FieldDropdown([["A", "PORT_A"], ["B", "PORT_B"], ["C", "PORT_C"], ["D", "PORT_D"], ["E", "PORT_E"]]), "PORTget")
        .appendField("en");
    this.appendValueInput("NAME")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
  }
};
Blockly.Blocks['io_set'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Poner ");
    this.appendValueInput("NAME")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("en puerto")
        .appendField(new Blockly.FieldDropdown([["A", "PORT_A"], ["B", "PORT_B"], ["C", "PORT_C"], ["D", "PORT_D"], ["E", "PORT_E"]]), "PORTset");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
  }
};
Blockly.Blocks['io_pins'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PIN")
        .appendField(new Blockly.FieldDropdown([["A", "PORT_A"], ["B", "PORT_B"], ["C", "PORT_C"], ["D", "PORT_D"], ["E", "PORT_E"]]), "PORToptions")
        .appendField(new Blockly.FieldNumber(0, 0, 7), "PINnumber");
    this.appendValueInput("io_mode")
        .setCheck("io");
    this.setInputsInline(true);
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setColour(65);
  }
};
Blockly.Blocks['io_pin_set'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Poner en ")
        .appendField(new Blockly.FieldDropdown([["alto", "HIGH"], ["bajo", "LOW"]]), "PINstate")
        .appendField("pin")
        .appendField(new Blockly.FieldDropdown([["A", "PORT_A"], ["B", "PORT_B"], ["C", "PORT_C"], ["D", "PORT_D"], ["E", "PORT_E"]]), "PORToptions")
        .appendField(new Blockly.FieldNumber(0, 0, 7), "PINnumber");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
  }
};
Blockly.Blocks['io_pin_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Pin")
        .appendField(new Blockly.FieldDropdown([["A", "PORT_A"], ["B", "PORT_B"], ["C", "PORT_C"], ["D", "PORT_D"], ["E", "PORT_E"]]), "PORToptions")
        .appendField(new Blockly.FieldNumber(0, 0, 7), "PINnumber");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};