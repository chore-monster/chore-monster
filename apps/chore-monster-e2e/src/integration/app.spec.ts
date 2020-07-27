import { getGreeting } from '../support/app.po';

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
});
