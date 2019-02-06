// /* eslint-disable */
// const mocha = require('mocha');
// const chai = require('chai');
// const chaiHTTP = require('chai-http');
// const server = require('../index');
// const should = chai.should;
// const sequelize = require('../db');

// chai.use(chaiHTTP);

// describe('Products', () => {
//   beforeEach(done => {
//     sequelize.query('DELETE FROM products;');
//     done();
//   });
// });


// describe('test products', () => {
//   it('Should return an empty array if no products are listed', () => {
//     chai.request('')
//     .get('/products')
//     .end((req, res) => {
//       res.should.have.status(200);
//       res.body.should.be.a('array');
//       res.body.length.should.be.eql(0);
//     });
//   });
// });
