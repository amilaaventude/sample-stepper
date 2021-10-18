
import React from 'react'
import { Form, Select } from 'antd';
import './styles.scss'

interface ParentCompProps {
    labelName: string;
    isRequired?: boolean;
    message?: string;
    labelText: string;
    placeholder?: string;
    display?: string;
    isSearchIcon?: boolean;
    offset?:number;
    offsetSpan?:number;
}

const FormItemSelectionElement = (props: ParentCompProps) => {
    const { Option } = Select;
    const [option, setOption] = React.useState(' ');
    const [currentOption, setCurrentOption] = React.useState(' ');
    const { labelName, isRequired, message, labelText, placeholder, display, isSearchIcon,offsetSpan,offset } = props;

    const options = [
        { key: '1', value: 'Pharma' },
        { key: '2', value: 'FCMG' },
        { key: '3', value: 'Consumables' },
        { key: '4', value: 'Distributor' },
    ];

    if (isSearchIcon) {
        return (
            <>
                <Form.Item style={{ display: display || ' ' }} name={labelName} label={labelText} rules={[{ required: isRequired || false, message: message || "" }]}>
                    <Select placeholder={placeholder} allowClear showSearch optionFilterProp="children" filterOption={(input, optionData: any) => { return optionData.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 }}>
                        {options.sort((a, b) => { return a.value.localeCompare(b.value) }).map(item => {
                            return (
                                <option key={item.key} value={item.value}>{item.value}</option>
                            );
                        })}
                        ...rest
                    </Select>
                </Form.Item>
            </>
        )
    }
    return (
        <>
            <Form.Item style={{ display: 'dispaly'  }} name={labelName} label={labelText} rules={[{ required: isRequired || false, message: message || "" }]}>
                <Select placeholder={placeholder} allowClear>
                    {options.sort((a, b) => { return a.value.localeCompare(b.value) }).map(item => {
                        return (
                            <option key={item.key} value={item.value}>{item.value}</option>
                        );
                    })}
                </Select>
            </Form.Item>
        </>
    )
}

FormItemSelectionElement.defaultProps = {
    isRequired: false,
    message: "",
    placeholder: "",
    display: "show",
    isSearchIcon: false,

};

export default FormItemSelectionElement