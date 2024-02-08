import mysql from "mysql2/promise";
import { Pool } from "pg";

// const pool = mysql.createPool({
//   host: process.env.MYSQL_HOST,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE,
// });

const pool = new Pool({
  user: process.env.POSTGRESQL_USER,
  host: process.env.POSTGRESQL_HOST,
  database: process.env.POSTGRESQL_DATABASE,
  password: process.env.POSTGRESQL_PASSWORD,
  port: 5432, // Change it if your PostgreSQL is running on a different port
});

// Use the pool to execute queries:
export async function fetchPosts() {
  const result = await pool.query("SELECT * FROM listing");
  return result.rows;
}

interface IData {
  // id: number;
  property_type: string;
  build: string;
  price: string;
  title: string;
  location: string;
  sofa: number;
  bed: number;
  bathroom: number;
  size: number;
  imgData: string[];
}


// POST
export async function addProperty({
  bathroom,
  bed,
  build,
  imgData,
  location,
  price,
  property_type,
  size,
  sofa,
  title,
}: IData) {
  const data = await pool.query(
    `INSERT INTO listing 
      (property_type, build, price, title, location, sofa, bed, bathroom, size, images) 
      VALUES 
      ('${property_type}', '${build}', ${price}, '${title}', '${location}', ${sofa}, ${bed}, ${bathroom}, ${size}, JSON_ARRAY('/land.png', '/land.png', '/land.png'))`
  );

  return data;
}

// GET by ID
export async function getSpecificProperty(id: any) {
  const data = await pool.query(`SELECT * FROM listing WHERE id = ${id}`);
  return data;
}


// UPDATE
export async function updateProperty(
  {
    bathroom,
    bed,
    build,
    imgData,
    location,
    price,
    property_type,
    size,
    sofa,
    title,
  }: IData,
  id: any
) {
  const data = await pool.query(`
  UPDATE listing SET property_type = '${property_type}', price = ${price}, build = '${build}', title = '${title}', location = '${location}', sofa = ${sofa}, bed = ${bed}, bathroom = ${bathroom}, size = ${size}  WHERE id = ${id}
  `);
  return data;
}

// DELETE
export async function deleteProperty(id: any) {
  const data = await pool.query(`DELETE from listing WHERE id = ${id}`);
  return data;
}
