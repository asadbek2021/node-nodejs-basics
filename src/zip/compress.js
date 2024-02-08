import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createGzip } from 'zlib';

const __dirname = fileURLToPath(new URL('.', import.meta.url));



const compress = async () => {
    try {
        const pathToFile = path.join(__dirname, 'files', 'fileToCompress.txt');
        const compressedFile = path.join(__dirname, 'files', 'archive.gz');
        const fileExists = fs.existsSync(pathToFile);
        const compressedExists = fs.existsSync(compressedFile);
    
        if(!fileExists || compressedExists) {
            throw new Error('FS operation failed');
        }
        const inp = fs.createReadStream(pathToFile); 
        const out = fs.createWriteStream(compressedFile);
        const gzip = createGzip()
        inp.pipe(gzip).pipe(out);
      } catch (err) {
        throw err;
      } 
};

await compress();