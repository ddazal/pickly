/**
 * Los bloques se encuentran basados en las siguientes funciones del software PICC
 * The following blocks are based on the next PICC software functions
 * getc();
 * putc();
 */

Blockly.Blocks['comm_send'] = {
  init: function() {
    this.appendValueInput("set_data")
        .setCheck(["Number", "String"])
        .appendField("Enviar");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
  }
};
Blockly.Blocks['comm_receive'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Recibir y guardar en");
    this.appendValueInput("get_data")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
  }
};