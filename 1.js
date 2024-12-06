function getStartUp(arr) {
  // Write your code here
  let bidangE = '';
  let bidangT = '';
  let bidangH = '';
  let bidangA = '';

  // Pisahkan startup berdasarkan bidangnya
  for (let i = 0; i < arr.length; i++) {
    let startup = '';
    let bidang = '';
    let separatorFound = false;

    // Loop manual untuk memisahkan nama startup dan bidang
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === '-') {
        separatorFound = true;
      } else if (separatorFound) {
        bidang += arr[i][j]; // Tambahkan karakter ke bidang
      } else {
        startup += arr[i][j]; // Tambahkan karakter ke nama startup
      }
    }

    // Tentukan startup terpanjang untuk setiap bidang
    if (bidang === 'E' && startup.length > bidangE.length) {
      bidangE = startup;
    } else if (bidang === 'T' && startup.length > bidangT.length) {
      bidangT = startup;
    } else if (bidang === 'H' && startup.length > bidangH.length) {
      bidangH = startup;
    } else if (bidang === 'A' && startup.length > bidangA.length) {
      bidangA = startup;
    }
  }

  // Kembalikan hasil
  return [bidangE, bidangT, bidangH, bidangA];
}
//Test Case
console.log(
  getStartUp(["Bikilipik-E", "Tikit.cim-T", "Ilidiktir-H", "TiniHib-A"])
);
// [ 'Bikilipik', 'Tikit.cim', 'Ilidiktir', 'TiniHib' ]

console.log(
  getStartUp([
    "Lizidi-E",
    "Iirbnb-T",
    "TikingSiyir.ci-A",
    "PriSihit-H",
    "DiktirSihit-H",
    "eFishiry-A",
    "babaAli-E",
    "eMeat-A",
  ])
);
// [ 'babaAli', 'Iirbnb', 'DiktirSihit', 'TikingSiyir.ci' ]

console.log(
  getStartUp([
    "Tikipidia-E",
    "Triviliki-T",
    "Hilidic-H",
    "Siyirbix-A",
    "Shipee-E",
    "Bhinniki-E",
    "BleBle.cim-E",
    "PigiPigi-T",
    "tomazo-A",
  ])
);
// // [ 'BleBle.cim', 'Triviliki', 'Hilidic', 'Siyirbix' ]

console.log(
  getStartUp([
    "FoGoods-A",
    "FoMarts-E",
    "Lazora-E",
    "eFruit-A",
    "FoHealth-H",
    "FoTravel-T",
    "HaiDoc-H",
    "ticket.net-T",
  ])
);
// // [ 'FoMarts', 'ticket.net', 'FoHealth', 'FoGoods' ]

module.exports = getStartUp;
