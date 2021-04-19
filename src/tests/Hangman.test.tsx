import React from 'react';
import Hangman from '../components/Hangman';
import { render, screen, getByText } from '@testing-library/react';

test('Component renders lives correctly', () => {
    render(<Hangman lives={5}/>);
    const component = screen.getByText(/Lives:/ig);    
    expect(component.innerHTML).toMatch("Lives: 5");
    expect(component.innerHTML).not.toMatch(/Lives: [a-z]/ig);
})