import pg from "pg";

const {Pool} = pg;



export const pool = new Pool({

    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD
})


export async function testeDatabase(){
    // console.log('function teste database est appelee');
    try{
        await pool.query("select 1");
        console.log("database connect succfuly")
    }catch(error) {

        console.log("error connection ", error.message);
    }
}