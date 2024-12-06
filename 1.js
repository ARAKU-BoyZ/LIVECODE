function getStartUp(arr) {
  // Write your code here
  let startUp = []
  let last = []
  // looping untuk setiap nama startup
  for (let i = 0; i < arr.length; i++) {
    temp = arr[i] // Mengambil nama startup
    let modified = "" //variabel untuk menyimpan nama yang sudah berkurang 2 huruf belakang
    let lastChar = temp[temp.length - 1] // menyimpan satu kata terakhir

    for (let j = 0; j < temp.length - 2; j++) {
      modified += temp[j]
    }
    last.push(lastChar)
    startUp.push(modified)
  }
  console.log(last)
  return startUp
}
//Test Case
console.log(getStartUp(['Bikilipik-E', 'Tikit.cim-T', 'Ilidiktir-H', 'TiniHib-A']))
// [ 'Bikilipik', 'Tikit.cim', 'Ilidiktir', 'TiniHib' ]

console.log(getStartUp(['Lizidi-E', 'Iirbnb-T', 'TikingSiyir.ci-A', 'PriSihit-H', 'DiktirSihit-H', 'eFishiry-A', 'babaAli-E', 'eMeat-A']))
// [ 'babaAli', 'Iirbnb', 'DiktirSihit', 'TikingSiyir.ci' ]

console.log(getStartUp(['Tikipidia-E', 'Triviliki-T', 'Hilidic-H', 'Siyirbix-A', 'Shipee-E', 'Bhinniki-E', 'BleBle.cim-E', 'PigiPigi-T', 'tomazo-A']))
// // [ 'BleBle.cim', 'Triviliki', 'Hilidic', 'Siyirbix' ]

console.log(getStartUp(['FoGoods-A', 'FoMarts-E', 'Lazora-E', 'eFruit-A', 'FoHealth-H', 'FoTravel-T', 'HaiDoc-H', 'ticket.net-T']))
// // [ 'FoMarts', 'ticket.net', 'FoHealth', 'FoGoods' ]

module.exports = getStartUp