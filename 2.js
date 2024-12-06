function filterReceipt(ingredients) {
  let output = []
  let receipts = [
    ["Dimsum", "Udang", "Ayam", "Kepiting"],
    ["Ayam Geprek", "Ayam", "Sambal", "Bawang"],
    ["Chicken Katsu", "Ayam", "Tepung Roti", "Terigu"],
    ["Kebab", "Daging Sapi", "Tortilla"],
    ["Bakso", "Daging Sapi", "Terigu"],
  ]
  // write your code here

}

function usersCanCook(users) {
  // write your code here
  // call filterReceipt

}

// TEST CASES
let users1 = {
  name: 'Fajrin',
  resto: 'Fajrin Food',
  menu: 'Chicken Katsu-Kebab-Bakso'
}
console.log(usersCanCook(users1))
/*
[
  [ 'Chicken Katsu', 'Ayam', 'Tepung Roti', 'Terigu' ],
  [ 'Kebab', 'Daging Sapi', 'Tortilla' ],
  [ 'Bakso', 'Daging Sapi', 'Terigu' ]
]
*/

let users2 = {
  name: 'Ihsan',
  resto: 'Ihsan Resto',
  menu: 'Dimsum-Ayam Geprek-Kopi'
}
console.log(usersCanCook(users2))
/*
[
  [ 'Dimsum', 'Udang', 'Ayam', 'Kepiting' ],
  [ 'Ayam Geprek', 'Ayam', 'Sambal', 'Bawang' ]
]
*/

let users3 = {
  name: 'Rizka',
  resto: 'Rizka Cafe',
  menu: 'Mie-Pangsit'
}
console.log(usersCanCook(users3))
// "Menu not found"

console.log(usersCanCook())
// "Invalid Data!"

module.exports = {
  filterReceipt,
  usersCanCook,
}
