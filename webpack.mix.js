const mix = require('laravel-mix');
const fs = require('fs');
if (mix.inProduction()) {

    const fileName = './public/mix-manifest.json';




    fs.writeFile(fileName, "{}", function writeJSON(err) {

    });

    if (fs.existsSync('./public/assets/lambda/js')) {
        fs.rmSync('./public/assets/lambda/js', { recursive: true });
    }



}
//if (process.env.section == "lambda") {
require(`${__dirname}/webpack.lambda.dev.js`);
// require(`${__dirname}/webpack.lambda.js`);
//} else {
//    require(`${__dirname}/webpack.appAdmin.js`);
//}
