import React, { useState, useEffect } from 'react';
import { fireEvent, getByText, render, screen } from '@testing-library/react';
import App from '../components/App';
jest.mock('../components/GetShow');

test('The component renders correctly', async () => {
  render(<App/>);
  const showHeading = await screen.findByRole('heading', {name: /_/ig})
  expect(showHeading).toBeInTheDocument();

  const buttons = screen.getAllByRole('button', {name: /[a-z]/i});
  expect(buttons).toHaveLength(26);
})

test('Pressing a key works as intended', async () => {
  render(<App/>);
  let showHeading = await screen.findByRole('heading', {name: /_/ig});
  let buttons = screen.getAllByRole('button', {name: /[a-z]/i});

  fireEvent.click(buttons[0]);
  showHeading = await screen.findByRole('heading', {name: /a/ig});
  buttons = screen.getAllByRole('button', {name: /[a-z]/i});
  
  expect(showHeading.innerHTML).toMatch(' _  _  _ a _  _  _  _   _ a _');
  expect(buttons).toHaveLength(25);
})