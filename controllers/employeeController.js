const Employees = require('../models/employees');
const { generateToken, comparePassword, hashPwd } = require('../auth');
const jwt = require('jsonwebtoken');

class EmployeeController {
    static async empLogin(ctx) {
        const { employee_username, employee_password } = ctx.request.body;
        console.log('emp----->', employee_username, employee_password);
        try {
            const employee = await Employees.query().findOne({ employee_username });
            console.log('found emp----->', employee);
            if (employee) {
                const isPasswordMatch = await comparePassword(employee_password, employee.employee_password);
                console.log('hashed match----->', isPasswordMatch);
                if (isPasswordMatch) {
                    const token = generateToken(employee);
                    console.log('found token----->', token);
                    await Employees.query().where('employee_username', employee_username).patch({ token });
                    ctx.body = { token };
                } else {
                    ctx.status = 401;
                    ctx.body = { error: 'Invalid username and password' };
                }
            } else {
                ctx.status = 401;
                ctx.body = { error: 'Invalid username and password' };
            }
        } catch (error) {
            console.error('Error during login:', error);
            ctx.status = 500;
            ctx.body = { error: 'Internal server error' };
        }
    }
    
    static async empData(ctx){
        const token = ctx.headers.authorization?.split(' ')[1];
        console.log('Recieved Token:',token);
        if (!token) {
            console.log('token in if tab',token);
            ctx.body = 401;
            ctx.body = { error: 'Unauthorized' };
            return;
        }
        try {
            //Verify the token
            const decodeToken = jwt.verify(token, 'yourSecretKey');
            console.log('Decoded Token:', decodeToken);
    
            //fetch employee data based on TOKEN 
            const employee = await Employees.query().findById(decodeToken.employee_id);
    
            if (employee) {
                //return data accessible to employee
                ctx.body = { employee_id: employee.employee_id, employee_name: employee.employee_name }; 
            }
            else {
                ctx.status = 401;
                ctx.body = { error: 'Unauthorized' };
            }
        }
        catch (error) {
            console.error('Token Verification Error:', error);
            if(error.name === 'TokenExpiredError'){
                console.log('Token has expired')
            }
            ctx.status = 401;
            ctx.body = { error: 'Unauthorized' };
        }
    }
}

module.exports = EmployeeController;
