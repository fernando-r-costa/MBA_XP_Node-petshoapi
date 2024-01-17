import PostService from "../services/post.service.js"

async function createPost(req, res, next) {
    try {
        let post = req.body
        if (!post.titulo || !post.conteudo) {
            throw new Error("Titulo e conteúdo são obrigatórios")
        }
        post = await PostService.createPost(post)
        res.send(post)
        logger.info(`POST /post - ${JSON.stringify(post)}`)
    } catch (err) {
        next(err)
    }
}

async function getPosts(req, res, next) {
    try {
        res.send(await PostService.getPosts())
        logger.info("GET /post")
    } catch (err) {
        next(err)
    }
}

async function createComentario(req, res, next) {
    try {
        let comentario = req.body
        if (!comentario.postId || !comentario.comentarios) {
            throw new Error("Post ID e comentário são obrigatórios.")
        }
        await PostService.createComentario(comentario.comentarios, comentario.postId)
        res.send(comentario)
        logger.info(`POST /post/comentario - ${JSON.stringify(comentario)}`)
    } catch (err) {
        next(err)
    }
}

export default {
    createPost,
    getPosts,
    createComentario
}