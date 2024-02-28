import { getTrendingGifs } from '@/components/Posts';
import { getEmojis } from '@/components/Header';
import { env } from "@/env";

import { waitFor } from '@testing-library/react';
import { api } from '../data/api';

jest.mock('../data/api', () => ({
    api: jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({ data: [] })
    })
  }));
  
jest.mock('../env');

test('api function is called', async () => {

  (env as any).NEXT_PUBLIC_API_BASE_URL = '';
  (env as any).NEXT_PUBLIC_API_KEY = '';

  await getTrendingGifs();
  await getEmojis();

  await waitFor(() => {
    expect(api).toHaveBeenCalledTimes(2);
  });
});
