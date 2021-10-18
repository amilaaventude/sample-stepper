import React from 'react';

import './styles.scss';

interface ParentCompProps {
  text: any;
  uppercase?: boolean;
}

const Title = (props: ParentCompProps) => {
  const { text, uppercase } = props;

  return (
    <div className={uppercase ? 'main_title text-uppercase' : 'main_title'}>
      {text}
    </div>
  );
};

export default Title;

Title.defaultProps = {
    uppercase: false
};
