let users = {
	1: {
		id: '1',
		username: 'Robin Wieruch',
	},
	2: {
		id: '2',
		username: 'Dave Davids',
	},
};
let messages = {
	1: {
		id: '1',
		text: 'Hello World',
		userId: '1',
	},
	2: {
		id: '2',
		text: 'By World',
		userId: '2',
	},
};

import 'dotenv/config';
import cors from 'cors';
import express from 'express'
import uuidv4 from 'uuid/v4';

const app = express();

app.use(cors());

app.get('/',(req, res) => {
	return res.send('Received a GET HTTP method');
});

app.post('/',(req, res) => {
	return res.send('Received a POST HTTP method');
});

app.put('/',(req, res) => {
	return res.send('Received a PUT HTTP method');
});

app.delete('/',(req, res) => {
	return res.send('Received a DELETE HTTP method');
});


app.get('/users',(req, res) => {
	return res.send(Object.values(users));
});

app.post('/users',(req, res) => {
	return res.send('Received a POST HTTP users');
});

app.put('/users',(req, res) => {
	return res.send('Received a PUT HTTP users');
});

app.delete('/users',(req, res) => {
	return res.send('Received a DELETE HTTP users');
});

app.get('/users/:userId',(req,res)=>{
	return res.send(users[req.params.userId])
});

app.put('/users/:userId',(req, res) => {
	return res.send(`${req.params.userId}`);
});

app.delete('/users:userId',(req, res) => {
	return res.send('Received a DELETE HTTP users');
});

app.get('/messages', (req, res) => {
	return res.send(Object.values(messages))
});

app.get('/messages/:messagesId', (req, res) => {
	return res.send(messages[req.params.messagesId])
})

app.listen(process.env.PORT,() =>
	console.log(`Example app listening on port ${process.env.PORT}!`),
);