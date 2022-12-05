import {
  QueryClient,
} from '@tanstack/react-query';

const BASE_URL = 'https://fakestoreapi.com';
type TypeMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
type TypeBodyOBJ = { [key: string]: any };

// Create a client
export const getClient = (()=>{
  let client: QueryClient | null = null;
  return ()=>{
    if (!client) client = new QueryClient({});
    return client;
  }
})();

export const fetcher = async ({
  method,
  path,
  body,
  params,
}: {
  method: TypeMethod;
  path: string;
  body?: TypeBodyOBJ;
  params?: TypeBodyOBJ;
}) => {
  try {
    const url = `${BASE_URL}${path}`;
    const fetchOptions: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': BASE_URL
      }
    }
    const res = await fetch(url, fetchOptions);
    const json = await res.json();
    return json;
  } catch(err) {
    console.error(err);
  }
}

export const QueryKeys = {
  PRODUCTS: 'PRODUCTS',
}