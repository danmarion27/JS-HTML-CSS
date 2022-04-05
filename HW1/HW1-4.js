function isPalindrome(string) {
  var string = string.replace(/[^a-zA-Z0-9]+/gi, '').toLowerCase()
  return string == [...string].reverse().join("")
}

const string = "Hannah"
const printPalindrome = isPalindrome(string)

console.log(printPalindrome)
