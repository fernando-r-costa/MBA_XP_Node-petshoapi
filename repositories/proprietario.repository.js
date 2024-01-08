import { connect } from "./db.js"

async function insertProprietario(proprietario) {
    const conn = await connect()
    try {
        const sql = "INSERT INTO proprietarios (nome, telefone) VALUES ($1, $2) RETURNING *"
        const values = [proprietario.nome, proprietario.telefone]
        const res = await conn.query(sql, values)
        return res.rows[0]
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function updateProprietario(proprietario) {
    const conn = await connect()
    try {

    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function deleteProprietario(id) {
    const conn = await connect()
    try {

    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function getProprietarios() {
    const conn = await connect()
    try {

    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function getProprietario(id) {
    const conn = await connect()
    try {

    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

export default {
    insertProprietario,
    updateProprietario,
    deleteProprietario,
    getProprietarios,
    getProprietario
}