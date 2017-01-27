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
        .appendField(Blockly.Msg.COMM_SEND);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
  }
};
Blockly.Blocks['comm_receive'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.COMM_RECEIVE);
    this.appendValueInput("get_data")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
  }
};
Blockly.Blocks['comm_baud_rate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.COMM_BAUD_RATE)
        .appendField(new Blockly.FieldDropdown([["300", "300"], ["1200", "1200"], ["2400", "2400"], ["9600", "9600"], ["19200", "19200"], ["28800", "28800"], ["33600", "33600"], ["57600", "57600"]]), "baud_rate");
    this.setColour(20);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};