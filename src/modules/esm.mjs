import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { fileURLToPath } from 'url';
import('./files/c.js');

const random = Math.random();

const __filename = fileURLToPath(import.meta.url);
const __dirname = fileURLToPath(new URL('.', import.meta.url));

let unknownObject;

async function readJson() {
    if (random > 0.5) {
        let {default : info} = await import('./files/a.json', {assert: {type: 'json'}});
        unknownObject = info;
    } else {
        let {default : info} = await import('./files/b.json', {assert: {type: 'json'}});
        unknownObject = info;
    }
}

readJson().then(() => console.log(unknownObject));
console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;



myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
};

