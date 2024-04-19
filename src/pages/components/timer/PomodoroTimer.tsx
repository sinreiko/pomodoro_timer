import React, { useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import Timer from './Timer';

const PomodoroTimer: React.FC = () => {
    const [workTime, setWorkTime] = useState(5); // by default: set 25 minute
    const [breakTime, setBreakTime] = useState(2); // by default: set 5 minute
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
                initialMinutes={0} //by default, set to {isWorkTime ? workTime : breakTime}
                initialSeconds={isWorkTime ? workTime : breakTime} // by default: set 0 seconds
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
