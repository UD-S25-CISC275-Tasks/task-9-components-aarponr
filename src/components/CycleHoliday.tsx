import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Define Holiday type
type Holiday =
    | "Christmas"
    | "Halloween"
    | "New Years"
    | "Thanksgiving"
    | "Fourth of July";

export function CycleHoliday(): React.JSX.Element {
    // Holiday details with emojis, dates, and names
    const holidayDetails: Record<Holiday, { emoji: string; month: number }> = {
        Christmas: { emoji: "🎁", month: 12 },
        Halloween: { emoji: "🎃", month: 10 },
        "New Years": { emoji: "🎆", month: 1 },
        Thanksgiving: { emoji: "🦃", month: 11 },
        "Fourth of July": { emoji: "🎇", month: 7 },
    };

    // Alphabetical order function
    const getNextHolidayAlphabetically = (current: Holiday): Holiday => {
        const holidays: Holiday[] = [
            "Christmas",
            "Fourth of July",
            "Halloween",
            "New Years",
            "Thanksgiving",
        ];
        const currentIndex = holidays.indexOf(current);
        return holidays[(currentIndex + 1) % holidays.length];
    };

    // Yearly order function
    const getNextHolidayByYear = (current: Holiday): Holiday => {
        const holidays: Holiday[] = [
            "New Years",
            "Fourth of July",
            "Halloween",
            "Thanksgiving",
            "Christmas",
        ];
        const currentIndex = holidays.indexOf(current);
        return holidays[(currentIndex + 1) % holidays.length];
    };

    const [currentHoliday, setCurrentHoliday] = useState<Holiday>("New Years");

    const advanceByAlphabet = () => {
        setCurrentHoliday(getNextHolidayAlphabetically(currentHoliday));
    };

    const advanceByYear = () => {
        setCurrentHoliday(getNextHolidayByYear(currentHoliday));
    };

    return (
        <div className="text-center space-y-4">
            <div className="text-2xl">
                Holiday: {holidayDetails[currentHoliday].emoji}
            </div>
            <div className="space-x-2">
                <Button onClick={advanceByAlphabet}>Advance by Alphabet</Button>
                <Button onClick={advanceByYear}>Advance by Year</Button>
            </div>
        </div>
    );
}
