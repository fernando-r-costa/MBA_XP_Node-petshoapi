import pg from "pg"

const dbURL = process.env.dbURL

async function connect() {
    if (global.connection) {
        return global.connection.connect()
    }
    const pool = new pg.Pool({
        connectionString: dbURL
    })
    global.connection = pool
    return pool.connect()
}

export {
    connect
}