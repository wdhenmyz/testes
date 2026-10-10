import fs from "fs";

import builder from "./builder2.mjs";
new builder({
        fs: fs,
        assets: ['vanilla-js-kit']
    })