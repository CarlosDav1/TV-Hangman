import React, { useState, useEffect } from 'react';
import { getByTestId, getByText, render, screen, waitFor } from '@testing-library/react';
import Hangman from './components/Hangman';
import GetShow from './components/GetShow';

jest.mock("./components/GetShow");

test('Lives are properly displayed', () => {
  render(<Hangman lives={3}/>);
  const lives = screen.getByText("3", {exact: false})
  expect(lives).toBeInTheDocument();
});