import React, { useState } from 'react';
import { Box, Text, Flex, IconButton, Input } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, parse } from 'date-fns';
import { ru } from 'date-fns/locale';

interface Schedule {
  [date: string]: string[];
}

const Calendar: React.FC = () => {
    const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [schedule, setSchedule] = useState<Schedule>({});

    const renderHeader = (): JSX.Element => {
        const dateFormat: string = "LLLL yyyy";

        return (
            <Flex justify="start" align="center" mb={4}>
                <IconButton
                    icon={<ChevronLeftIcon />}
                    onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                    aria-label="Предыдущий месяц"
                />
                <Text fontSize="xl">{format(currentMonth, dateFormat, { locale: ru })}</Text>
                <IconButton
                    icon={<ChevronRightIcon />}
                    onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                    aria-label="Следующий месяц"
                />
            </Flex>
        );
    };

    const renderDays = (): JSX.Element => {
        const days: JSX.Element[] = [];
        const dateFormat: string = "eeeeee";
        const startDate: Date = startOfWeek(currentMonth, { locale: ru });

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
        const startDate: Date = startOfWeek(monthStart);
        const endDate: Date = endOfWeek(monthEnd);

        const dateFormat: string = "d";
        const rows: JSX.Element[] = [];

        let days: JSX.Element[] = [];
        let day: Date = startDate;
        let formattedDate: string = "";

        for (let i = 1; i < 35; i++) { 
            formattedDate = format(day, dateFormat);
            const cloneDay: Date = day;
            days.push(
                <Box
                    flex="1"
                    textAlign="center"
                    p={2}
                    borderWidth="1px"
                    borderColor="gray.200"
                    bg={!isSameMonth(day, monthStart)
                        ? "gray.100"
                        : isSameDay(day, selectedDate) ? "blue.300" : "white"}
                    color={!isSameMonth(day, monthStart)
                        ? "gray.400"
                        : isSameDay(day, selectedDate) ? "white" : "black"}
                    onClick={() => setSelectedDate(parse(cloneDay))}
                    key={day.getTime()}
                    cursor="pointer"
                >
                    <Text>{formattedDate}</Text>
                    <Input
                        type="text"
                        value={schedule[format(day, "yyyy-MM-dd")]?.join(", ") || ''}
                        onChange={(e) => handleScheduleChange(day, e.target.value)}
                    />
                </Box>
            );
            if (i > 0 && (i + 1) % 7 === 0) { 
                rows.push(
                    <Flex key={day.getTime()}>
                        {days}
                    </Flex>
                );
                days = [];
            }
            day = addDays(day, 1);
        }

        return <Box>{rows}</Box>;
    };

    const handleScheduleChange = (date: Date, value: string): void => {
        const formattedDate: string = format(date, "yyyy-MM-dd");
        setSchedule(prevSchedule => ({
            ...prevSchedule,
            [formattedDate]: value.split(",").map(task => task.trim())
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
