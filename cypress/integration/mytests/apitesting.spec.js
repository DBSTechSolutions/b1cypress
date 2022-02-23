///<reference types="cypress"/>

describe('API test automation', ()=>{
    
   
    before(()=>{
        cy.visit("https://reqres.in/")
    })

    it('GET TEST',()=>{

        cy.request('GET', '/api/users?page=2').then((response)=>{

            expect(response.status).equal(200)
            expect(response.body.data[1].id).equal(8)
            expect(response.body).to.have.property("total_pages")
        })

    })

    it('POST TEST', ()=>{

        cy.request('POST', '/api/users', {
            "name": "Abhishek",
            "job": "consultant"
        }).then((response)=>{

            expect(response.status).equal(201)
            expect(response.body).to.have.property('name', 'Abhishek')
        })

    })

    it('PUT TEST', ()=>{

cy.request('PUT', '/api/users/2', {
    "name": "Priyal",
    "job": "Doctor"
}).then((response)=>{

        expect(response.status).equal(200)
})

    })

    it('DELETE TEST',()=>{


        cy.request('DELETE', '/api/users/2').then((response)=>{
            expect(response.status).equal(201)
        })

    })

})