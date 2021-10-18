import React from 'react';
import { Card } from 'antd';
import './styles.scss';

const CardElement = (props: any) : JSX.Element => {
  const { isBordered, styles, children } = props;

  return (
    <Card bordered={isBordered || false} style={styles}>
      {children}
    </Card>
  );
};

export default CardElement;
