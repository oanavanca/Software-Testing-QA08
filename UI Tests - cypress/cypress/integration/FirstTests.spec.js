/// <reference types="Cypress" />

const { should } = require("chai");

context("First automated tests", () => {
  
    it("Visit wiki en", () => {  
     cy.visit("https://www.wikipedia.org/");
     cy.get('#js-link-box-en > strong').click(); //clicks on the given element
     cy.get('#mp-welcome').should("be.visible"); //the element with id #mp-welcome should be visible
     cy.get('#mp-welcome').should("contain","Welcome");
    });

    it.only("Test Wiki login",() => { //ONLY DEBUG
      cy.visit("https://www.wikipedia.org/");
      cy.get('#js-link-box-en > strong').click();
      cy.get('#pt-login > a').click();
      cy.get('#wpName1').type("Oana.Vanca");
      cy.get('#wpPassword1').type("19910415Oana");
      cy.get('#wpLoginAttempt').click();
      cy.get('#mw-head').should("contain","Oana.Vanca");
    });
}); 