function getArcadeResult(history) {
  let arcadeTickets = {
    'Circus Ball Drop': 200,
    'Lucky Chicken': 100,
    'Street Basketball': 50,
    'Gold Rush': 20
  }
  // write your code here

}

function getPrizes(ticket) {
  let listPrize = [
    [200, 'Rautan', 'Pensil', 'Penghapus'],
    [500, 'Tempat Pensil', 'Celengan', 'Buku Tulis', 'Penjepit Rambut'],
    [1000, 'Boneka', 'Tas']
  ]
  // write your code here

}

function gamezone(user) {
  // write your code here

  // call getArcadeResult()

  // call getPrizes() //param nya diambil dari hasil totalTicket getArcadeResult

  // generate report

}

console.log(
  gamezone({
    name: 'Ihsan',
    histories: [
      'Circus Ball Drop',
      'Lucky Chicken',
      'Street Basketball',
      'Circus Ball Drop',
      'Lucky Chicken',
      'Street Basketball',
      'Gold Rush',
      'Gold Rush',
      'Gold Rush',
      'Circus Ball Drop',
      'Lucky Chicken',
      'Lucky Chicken',
      'Circus Ball Drop',
      'Street Basketball',
      'Street Basketball',
      'Gold Rush',
      'Gold Rush',
      'Circus Ball Drop',
      'Circus Ball Drop'
    ]
  })
)
/**
 * {
  name: 'Ihsan',
  gameReport: {
    'Circus Ball Drop': 6,
    'Lucky Chicken': 4,
    'Street Basketball': 4,
    'Gold Rush': 5
  },
  prizes: [ 'Rautan', 'Pensil', 'Penghapus', 'Tempat Pensil', 'Celengan' ]
}
 */

console.log(
  gamezone({
    name: 'Kosasih',
    histories: [
      'Circus Ball Drop',
      'Circus Ball Drop',
      'Street Basketball',
      'Circus Ball Drop',
      'Lucky Chicken',
      'Street Basketball',
      'Gold Rush',
      'Gold Rush',
      'Gold Rush',
      'Circus Ball Drop',
      'Lucky Chicken',
      'Lucky Chicken',
      'Circus Ball Drop',
      'Street Basketball',
      'Street Basketball',
      'Street Basketball',
      'Gold Rush',
      'Circus Ball Drop',
      'Circus Ball Drop',
      'Gold Rush',
      'Gold Rush',
      'Lucky Chicken',
      'Lucky Chicken',
      'Street Basketball',
      'Street Basketball',
      'Circus Ball Drop',
      'Circus Ball Drop',
      'Circus Ball Drop',
      'Circus Ball Drop'
    ]
  })
)
/**
 * {
    name: 'Kosasih',
    gameReport: {
      'Circus Ball Drop': 11,
      'Street Basketball': 7,
      'Lucky Chicken': 5,
      'Gold Rush': 6
    },
    prizes: [
      'Rautan',
      'Pensil',
      'Penghapus',
      'Tempat Pensil',
      'Celengan',
      'Buku Tulis',
      'Penjepit Rambut'
    ]
  }
 */

console.log(
  gamezone({
    name: 'Minnie',
    histories: ['Circus Ball Drop', 'Circus Ball Drop']
  })
)

/**
 * {
  name: 'Minnie',
  gameReport: { 'Circus Ball Drop': 2 },
  prizes: [ 'Rautan', 'Pensil' ]
}
 */

console.log(
  gamezone({
    name: 'Marry',
    histories: ['Circus Ball Drop', 'Circus Ball Drop', 'Race to Witch Mountain']
  })
)
// Terdapat permainan yang tidak tersedia di gamezone

console.log(gamezone())
// Tidak ada pemain yang bermain

module.exports = {
  getArcadeResult,
  getPrizes,
  gamezone
}
