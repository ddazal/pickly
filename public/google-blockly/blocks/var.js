Blockly.Blocks['set_var'] = {
  init: function() {
    this.appendValueInput("VAL")
        .setCheck(["Number", "String", "Var","Boolean"])
        .appendField(Blockly.Msg.VAR_SET)
        .appendField(new Blockly.FieldTextInput("variable"), "VAR")
        .appendField(Blockly.Msg.VAR_TO);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
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
Blockly.Blocks['get_var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("variable"), "VAR");
    this.setOutput(true, ["Var","Boolean","Number","String"]);
    this.setColour(330);
  }
};
Blockly.Blocks['create_var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.VAR_CREATE)
        .appendField(new Blockly.FieldDropdown([["int","INT"], ["float","FLOAT"], ["char","CHAR"]]), "VAR_TYPE")
        .appendField(new Blockly.FieldTextInput("variable"), "VAR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
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