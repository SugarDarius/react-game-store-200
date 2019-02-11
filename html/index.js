
/*
*   React Game Store 200 - HTML
*   author: Aurélien Dupays Dexemple
*/

export const html = ({ build }) => `
    <!doctype html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>React Game Store 200</title>
        </head>
        <body>
            <div id="react-mount-node"></div>
            <script src="${build}"></script>
        </body>
    </html>
`;