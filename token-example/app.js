const jwt = require("jsonwebtoken");
require("dotenv").config();

const {SECRET_KEY} = process.env;

const payload = {
    id: "63fe26e3adbd76d78bd80328"
};

const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "1h"});

// console.log(token);

const id = jwt.decode(token, SECRET_KEY);
console.log(id); 

try {
    const id = jwt.verify(token, SECRET_KEY);
    console.log(id);
} catch (error) {
    error.status = 401
    console.log(error.status);
    console.log(error.message);
}


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDk0NWI5MTc5MjY4OGM1ZDJiNTBiNSIsImlhdCI6MTY3NTQzOTQ2MCwiZXhwIjoxNjc1NDQzMDYwfQ.Hxl7XyDKzoZrjGZDQQBsEGsVauBKX5ZyglHcNU5tBUQ