import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

// GET: fetch all products
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("next_js_test");
    const products = await db.collection("next_js_test").find({}).toArray();
    console.log(products);

    return NextResponse.json(products);
  } catch (error) {
    console.error("❌ GET Error:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

// POST: insert new product
export async function POST(req) {
  try {
    const body = await req.json(); // read JSON data
    const client = await clientPromise;
    const db = client.db("next_js_test");

    const result = await db.collection("next_js_test").insertOne(body);

    return NextResponse.json({
      message: "✅ Product added successfully",
      insertedId: result.insertedId,
    });
  } catch (error) {
    console.error("❌ POST Error:", error);
    return NextResponse.json({ error: "Failed to add product" }, { status: 500 });
  }
}
