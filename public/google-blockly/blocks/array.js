Blockly.Blocks['create_arr'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Crear arreglo")
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
        this.setWarningText('El nombre de la variable no es legal')
    }
  }
};

function isLegal(value) {
  var data = value.toString();
  return ((data.toLowerCase() != data.toUpperCase()) || data == '_')
}