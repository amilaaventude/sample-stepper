import { Input } from 'antd';
import React from 'react';
import './styles.scss';


const InputElement = (props: any) => {
  const { placeholder} = props;
  
  const onChange = (e: { target: { value: any; }; }) => {
    if ((!(e.target.value))){
      console.log('Change:', e.target.value);
    }
  };

  return (
    <>
      <Input placeholder={placeholder} onChange={onChange}   maxLength={25} autoFocus={true||''}  />
    </>
  )
};

export default InputElement;
