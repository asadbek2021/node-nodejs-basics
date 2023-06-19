import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));


const list = async () => {
   try {
    const pathToFolder = path.join(__dirname, 'files');
    const folderExists = fs.existsSync(pathToFolder);
    
    if(!folderExists) {
        throw new Error('FS operation failed');
    }

    const files = await fs.promises.readdir(pathToFolder);
    console.table(files);
   } catch (err) {
    throw err;
   }
};

await list();