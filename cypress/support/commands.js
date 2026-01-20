// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('visitBukarka', () => {
    cy.visit("https://bukarka.vercel.app/");
    cy.contains('Каталог', { timeout: 30000 }).should('be.visible');
});

Cypress.Commands.add('clickCatalogButton', () => {
    cy.contains('Каталог').should('be.visible').click();
});

Cypress.Commands.add('navigateToCategory', (categoryName) => {
    cy.clickCatalogButton();
    cy.contains('a', categoryName).should('be.visible').click();
});