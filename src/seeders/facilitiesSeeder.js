


import { pool } from '../config/db.js';

const facilities = [
    {
        name: 'Complexe Sportif Municipal',
        capacity: 500
    },
    {
        name: 'Salle Omnisports',
        capacity: 300
    },
    {
        name: 'Terrain de Football',
        capacity: 1000
    },
    {
        name: 'Piscine Municipale',
        capacity: 200
    }
];

const seedFacilities = async() => {
        try{
            for (const facility of facilities) {
                await pool.query(`INSERT INTO  facilities(name, capacity) VALUES ($1, $2)`,  [facility.name, facility.capacity])
            }

            console.log('seeding data');

        }catch(e){
                console.log("Erreur lorsque le seeding data facilities", e.message);
        }finally{
            await pool.end();
        }
}

seedFacilities();