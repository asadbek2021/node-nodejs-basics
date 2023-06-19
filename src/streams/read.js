import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const read = async () => {
   try{
    const pathToFile = path.join(__dirname, 'files','fileToRead.txt');
    const fileExists = fs.existsSync(pathToFile);

    if(!fileExists){
        throw new Error('FS operation failed');
    }

    const rs = fs.createReadStream(pathToFile);
    rs.pipe(process.stdout);
   } catch (err) {
    throw err;
   }
};

await read();