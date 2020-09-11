const data = require('./mockdata')
const LATENCY = 1000 //延迟

export function getAllMessages(cb) {
    setTimeout(() => {
        cb(data)
    }, LATENCY)
}


export function createMessage({ text, thread }, cb) {
    const timestamp = Date.now()
    const id = 'm_' + timestamp
    const message = {
        id,
        text,
        timestamp,
        threadID: thread.id,
        threadName: thread.name,
        authorName: 'EvanB'
    }
    setTimeout(function() {
        cb(message)
    }, LATENCY)
}