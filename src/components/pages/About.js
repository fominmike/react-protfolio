import React from 'react';
import MikeFomin from "../../img/mikefomin.png"
import "../../style/about.css"


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
    textAlign: 'center',
    color: "white",
  },
};

export default function About() {
  return (
    <div style={styles.space}>
      <h2 style={styles.h2}>About Me</h2>
      <div className='picOfMe' >
        <img style={styles.mikefomin} src={MikeFomin} alt="Michael Fomin" />
        </div>
        <br></br>
      <p style={styles.p}>
        Hello!! Im a Full Stack Web Developer.
      </p>

      <p style={styles.p}>
        more info of me to come in the futer!! be sure to check out my linkedin, github, or instagram below!
      </p>


     
    </div>
  );
}
