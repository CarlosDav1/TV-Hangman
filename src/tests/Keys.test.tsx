import React from 'react';
import { render, screen, getAllByRole, fireEvent } from '@testing-library/react';
import Keys from '../components/Keys';

test('All the keys are present and the function works', () => {
    const mockFunction = jest.fn();
    render(<Keys letterSelected={mockFunction}/>);
    const component = screen.getAllByRole('button', {name: /[a-z]/i});

    expect(component).toHaveLength(26);

    fireEvent.click(component[0]);
    expect(mockFunction).toHaveBeenCalledTimes(1);
});


test('The button is removed when the function is triggered', () => {
    const mockFunction = jest.fn();
    render(<Keys letterSelected={mockFunction}/>);
    let component = screen.getAllByRole('button', {name: /[a-z]/i});
    expect(component).toHaveLength(26);

    fireEvent.click(component[0]);
    component = screen.getAllByRole('button', {name: /[a-z]/i});
    expect(component).toHaveLength(25);
})
