const chai = require("chai")

const expect = chai.expect

const calculator = require('../src/sourceCalc')

describe("Test Calculator Functionality...", ()=>{
    describe("Test Addition....", ()=>{
        it("2 + 2 should be equal to 4", ()=>{
            expect(calculator.addition(2, 2)).to.equal(4)
        })
        it("should add two numbers", ()=>{
            expect(calculator.addition(23, 25)).to.equal(48)
            expect(calculator.addition(-41, 42)).to.equal(1)
            expect(calculator.addition(100000, 100025)).to.equal(200025)
        })
    })

    describe("Test Division....", ()=>{
        it("2 / 2 should be equal to 1", ()=>{
            expect(calculator.division(2, 2)).to.equal(1)
        })
        it("should divide two numbers", ()=>{
            expect(calculator.division(25, 25)).to.equal(1)
            expect(calculator.division(-84, 42)).to.equal(-2)
            expect(calculator.division(100025, 100025)).to.equal(1)
        })

        it('should return NaN if denominator is zero', ()=>{
            expect(calculator.division(23, 0)).to.equal(undefined)
        })
    })
})