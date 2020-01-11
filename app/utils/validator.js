function isPhoneNumber() {
  return false;
}

function isValidString() {
  return false;
}

function isDefined(val) {
  return typeof val !== 'undefined';
}

function isUndefined(val) {
  return typeof val == 'undefined';
}

function isNullOrEmpty(val) {
  return val === null || val === '';
}
function isArray(val) {
  return Array.isArray(val);
}

export {isPhoneNumber, isValidString, isDefined, isNullOrEmpty, isArray, isUndefined};
