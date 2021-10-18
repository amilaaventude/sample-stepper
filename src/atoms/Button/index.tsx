/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Button } from 'antd';
import './styles.scss';

interface ParentCompProps {
  type?: any;
  size?: any;
  isLoading?: boolean;
  onClick?: (...args: any[]) => any;
  text: string;
  color?: any;
  htmlType?:any;
}

const ButtonElement: React.FC<ParentCompProps> = (props: ParentCompProps) => {
  const { color, type, size, isLoading, onClick, text, ...rest } = props;

  return (
    <Button
      type={color || 'primary'}
      size={size || 'middle'}
      loading={isLoading || false}
      onClick={onClick}
      {...rest}
    >
      {text}
    </Button>
  );
};

export default ButtonElement;

ButtonElement.defaultProps = {
  type: 'primary',
  size: 'middle',
  isLoading: false,
  color: '',
  htmlType: 'button',
  onClick:SubmitEvent.call
};
