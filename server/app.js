const express=require('express');
const cors = require('cors');

const mongodb = require('./db/mongo');
const User=require('./UserSchema/user');
const app=express();
app.use(express.json());
app.use(cors());
const PORT=process.env.PORT || 8000;
const userRoutes = require('./router/auth');
app.use('/api', userRoutes);
const adminRoutes = require('./router/adminrouter');
app.use('/api', adminRoutes);
const teacherRoutes = require('./router/teacherrouter');
app.use('/api', teacherRoutes);
const studentdetail=require('./router/studentdetailrouter');
app.use('/api',studentdetail);
const teacherdetail=require('./router/teacherdetailrouter');
app.use('/api',teacherdetail);
const forgotpass=require('./router/forgotpassword.js');
app.use('/api',forgotpass);
const student=require('./router/getdata/studentfetch.js');
app.use('/api',student);
const teacher=require('./router/getdata/teacherfetch.js');
app.use('/api',teacher);
const studentbranch=require('./router/getdata/branchfetch.js');
app.use('/api',studentbranch);
const teacherDepartment=require('./router/getdata/departmentfetch.js');
app.use('/api',teacherDepartment);
const studentdelete=require('./router/delete/userdelete.js');
app.use('/api',studentdelete);
const book=require('./router/getdata/Book.js');
app.use('/api',book);
const studentupdate=require('./router/update/studentupdate.js');
app.use('/api',studentupdate);
const teacherupdate=require('./router/update/teacherupdate.js');
app.use('/api',teacherupdate);
const teacherdelete=require('./router/delete/teacherdelete.js');
app.use('/api',teacherdelete);
app.listen(PORT,()=>{
    console.log(`connection Successful on ${PORT}`);
})