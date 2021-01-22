#!/usr/bin/env node

import utilitis from './src/utilitis/utilitis.js'
import filter from './src/commands/filter.js';
import count from './src/commands/count.js';
import data from './data.js'






// get the second argument 
const [args] = process.argv.slice(2);
// get the command 
const command = utilitis.getCommand(args);
// get argument
const arg = utilitis.getArg(args);

const app = (data) => {

    switch (command) {

        case 'count':
            // count data  
            if (arg) {
                utilitis.errorLog("No argument should be passed with the command 'count'!")
            } else {
                let countedData = count(data);
                utilitis.infoLog(countedData)
            }
            break;
        case 'filter':
            // Filter data by criteria 
            if (arg) {
                let filtredData = filter(data, arg);
                utilitis.infoLog(filtredData)
            }
            else {
                utilitis.infoLog(data)
            }
            break;
        case 'help':
            utilitis.usage();
            break;
        default:
            utilitis.errorLog('invalid command passed!')
            utilitis.usage()
    }
}

try {
    app(data);
}
catch (err) {
    console.error(err)

}
