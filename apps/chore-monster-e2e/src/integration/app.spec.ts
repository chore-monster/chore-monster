import { gzipSync } from 'zlib';
import { xorBy } from 'cypress/types/lodash';
import { copyFileSync } from 'fs';

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
    });

    it('should show you chore details if you click on a chore', () => {
      cy.get('[data-cy=chore]').click();

      cy.get('[data-cy=chore-details]');
    });

    it('should provide a way to hide chore details', () => {
      cy.get('[data-cy=hide-chore-details]').click();

      cy.get('[data-cy=chore-details]').should('not.exist');
    });
  });
});
