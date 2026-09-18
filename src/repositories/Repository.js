import { pool } from "../config/db.js";

const tableNames = [
    'familles',
    'members',
    'activities',
    'facilities',
    'associations',
    'registrations',
    'waiting_list'
];




export const findAll = async (table) => {

    if(!tableNames.includes(table)){
        throw new Error("Invalid table name !")
    }

    const result = await  pool.query(`SELECT * FROM ${table}`);
    // console.log("the result first query to database ", result);  return ;
    return result.rows;
}

export const findById = async(table, id) => {
    
    if(!tableNames.includes(table)){ throw new Error("Invalid table name !")};

    const query = `SELECT * FROM ${table} where id = $1`;

    const result = await pool.query(query, [id]);

    return result.rows[0];
}

export const create = async (table, data) => {

    if(!tableNames.includes(table)){ throw new Error("Invalid table name !")}

    const columnsTable = await pool.query(`
        SELECT column_name FROM information_schema.columns
        WHERE table_name = $1
        AND column_name != 'id'
        ORDER BY ordinal_position;
        `, [table]);
    
    const columns = columnsTable.rows.map(row => row.column_name);

    if(columns.length !== data.length){ throw new Error("Number of data does not match columns !")}
    
    const champs = data.map((_, index) => `$${index + 1}`);

    const query =  `
        INSERT INTO ${table} (${columns.join(", ")})
        VALUES (${champs.join(", ")})
        RETURNING *;
    `;

    const result = await pool.query(query, data)

    return result.rows[0];
}



export const update = async (table, id, data) => {
    
    if(!tableNames.includes(table)){ throw new Error("Invalid table name !")}
    
    const columnsTable = await pool.query(`
        SELECT column_name FROM information_schema.columns
        WHERE table_name= $1 AND column_name != 'id'
        ORDER BY ordinal_position; 
    `, [table]);

    const columns = columnsTable.rows.map(row => row.column_name);

    if(columns.length !== data.length){ throw new Error("Number of data dont mismatch columns! ")}

    const setValues = columns.map((column, index) => {
        return `${column}  = $${index + 1}`;
    });

    const values = [...data, id];

    const query = `UPDATE ${table} SET ${setValues.join(", ")}
                    WHERE id = $${data.length + 1} RETURNING  *; `;
    
    const result = await pool.query(query, values)

    return result.rows[0];
}


export const remove = async(table, id) => {
    
    if(!tableNames.includes(table)){throw new Error("Invalid table name !")}

    const query =  `DELETE FROM ${table} WHERE id = $1, RETURNING *; `;

    const result = await pool.query(query, [id]);

    return result.rows[0];
}