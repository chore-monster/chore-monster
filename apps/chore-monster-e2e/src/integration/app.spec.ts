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
    });

    it('should show a link for each family member', () => {
      cy.get('[data-cy=kyle]');
      cy.get('[data-cy=amanda]');
      cy.get('[data-cy=bee]');
      cy.get('[data-cy=kit]');
    });

    it('should navigate to /kyle when you click on kyle', () => {
      cy.get('[data-cy=kyle]').click();

      cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/kyle');
      });
    });
  });

  describe('hero', () => {
    before(() => {
      cy.visit('/kyle');
    });

    it('should show your chores list', () => {
      cy.get('[data-cy=chores]');
    });
  });
});
