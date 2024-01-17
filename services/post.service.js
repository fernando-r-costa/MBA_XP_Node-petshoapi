import PostRepository from "../repositories/post.repository.js"

async function createPost(post) {
    return await PostRepository.createPost(post)
}

async function getPosts() {
    return await PostRepository.getPosts()
}

async function createComentario(comentario, postId) {
    return await PostRepository.createComentario(comentario, postId)
}

export default {
    createPost,
    getPosts,
    createComentario
}