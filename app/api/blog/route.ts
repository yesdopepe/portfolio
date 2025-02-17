import { NextResponse } from "next/server";
import axios from "axios";

const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_API_KEY = process.env.STRAPI_API_KEY;

export async function GET() {
  try {
    const response = await axios.get(`${STRAPI_URL}/api/articles`, {
      headers: {
        Authorization: `Bearer ${STRAPI_API_KEY}`,
        "Cache-Control": "no-store, max-age=0",
      },
    });
    return NextResponse.json(response.data, {
      status: 200,
      headers: { "Cache-Control": "no-store, max-age=0" },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}

export const fetchCache = 'force-no-store';