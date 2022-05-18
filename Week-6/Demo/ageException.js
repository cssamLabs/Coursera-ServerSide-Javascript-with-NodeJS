class AgeError extends Error {
    constructor(msg){
        super(msg)
        this.name = this.constructor.name
        this.message = msg
    }
}

module.exports = AgeError