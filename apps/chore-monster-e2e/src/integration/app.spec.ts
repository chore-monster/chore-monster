import { gzipSync } from 'zlib';
import { xorBy } from 'cypress/types/lodash';

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
      cy.get('[data-cy=chore-0]').click();

      cy.get('[data-cy=chore-detail]');
    });
  });
});
