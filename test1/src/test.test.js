// import Cal from './Cal';
// import React from 'react';
// import {shallow,render} from 'enzyme';
// import {assert,expect,should} from 'chai';
// describe('to test cal component',()=>{
//     describe('to test input boxes ',()=>{
//         it(' is getting operand value',()=>{
//             const wrapper=render(<Cal operand1="4"/>)
//             expect(wrapper.text()).to.contain('4');
//         })
//     })
// });



var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});