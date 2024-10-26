
import { connectMongoDB } from "@/lib/mongodb";
import Product from "@/models/product";

import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description, image, price  } = await request.json();
  await connectMongoDB();
  await Product.create({ title, description, image, price  });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const products = await Product.find();
  return NextResponse.json({ products });
}