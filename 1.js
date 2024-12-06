function getStartUp(arr) {
  // Write your code here
  let startupArr = []
  let init = []
  for (let i = 0; i < arr.length; i++){
    let startup = ""
    let last = arr[i][arr[i].length - 1]
    init.push(last)
    for (let j = 0; j < arr[i].length - 2; j++) {
      startup += arr[i][j]
    }
    startupArr.push(startup)
  }
  return startupArr
}
//Test Case
console.log(getStartUp(['Bikilipik-E', 'Tikit.cim-T', 'Ilidiktir-H', 'TiniHib-A']))
// [ 'Bikilipik', 'Tikit.cim', 'Ilidiktir', 'TiniHib' ]

// console.log(getStartUp(['Lizidi-E', 'Iirbnb-T', 'TikingSiyir.ci-A', 'PriSihit-H', 'DiktirSihit-H', 'eFishiry-A', 'babaAli-E', 'eMeat-A']))
// [ 'babaAli', 'Iirbnb', 'DiktirSihit', 'TikingSiyir.ci' ]

// console.log(getStartUp(['Tikipidia-E', 'Triviliki-T', 'Hilidic-H', 'Siyirbix-A', 'Shipee-E', 'Bhinniki-E', 'BleBle.cim-E', 'PigiPigi-T', 'tomazo-A']))
// // [ 'BleBle.cim', 'Triviliki', 'Hilidic', 'Siyirbix' ]

// console.log(getStartUp(['FoGoods-A', 'FoMarts-E', 'Lazora-E', 'eFruit-A', 'FoHealth-H', 'FoTravel-T', 'HaiDoc-H', 'ticket.net-T']))
// // [ 'FoMarts', 'ticket.net', 'FoHealth', 'FoGoods' ]

module.exports = getStartUp