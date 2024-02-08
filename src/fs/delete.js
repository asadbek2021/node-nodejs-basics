import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));



const remove = async () => {
    try{ 
        const pathToFile = path.join(__dirname, 'files', 'fileToRemove.txt');
        const fileExists = fs.existsSync(pathToFile);

        if(!fileExists){
            throw new Error('FS operation failed');
        }

        await fs.promises.unlink(pathToFile);
    } catch (err) {
        throw err;
    }
};

await remove();