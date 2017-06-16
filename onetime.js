var characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ' ', ',', '.', '?'];


export function encrypt(message, pad) {
  if (pad.length < message.length) {
    throw "pad not long enough"
  }

  var encryptedMessage = "";

  for (var i=0; i < message.length; i++) {
    var mod26Char = toMod26(message[i].toUpperCase()) + toMod26(pad[i].toUpperCase())
    encryptedMessage += fromMod26(mod26Char);
  }

  return encryptedMessage;
}


export function decrypt(encryptedMessage, pad) {
  if (pad.length < encryptedMessage.length) {
    throw "pad not long enough"
  }

  var message = "";

  for (var i=0; i < encryptedMessage.length; i++) {
    var mod26Char = toMod26(encryptedMessage[i]) - toMod26(pad[i].toUpperCase())
    message += fromMod26(mod26Char);
  }

  return message;
}


function toMod26(char) {
  return characters.indexOf(char);
}


function fromMod26(number) {
  var max = characters.length - 1;
  while (number > max) {
    number -= max;
  }

  while (number < 0) {
    number += max;
  }

  return characters[number];
}
