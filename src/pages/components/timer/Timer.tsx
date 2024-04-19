import React, { useState, useEffect } from 'react';
import { Flex, Button, Text } from '@chakra-ui/react';

interface TimerProps {
    initialMinutes: number;
    initialSeconds: number;
    onTimerComplete: () => void;
    isBreakMode: boolean;
}

const Timer: React.FC<TimerProps> = ({
    initialMinutes,
    initialSeconds,
    onTimerComplete,
    isBreakMode
}) => {

    // State variables to track minutes, seconds, and timer status
    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(initialSeconds);
    const [isActive, setIsActive] = useState(false);


    //Effect to handle timer logic
    useEffect(() => {
        let intervalId: NodeJS.Timeout | null = null;

        if (isActive) {
            intervalId = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(intervalId!);
                        setIsActive(false);
                        onTimerComplete();

                    } else {
                        setMinutes((prev) => prev - 1);
                        setSeconds(59);
                    }
                } else {
                    setSeconds((prev) => prev - 1);
                }
            }, 1000);
        } else {
            if (isBreakMode && minutes === 0 && seconds === 0) {
                setMinutes(initialMinutes);
                setSeconds(initialSeconds);
                setIsActive(true);
            } else if (!isBreakMode && minutes === 0 && seconds === 0) {
                setMinutes(initialMinutes);
                setSeconds(initialSeconds);
            }
        }
        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [isActive, minutes, seconds, onTimerComplete, isBreakMode, initialMinutes, initialSeconds]);


    // toggle the timer between active and paused states
    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    // reset the timer to initial state
    const resetTimer = () => {
        setIsActive(false);
        setMinutes(initialMinutes);
        setSeconds(initialSeconds);
    };

    // useEffect(() => {

    // }, [isBreakMode, minutes, seconds]);


    // Render timer display and control buttons
    return (
        <Flex flexDirection="column" alignItems="center">
            <Text fontSize="4xl">
                {minutes.toString().padStart(2, '0')}:
                {seconds.toString().padStart(2, '0')}
            </Text>
            <Button onClick={toggleTimer} colorScheme={isActive ? 'red' : 'green'} m={2}>
                {isActive ? 'Pause' : 'Start'}
            </Button>
            <Button onClick={resetTimer} colorScheme="blue" m={2}>
                Reset
            </Button>
        </Flex>
    );
};

export default Timer;
