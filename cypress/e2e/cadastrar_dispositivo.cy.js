/// <reference types="Cypress"/>

describe("Buscar Dispositivos", () => {
  it(`Buscar dispositivo especifico`, () => {
    cy.request({
      method: "POST",
      url: "https://api.restful-api.dev/objects",
      body: {
        name: "Item de Teste",
        data: {
          year: 2020,
          price: 2000,
          "CPU model": "Intel Core i5",
          "Hard disk size": "1 TB",
        },
      },
    }).then((resultado) => {
      expect(resultado.status).to.equal(200);
      expect(resultado.body.id).to.not.empty;
      expect(resultado.body.name).to.eql(`Item de Teste`);
    });
  });
});
