import React from 'react';

import './styles.scss';

interface ParentCompProps {
  text: any;
  uppercase?: boolean;
}

const SubTitle = (props: ParentCompProps) => {
  const { text, uppercase } = props;

  return (
    <div className={uppercase ? 'sub_title text-uppercase' : 'sub_title'}>
      {text}
    </div>
  );
};

export default SubTitle;

SubTitle.defaultProps = {
    uppercase: false
};
