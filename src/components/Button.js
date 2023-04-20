import React from 'react';

function Button(props) {
  const { text, backgroundColor, color, onClick } = props;

  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      style={{
        backgroundColor: backgroundColor || '#007bff',
        color: color || '#fff',
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default Button;