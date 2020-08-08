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
    it('should display a hero list', () => {
      cy.get('[data-cy=hero-list]');
      cy.get('[data-cy=first]');
    });

    it('should navigate to /first when you click on first', () => {
      cy.get('[id=first]').click();

      cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/first');
      });
    });
  });
});
