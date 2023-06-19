import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));


const write = async () => {
    try{
        const pathToFile = path.join(__dirname, 'files','fileToWrite.txt');
        const fileExists = fs.existsSync(pathToFile);
    
        if(!fileExists){
            throw new Error('FS operation failed');
        }
    
        const ws = fs.createWriteStream(pathToFile, {flags: 'a'});
        process.stdin.pipe(ws);
       } catch (err) {
        throw err;
       } 
};

await write();