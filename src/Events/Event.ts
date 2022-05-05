import EventEmitter from 'node:events';

class MyEmitter extends EventEmitter {}

export const Emitter = new MyEmitter();
