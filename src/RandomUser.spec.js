import RandomUser from './RandomUser.svelte';
import { fireEvent, render, screen } from '@testing-library/svelte';
import '@testing-library/jest-dom';
import { setupServer } from "msw/node";
import { rest } from "msw";

describe('Random User', () => {
  it('has button to load random user', () => {
    render(RandomUser);
    const loadButton = screen.queryByRole('button', {
      name: 'Load Random User'
    });
    expect(loadButton).toBeInTheDocument();
  });
  it('displays title, first and lastname of loaded user from randomuser.me', async () => {
    const server = setupServer(
      rest.get("https://randomuser.me/api", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({
          results: [
            {
              name: {
                title: 'Miss',
                first: 'Jennifer',
                last: 'Alvarez'
              }
            }
          ]
        }));
      })
    );
    server.listen();
    render(RandomUser);
    const loadButton = screen.queryByRole('button', {
      name: 'Load Random User'
    });
    fireEvent.click(loadButton);
    const userInfo = await screen.findByText("Miss Jennifer Alvarez");
    expect(userInfo).toBeInTheDocument();
  });
});
