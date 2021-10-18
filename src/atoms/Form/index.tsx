import React from 'react'
import { Form, message } from 'antd';

interface ParentCompProps {
    name: string;
    initialValues: boolean;
    children: any;
}

const onFinish = (values: any) => {
    message.success('sucess', 0.30);
};

const onFinishFailed = (errorInfo: any) => {
    message.error('error', 0.30);
};

const FormElement = (props: ParentCompProps) => {
    const { name, initialValues, children } = props;

    return (
        <>
            <Form
                layout="vertical"
                name={name || "basic"}
                initialValues={{
                    remember: initialValues || true,
                }}
                autoComplete="off"
                validateTrigger="true"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                {children}
            </Form>
        </>
    )
}

export default FormElement