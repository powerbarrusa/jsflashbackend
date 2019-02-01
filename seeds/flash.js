
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('flash').del()
    .then(function () {
      // Inserts seed entries
      return knex('flash').insert([
        {id: 1, name: '.map', description: 'Creates a new array with the results of calling a provided function on every element in the calling array.', example: "let numbers = [1, 4, 9] const doubles = numbers.map(num => num * 2) console.log(doubles) // expected output: Array [2, 8, 18]"},
        {id: 2, name: '.filter', description: 'Creates a new array with all elements that pass the test implemented by the provided function.', example: "let words = ['spray', 'limit' 'elite', 'exuberant', 'destruction' 'present'] const result = words.filter(word => word.length > 6) console.log(result) // expected output: Array ['exuberant', 'destruction', 'present']"},
        {id: 3, name: '.reduce', description: 'Executes a reducer function (that you provide) on each member of the array resulting in a single output value.', example: "let sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {return accumulator + currentValue;}, 0);// sum is 6"}
      ])
    })
  }
