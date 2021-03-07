import { render, screen } from '@testing-library/react';
import Customers from '../Customers';

test('has correct heading text', () => {
  render(<Customers />);
  expect(screen.getByRole('heading')).toHaveTextContent('Customers');
});
