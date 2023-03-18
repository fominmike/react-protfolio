import React from 'react';

const styles = {
  andreahergert: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxHeight: '200px',
    maxWidth: '200px',
    borderRadius: '25%',
    border: '3px solid #58C2C7',
    filter: 'opacity(100%)',
    cursor: 'default',
  },
  h2: {
    color: "white",
    textAlign: 'center',
  },
  space: {
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
  },
  p: {
    color: "white",
  },
};

export default function About() {
  return (
    <div style={styles.space}>
      <h2 style={styles.h2}>About Me</h2>
      {/* image */}
      <p style={styles.p}>
        ABOUT MEE COMINGGGGG SOOOOOON!!!!!!
      </p>
     
    </div>
  );
}
