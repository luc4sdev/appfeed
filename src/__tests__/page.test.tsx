import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Home from '@/app/page';
import { getTrendingGifs } from '@/components/Post';
import { getEmojis } from '@/components/Header';

jest.mock('../components/Post', () => {
  return {
    __esModule: true,
    Post: jest.fn(),
    getTrendingGifs: jest.fn()
  };
});

jest.mock('../components/Header', () => {
  return {
    __esModule: true,
    Header: jest.fn(),
    getEmojis: jest.fn(),
  };
});

describe('Home page', () => {
  it('renders page correctly', async () => {

    const mockedGifs = [{ id: '1', images: { original: { url: 'test-url' } }, username: 'test-user', title: 'test-title' }];
    (getTrendingGifs as jest.Mock).mockResolvedValue(mockedGifs);

    const mockedEmojis = [{ id: '1', name: 'smile' }];
    (getEmojis as jest.Mock).mockResolvedValue(mockedEmojis);

    render(<Home />);

    await waitFor(() => {

      const container = screen.getByTestId('container');
      expect(container).toBeInTheDocument();

    });

  });
});
