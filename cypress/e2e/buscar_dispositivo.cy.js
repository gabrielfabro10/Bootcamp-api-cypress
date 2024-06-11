/// <reference types="Cypress"/>

describe("Buscar Dispositivos", () => {
  it(`Buscar dispositivo especifico`, () => {
    cy.request({
      method: "GET",
      url: "https://api.restful-api.dev/objects/12",
    }).then((resultado) => {
      expect(resultado.status).to.equal(200);
      expect(resultado.body.id).to.eql(`12`);
      expect(resultado.body.name).to.eql(`Apple iPad Air`);
    });
  });
});
