import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('renders button with label', () => {
    const { getByText } = render(<Button label="Click Me" onClick={() => {}} />);
    expect(getByText('Click Me')).toBeInTheDocument();
  });

  it('calls onClick when button is clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button label="Click Me" onClick={handleClick} />);
    fireEvent.click(getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when the disabled prop is true', () => {
    const { getByText } = render(<Button label="Click Me" onClick={() => {}} disabled={true} />);
    const button = getByText('Click Me');
    expect(button).toBeDisabled();
  });
});

