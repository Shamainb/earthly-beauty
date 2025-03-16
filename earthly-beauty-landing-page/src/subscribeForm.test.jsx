import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SubscribeForm from './SubscribeForm';

test('renders subscribe form and submits email', () => {
  render(<SubscribeForm />);
  
  const input = screen.getByPlaceholderText('Enter your email');
  const button = screen.getByText('Subscribe');

  fireEvent.change(input, { target: { value: 'test@example.com' } });
  fireEvent.click(button);

  expect(input.value).toBe('');
});