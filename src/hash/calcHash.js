import { createHash } from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const calculateHash = async () => {
    try{ 
        const pathToFile = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
        const fileExists = fs.existsSync(pathToFile);

        if(!fileExists) {
            throw new Error('FS operation failed');
        }

        const content = await fs.promises.readFile(pathToFile, {encoding: 'utf-8'});
        const hash =  createHash('sha256').update(content).digest('hex');
        console.log('Hash: ', hash);
    } catch (err) {
        throw err;
    }
};

await calculateHash();