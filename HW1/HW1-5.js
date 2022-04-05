function onlyVowels(string) {
  var string = string.replace(/[bcdfghjklmnpqrstvwxyz]/gi,'')
  return string
}
const string = "A MEN IN TO FUN"
const vowels = onlyVowels(string)

console.log(vowels)
