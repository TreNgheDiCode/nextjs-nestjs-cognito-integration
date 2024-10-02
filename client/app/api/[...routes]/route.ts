import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { routes: string } }
) {
  try {
    const body = await req.json();

    const { routes } = params;

    const res = await axios.post(`${process.env.API_URL}/${routes}`, body, {
      params: {
        apiKey: process.env.API_KEY,
      },
    });

    return NextResponse.json(res.data);
  } catch (error) {
    console.log("Axios API Route POST -> error", error);

    return NextResponse.json({ error }, { status: 500 });
  }
}
