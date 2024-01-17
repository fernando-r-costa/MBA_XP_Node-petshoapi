import { connect } from "./mongoose.db.js"
import PostSchema from "../schemas/post.schema.js"

async function createPost(post) {
    try {
        const mongoose = await connect()
        const Post = mongoose.model('Post', PostSchema, "posts")
        post = new Post(post)
        return await post.save()
    } catch (err) {
        throw err
    }
}

async function getPosts() {
    try {
        const mongoose = await connect()
        const Post = mongoose.model("Post", PostSchema)
        return await Post.find({}).exec()
    } catch (err) {
        throw err
    }
}

async function getPost(postId) {
    try {
        const mongoose = await connect()
        const Post = mongoose.model("Post", PostSchema)
        return await Post.findById(postId).exec()
    } catch (err) {
        throw err
    }
}

async function updatePost(post, postId) {
    try {
        const mongoose = await connect()
        const Post = mongoose.model('Post', PostSchema)
        await Post.findByIdAndUpdate(postId, post)
    } catch (err) {
        throw err
    }
}

async function createComentario(comentario, postId) {
    try {
        const post = await getPost(postId)
        post.comentarios.push(comentario)
        await updatePost(post, postId)
    } catch (err) {
        throw err
    }
}

export default {
    createPost,
    getPosts,
    createComentario
}