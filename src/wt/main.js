import {Worker} from 'worker_threads';
import {cpus} from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const performCalculations = async () => {
   const totalCpuCount = cpus().length;
   const dummyArr = new Array(totalCpuCount).fill(null);
   const pathToFile = path.join(__dirname, 'worker.js');
    const results = await Promise.allSettled(
        dummyArr.map((_, index)=> new Promise((res,rej)=>{
                const wt = new Worker(pathToFile);
                wt.on('message', res);
                wt.on('messageerror', () => rej(null));
                wt.on('error',() => rej(null));
                wt.postMessage(10+index);
            })
        )
    );
    const adoptedResult = results.map(result => {
        const newResult = {};
        if(result.status === 'fulfilled') {
            newResult.status = 'resolved';
            newResult.value = result.value;
            return newResult;
        } else {
            newResult.status = 'error';
            newResult.value = null;
            return newResult;
        }
        newResult.status = result.status;
        newResult.value = result.value;
        return newResult
    })

    console.table(adoptedResult);
};

await performCalculations();