/// <reference types= "cypress" />


describe('API Testing - Challenge BeonTech', () => {

    it('Insert Pet - Post Method', () => {
        cy.fixture('petFixture.json').then((petJson) => {
            cy.request({
                url: '/pet',
                method: 'POST',
                body: petJson.petPost
            })
                .then(response => {
                    expect(response.status).to.equal(200)

                })
        })
    })

    it('Update Pet - Put Method', () => {
        cy.fixture('petFixture.json').then((petJson) => {
            cy.request({
                url: '/pet',
                method: 'PUT',
                body: petJson.petUpdate
            })
                .then(response => {
                    expect(response.status).to.equal(200);
                })
        })
    })
    it('Update Pet - Invalid ID', () => {
        cy.fixture('petFixture.json').then((petJson) => {
            cy.request({
                url: '/pet',
                method: 'PUT',
                failOnStatusCode: false,
                body: petJson.petUpdateInvalidId
            })
                .then(response => {
                    expect(response.status).to.equal(400);
                })
        })
    })

    it('Update Pet - Pet Not Found', () => {
        cy.fixture('petFixture.json').then((petJson) => {
            cy.request({
                url: '/pet',
                method: 'PUT',
                failOnStatusCode: false,
                body: petJson.petUpdatePetNotFound
            })
                .then(response => {
                    expect(response.status).to.equal(404);
                })
        })
    })
})