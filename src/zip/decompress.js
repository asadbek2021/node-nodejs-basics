import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createUnzip } from 'zlib';

const __dirname = fileURLToPath(new URL('.', import.meta.url));



const decompress = async () => {
    try {
        const pathToFile = path.join(__dirname, 'files', 'fileToCompress.txt');
        const compressedFile = path.join(__dirname, 'files', 'archive.gz');
        const compressedExists = fs.existsSync(compressedFile);
    
        if(!compressedExists) {
            throw new Error('FS operation failed');
        }
        const inp = fs.createReadStream(compressedFile); 
        const out = fs.createWriteStream(pathToFile);
        const unzip = createUnzip()
        inp.pipe(unzip).pipe(out);
      } catch (err) {
        throw err;
      } 
};

await decompress();