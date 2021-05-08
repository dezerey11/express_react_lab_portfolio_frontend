import { useState, useEffect } from "react";

function About(props) {
 const [about, setAbout] = useState(null);

const getAboutData = async ( )=> {
  // make an api call and geta  response
  const response = await fetch(props.URL + "about");
  // change the response top a JS object
  const data = await response.json();
  // set the state for about to the data
  setAbout(data);
};

// make an initial call for the data in useEffect so it only happens once on the component on load
useEffect(() => getAboutData(), []);

// this function returns JSX thats needed when it gets the data
const loaded = () => (
  <div>
    <h2>{about.name}</h2>
    <h3>{about.email}</h3>
    <p>{about.bio}</p>
  </div>
);

  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;