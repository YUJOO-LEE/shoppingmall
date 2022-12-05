import {
  QueryClient,
} from '@tanstack/react-query';

// Create a client
export const getClient = (()=>{
  let client: QueryClient | null = null;
  return ()=>{
    if (!client) client = new QueryClient({});
    return client;
  }
})();