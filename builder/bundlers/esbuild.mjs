export const serve = async (esbuild, context = {}, serve = { servedir: 'src', port: 3000,}) => {
    // Cria o contexto de build do esbuild
    let ctx = await esbuild.context(context);
    await ctx.watch()

    // Inicializa o servidor HTTP local
    let { host, port } = await ctx.serve(serve);

    console.log(`🚀 Servidor rodando em http://${host}:${port}`);
}
