import React, { useState } from "react";
import { Button } from "react-bootstrap";

<<<<<<< HEAD
=======
/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
>>>>>>> origin/task-components
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
<<<<<<< HEAD
    const [leftDie, setLeftDie] = useState<number>(() => d6());
    const [rightDie, setRightDie] = useState<number>(() => {
        let initial = d6();
        while (initial === leftDie) {
            initial = d6();
        }
        return initial;
    });

    const rollLeftDie = () => {
        setLeftDie(d6());
    };

    const rollRightDie = () => {
        setRightDie(d6());
    };

    let gameMessage = "";
    if (leftDie === rightDie) {
        if (leftDie === 1) {
            gameMessage = "Lose: Snake Eyes!";
        } else {
            gameMessage = "Win: Matching Dice!";
        }
    }

    return (
        <div className="text-center space-y-4">
            <div className="space-x-4">
                <Button onClick={rollLeftDie}>Roll Left</Button>
                <Button onClick={rollRightDie}>Roll Right</Button>
            </div>
            <div className="text-xl font-bold space-x-4">
                <span data-testid="left-die">{leftDie}</span>
                <span data-testid="right-die">{rightDie}</span>
            </div>
            {gameMessage && (
                <div className="mt-4 text-lg font-semibold">{gameMessage}</div>
            )}
        </div>
    );
=======
    return <div>Two Dice</div>;
>>>>>>> origin/task-components
}
