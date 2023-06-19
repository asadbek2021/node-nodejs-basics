import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const rename = async () => {
    try {
        const wrongFilePath = path.join(__dirname, 'files', 'wrongFilename.txt');
        const properFilePath = path.join(__dirname, 'files', 'properFilename.md');
        const wrongFileExists = fs.existsSync(wrongFilePath);
        const properFileExists = fs.existsSync(properFilePath);
        
        if(!wrongFileExists || properFileExists) {
            throw new Error('FS operation failed')
        }

        await fs.promises.rename(wrongFilePath, properFilePath);
    } catch (err) {
        throw err;
    }
};

await rename();