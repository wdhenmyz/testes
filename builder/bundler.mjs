import * as esbuild from 'esbuild';

// Cria o contexto de build do esbuild
let ctx = await esbuild.context({
});

// Inicializa o servidor HTTP local
let { host, port } = await ctx.serve({
  servedir: 'src',                // 👈 DIZ AO ESBUILD PARA SERVIR OS ARQUIVOS DESTA PASTA
  port: 3000,                      // Porta onde o servidor vai rodar
});

console.log(`🚀 Servidor rodando em http://${host}:${port}`);