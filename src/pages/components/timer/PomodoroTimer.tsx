import React, { useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import Timer from './Timer';

const PomodoroTimer: React.FC = () => {
    const [workTime, setWorkTime] = useState(0);
    const [breakTime, setBreakTime] = useState(1);
    const [cycles, setCycles] = useState(0);
    const [isWorkTime, setIsWorkTime] = useState(true);

    const handleWorkTimerComplete = () => {
        setIsWorkTime(false);
    };

    const handleBreakTimerComplete = () => {
        setIsWorkTime(true);
        setCycles((prevCycles) => prevCycles + 1);
    };

    return (
        <Flex flexDirection="column" alignItems="center">
            <Text fontSize="2xl" fontWeight="bold" m={4}>
                {isWorkTime ? 'Work Timer' : 'Break Timer'}
            </Text>
            <Timer
                initialMinutes={isWorkTime ? workTime : breakTime}
                initialSeconds={5}
                onTimerComplete={isWorkTime ? handleWorkTimerComplete : handleBreakTimerComplete}
                isBreakMode={!isWorkTime}
            />
            <Text fontSize="lg" m={2}>
                Completed cycles: {cycles}
            </Text>
        </Flex>
    );
};

export default PomodoroTimer;
