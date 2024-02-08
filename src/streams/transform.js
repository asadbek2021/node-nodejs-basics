import {Transform} from 'stream';

class TransformStream extends Transform {
    constructor(args){
        super(args);
    }
    _transform(chunk, encoding, cb) {
        const value = chunk.toString();
        const reverseValue = value.split('').reverse().join('');
        this.push(reverseValue.padEnd(reverseValue.length+2, '\r\n'));
        cb();
    }
}

const transform = async () => {
    const ts = new TransformStream();
    process.stdin.pipe(ts).pipe(process.stdout);
};

await transform();