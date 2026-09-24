import { pool } from "../config/db.js";




export const findActivitiesAssociation = async(id) => {

    const query = "SELECT * FROM activities WHERE association_id =$1";
    const results = await pool.query(query, [id]);

    return results.rows

}