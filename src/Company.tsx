import React from 'react';
import Form from './atoms/Form'
import FormItem from './atoms/FormItems/input'
import Buttons from './atoms/FormItems/button'
import Button from './atoms/Button'
import Selections from './atoms/FormItems/selection'
import InputNumber from './atoms/FormItems/inputNumber'
import { EmailRegex } from './constant/Regex'
import TextArea from './atoms/FormItems/textarea'
import { Divider, Space } from 'antd'
import DatePicker from './atoms/FormItems/datePicker'
import './styles.scss'



const CompanyForm = () => {

    // const next = () => {
    //     re.form.validateFields((err: any, values: any) => {
    //         if (!err) {
    //             console.log('Received values of form: ', values);
    //         }
    //         console.log('err : ', err);
    //     });
    // }


    return (
        <div className="supplierInvitation">
            <Divider orientation="left" plain>
                Company & Contact Details
            </Divider>
            <Form name="supplierInvitationForm" initialValues={false} >
                <div className="buttonsInline">
                    <FormItem
                        labelText="Supplier Email"
                        labelName="supplierEmail"
                        isRequired
                        requiredMessage="Supplier email is mandotory"
                        placeholder="Enter supplier email here"
                        regex={EmailRegex}
                        regexMessage="Enter a valid email"
                        maxLength={15}
                    />

                    <Selections
                        labelName="supplierCategory"
                        labelText="Supplier Category"
                        placeholder="Enter supplier category here"
                        message="Supplier category is mandotory"
                        isRequired
                    />

                    <Selections
                        labelName="supplierCategory"
                        labelText="Supplier Category"
                        placeholder="Enter supplier category here"
                        message="Supplier category is mandotory"
                        isRequired
                    />

                    <Selections
                        labelName="supplierCategory"
                        labelText="Supplier Category"
                        placeholder="Enter supplier category here"
                        message="Supplier category is mandotory"
                        isRequired
                    />
                </div>

                <div className="buttonsInline">
                    <FormItem
                        labelText="Supplier Email"
                        labelName="supplierEmail"
                        isRequired
                        requiredMessage="Supplier email is mandotory"
                        placeholder="Enter supplier email here"
                        regex={EmailRegex}
                        regexMessage="Enter a valid email"
                        maxLength={15}
                    />
                    <FormItem
                        labelText="Supplier Email"
                        labelName="supplierEmail"
                        isRequired
                        requiredMessage="Supplier email is mandotory"
                        placeholder="Enter supplier email here"
                        regex={EmailRegex}
                        regexMessage="Enter a valid email"
                        maxLength={15}
                    />
                    <FormItem
                        labelText="Supplier Email"
                        labelName="supplierEmail"
                        isRequired
                        requiredMessage="Supplier email is mandotory"
                        placeholder="Enter supplier email here"
                        regex={EmailRegex}
                        regexMessage="Enter a valid email"
                        maxLength={15}
                    />
                    <FormItem
                        labelText="Supplier Email"
                        labelName="supplierEmail"
                        isRequired
                        requiredMessage="Supplier email is mandotory"
                        placeholder="Enter supplier email here"
                        regex={EmailRegex}
                        regexMessage="Enter a valid email"
                        maxLength={15}
                    />
                    <FormItem
                        labelText="Supplier Email"
                        labelName="supplierEmail"
                        isRequired
                        requiredMessage="Supplier email is mandotory"
                        placeholder="Enter supplier email here"
                        regex={EmailRegex}
                        regexMessage="Enter a valid email"
                        maxLength={15}
                    />

                </div>

                <div className="buttonsInline">

                    <TextArea
                        labelText="Supplier Email"
                        labelName="supplierEmail"
                        isRequired
                        requiredMessage="Supplier email is mandotory"
                        placeholder="Enter supplier email here"
                        regex={EmailRegex}
                        regexMessage="Enter a valid email"
                        maxLength={15}
                    />

                    <Selections
                        labelName="Supplier"
                        labelText="Primary Supplier"
                        placeholder="Enter supplier category name"
                        message="Supplier category is mandotory"
                        isSearchIcon
                    />

                </div>

                <div className="buttonsInline">
                <FormItem
                        labelText="Supplier Email"
                        labelName="supplierEmail"
                        isRequired
                        requiredMessage="Supplier email is mandotory"
                        placeholder="Enter supplier email here"
                        regex={EmailRegex}
                        regexMessage="Enter a valid email"
                        maxLength={15}
                    />
                     <FormItem
                        labelText="Supplier Email"
                        labelName="supplierEmail"
                        isRequired
                        requiredMessage="Supplier email is mandotory"
                        placeholder="Enter supplier email here"
                        regex={EmailRegex}
                        regexMessage="Enter a valid email"
                        maxLength={15}
                    />
                     <FormItem
                        labelText="Supplier Email"
                        labelName="supplierEmail"
                        isRequired
                        requiredMessage="Supplier email is mandotory"
                        placeholder="Enter supplier email here"
                        regex={EmailRegex}
                        regexMessage="Enter a valid email"
                        maxLength={15}
                    />

                    <DatePicker
                        labelText="Supplier Email"
                        labelName="supplierEmail"
                        isRequired
                        requiredMessage="Supplier email is mandotory"
                        placeholder="Enter supplier email here"
                        regex={EmailRegex}
                        regexMessage="Enter a valid email"
                        maxLength={15}
                    />

                    <DatePicker
                        labelText="Supplier Email"
                        labelName="supplierEmail"
                        isRequired
                        requiredMessage="Supplier email is mandotory"
                        placeholder="Enter supplier email here"
                        regex={EmailRegex}
                        regexMessage="Enter a valid email"
                        maxLength={15}
                    />
                    
                </div>

                <Buttons>
                    <Button text="Reset" color="dark" htmlType="reset" />
                    <Button text="Send" htmlType="submit" color="primary" />
                </Buttons>

            </Form>
        </div>
    )
}

export default CompanyForm
