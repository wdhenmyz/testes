import fs from "fs"

export function Build(name= 'Document', app) {
    
    const html = `<!DOCTYPE html>
<html>
    <head>
        ${app.Head()}
    </head>

    <body>
        ${app.Body()}
    </body>
</html>
`

    fs.writeFileSync(`./dist/${name}.html`, html)
}

export function Assets(params = []) {
    params.forEach(param => {
        fs.cpSync(`./src/${param}`, `./dist/${param}`, { recursive: true })
    });
}