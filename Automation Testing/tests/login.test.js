const assert = require('assert');
const { expect } = require('chai');
const { json } = require('stream/consumers');

describe('Fitur Login', () => {
    let token
    it('Get API Login', async () => {
        const response = await fetch('https://belajar-bareng.onrender.com/');

        // Assert Node Fetch
        //assert.strictEqual(response.status, 200)

        // Assert Chai
        expect(response.status).to.equal(200);
    })

    it('Ensure succcess login', async () => {
        const response = await fetch('https://belajar-bareng.onrender.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: 'admin',
                password: 'admin',
            }),
        });
        expect(response.status).to.equal(200);
        
        const data = await response.json();
        expect(data.message).to.equal('Login successful');
        expect(data).to.have.property('token');
        expect(data.token).not.to.be.empty;

        token = data.token;
    })

    it ('Get User List', async () => {
        const response = await fetch('https://belajar-bareng.onrender.com/api/users',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })

        expect(response.status).to.equal(200);
        // const x = await response.json();
        // console.log(x)
    })
})