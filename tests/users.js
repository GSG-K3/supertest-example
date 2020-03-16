const tape = require('tape');
const supertest = require('supertest');
const app = require('../src/app');

tape('tests calling the users endpoint', (t) => {
	supertest(app)
		.get('/users')
		.expect(200)
		.end((err, result) => {
			t.equal(
				result.body[0].name,
				'Leanne Graham',
				'name of first user is Leanne Graham'
			);
			t.end();
		});
});
