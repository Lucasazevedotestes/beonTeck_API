it('Delete Pet ID - Delete Method', () => {
    const idToDelete = '2'

    cy.request({
        url: `/pet/${idToDelete}`,
        method: 'DELETE',
    })
        .then(response => {
            expect(response.status).to.equal(200);
            expect(response.headers).to.have.property('content-type', 'application/json');
        }
        )
})