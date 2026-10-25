class builder {
    constructor({fs, rl, src = "./src", dist = "./dist", assets = null}) {
        this.fs = fs
        this.src = src
        this.dist = dist
        this.assets = assets
        this.rl = rl
    }

    async Build() {
        this.fs.rmSync(`${this.dist}`, { recursive: true, force: true })
        this.fs.mkdirSync(`${this.dist}`)
        
        const pages = this.fs.readdirSync(`${this.src}/pages`)

        for (const file of pages) {
            const module = await import(`${this.src}/pages/${file}`)
            const Page = module.default

            const page = new Page()
            const name = file.replace(".mjs", "")

            const html = `<!DOCTYPE html>
            <html>
                <head>
            ${page.Head()}
                </head>
            
                <body>
            ${page.Body()}
                    <script>
            ${page.Script()}      
                    </script>
                </body>
            </html>
            `
            
            this.fs.writeFileSync(`${this.dist}/${name}.html`, html)
        }

        if (this.assets) {
            this.Assets(this.assets)
        }
    }

    Assets (params = []) {
        params.forEach(param => {
            this.fs.cpSync(`${this.src}/${param}`, `${this.dist}/${param}`, { recursive: true })
        });
    }

    async Create (n = 0) {
        for (let index = 0; index < n; index++) {
            const page = await this.rl.question('qual o nome da página? ');
            
            const html = `<!DOCTYPE html>
            <html>
                <head>
                    <script src="./pages/${page}.mjs" type="module"></script>
                </head>
            
                <body>
                    <p>ola, essa é a página ${page}</p>
                </body>
            </html>
            `

            const mjs = `import { Template } from "../vanilla-js-kit/vanilla-kit.mjs";
            import { head } from "../head/head1.mjs";
            
            export default class index extends Template {
                Head() {
                    return head({
                        title: "${page}",
                        style: this.Style()
                    })
                }

                Body() {
                    return "<h1>${page} ola</h1>"
                }
                
                Style() {
                    return "h1 { color: red; }"
                }

                Script() {
                    return "console.log('${page}')"
                }
            }

            new index('render')
            `

            this.fs.writeFileSync(`${this.src}/${page}.html`, html)
            this.fs.writeFileSync(`${this.src}/pages/${page}.mjs`, mjs)
        }
    }
}

export default builder