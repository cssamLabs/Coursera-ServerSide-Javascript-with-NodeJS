const event = require('events')


const fs = require('fs');
const { EventEmitter } = require('stream');

const eventEmitter = new event.EventEmitter();

eventEmitter.addListener('updateResult', ()=>{
    console.log('When update event gets invoke call this function')
})

fs.readFile('test.txt', 'utf8', (err, data)=>{
    eventEmitter.emit('updateResult')
})