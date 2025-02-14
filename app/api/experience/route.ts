import { NextResponse } from 'next/server';
import axios from 'axios';

const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_API_KEY = process.env.STRAPI_API_KEY;

export async function GET() {
  try {
    const response = await axios.get(`${STRAPI_URL}/api/expiriences/?populate=*`, {
      headers: {
        Authorization: `Bearer ${STRAPI_API_KEY}`
      }
    });
    // Reshape the data to match our Timeline format
    const reshapedData = response.data.data.map((item: any) => ({
      companyImg: item.companyImg?.formats?.thumbnail?.url || item.companyImg?.url,
      jobTitle: item.jobTitle,
      company: item.company,
      jobType: item.jobType,
      duration: item.duration,
      stuffIDid: item.stuffIDid.map((stuff: any) => stuff.text),
    }));

    return NextResponse.json(reshapedData);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch experiences' }, { status: 500 });
  }
}