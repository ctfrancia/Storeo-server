/* eslint-disable */
import mocha from 'mocha';
import chai from 'chai';
import { expect } from 'chai';
import sinon from 'sinon';
import postNewCategory from '../Controllers/AdminControllers/postNewCategory';
import mocks from './mocks/mocks';
import sequelize from '../db';

describe('Categories', () => {
  beforeEach(async () => {
    await sequelize;
    await sequelize.query('DELETE FROM categories;')
  });

  after(() => sequelize.close());

  it('Should insert a new category ', async () => {
    const req = {
      body: mocks.data.addCategory,
    };

    const res = {
      send: sinon.spy(),
      status: function() {
        return this;
      },
      end: sinon.spy(),
    };

    await postNewCategory(req, res);
    expect(res.send.calledOnce).to.be.true;
    expect(res.send.firstCall.args[0]).to.equal('Success.');
  });
});
