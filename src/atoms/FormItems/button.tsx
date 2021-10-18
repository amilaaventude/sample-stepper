import React from 'react';
import { Form } from 'antd';
import './styles.scss';

const FormItemButtonElement = (props: any) => {
  const { children } = props;

  return (
    <div className="buttonsInline">
      <Form.Item>{children}</Form.Item>
    </div>
  );
};

export default FormItemButtonElement;