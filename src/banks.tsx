import React from 'react';
import Form from './atoms/Form'
import FormItem from './atoms/FormItems/input'
import Buttons from './atoms/FormItems/button'
import Button from './atoms/Button'
import Selections from './atoms/FormItems/selection'
import InputNumber from './atoms/FormItems/inputNumber'
import { EmailRegex } from './constant/Regex'
import TextArea from './atoms/FormItems/textarea'
import { Divider, Popconfirm, Space } from 'antd'
import DatePicker from './atoms/FormItems/datePicker'
import Table from './atoms/Table/index'
import Modal from './atoms/Modal/index'
import './styles.scss'



const CompanyForm = () => {


    return (
        <div className="supplierInvitation">
            <Divider orientation="left" plain>
                Bank Details
            </Divider>
            <Form name="supplierInvitationForm" initialValues={false} >
            <div style={{ display: 'flex', justifyContent: 'space-between' }} className="steps-action">
                <Button color="primary"  text={''}>Next</Button>
            </div>
                <Table columnsData={
                    [
                        { title: "REFERENCE NO", dataIndex: "reference", sorter: { compare: "", multiple: 2 } },
                        { title: "SUPPLIER CODE", dataIndex: "supplierCode", sorter: { compare: "", multiple: 2 } },
                        { title: "CUSTOMER CODE", dataIndex: "CustomerCode", sorter: { compare: "", multiple: 2 } },
                        { title: "COMPANY NAME", dataIndex: "companyName", sorter: { compare: "", multiple: 2 } },
                        { title: "Operation", dataIndex: "delete", sorter: { compare: "", multiple: 2 },render:true }
                    ]
                } />
            </Form>
        </div>
    )
}

export default CompanyForm
