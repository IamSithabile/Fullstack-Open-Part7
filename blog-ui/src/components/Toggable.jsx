import React, { useState, forwardRef, useImperativeHandle } from 'react';

import PropTypes from 'prop-types';

const Toggable = forwardRef((props, refs) => {
  const [visible, setVisible] = useState('');

  const showWhenVisible = visible ? '' : 'none';
  const hideWhenVisible = visible ? 'none' : '';

  const { label } = props;

  const toggleVisible = () => {
    setVisible(!visible);
  };

  useImperativeHandle(refs, () => {
    return { toggleVisible };
  });

  return (
    <>
      <div style={{ display: hideWhenVisible }}>
        <button
          className="focus:shadow-outline rounded-full  bg-blue-500 py-3 px-6 font-bold text-white hover:bg-blue-700 focus:outline-none"
          onClick={() => {
            setVisible(true);
          }}
        >
          {label}
        </button>
      </div>
      <div style={{ display: showWhenVisible }}>
        {props.children}
        <br />
        <button
          className="focus:shadow-outline rounded-full  bg-red-500 py-3 px-6 font-bold text-white hover:bg-red-700 focus:outline-none"
          onClick={() => {
            setVisible(false);
          }}
        >
          Close
        </button>
      </div>
    </>
  );
});

Toggable.propTypes = {
  label: PropTypes.string.isRequired,
};

Toggable.displayName = Toggable;

export default Toggable;
