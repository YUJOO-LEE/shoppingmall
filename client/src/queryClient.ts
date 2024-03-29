import { QueryClient } from '@tanstack/react-query';
import { request, RequestDocument } from 'graphql-request';

const BASE_URL = 'http://localhost:8000/graphql';

// Create a client
export const getClient = (()=>{
  let client: QueryClient | null = null;
  return ()=>{
    if (!client) client = new QueryClient({
      defaultOptions:{
        queries: {
          cacheTime: 1000 * 60 * 60 * 24,
          staleTime: 1000 * 60,
          refetchOnMount: false,
          refetchOnReconnect: false,
          refetchOnWindowFocus: false,
        }
      }
    });
    return client;
  }
})();

export const graphqlFetcher = (query: RequestDocument, variables = {}) => request(BASE_URL, query, variables);

export const QueryKeys = {
  PRODUCTS: 'PRODUCTS',
  CART: 'CART',
}