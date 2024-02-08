import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // await sql`CREATE TABLE IF NOT EXISTS listing ( Name varchar(255), Owner varchar(255) );`;

    // const result = await sql`CREATE TABLE Listings
    // (
    //     id SERIAL PRIMARY KEY,
    //     property_type VARCHAR(50),
    //     build VARCHAR(50),
    //     price VARCHAR(20),
    //     title VARCHAR(50),
    //     location VARCHAR(80),
    //     sofa VARCHAR(80),
    //     bed VARCHAR(80),
    //     bathroom VARCHAR(80),
    //     size VARCHAR(80)
    // );`;

    // await sql`DROP TABLE IF EXISTS listing`;
    // await sql`ALTER TABLE listing DROP COLUMN images`;

    // await sql`INSERT INTO listing (property_type, build, price, title, location, sofa, bed, bathroom, size) VALUES ('New Property', 'New Build',34000, 'Beautiful title', 'USA', 3,3,3,200 );`;
    const result = await sql`SELECT * FROM listings`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  const {
    bathroom,
    bed,
    build,
    location,
    price,
    property_type,
    size,
    sofa,
    title,
  } = body;

  try {
    const res = await sql`INSERT INTO listings 
      (property_type, build, price, title, location, sofa, bed, bathroom, size)
      VALUES 
      (${property_type}, ${build}, ${price}, ${title}, ${location}, ${sofa}, ${bed}, ${bathroom}, ${size});`;

    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
