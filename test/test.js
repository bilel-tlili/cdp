import { exec } from 'child_process';


const  child = () => { exec('node app --filter1=yr',
    function (error, stdout, stderr) {
        console.log( stderr);
        console.log( stdout);
        
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });
 child;