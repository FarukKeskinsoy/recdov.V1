// src/components/MonthSelector.tsx
import React, { useEffect, useState } from 'react';

interface MonthSelectorProps {
  onSelect: (selectedMonth: { month: number; year: number }) => void;
}

const MonthSelector: React.FC<MonthSelectorProps> = ({ onSelect }) => {
  const [months, setMonths] = useState<{ month: number; year: number }[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<{ month: number; year: number }>({ month: 1, year: 2023 });

  useEffect(() => {
    // Get the current date
    const currentDate = new Date();

    // Get the current month (0-indexed, so we add 1)
    const currentMonth = currentDate.getMonth() + 1;

    // Calculate the starting month considering wrap-around to the end of the year
    const startingMonth = currentMonth > 6 ? currentMonth - 6 : currentMonth + (12 - 6);

    // Generate the list of months with year information
    const remainingMonths = Array.from({ length: 7 }, (_, index) => {
      const month = (startingMonth + index - 1) % 12 + 1;
      const year = currentDate.getFullYear() - (startingMonth + index - 1 <= 0 ? 1 : 0);
      return { month, year };
    }).reverse();

    // Update state
    setMonths(remainingMonths);
    setSelectedMonth({ month: currentMonth, year: currentDate.getFullYear() });
  }, []);

  const getMonthName = (monthIndex: number): string => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    return monthNames[monthIndex - 1];
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const [selectedYear, selectedMonth] = event.target.value.split('-').map(Number);
    setSelectedMonth({ month: selectedMonth, year: selectedYear });
    onSelect({ month: selectedMonth, year: selectedYear });
  };

  return (
    <div>
      <label htmlFor="monthSelect">Select a month:</label>
      <select
        id="monthSelect"
        value={`${selectedMonth.year}-${selectedMonth.month}`}
        onChange={handleMonthChange}
      >
        {months.map((entry, index) => (
          <option key={index} value={`${entry.year}-${entry.month}`}>
            {getMonthName(entry.month)} {entry.year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MonthSelector;
