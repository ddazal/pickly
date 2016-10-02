Blockly.Blocks['io_pins'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PIN")
        .appendField(new Blockly.FieldDropdown([["A", "port_a"], ["B", "port_b"], ["C", "port_c"], ["D", "port_d"], ["E", "port_e"]]), "ports_options")
        .appendField(new Blockly.FieldNumber(0, 0, 7), "pin_number");
    this.appendValueInput("io_mode")
        .setCheck("io");
    this.setInputsInline(true);
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['io_type'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([['entrada', "io_input"],["salida", "io_output"]]),"type_options");
    this.setInputsInline(true);
    this.setOutput(true, "io");
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['io_ports'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Puerto")
        .appendField(new Blockly.FieldDropdown([["A", "port_a"], ["B", "port_b"], ["C", "port_c"], ["D", "port_d"], ["E", "port_e"]]), "ports_option");
    this.appendValueInput("io_mode")
        .setCheck("io");
    this.setInputsInline(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['io_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Guardar valor de puerto")
        .appendField(new Blockly.FieldDropdown([["A", "port_a"], ["B", "port_b"], ["C", "port_c"], ["D", "port_d"], ["E", "port_e"]]), "get_port")
        .appendField("en");
    this.appendValueInput("NAME")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
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
        .appendField(new Blockly.FieldDropdown([["A", "port_a"], ["B", "port_b"], ["C", "port_c"], ["D", "port_d"], ["E", "port_e"]]), "set_port");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['io_pin_set'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Poner en ")
        .appendField(new Blockly.FieldDropdown([["alto", "high"], ["bajo", "low"]]), "pin_state")
        .appendField("pin")
        .appendField(new Blockly.FieldDropdown([["A", "port_a"], ["B", "port_b"], ["C", "port_c"], ["D", "port_d"], ["E", "port_e"]]), "pin_port")
        .appendField(new Blockly.FieldNumber(0, 0, 7), "pin_pin");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['io_pin_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Pin")
        .appendField(new Blockly.FieldDropdown([["A", "port_a"], ["B", "port_b"], ["C", "port_c"], ["D", "port_d"], ["E", "port_e"]]), "port_name")
        .appendField(new Blockly.FieldNumber(0, 0, 7), "pin_number");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};