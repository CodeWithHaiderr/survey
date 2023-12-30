const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Employees = require('./models/employees');
const jwtSecretKey = 'yourSecretKey'; 
const generateToken = (employee) => {
    console.log('emp  in  auth----->',employee);
    const token = jwt.sign({ employee_id: employee.employee_id }, jwtSecretKey, {
        expiresIn: '1h',
    });
    console.log('token----->',token);
    return token; // Returning the generated token
};

const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password,hashedPassword);
};

const hashPwd = (pwd) => {
    const hashedPassword = bcrypt.hashSync(pwd, 10);
    return hashedPassword;
};

module.exports = {
    generateToken,
    comparePassword,
    hashPwd
};