const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const knex = require('knex');
const { Model } = require('objection');
const EmployeeRoutes = require('./routes/employeesRoute');
const FamilyMemberRoutes = require('./routes/familyMemberRoute');
const StudentRoutes = require('./routes/studentRoute');
const InstitutionRoutes = require('./routes/institutionRoutes');
const CourseRoutes = require('./routes/courseRoute');
const EnrollmentRoutes = require('./routes/enrollmentRoute');
const SurveyRoutes = require('./routes/surveyRoutes');
const FundRoutes = require('./routes/fundRoutes');
const FamilyRoutes = require('./routes/familyRoutes');
const MemberRoutes = require('./routes/memberRoutes');
const { generateToken, comparePassword, hashPwd } = require('./auth');
const jwt = require('jsonwebtoken');

const app = new Koa();
const knexConfig = require('./knexfile');
const StudentController = require('./controllers/studentsController');
const FundsController = require('./controllers/fundController');
const knexInstance = knex(knexConfig);
Model.knex(knexInstance);

app.use(bodyParser());

app.use(EmployeeRoutes.routes());
app.use(EmployeeRoutes.allowedMethods());

app.use(FamilyMemberRoutes.routes());
app.use(FamilyMemberRoutes.allowedMethods());

app.use(StudentRoutes.routes());
app.use(StudentRoutes.allowedMethods());

app.use(InstitutionRoutes.routes());
app.use(InstitutionRoutes.allowedMethods());

app.use(CourseRoutes.routes());
app.use(CourseRoutes.allowedMethods());

app.use(EnrollmentRoutes.routes());
app.use(EnrollmentRoutes.allowedMethods());

app.use(SurveyRoutes.routes());
app.use(SurveyRoutes.allowedMethods());

app.use(FundRoutes.routes());
app.use(FundRoutes.allowedMethods());

app.use(FamilyRoutes.routes());
app.use(FamilyRoutes.allowedMethods());


app.use(MemberRoutes.routes());
app.use(MemberRoutes.allowedMethods());

const port = 3000;
app.listen(port, () => {
    console.log('Server running on port 3000');
})