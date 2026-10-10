class builder {
    constructor({fs, src = "./src", dist = "./dist", assets = null}) {
        this.fs = fs
        this.src = src
        this.dist = dist

        this.Build()
        if (assets) {
            this.Assets(assets)
        }
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
    }

    Assets(params = []) {
        params.forEach(param => {
            this.fs.cpSync(`${this.src}/${param}`, `${this.dist}/${param}`, { recursive: true })
        });
    }
}

export default builder