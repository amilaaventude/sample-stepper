import React, { useEffect } from 'react';
import { Form, InputNumber } from 'antd';
import './styles.scss'

interface ParentCompProps {
    labelName: string;
    isRequired?: boolean;
    requiredMessage?: string;
    labelText: string;
    placeholder?: string;
    regexMessage?: string;
    regex?: any;
    maxLength: number;
    minValue: string;
    maxValue?: string;
    defaultValue: number;
}

const FormItemElement = (props: ParentCompProps) => {
    const {labelName,labelText, isRequired, regex, regexMessage, requiredMessage, placeholder, minValue, maxValue, defaultValue, maxLength} = props;
    const [inputValue, setValue] = React.useState<string | number>(defaultValue);

    useEffect(() => {
        setValue(inputValue);
    });

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    };

    return (
        <>
            <Form.Item
                label={labelText}
                name={labelName}
                rules={[
                    {
                        pattern: RegExp(regex),
                        message: regexMessage,
                    },
                    {
                        required: isRequired ,
                        message: requiredMessage,
                    },
                ]}
            >

                <InputNumber
                    placeholder={placeholder}
                    min={minValue}
                    max={maxValue}
                    maxLength={maxLength}
                    value={inputValue}
                    onKeyPress={e => { handleKeyPress(e) }}
                />

            </Form.Item>
        </>
    )
}

FormItemElement.defaultProps = {
    isRequired: false,
    placeholder: "",
    regex: " ",
    regexMessage:"",
    requiredMessage:" ",
    maxValue:0
};

export default FormItemElement





