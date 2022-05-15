const { expect, assert} = require("chai");

const system = require('../src/System');

describe("Testing system methods", function () {

    it("Testing operationSystem", function () {
        expect(system.getOSName()).to.be.equal("darwin");
    });

    it("Testing Free Memory", function () {
        assert.isNumber(system.getFreeMemory());
    });

    it("Testing Current User", function () {
        expect(system.getCurrentUser()).to.be.equal("chandimasamaraweera");
    });

    it("Testing Host Name", function () {
        expect(system.getHostName()).to.be.equal("Chandimas-MacBook-Pro-2.local");
    });

    it("Testing CPU Details", function () {
        assert.isDefined(system.getCPUDetails());
    });
})