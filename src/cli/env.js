const parseEnv = () => {
    const args = process.env;
    const varKeys = Object.keys(args);
    const rssKeys = varKeys.filter(key => key.match(/RSS_/));
    const result = rssKeys.map(key => `${key}=${args[key]}`);
    console.table(result);
};

parseEnv();