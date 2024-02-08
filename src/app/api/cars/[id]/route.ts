import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { INewOnlineData } from "@/app/admin/testing/page";

export async function GET(request: any, { params }: any) {
  const { id } = params;

  try {
    const result = await sql`SELECT * FROM listings WHERE id = ${id}`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: any) {
  const { id } = params;
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
  }: INewOnlineData = body;

  try {
    const result =
      await sql`UPDATE listings SET property_type = ${property_type}, price = ${price}, build = ${build}, title = ${title}, location = ${location}, sofa = ${sofa}, bed = ${bed}, bathroom = ${bathroom}, size = ${size}  WHERE id = ${id}
    `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: any) {
  const { id } = params;

  try {
    const result = await sql`DELETE FROM listings WHERE id = ${id}`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
