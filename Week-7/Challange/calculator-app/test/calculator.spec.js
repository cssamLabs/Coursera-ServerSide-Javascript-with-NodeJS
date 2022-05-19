const calculator = require('../calculator');
const chai = require('chai');
const expect = chai.expect;

// testsuit
describe('Calculator testing', function () {
  describe('Functionality testing', function () {
    describe('Addition functionality testing', function () {
      // testcase to test is dependencies are used or not
      it('Add two positive numbers, returning get positive sum', function () {
        // Write the testing logic here
        expect(calculator('a', {lhs:2, rhs:2})).to.equal(4)
      });
      // test case to test add functionality

      it('Add two negative numbers, returning get negative sum', function () {
        // Write the testing logic here
        expect(calculator('a', {lhs:-2, rhs:-2})).to.equal(-4)
      });

      // test case to test add functionality
      it('Add two number, with either of them is negative, producing subtracted output', function () {
          // Write the testing logic here
          expect(calculator('a', {lhs:4, rhs:-2})).to.equal(2)
        });
      // test case to test add functionality
      it('Add zeros, produces zero', function () {
        // Write the testing logic here
        expect(calculator('a', {lhs:0, rhs:0})).to.equal(0)
      });
    });
    describe('Subtraction functionality testing', function () {
      // test case to test subtract functionality
      it('Subtract two positive numbers, returning get positive subtraction', function () {
          // Write the testing logic here
          expect(calculator('s', {lhs:4, rhs:2})).to.equal(2)
        });

      // test case to test subtract functionality
      it('Subtract two negative numbers, returning get negative subtraction', function () {
          // Write the testing logic here
          expect(calculator('s', {lhs:-4, rhs:-2})).to.equal(-2)
        });

      // test case to test subtract functionality
      it('Subtract two number, with either of them is negative, producing sum output', function () {
          // Write the testing logic here
          expect(calculator('s', {lhs:4, rhs:-2})).to.equal(6)
        });

      // test case to test subtract functionality
      it('Subtract zeros, produces zero', function () {
        // Write the testing logic here
        expect(calculator('s', {lhs:0, rhs:0})).to.equal(0)
      });
    });
    describe('Multiplication functionality testing', function () {
      // test case to test multiply functionality
      it('Multiply two positive numbers, returning get positive Multiplication', function () {
        // Write the testing logic here
        expect(calculator('m', {lhs:4, rhs:2})).to.equal(8)
      });
      // test case to test multiply functionality
      it('Multiply two negative numbers, returning get positive Multiplication', function () {
        // Write the testing logic here
        expect(calculator('m', {lhs:-4, rhs:-2})).to.equal(8)
      });
      // test case to test multiply functionality
      it(`Multiply two number, with either of them is negative, producing negative multiplication output`, function () {
          // Write the testing logic here
          expect(calculator('m', {lhs:4, rhs:-2})).to.equal(-8)
        });

      // test case to test multiply functionality
      it('Multiply zeros, produces zero', function () {
        // Write the testing logic here
        expect(calculator('m', {lhs:0, rhs:0})).to.equal(0)
      });
    });

    describe('Division functionality testing', function () {
      // test case to test divide functionality

      it('Divide two positive numbers, returning get positive Multiplication', function () {
        // Write the testing logic here
        expect(calculator('d', {lhs:4, rhs:2})).to.equal(2)
      });

      // test case to test divide functionality
      it('Divide two negative numbers, returning get positive Multiplication', function () {
        // Write the testing logic here
        expect(calculator('d', {lhs:-4, rhs:-2})).to.equal(2)
      });

      // test case to test divide functionality

      it('Divide two number, with either of them is negative, producing negative Division output', function () {
          // Write the testing logic here
          expect(calculator('d', {lhs:4, rhs:-2})).to.equal(-2)
        });

      // test case to test divide functionality
      it(`Should not divide by 0, producing 'Can not divide by zero' message`, function () {
        // Write the testing logic here
        expect(calculator('d', {lhs:4, rhs:0})).to.equal('Can not divide by zero')
      });
    });
    describe('Unknown operation testing', function () {
      // test case to test divide functionality
      it(`should not calculate if unknown operation is passed,
        producing 'Unknown operation' message`,
        function () {
          // Write the testing logic here
          expect(calculator('e', {lhs:4, rhs:0})).to.equal('Unknown operation')
        });
        
    });
  });
});