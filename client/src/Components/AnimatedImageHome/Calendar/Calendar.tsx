import React, { useState, ChangeEvent } from 'react';
import { Box, Text, Flex, IconButton, Input, VStack } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';
import { ru } from 'date-fns/locale';

interface Schedule {
    [date: string]: string[];
}

const Calendar: React.FC = () => {
    const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [schedule, setSchedule] = useState<Schedule>({});
    const [newTask, setNewTask] = useState<string>("");

    const renderHeader = (): JSX.Element => {
        const dateFormat: string = "LLLL yyyy";

        return (
            <Flex justify="center" align="center" mb={4} mt={'50'}>
                <IconButton
                    icon={<ChevronLeftIcon />}
                    onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                    aria-label="Предыдущий месяц"
                    mr={4}
                />
                <Text fontSize="2xl">{format(currentMonth, dateFormat, { locale: ru })}</Text>
                <IconButton
                    icon={<ChevronRightIcon />}
                    onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                    aria-label="Следующий месяц"
                    ml={4}
                />
            </Flex>
        );
    };

    const renderDays = (): JSX.Element => {
        const days: JSX.Element[] = [];
        const dateFormat: string = "eeeeee";
        const startDate: Date = startOfWeek(currentMonth, { locale: ru, weekStartsOn: 1 });

        for (let i = 0; i < 7; i++) {
            days.push(
                <Box flex="1" textAlign="center" key={i}>
                    {format(addDays(startDate, i), dateFormat, { locale: ru })}
                </Box>
            );
        }

        return <Flex>{days}</Flex>;
    };

    const renderCells = (): JSX.Element => {
        const monthStart: Date = startOfMonth(currentMonth);
        const monthEnd: Date = endOfMonth(monthStart);
        const startDate: Date = startOfWeek(monthStart, { locale: ru, weekStartsOn: 1 });
        const endDate: Date = endOfWeek(monthEnd, { locale: ru, weekStartsOn: 1 });

        const dateFormat: string = "d";
        const rows: JSX.Element[] = [];

        let days: JSX.Element[] = [];
        let day: Date = startDate;
        let formattedDate: string = "";

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = format(day, dateFormat);
                const cloneDay: Date = day;
                days.push(
                    <Box
                        flex="1"
                        textAlign="center"
                        p={4}
                        borderWidth="1px"
                        borderColor="gray.200"
                        bg={!isSameMonth(day, monthStart)
                            ? "gray.100"
                            : isSameDay(day, selectedDate) ? "blue.300" : "white"}
                        color={!isSameMonth(day, monthStart)
                            ? "gray.400"
                            : isSameDay(day, selectedDate) ? "white" : "black"}
                        onClick={() => setSelectedDate(cloneDay)}
                        key={day.getTime()}
                        cursor="pointer"
                        minH="100px"
                    >
                        <Text>{formattedDate}</Text>
                        <VStack spacing={1} mt={2}>
                            {(schedule[format(day, "yyyy-MM-dd")] || []).map((task, index) => (
                                <Text key={index} fontSize="sm">{task}</Text>
                            ))}
                            {isSameDay(day, selectedDate) && (
                                <Input
                                    type="text"
                                    value={newTask}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setNewTask(e.target.value)}
                                    onKeyDown={(e: React.KeyboardEvent) => {
                                        if (e.key === "Enter" && newTask.trim()) {
                                            handleScheduleChange(day, newTask);
                                            setNewTask("");
                                        }
                                    }}
                                    placeholder="Добавить задачу"
                                    size="sm"
                                    bg="white"
                                />
                            )}
                        </VStack>
                    </Box>
                );
                day = addDays(day, 1);
            }
            rows.push(
                <Flex key={day.getTime()} mb={2}>
                    {days}
                </Flex>
            );
            days = [];
        }

        return <Box>{rows}</Box>;
    };

    const handleScheduleChange = (date: Date, value: string): void => {
        const formattedDate: string = format(date, "yyyy-MM-dd");
        setSchedule(prevSchedule => ({
            ...prevSchedule,
            [formattedDate]: [...(prevSchedule[formattedDate] || []), value]
        }));
    };

    return (
        <Box>
            {renderHeader()}
            {renderDays()}
            {renderCells()}
        </Box>
    );
};

export default Calendar;
