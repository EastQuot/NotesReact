import React from 'react';

function Button(props) {
  return (
    <button className={props.className} onClick={props.onClick} {...props}>
      {props.children}
    </button>
  );
}




export default Button;