import { chmodSync } from 'fs';

describe('chore-monster', () => {
  beforeEach(() => cy.visit('/'));

  it('should redirect you to /heroes', () => {
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/heroes');
    });
  });

  it('should display welcome message', () => {
    cy.get('h1').contains('Welcome to Chore Monster!');
  });

  it('should display a select hero button', () => {
    cy.get('[data-cy=select-hero]');
  });
});
