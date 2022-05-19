const chai = require("chai")
const { asyncadd } = require("../src/asyncCalc")

const expect = chai.expect


describe("Asynchronous Testing usng Mocha and Chai", ()=>{
    it("Should add data asychronously ", (done)=>{
        let result = asyncadd(3, 2, (address)=>{
            expect(address).to.be.a("number");
            done()
        })

    })
})