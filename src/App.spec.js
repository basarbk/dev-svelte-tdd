import App from './App.svelte';
import { render, screen } from '@testing-library/svelte';
import '@testing-library/jest-dom';

it('has Hello Text', () => {
    render(App);
    const message = screen.queryByText('Hello Text');
    expect(message).toBeInTheDocument();
})