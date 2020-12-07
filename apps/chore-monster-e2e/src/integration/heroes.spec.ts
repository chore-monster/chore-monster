describe('/', () => {
  it('should redirect to /heroes', () => {
    cy.visit('/');
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/heroes');
    });
  });
});

describe('heroes', () => {
  before(() => {
    cy.visit('/heroes');
  });

  it('should show an empty state message until heroes have joined', () => {
    cy.get('[data-cy=no-heroes]').should('be.visible');
    cy.get('[data-cy=heroes]').should('not.be.visible');

    cy.get('[data-cy=new-hero-name]').type("Al O'wishus");
    cy.get('[data-cy=submit-new-hero]').click();

    cy.get('[data-cy=no-heroes]').should('not.be.visible');
    cy.get('[data-cy=heroes]').should('be.visible');
    cy.get('[data-cy=new-hero-name]').should('have.value', '');

    cy.get('[data-cy=heroes]').should((heroes) => {
      expect(heroes.length).to.equal(1);
      expect(heroes.eq(0)).to.contain("Al O'wishus");
    });
  });

  it('should display a list of heroes that have joined the cause', () => {
    cy.get('[data-cy=heroes]');
  });

  it("should navigates to the hero's sanctum when clicked", () => {
    cy.get('[data-cy=hero_0]').click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.include('/sanctum/');
    });
  });
});
