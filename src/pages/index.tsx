import { Flex, Heading } from '@chakra-ui/react';
import PomodoroTimer from './components/timer/PomodoroTimer'; // Import your PomodoroTimer component
import React from 'react';

const Home = () => {
    return (
        <Flex justifyContent="center" alignItems="center" height="100vh">
            <Flex direction="column" alignItems="center">
                <Heading as="h1" size="xl" mb={4}>
                    Pomodoro Timer
                </Heading>
                <PomodoroTimer />
            </Flex>
        </Flex>
    );
};

export default Home;
