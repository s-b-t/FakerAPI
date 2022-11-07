const {faker} = require('@faker-js/faker');

const express = require("express");
const app = express();
const port = 8002;

const createRandomUser = () => {
    const newUser = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number(),
        _id: faker.datatype.uuid()
    }
return newUser
}

const newFakeUser = createRandomUser()
console.log(newFakeUser)

const createRandomCompany = () => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            streetAddress: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return newCompany;
}

const newFakeCompany = createRandomCompany()
console.log(newFakeCompany)

const userAndCompany = () => {
    const newUserAndCompany = {
        user: {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            phoneNumber: faker.phone.number(),
            _id: faker.datatype.uuid()
        },
        company: {
            _id: faker.datatype.uuid(),
            name: faker.company.name(),
            address: {
                streetAddress: faker.address.streetAddress(),
                city: faker.address.city(),
                state: faker.address.state(),
                zipCode: faker.address.zipCode(),
                country: faker.address.country()
            }
        }
    }
return newUserAndCompany
}

// Alternate approach using a built-in 'Object.assign' and assigning it to newFakeUser, newFakeCompany:
// const newFakeUserAndCompany = Object.assign({newFakeUser}, {newFakeCompany})
const newFakeUserAndCompany = userAndCompany()
console.log(newFakeUserAndCompany)



// These app.use functions MUST be above the GET routes
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/users/new", (req, res) => {
  res.json({newFakeUser});
});

app.get("/api/companies/new", (req, res) => {
  res.json({newFakeCompany});
});

app.get("/api/user/company", (req, res) => {
  res.json({newFakeUserAndCompany});
});

const server = app.listen(port, () =>
  console.log(`Server is locked and loaded on port ${port}!`)
);

