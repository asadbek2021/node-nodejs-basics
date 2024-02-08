import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));


const copy = async () => {
    try{
        const sourceFolderPath = path.join(__dirname, 'files');
        const destFolderPath = path.join(__dirname, 'files_copy');
        const ifSourceFolderExists = fs.existsSync(sourceFolderPath);
        const ifDestFolderExists = fs.existsSync(destFolderPath);

        if(!ifSourceFolderExists || ifDestFolderExists) {
            throw new Error('FS operation failed');
        }
        await fs.promises.mkdir(destFolderPath, {recursive: false});
        const files = await fs.promises.readdir(sourceFolderPath, {recursive: false});
        await Promise.all(
            files.map(file => {
                const sourcePath = path.join(sourceFolderPath, file);
                const destPath = path.join(destFolderPath, file);
                return fs.promises.copyFile(sourcePath, destPath)
            })
        );
    } catch(err) {
        throw err;
    }
};

await copy();
