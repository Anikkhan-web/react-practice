import React, { useState } from 'react';

const Watch = () => {
    const [steps, setStep] = useState(20)

    const increaseSteps = () => {

        const mewStpseCount = steps + 1
        setStep(mewStpseCount)
    }

    return (
        <div>
            <h2>This is smart watch</h2>
            <h3>My Current Steps : {steps}</h3>
            <button onClick={increaseSteps}>Dour........</button>
        </div>
    );
};

export default Watch;