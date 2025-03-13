describe('Swpier Gallery Test', function() {
  it('Check elements', function() {
    cy.visit('http://localhost:3000');
    cy.get('.swiper').should('be.visible');
    cy.get('.swiper-button-next').should('be.visible');
    cy.get('.swiper-button-prev').should('be.visible');
    cy.get('.swiper-wrapper').find('.swiper-slide').should('have.length', 3);
  });
});

describe('Swpier Gallery Test', function() {
  it('Check responsiveness', function() {
    cy.visit('http://localhost:3000');
    cy.viewport('iphone-6');
    cy.wait(1000);
    cy.get('.swiper-button-next').should('be.visible').click();
    cy.get('.swiper-button-prev').should('be.visible').click();

    cy.viewport('ipad-2');
    cy.wait(1000);
    cy.get('.swiper-button-next').should('be.visible').click();
    cy.get('.swiper-button-prev').should('be.visible').click();
  });
});

describe('Swpier Gallery Test', function() {
  it('Check if description is correct', function() {
    cy.visit('http://localhost:3000');

    cy.get('.card-description').children('h1').should('contain', 'Rome');
    cy.get('.card-description').children('p').should('contain', 'Italy');

    cy.get('.swiper-button-next').click();
    cy.wait(2000);

    cy.get('.card-description').children('h1').should('contain', 'London');
    cy.get('.card-description').children('p').should('contain', 'United Kingdom');

    cy.get('.swiper-button-next').click();
    cy.wait(2000);

    cy.get('.card-description').children('h1').should('contain', 'Paris');
    cy.get('.card-description').children('p').should('contain', 'France');
  });
});

describe('Swiper Gallery Test', function() {
  it('Checks if second slide contains "United Kingdom"', function() {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function() {
  it('Checks if third slide contains "Paris"', function() {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function() {
  it('Checks if next and prev buttons work', function() {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide-active').should('contain', 'Rome')
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('not.include.text', 'Rome')
    cy.get('.swiper-button-prev').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Rome')
  });
});

