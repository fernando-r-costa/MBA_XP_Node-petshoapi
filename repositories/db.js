import pg from "pg"

async function connect() {
    if (global.connection) {
        return global.connection.connect()
    }
    const pool = new pg.Pool({
        connectionString: "postgres://kbilcvox:emsXZk2tgqXQXf2z-_LakFo_mfBWrraF@babar.db.elephantsql.com/kbilcvox"
    })
    global.connection = pool
    return pool.connect()
}

export {
    connect
}