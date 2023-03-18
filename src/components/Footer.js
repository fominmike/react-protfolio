import React from "react";
// import Github from "../img/github.png";
// import LinkedIn from "../img/linkedin.png";
// const styles = {
//   icons: {
//     borderRadius: '25%',
//     filter: 'opacity(100%)',
//     margin: '5px',
//   },
// };

function Footer() {
  return (
    <footer className="text-center">
      <div className="container p-4">
        <section className="mb-4">
          
        <a href="https://www.linkedin.com/in/michael-fomin-73531224a?trk=people-guest_people_search-card" target="blank">
          {/* <img style={styles.icons} src={LinkedIn} alt="linkedinicon" /> */}
          </a>
          <a href="https://github.com/fominmike" target="blank">
            {/* <img style={styles.icons} src={Github} alt="githubicon" /> */}
          </a>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
