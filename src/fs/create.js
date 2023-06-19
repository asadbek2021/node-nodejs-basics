import fs from 'fs';
import path from  'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const create = async () => {
    try{
        const pathToFile = path.join(__dirname, 'files', 'fresh.txt');
        const fileExists = fs.existsSync(pathToFile);
        if(fileExists) {
            throw new Error('FS operation failed');
        }
        await fs.promises.writeFile(pathToFile, 'I am fresh and young', {flag: 'a+'})
    } catch(err) {
        throw err;
    }
};

await create();