export function createPhoneNumber(numbers: number[]) {
  var format = "(xxx) xxx-xxxx";

  for (var i = 0; i < numbers.length; i++) {
    format = format.replace("x", String(numbers[i]));
  }

  return format;
}

export function createPhoneNumber2(numbers: number[]) {
  return (
    "(" +
    numbers.slice(0, 3).join("") +
    ") " +
    numbers.slice(3, 6).join("") +
    "-" +
    numbers.slice(6).join("")
  );
}
