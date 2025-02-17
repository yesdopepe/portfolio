import axios from 'axios';

const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_API_KEY = process.env.STRAPI_API_KEY;

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const response = await axios.get(`${STRAPI_URL}/api/articles`, {
      headers: {
        Authorization: `Bearer ${STRAPI_API_KEY}`
      },
      params: {
        filters: {
          documentId: {
            $eq: params.id
          }
        }
      }
    });
    
    const post = response.data.data[0]; // Get the first matching post
    if (!post) {
      return Response.json({ error: 'Blog post not found' }, { status: 404 });
    }
    
    return Response.json({ data: post });
  } catch (error) {
    return Response.json({ error: 'Failed to fetch blog post' }, { status: 500 });
  }
}

export const fetchCache = 'force-no-store';