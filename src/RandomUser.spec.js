import RandomUser from './RandomUser.svelte';
import { fireEvent, render, screen } from '@testing-library/svelte';
import '@testing-library/jest-dom';
import axios from "axios";
import "whatwg-fetch";

describe('Random User', () => {
  it('has button to load random user', () => {
    render(RandomUser);
    const loadButton = screen.queryByRole('button', {
      name: 'Load Random User'
    });
    expect(loadButton).toBeInTheDocument();
  });
  it('displays title, first and lastname of loaded user from randomuser.me', async () => {
    render(RandomUser);
    const loadButton = screen.queryByRole('button', {
      name: 'Load Random User'
    });

    const mockApiCall = jest.fn().mockResolvedValue({
      data: {
        results: [
          {
            name: {
              title: 'Miss',
              first: 'Jennifer',
              last: 'Alvarez'
            }
          }
        ]
      }
    });

    axios.get = mockApiCall;
    fireEvent.click(loadButton);
    const userInfo = await screen.findByText("Miss Jennifer Alvarez");
    expect(userInfo).toBeInTheDocument();
  });
});
