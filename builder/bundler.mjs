import * as esbuild from "esbuild"

import { serve } from "./bundlers/esbuild.mjs";

serve(esbuild, 
  {
    entryPoints:["src/pages/index.mjs"],
    outdir: 'src/bundle',
    inject: ["src/live.js"]
  }, 
  {
    servedir: 'src',
    port: 3000
  })

serve(esbuild, {}, {
  servedir: 'dist',
  port: 4000
})