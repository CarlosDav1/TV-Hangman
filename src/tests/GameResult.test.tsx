import React from 'react';
import { screen, render, getByRole, fireEvent } from '@testing-library/react';
import GameResult from '../components/GameResult';

test('Renders the component', () => {
    
    render(
        <GameResult 
            winOrLose={false} 
            name='Breaking Bad'
            image={{original: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg'}}
            PlayAgain={() => {}}
        />
    );

    const resultHeading = screen.getByText("You Lose");
    const showName = screen.getByText("Breaking Bad");

    expect(resultHeading).toBeInTheDocument();
    expect(showName).toBeInTheDocument();
})

test('Button works correctly', () => {
    const mockFunction = jest.fn();
    
    render(
        <GameResult 
            winOrLose={false} 
            name='Breaking Bad'
            image={{original: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg'}}
            PlayAgain={mockFunction}
        />
    );

    const playAgainButton = screen.getByRole('button', {name: 'Play Again'})
    fireEvent.click(playAgainButton);
    expect(mockFunction).toHaveBeenCalledTimes(1);
})