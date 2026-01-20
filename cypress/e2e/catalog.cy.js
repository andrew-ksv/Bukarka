"use strict";

describe("Catalog", () => {
      it("Catalog Categories", () => {
      cy.visitBukarka();

      cy.fixture("catalogCategories").then(({ categories }) => {
         categories.forEach(category => {
            cy.navigateToCategory(category);
         });
      });  
});
});