
import { Form, Input, PageHeader } from 'antd';
import React, { useState } from 'react';
import CompanyForm from './Company';
import BankForm from './banks';
import StepperModule from './stepper';

const CompanyModule = (props: any) => {
    const [stepForm] = Form.useForm();

    const Step1Form = () => {
        return (
            <>
                <Form.Item name="field1" label="Field1">
                    <Input />
                </Form.Item>
            </>
        );
    };

    const Step2Form = () => {
        return (
            <>
                <Form.Item name="field2" label="Field2">
                    <Input />
                </Form.Item>
            </>
        );
    };

    const onFinish = (fieldsValue: any) => {
        const formData = stepForm.getFieldsValue(true);

        // POST the data to backend and show Notification
        console.log(formData);
    };

    const steps = [
        {
            // title: "Step1",
            content: <CompanyForm />
        },
        {
            // title: "Step2",
            content: <BankForm />
        },
        {
            // title: "Step3",
            content: <Step2Form />
        },
        {
            // title: "Step4",
            content: <Step2Form />
        },
        {
            // title: "Step5",
            content: <Step2Form />
        },
        {
            // title: "Step6",
            content: <Step2Form />
        },
        {
            // title: "Step7",
            content: <Step2Form />
        },
        {
            // title: "Step8",
            content: <Step2Form />
        }, 
        {
            // title: "Step9",
            content: <Step2Form />
        },
        {
            // title: "Step8",
            content: <Step2Form />
        }, 
        {
            // title: "Step9",
            content: <Step2Form />
        }

    ];
    return (
        <PageHeader>
            <h3 className="flow-location-display">Supplier Details <span>&gt; Product Listing &gt; Send To Cargills</span></h3>
            <Form form={stepForm} onFinish={onFinish}>
                <StepperModule steps={steps} />
            </Form>
        </PageHeader>
    );
}

export default CompanyModule
