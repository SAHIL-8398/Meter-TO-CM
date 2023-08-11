function convert() {
  var lengthInput = parseFloat(document.getElementById("length").value);
  var unitSelect1 = document.getElementById("unit1");
  var selectedUnit1 = unitSelect1.options[unitSelect1.selectedIndex].value;

  var unitSelect2 = document.getElementById("unit2");
  var selectedUnit2 = unitSelect2.options[unitSelect2.selectedIndex].value;

  var convertedLength;

  switch (selectedUnit1) {
    case "cm":
      lengthInput = lengthInput / 100;
      break;
    case "km":
      lengthInput = lengthInput * 1000;
      break;
    case "mm":
      lengthInput = lengthInput / 1000;
      break;
  }

  switch (selectedUnit2) {
    case "cm":
      convertedLength = lengthInput * 100;
      break;
    case "km":
      convertedLength = lengthInput / 1000;
      break;
    case "mm":
      convertedLength = lengthInput * 1000;
      break;
    default:
      convertedLength = lengthInput;
  }

  document.getElementById("convertedLength").value = convertedLength;
}
