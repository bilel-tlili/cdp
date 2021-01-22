const utilitis = {
 
 usage : () => {
    const usageText= `
    cdp cli is only a test cli
    
    usage : 
    node app.js --<command>=<pattern> 
    node app.js --<command> 
    
    commands can be: 

    --filter=<pattern>      used to filter a list of elements containing a pattern.  
    --count                 used to print the counts of People and Animals by counting the number of children and appending it in the name.
    --help                  print help.   `

    console.log(usageText)
},

 errorLog : (error) => {
    console.error(error)
},
infoLog: (info) => {
    if(info && info.length > 0) {
    console.log(JSON.stringify(info, null , 2));
    }
},

 getCommand : (args) => {
    if (!args) {
        return undefined;
    }
  
    while(args.charAt(0) == '-') {
        args = args.substr(1, args.length);
    }
    if(args.indexOf('=') > 0) {
        return args.substr(0, args.indexOf('='));
    }
    return args.substr(0, args.length);
  },
  getArg : (args) => {
    if (args && args.includes('='))
        return args.substr(args.indexOf('=') + 1, args.length);
  
        return undefined;
  }
 
}

export default utilitis ;