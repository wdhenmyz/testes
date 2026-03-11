import fs from "fs";
import { Build, Assets } from "./builder.mjs";
// import index from "./src/pages/index.mjs";

const pages = fs.readdirSync("./src/pages")

for (const file of pages) {

    const module = await import(`./src/pages/${file}`)
    const Page = module.default

    const page = new Page()

    const name = file.replace(".mjs", "")

    Build(name, page)
}

Assets(['css'])