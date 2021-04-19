import React from 'react';
import { render, screen, getByRole } from '@testing-library/react';
import MysteryString from '../components/MysteryString';

test('Renders the initial string correctly', () => {
    render(<MysteryString 
        expression="[abcdefghijklmnopqrstuvwxyz]" 
        answer="Breaking Bad"
        VerifyIfWon={(response: string) => response}
    />);
    
    let hiddenShow = screen.getByRole('heading');

    expect(hiddenShow.innerHTML).toMatch(/_/i,);
    expect(hiddenShow.innerHTML).not.toMatch(/[a-z]/ig);
})

test("Shows the show's name when there are no more letters", () => {
    render(<MysteryString 
        expression="[]" 
        answer="Breaking Bad"
        VerifyIfWon={(response: string) => response}
    />);
    
    let hiddenShow = screen.getByRole('heading');

    expect(hiddenShow.innerHTML).toBe('Breaking Bad');
})