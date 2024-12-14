// __tests__/order-form-fields.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import OrderFormFields from '../components/order/order-form-fields';
import '@testing-library/jest-dom';
describe('OrderFormFields Component', () => {
  it('renders all input fields', () => {
    render(<OrderFormFields />);

    expect(screen.getByLabelText('Your Name (Optional)')).toBeInTheDocument();
    expect(screen.getByLabelText('Quantity (Optional)')).toBeInTheDocument();
    expect(screen.getByLabelText('City')).toBeInTheDocument();
    expect(screen.getByLabelText('State/Province')).toBeInTheDocument();
    expect(screen.getByLabelText('Country')).toBeInTheDocument();
  });
});
