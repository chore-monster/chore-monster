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

    it('should navigate to heroes/kyle when you click on kyle', () => {
      cy.get('[data-cy=kyle]').click();

      cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/heroes/kyle');
      });
    });
  });

  describe('hero', () => {
    before(() => {
      cy.visit('heroes/kyle');
    });

    it('should show your chores list', () => {
      cy.get('[data-cy=chores]');

      cy.get('[data-cy=chore]').should((chores) => {
        expect(chores.length).to.equal(1);
        expect(chores.eq(0)).to.contain('Chore 0');
      });
    });

    it('should show you chore details if you click on a chore', () => {
      cy.get('[data-cy=chore]').click();

      cy.get('[data-cy=chore-details]');
    });

    it('should provide a way to hide chore details', () => {
      cy.get('[data-cy=hide-chore-details]').click();

      cy.get('[data-cy=chore-details]').should('not.exist');
    });

    it('should be able to add new chores to the bottom of the chore list', () => {
      cy.get('[data-cy=chore').should((chores) => {
        expect(chores.length).to.equal(1);
        expect(chores.eq(-1)).to.not.contain('new chore');
      });

      cy.get('[data-cy=describe-new-chore]').type('new chore');

      cy.get('[data-cy=submit-new-chore]').click();

      cy.get('[data-cy=chore').should((chores) => {
        expect(chores.length).to.equal(2);
        expect(chores.eq(-1)).to.contain('new chore');
      });
    });
  });
});
