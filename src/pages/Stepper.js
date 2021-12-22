import React, { useState } from "react";
import {
    Typography,
    TextField,
    Button,
    Stepper,
    Step,
    StepLabel,
} from '@mui/material';
import { Image } from 'react-bootstrap'
import Case from '../components/Hasil'
import Case1 from '../components/Case1'
import Case2 from '../components/Case2'

function getSteps() {
    return [
        "Order Cart",
        "Konfirmasi",
        "Order Selesai",
    ];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return (
                <Case />
            )

        case 1:
            return (
                <Case1 />
            );
        case 2:
            return (
                <Case2 />
            );
        default:
            return "unknown step";
    }
}

const LinaerStepper = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [skippedSteps, setSkippedSteps] = useState([]);
    const steps = getSteps();

    const isStepOptional = (step) => {
        return step === 1 || step === 2;
    };

    const isStepSkipped = (step) => {
        return skippedSteps.includes(step);
    };

    const handleNext = () => {
        setActiveStep(activeStep + 1);
        setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };



    return (
        <div style={{ boxshadow: "inset 3px 3px 4px rgba(0,0,0,0.4)" }}>
            <h1 style={{ textAlign: "center" }}><strong>CheckOut</strong></h1>
            <Stepper alternativeLabel activeStep={activeStep}>
                {steps.map((step, index) => {
                    const labelProps = {};
                    const stepProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography
                                variant="caption"
                                align="center"
                                style={{ display: "block" }}
                            >

                            </Typography>
                        );
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step {...stepProps} key={index}>
                            <StepLabel {...labelProps}>{step}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            {activeStep === steps.length ? (
                <Typography variant="h3" align="center" pill bg="success" style={{ fontFamilly: "sans-serif" }}>
                    <strong><i>Terima Kasih</i></strong> <br />
                    <a class="btn btn-primary" href="/">Ke Home</a>
                </Typography>
            ) : (
                <>
                    <form>{getStepContent(activeStep)}</form>
                    <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                    >
                        back
                    </Button>
                    <Button onClick={handleNext} >
                        {activeStep === steps.length - 1 ? 'Cancel' : 'Next'}
                    </Button>
                </>
            )}
        </div>
    );
};

export default LinaerStepper;