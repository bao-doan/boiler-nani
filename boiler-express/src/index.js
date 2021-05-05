/** Load environment variables */
const dotenv = require('dotenv');
dotenv.config();

/** Create express app */
const express = require('express');
const app = express();
const path = require('path');
const filename = path.basename(__filename);

/** Serve static files */
app.use('/public', express.static('public'));

/** Start server */
app.listen(process.env.PORT, () => {
    
    console.log(`[${filename}]`, 'Express server is on:', process.env.PORT);
    if(!process.env.PRODUCTION || process.env.PRODUCTION==='0') {
        console.log(`[${filename}]`, 'Development server');
    } else {
        console.log(`[${filename}]`, 'Production server');
    }
    console.log(`[${filename}]`, 'Static files are on', process.env.HOST, process.env.PORT);
});
