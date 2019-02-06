/* eslint-disable */
const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const indexPage = require('./app.controller');

describe('get Index Page', () => {
  it('Should return the index page, with the word "hello" ', () => {
    const req = {};
    const res = {
      send: sinon.spy(),
    };
    indexPage.getIndexPage(req, res);
    // console.log(res.send);
    expect(res.send.calledOnce).to.be.true;
    expect(res.send.firstCall.args[0]).to.equal("hello");
  });
});
