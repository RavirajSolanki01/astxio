import { addProperty, deleteProperty, fetchPosts } from "@/db/sqlconnecct";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetchPosts();
  return NextResponse.json(res);
}

export async function DELETE(request: Request) {
  const body = await request.json();
  const data = await deleteProperty(body);
  return NextResponse.json({ message: "Property Deleted" }, { status: 200 });
}

export async function POST(request: Request) {
  const body = await request.json();
  const {
    bathroom,
    bed,
    build,
    id,
    imgData,
    location,
    price,
    property_type,
    size,
    sofa,
    title,
  } = body;

  const user = await addProperty(body);
  // const user = await prisma.user.create({
  //   data: {
  //     email,
  //     name,
  //     hashedPassword,
  //   },
  // });

  return NextResponse.json(user);
}

// export async function POST(request: Request) {
//   const body = await request.json();
//   const user = await addProperty(body);

//   // Notify connected SSE clients of the new data
//   const sse = new ServerSentEvent(new Response());
//   try {
//     const [rows] = await pool.query('SELECT * FROM listing');
//     sse.sendData({ data: JSON.stringify(rows) });
//   } catch (error) {
//     console.error(error);
//   } finally {
//     sse.close();
//   }

//   return NextResponse.json(user);
// }