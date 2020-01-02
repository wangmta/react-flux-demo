import React from 'react';
class AboutPage extends React.Component {
  // JSX can only have one top level element, so in this case it needs a wrapper div
  // or use React.Fragment, the fragement is not rendered on screen
  render() {
    return (
      <div>
        <h2>About</h2>
        <p>This App uses React.</p>
      </div>
    );
  }
}

export default AboutPage;

{
  /* <React.Fragment>
        <h2>About</h2>
        <p>This App uses React.</p>
      </React.Fragment>
      // same as above
      <>
        <h2>About</h2>
        <p>This App uses React.</p>
      </> */
}
