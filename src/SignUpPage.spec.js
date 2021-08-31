import SignUpPage from './SignUpPage.svelte';
import { fireEvent, render, screen } from '@testing-library/svelte';
import '@testing-library/jest-dom';

it('has Sign Up header', () => {
    render(SignUpPage);
    const header = screen.getByRole('heading', { name: 'Sign Up'});
    expect(header).toBeInTheDocument();
})
it('has input for username', () => {
    render(SignUpPage);
    const input = screen.getByLabelText('Username');
    expect(input).toBeInTheDocument();
})
it('has input for email', () => {
    render(SignUpPage);
    const input = screen.getByLabelText('E-mail');
    expect(input).toBeInTheDocument();
})
it('has input for password', () => {
    render(SignUpPage);
    const input = screen.getByLabelText('Password');
    expect(input).toBeInTheDocument();
})
it('has type as password for password input', () => {
    render(SignUpPage);
    const input = screen.getByLabelText('Password');
    expect(input.type).toBe('password');
})
it('has input for password repeat', () => {
    render(SignUpPage);
    const input = screen.getByLabelText('Password Repeat');
    expect(input).toBeInTheDocument();
})
it('has type as password for password repeat input', () => {
    render(SignUpPage);
    const input = screen.getByLabelText('Password Repeat');
    expect(input.type).toBe('password');
})
it('has Sign Up button', () => {
    render(SignUpPage);
    const button = screen.getByRole('button', { name: 'Sign Up'});
    expect(button).toBeInTheDocument();
})
it('disables the button initially', () => {
    render(SignUpPage);
    const button = screen.getByRole('button', { name: 'Sign Up'});
    expect(button).toBeDisabled();
})