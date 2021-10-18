/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Form, Input } from 'antd';
import './styles.scss'
import { kMaxLength } from 'buffer';

interface ParentCompProps {
    labelName: string;
    isRequired: boolean;
    requiredMessage?: string;
    labelText: string;
    placeholder: string;
    display?: string;
    regexMessage?: string;
    regex: string;
    maxLength: number;
}

const TextAreaElement = (props: ParentCompProps) => {
    const { labelName, display, labelText, isRequired, requiredMessage, regexMessage, placeholder, regex, maxLength,...rest } = props;
    const { TextArea } = Input;
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
                        required: isRequired,
                        message: requiredMessage,
                    },
                ]}
                {...rest}
            >
              <TextArea maxLength={maxLength} rows={4} />
            </Form.Item>
        </>
    )
}

TextAreaElement.defaultProps = {
    regexMessage: "",
    display: '',
    requiredMessage: " ",
};

export default TextAreaElement