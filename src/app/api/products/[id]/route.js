import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db("next_js_test");

    const product = await db
      .collection("next_js_test")
      .findOne({ _id: new ObjectId(params.id) });

    if (!product) {
      return Response.json({ error: "Product not found" }, { status: 404 });
    }

    return Response.json(product);
  } catch (error) {
    console.error("❌ Product details error:", error);
    return Response.json({ error: "Failed to fetch product" }, { status: 500 });
  }
}
