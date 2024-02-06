import { getSpecificProperty, updateProperty } from "@/db/sqlconnecct";
import { NextResponse } from "next/server";

export async function PUT(request: Request, { params }: any) {
  const { id } = params;
  const body = await request.json();
  const res = await updateProperty(body, id);
  return NextResponse.json(res);
}

export async function GET(request: any, { params }: any) {
  const { id } = params;
  const res = await getSpecificProperty(id);
  return NextResponse.json(res);

  // await connectMongoDB();
  // const topic = await Topic.findOne({ _id: id });
  // return NextResponse.json({ topic }, { status: 200 });
}
