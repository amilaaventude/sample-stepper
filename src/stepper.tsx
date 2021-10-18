import { Button, Steps } from 'antd';
import React, { useEffect, useState } from 'react';
import Company from './SupplierDetails';

const { Step } = Steps;

const StepperModule = (props: any) => {

    const [activeStep, setstate] = useState(0);
    const [disableNext, setNextState] = useState('');


    const onChange = (current: any) => {
        if (current == activeStep + 1 || current < activeStep) {
            console.log('onChange:', current);
            setstate(current);
            setNextState('enable')
        }

        if (current == 0 || current > props.steps.length) {
            setNextState('')
        }
    };




    // const { current } = activeStep;
    const next = () => {
        if (activeStep < props.steps.length) {

           

            const step: number = activeStep + 1;

            setstate(step);
        } else {
            console.log("gg");
            console.log(activeStep);
            console.log(props.steps.length);
            const step: number = activeStep - 1;
            setstate(step);
        }
    }
    const prev = () => {
        const step: number = activeStep - 1;
        setstate(step);
    }



    return (
        <>
            {/* <Steps current={current} onChange={onChange} >
                <Step title="Step 1"  tailContent description="This is a description." onStepClick={onStepClick}>
              
               </Step>   
                <Step title="Step 2" description="This is a description." />
                <Step title="Step 3" description="This is a description." />
                <Step title="Step 4" description="This is a description." />
                <Step title="Step 5" description="This is a description." />
                <Step title="Step 6" description="This is a description." />
                <Step title="Step 7" description="This is a description." />
                <Step title="Step 8" description="This is a description." />
                <Step title="Step 9" description="This is a description." />
                <Step title="Step 10" description="This is a description." />
                <Step title="Step 11" description="This is a description." />
            </Steps> */}

            {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button type="primary" onClick={prev}>Back</button>
                <button type="primary" onClick={next}>Next</button>
            </div> */}

            <Steps current={activeStep} onChange={onChange} >
                {props.steps.map((item: any) => (
                    <Steps.Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content">{props.steps[activeStep].content}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }} className="steps-action">
                <Button disabled={!disableNext} color="primary" onClick={prev}>Back</Button>
                <Button color="primary" onClick={next}>Next</Button>
            </div>
        </>
    );
}

export default StepperModule


