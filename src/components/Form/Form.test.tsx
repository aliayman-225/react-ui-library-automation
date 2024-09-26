import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from './Form';

describe('Form Component', () => {
  it('renders the form fields', () => {
    const { getByLabelText } = render(<Form onSubmit={() => {}} />);
    expect(getByLabelText('Name')).toBeInTheDocument();
    expect(getByLabelText('Email')).toBeInTheDocument();
  });

  it('captures input values and submits the form', () => {
    const handleSubmit = jest.fn();
    const { getByLabelText, getByRole } = render(<Form onSubmit={handleSubmit} />);

    // Simulate user input
    fireEvent.change(getByLabelText('Name'), { target: { value: 'John Doe' } });
    fireEvent.change(getByLabelText('Email'), { target: { value: 'john@example.com' } });

    // Simulate form submission
    fireEvent.click(getByRole('button', { name: /submit/i }));
    expect(handleSubmit).toHaveBeenCalledWith({ name: 'John Doe', email: 'john@example.com' });
  });
});
