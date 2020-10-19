describe('hero', () => {
  before(() => {
    cy.visit('heroes/kyle');
    cy.get('[data-cy=delete-all-chores').click();
  });

  it('should show an empty state message until chores are added', () => {
    cy.get('[data-cy=empty]').should('be.visible');
    cy.get('[data-cy=chores]').should('not.be.visible');

    cy.get('[data-cy=describe-new-chore]').type('new chore');
    cy.get('[data-cy=submit-new-chore]').click();

    cy.get('[data-cy=empty]').should('not.be.visible');
    cy.get('[data-cy=chores]').should('be.visible');
    cy.get('[data-cy=describe-new-chore]').should('have.value', '');

    cy.get('[data-cy=chore]').should((chores) => {
      expect(chores.length).to.equal(1);
      expect(chores.eq(0)).to.contain('new chore');
    });
  });

  it('should show you chore details if you click on a chore', () => {
    cy.get('[data-cy=chore]').first().click();

    cy.get('[data-cy=chore-details]');
  });

  it('should provide a way to hide chore details', () => {
    cy.get('[data-cy=hide-chore-details]').click();

    cy.get('[data-cy=chore-details]').should('not.exist');
  });

  it('should be able to add new chores to the chore list', () => {
    cy.get('[data-cy=describe-new-chore]').type('second chore');

    cy.get('[data-cy=submit-new-chore]').click();

    cy.get('[data-cy=describe-new-chore]').should('have.value', '');

    cy.get('[data-cy=chore').should((chores) => {
      expect(chores.length).to.equal(2);
      expect(chores).to.contain('second chore');
    });
  });

  it('should be able to delete individual chores', () => {
    cy.get('[data-cy=delete-chore]').first().click();

    cy.get('[data-cy=chore').should((chores) => {
      expect(chores.length).to.equal(1);
    });
  });

  it('should persist chore lists', () => {
    cy.visit('/');
    cy.visit('heroes/kyle');

    cy.get('[data-cy=chore').should((chores) => {
      expect(chores.length).to.equal(1);
    });
  });
});
