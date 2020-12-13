import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000',
});

async function fetch<T>(
  endpoint: string,
  method: 'GET' | 'POST' = 'GET',
  body?: any,
  options?: any,
) {
  if (!endpoint) {
    throw new Error('No url defined');
  }

  const response = await instance.request<T>({
    url: endpoint,
    method,
    data: body,
    ...options,
    headers: { Accept: 'application/json', ...(options?.headers ?? {}) },
  });

  return response.data;
}

export { fetch };
