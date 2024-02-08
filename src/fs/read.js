import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const read = async () => {
  try {
    const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');
    const fileExists = fs.existsSync(pathToFile);

    if(!fileExists) {
        throw new Error('FS operation failed');
    }

    const content = await fs.promises.readFile(pathToFile, {encoding: 'utf-8'});
    console.log(content);
  } catch (err) {
    throw err;
  }
    
};

await read();