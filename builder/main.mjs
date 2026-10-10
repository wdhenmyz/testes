import fs from "fs";

import builder from "./builder.mjs";
new builder({
        fs: fs,
        assets: ['vanilla-js-kit']
    })