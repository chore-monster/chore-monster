describe('chore-monster', () => {
  describe('/', () => {
    it('should redirect to /heroes', () => {
      cy.visit('/');
      cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/heroes');
      });
    });
  });

  describe('heroes', () => {
    it('should display welcome message', () => {
      cy.get('h1').contains('Welcome to Chore Monster!');
    });

    it('should display a hero list', () => {
      cy.get('[data-cy=hero-list]');
      cy.get('[data-cy=hero-first]');
    });

    it('should navigate to /first/home when you click on "first"', () => {
      cy.get('[id=first]').click();

      cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/first/home');
      });
    });
  });
});
