const parseArgs = () => {
    const args = process.argv.slice(2);
    const keys = args.filter(arg => arg.match(/--/));
    const result = keys.map(key => {
        const index = args.indexOf(key);
        const value = args[index+1];
        return `${key.replace('--','')} is ${value}`
    })
    console.table(result);
};

parseArgs();