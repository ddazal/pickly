Blockly.Blocks['create_arr'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARRAY_CREATE)
        .appendField(new Blockly.FieldDropdown([["int","INT"], ["float","FLOAT"], ["char","CHAR"]]), "ARR_TYPE")
        .appendField(new Blockly.FieldTextInput("variable"), "VAR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
  },
  onchange: function(e) {
    var name = this.getFieldValue('VAR').split("");
    if (isLegal(name[0])) {
        this.setWarningText(null)
    } else {
        this.setWarningText(Blockly.Msg.VAR_WARNING)
    }
  }
};
Blockly.Blocks['set_arr'] = {
  init: function() {
    this.appendValueInput("INDEX")
        .setCheck(["Number", "Var"])
        .appendField(Blockly.Msg.ARRAY_SET)
        .appendField(new Blockly.FieldTextInput("variable"), "VAR");
    this.appendValueInput("VAL")
        .setCheck(["Boolean", "Number", "String", "Var"])
        .appendField(Blockly.Msg.ARRAY_TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
  }
};
Blockly.Blocks['get_arr'] = {
  init: function() {
    this.appendValueInput("VAL")
        .setCheck(["Number", "Var"])
        .appendField(new Blockly.FieldTextInput("variable"), "VAR");
    this.setInputsInline(true);
    this.setOutput(true, ["Boolean", "Number", "String", "Var"]);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['create_arr_size'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARRAY_CREATE)
        .appendField(new Blockly.FieldDropdown([["int","INT"], ["float","FLOAT"], ["char","CHAR"]]), "ARR_TYPE")
        .appendField(new Blockly.FieldTextInput("variable"), "VAR")
        .appendField(Blockly.Msg.ARRAY_OF)
        .appendField(new Blockly.FieldNumber(0, 0), "INDEX")
        .appendField(Blockly.Msg.ARRAY_ELEMENTS)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
  },
  onchange: function(e) {
    var name = this.getFieldValue('VAR').split("");
    if (isLegal(name[0])) {
        this.setWarningText(null)
    } else {
        this.setWarningText(Blockly.Msg.VAR_WARNING)
    }
  }
};
function isLegal(value) {
  var data = value.toString();
  return ((data.toLowerCase() != data.toUpperCase()) || data == '_')
}