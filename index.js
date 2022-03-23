const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const recordsRouter = require('./src/api/routes/records.route');

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/v1/api', recordsRouter);
app.use((error, req, res, next) => {
	let code;
	let msg;
	if (error.code && error.msg) {
		code = error.code;
		msg = error.msg;
	} else {
		code = 500;
		msg = 'Internal server error.';
	}
	// console.log(error); 
	res.status(code).json({code, msg})
});

module.exports = app;