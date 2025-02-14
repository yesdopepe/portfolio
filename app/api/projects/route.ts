import { NextResponse } from 'next/server';
import axios from 'axios';

const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_API_KEY = process.env.STRAPI_API_KEY;

export async function GET() {
  try {
    const response = await axios.get(`${STRAPI_URL}/api/projects/?populate=*`, {
      headers: {
        Authorization: `Bearer ${STRAPI_API_KEY}`
      }
    });
    console.log(response.data);
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}