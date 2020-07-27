import { getGreeting } from '../support/app.po';

describe('chore-monster', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.get('h1').contains('Welcome to Chore Monster!');
  });
});
