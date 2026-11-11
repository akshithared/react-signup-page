import React from 'react';

/**
 * Divider component with centered text (e.g. "OR")
 */
const Divider = ({ text = 'OR' }) => {
  return (
    <div className="divider-container" role="separator" aria-label={text}>
      <span className="divider-line" />
      <span className="divider-text">{text}</span>
      <span className="divider-line" />
    </div>
  );
};

export default Divider;
