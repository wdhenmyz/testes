import fs from "fs"

function Build(name= 'Document', app) {
    
    const html = `<!DOCTYPE html>
<html>

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${name}</title>

        <style>
            ${app.Style()}
        </style>

        <link rel="stylesheet" href="${name}.css">
        <script src="${name}.js"></script>

    </head>

    <body>
        ${app.HTML()}

        <script>
            ${app.Script()}
        </script>
    </body>

</html>
`

    fs.writeFileSync(`./dist/${name}.html`, html)
}

function Assets(params = []) {
    params.forEach(param => {
        fs.cpSync(`./src/${param}`, `./dist/${param}`, { recursive: true })
    });
}

export { Build, Assets }