// import pg from "pg"

// async function connect() {
//     if (global.connection) {
//         return global.connection.connect()
//     }
//     const pool = new pg.Pool({
//         connectionString: process.env.DB_CONNECTION
//     })
//     global.connection = pool
//     return pool.connect()
// }

// export {
//     connect
// }

import Sequelize from 'sequelize'

const sequelize = new Sequelize(
    process.env.DB_CONNECTION,
    {
        dialect: 'postgres',
        define: {
            timestamps: false
        }
    }
)

export default sequelize