const getStartUp = require("../1.js");
const Restriction = require("hacktiv8-restriction");

describe("Soal 1", () => {
  const result1 = getStartUp([
    "Bikilipik-E",
    "Tikit.cim-T",
    "Ilidiktir-H",
    "TiniHib-A",
  ]);

  const result2 = getStartUp([
    "Lizidi-E",
    "Iirbnb-T",
    "TikingSiyir.ci-A",
    "PriSihit-H",
    "DiktirSihit-H",
    "eFishiry-A",
    "babaAli-E",
    "eMeat-A",
  ]);

  const result3 = getStartUp([
    "Tikipidia-E",
    "Triviliki-T",
    "Hilidic-H",
    "Siyirbix-A",
    "Shipee-E",
    "Bhinniki-E",
    "BleBle.cim-E",
    "PigiPigi-T",
    "tomazo-A",
  ]);

  const result4 = getStartUp([
    "FoGoods-A",
    "FoMarts-E",
    "Lazora-E",
    "eFruit-A",
    "FoHealth-H",
    "FoTravel-T",
    "HaiDoc-H",
    "ticket.net-T",
  ]);

  test("Correctly return output corresponds to the test case (22)", () => {
    expect(result1).toEqual(["Bikilipik", "Tikit.cim", "Ilidiktir", "TiniHib"]);
    expect(result2).toEqual([
      "babaAli",
      "Iirbnb",
      "DiktirSihit",
      "TikingSiyir.ci",
    ]);
    expect(result3).toEqual(["BleBle.cim", "Triviliki", "Hilidic", "Siyirbix"]);
    expect(result4).toEqual(["FoMarts", "ticket.net", "FoHealth", "FoGoods"]);
  });

  test("should check restriction rules (-20)", async () => {
    const checkRestriction = new Restriction("../1.js");
    const restrictedUse = await checkRestriction.readCode();
    expect(restrictedUse).toBe(null);
  });
});
