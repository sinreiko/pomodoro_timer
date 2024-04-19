import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PomodoroTimer from './PomodoroTimer';

describe('PomodoroTimer component', () => {

    test('renders work timer by default', () => {
        render(<PomodoroTimer />);
        const workTimerText = screen.getByText('Work Timer');
        expect(workTimerText).toBeInTheDocument();
    });

    test('starts work timer by default', () => {
        render(<PomodoroTimer />);
        const startButton = screen.getByText('Start');
        fireEvent.click(startButton);
        const pauseButton = screen.getByText('Pause');
        expect(pauseButton).toBeInTheDocument();
    });
});
