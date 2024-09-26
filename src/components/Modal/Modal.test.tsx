import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Modal Component', () => {
  it('does not render when isOpen is false', () => {
    const { queryByText } = render(<Modal isOpen={false} onClose={() => {}}>Modal Content</Modal>);
    expect(queryByText('Modal Content')).not.toBeInTheDocument();
  });

  it('renders when isOpen is true', () => {
    const { getByText } = render(<Modal isOpen={true} onClose={() => {}}>Modal Content</Modal>);
    expect(getByText('Modal Content')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const handleClose = jest.fn();
    const { getByText } = render(<Modal isOpen={true} onClose={handleClose}>Modal Content</Modal>);
    fireEvent.click(getByText('×')); // Simulate close button click
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});

