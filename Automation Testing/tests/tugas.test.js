const { expect } = require('chai');
const { json } = require('stream/consumers');

describe('Tugas API Automation', () => {
    let token;

    it('Login - Untuk Mendapatkan Token Akses', async () => {
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
        token = data.token;
    });

    it('Get User List', async () => {
        const response = await fetch ('https://belajar-bareng.onrender.com/api/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        //Assert 1: Status Code
        expect(response.status).to.equal(200);
        //Assert 2: 
        const data = await response.json();
        expect(data.users).to.be.an('array');

    });

    it.skip('Add User - Positive Case', async () => {
        const response = await fetch ('https://belajar-bareng.onrender.com/api/add-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                username: 'feyiiii',
                age: 23
            }),
        });

        //Assert 1: Status code
        expect(response.status).to.equal(201);
        //Assert 2: Response Body
        const data = await response.json();
        expect(data).to.have.property('username', 'feyiiii');
    })

    it('Login Gagal - Negative Case', async () => {
        const response = await fetch ('https://belajar-bareng.onrender.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: 'admin',
                password: 'fey'
            }),
        });

        //Assert 1: Status Code
        expect(response.status).to.equal(401);
        //Assert 2: Response Body
        const data = await response.json();
        expect(data.message).to.equal('Invalid username or password!');
    }) 
})