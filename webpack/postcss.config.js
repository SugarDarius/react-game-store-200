
/*
*   React Game Store 200 - webpack - postcss config
*   author: Aurélien Dupays Dexemple
*/

module.exports = {
    sourceMap: 'inline',
    plugins: [
        require('postcss-flexbugs-fixes'),
        require('autoprefixer')({
            cascade: false,
            add: true,
            browsers: ['last 2 versions', 'IE > 12']
        })
    ]
}