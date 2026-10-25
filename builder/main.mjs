import fs from "fs";
import { createInterface } from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process';

const rl = createInterface({ input, output });

import builder from "./builder.mjs";

const B = new builder({
        fs: fs,
        rl: rl,
        assets: ['vanilla-js-kit']
    })

// B.Build()

B.Create(1)