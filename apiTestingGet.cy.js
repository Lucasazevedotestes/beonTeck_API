/// <reference types= "cypress" />

describe('API Testing - Challenge BeonTech', () => {
    const status = "available";

    it('Get Pet - By Status', () => {
        cy.request({
            url: `/pet/findByStatus?status=${status}`,
            method: 'GET',
        })
            .then(response => {
                expect(response.body[0].status).to.equal("available");
            })
    })
    it('Get Pet - Invalid Status Value', () => {
        cy.request({
            url: '/pet/findByStatus',
            method: 'GET',
            failOnStatusCode: false,
        })
            .then(response => {
                expect(response.status).to.equal(400);
            })
    })
})
