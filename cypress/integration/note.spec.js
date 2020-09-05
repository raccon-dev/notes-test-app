describe('notes', () => {
    beforeEach(() => {
        cy.visit('https://notesappd.netlify.app/');

    });

    it.only('Check title', () => {
        cy.contains('Notes');
    });
    it.only('Check description', () => {
        cy.contains('Take notes anywhere');
    });

    it.only('Russian Language', () => {
        cy.get('.loc-RU').click()
        cy.contains('Заметки');
    });

    it.only('English Language', () => {
        cy.get('.loc-EN').click()
        cy.contains('Notes');
    });
    it.only('Ukranian Language', () => {
        cy.get('.loc-UA').click()
        cy.contains('Нотатки');
    });


    it.only('Add new note', () => {
        cy.get('.btn-addNotes').click()
    });

    it.only('Remove note', () => {
        cy.get('.btn-removeNotes').first().click()
    });

    it.only('Edit note', () => {
        cy.get('.btn-editNote').first().click()
        cy.get('.notes-edit-section').first().type('U passed test! Congrat! ')
        cy.get('.btn-editNote').first().click()
    });


});
