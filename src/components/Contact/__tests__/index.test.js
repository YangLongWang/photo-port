/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('render contact', () => {
  it('ContactForm is rendering properly', () => {
    render(<Contact />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Contact />)
    expect(asFragment()).toMatchSnapshot()
  });

  it('match the text content to be Contact me', () => {
    const { getByTestId } = render(<Contact />);
  
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
  });
    
  it('match the text content to be Submit', () => {
    const { getByTestId } = render(<Contact />);
    
    expect(getByTestId('buttontag')).toHaveTextContent('Submit');
  });
});