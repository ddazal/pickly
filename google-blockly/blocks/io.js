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
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.IO_TYPE_INPUT, "IO_INPUT"],[Blockly.Msg.IO_TYPE_OUTPUT, "IO_OUTPUT"]]),"IOptions");
    this.setInputsInline(true);
    this.setOutput(true, "io");
    this.setColour(65);
  }
};
Blockly.Blocks['io_tris'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.IO_PORTS)
        .appendField(new Blockly.FieldDropdown([["A", "A"], ["B", "B"], ["C", "C"], ["D", "D"], ["E", "E"]]), "PORToptions");
    this.appendValueInput("io_mode")
        .setCheck("io");
    this.setInputsInline(true);
    this.setColour(65);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks['io_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.IO_GET_F1)
        .appendField(new Blockly.FieldDropdown([["A", "A"], ["B", "B"], ["C", "C"], ["D", "D"], ["E", "E"]]), "PORTget")
        .appendField(Blockly.Msg.IO_GET_F2);
    this.appendValueInput("var")
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
        .appendField(Blockly.Msg.IO_SET_F1);
    this.appendValueInput("port_value")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(Blockly.Msg.IO_SET_F2)
        .appendField(new Blockly.FieldDropdown([["A", "A"], ["B", "B"], ["C", "C"], ["D", "D"], ["E", "E"]]), "PORTset");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
  }
};
// Blockly.Blocks['io_pins'] = {
//   init: function() {
//     var PROPERTIES = [["A", "PORT_A"], ["B", "PORT_B"], ["C", "PORT_C"], ["D", "PORT_D"], ["E", "PORT_E"]];
//     var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
//             var whenPortA = (option == "PORT_A");
//             var whenPortE = (option == "PORT_E");
//             this.sourceBlock_.updateShapePort_(whenPortA, whenPortE);
//         });
//     this.appendDummyInput("PORTpins")
//         .appendField("PIN")
//         .appendField(dropdown, "PORToptions");
//     this.appendValueInput("io_mode")
//         .setCheck("io");
//     this.setInputsInline(true);
//     this.setPreviousStatement(false, null);
//     this.setNextStatement(false, null);
//     this.setColour(65);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//   },
//   mutationToDom: function() {
//     var container = document.createElement("mutation");
//     var whenPortA = (this.getFieldValue("PORToptions") == "PORT_A");
//     var whenPortE = (this.getFieldValue("PORToptions") == "PORT_E");
//     container.setAttribute("when_port_a", whenPortA);
//     container.setAttribute("when_port_e", whenPortE);
//     return container;
//   },
//   domToMutation: function(xmlElement) {
//     var whenPortA = (xmlElement.getAttribute("when_port_a") == "true");
//     var whenPortE = (xmlElement.getAttribute("when_port_e") == "true");
//     this.updateShapePort_(whenPortA, whenPortE);
//   },
//   updateShapePort_: function(whenPortA, whenPortE) {
//     var getBlock = this.getInput("PORTpins");
//     if (whenPortA) {
//         getBlock.removeField("PINnumber");
//         getBlock.appendField(new Blockly.FieldNumber(0, 0, 5), "PINnumber");
//     } else if (whenPortE) {
//         getBlock.removeField("PINnumber");
//         getBlock.appendField(new Blockly.FieldNumber(0, 0, 2), "PINnumber");
//     } else {
//         getBlock.removeField("PINnumber");
//         getBlock.appendField(new Blockly.FieldNumber(0, 0, 7), "PINnumber");
//     }
//   }
// };
Blockly.Blocks['io_pin_set'] = {
  init: function() {
    var PROPERTIES = [["A", "A"], ["B", "B"], ["C", "C"], ["D", "D"], ["E", "E"]];
    var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
            var whenPortA = (option == "A");
            var whenPortE = (option == "E");
            this.sourceBlock_.updateShapePort_(whenPortA, whenPortE);
        });
    this.appendDummyInput("PORTpins")
        .appendField(Blockly.Msg.IO_PIN_SET_F1)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.IO_PIN_SET_HIGH, "HIGH"], [Blockly.Msg.IO_PIN_SET_LOW, "LOW"]]), "PINstate")
        .appendField("pin")
        .appendField(dropdown, "PORToptions");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
  },
  mutationToDom: function() {
    var container = document.createElement("mutation");
    var whenPortA = (this.getFieldValue("PORToptions") == "A");
    var whenPortE = (this.getFieldValue("PORToptions") == "E");
    container.setAttribute("when_port_a", whenPortA);
    container.setAttribute("when_port_e", whenPortE);
    return container;
  },
  domToMutation: function(xmlElement) {
    var whenPortA = (xmlElement.getAttribute("when_port_a") == "true");
    var whenPortE = (xmlElement.getAttribute("when_port_e") == "true");
    this.updateShapePort_(whenPortA, whenPortE);
  },
  updateShapePort_: function(whenPortA, whenPortE) {
    var getBlock = this.getInput("PORTpins");
    if (whenPortA) {
        getBlock.removeField("PINnumber");
        getBlock.appendField(new Blockly.FieldNumber(0, 0, 5), "PINnumber");
    } else if (whenPortE) {
        getBlock.removeField("PINnumber");
        getBlock.appendField(new Blockly.FieldNumber(0, 0, 2), "PINnumber");
    } else {
        getBlock.removeField("PINnumber");
        getBlock.appendField(new Blockly.FieldNumber(0, 0, 7), "PINnumber");
    }
  }
};
Blockly.Blocks['io_pin_get'] = {
  init: function() {
    var PROPERTIES = [["A", "A"], ["B", "B"], ["C", "C"], ["D", "D"], ["E", "E"]];
    var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
            var whenPortA = (option == "A");
            var whenPortE = (option == "E");
            this.sourceBlock_.updateShapePort_(whenPortA, whenPortE);
        });
    this.appendDummyInput("PORTpins")
        .appendField("Pin")
        .appendField(dropdown, "PORToptions");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
  mutationToDom: function() {
    var container = document.createElement("mutation");
    var whenPortA = (this.getFieldValue("PORToptions") == "A");
    var whenPortE = (this.getFieldValue("PORToptions") == "E");
    container.setAttribute("when_port_a", whenPortA);
    container.setAttribute("when_port_e", whenPortE);
    return container;
  },
  domToMutation: function(xmlElement) {
    var whenPortA = (xmlElement.getAttribute("when_port_a") == "true");
    var whenPortE = (xmlElement.getAttribute("when_port_e") == "true");
    this.updateShapePort_(whenPortA, whenPortE);
  },
  updateShapePort_: function(whenPortA, whenPortE) {
    var getBlock = this.getInput("PORTpins");
    if (whenPortA) {
        getBlock.removeField("PINnumber");
        getBlock.appendField(new Blockly.FieldNumber(0, 0, 5), "PINnumber");
    } else if (whenPortE) {
        getBlock.removeField("PINnumber");
        getBlock.appendField(new Blockly.FieldNumber(0, 0, 2), "PINnumber");
    } else {
        getBlock.removeField("PINnumber");
        getBlock.appendField(new Blockly.FieldNumber(0, 0, 7), "PINnumber");
    }
  }
};