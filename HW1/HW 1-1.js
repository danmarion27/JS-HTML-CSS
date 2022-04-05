const numbers = [4,9,5,3,8,6]
const sortedSquaredNumbers = transform(numbers).sort(function(a, b){return a - b})

function transform(numbers) {
  //return as squared
  return numbers.map(function (x) {
    return Math.pow(x, 2)
  })

}
console.log(sortedSquaredNumbers)
