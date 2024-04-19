import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Timer from './Timer';

jest.useFakeTimers(); // Mock timers for testing

describe('Timer component', () => {
    test('renders initial time correctly', () => {
        render(<Timer initialMinutes={25} initialSeconds={0} onTimerComplete={() => { }} isBreakMode={false} />);
        const timerText = screen.getByText('25:00');
        expect(timerText).toBeInTheDocument();
    });

    test('starts timer when Start button is clicked', () => {
        render(<Timer initialMinutes={25} initialSeconds={0} onTimerComplete={() => { }} isBreakMode={false} />);
        const startButton = screen.getByText('Start');
        fireEvent.click(startButton);
        const pauseButton = screen.getByText('Pause');
        expect(pauseButton).toBeInTheDocument();
    });

    test('pauses timer when Pause button is clicked', () => {
        render(<Timer initialMinutes={25} initialSeconds={0} onTimerComplete={() => { }} isBreakMode={false} />);
        const startButton = screen.getByText('Start');
        fireEvent.click(startButton);
        const pauseButton = screen.getByText('Pause');
        fireEvent.click(pauseButton);
        const startButtonAfterPause = screen.getByText('Start');
        expect(startButtonAfterPause).toBeInTheDocument();
    });

    test('resets timer when Reset button is clicked', () => {
        render(<Timer initialMinutes={25} initialSeconds={0} onTimerComplete={() => { }} isBreakMode={false} />);
        const startButton = screen.getByText('Start');
        fireEvent.click(startButton);
        const resetButton = screen.getByText('Reset');
        fireEvent.click(resetButton);
        const startButtonAfterReset = screen.getByText('Start');
        expect(startButtonAfterReset).toBeInTheDocument();
    });

    test('countdown works correctly', () => {
        render(<Timer initialMinutes={0} initialSeconds={3} onTimerComplete={() => { }} isBreakMode={false} />);
        jest.advanceTimersByTime(3000); // Advance timers by 3 seconds
        const timerText = screen.getByText('00:03');
        expect(timerText).toBeInTheDocument();
    });
});
