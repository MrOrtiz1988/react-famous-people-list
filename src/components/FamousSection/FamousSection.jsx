import React, { useState, useEffect } from 'react';
import './FamousSection.css';
import axios from 'axios';

function FamousSection() {
  let [famousPersonName, setPersonName] = useState('');
  let [famousPersonRole, setPersonRole] = useState('');
  let [famousPeopleArray, setPeopleArray] = useState([]);

  // TODO: on load, call the fetchPeople() function
  useEffect(()=>{
    fetchPeople();
  }, [])

  const fetchPeople = () => {
    // TODO: fetch the list of people from the server
    axios({
      method: 'GET',
      url: '/people'
    }).then((response) => {
      const thePeople = response.data;                                             
      setPeopleArray(thePeople);
    }).catch((error) => {
      console.log('whoopsie:', error);
    })
  }
  

  const addPerson = (evt) => {
    evt.preventDefault();
    console.log(`The person is ${famousPersonName} and they're famous for ${famousPersonRole}`);
    
    axios({
      method: 'POST',
      url: '/people',
      data: {
        name: famousPersonName,
        role: famousPersonRole
      }
    }).then((response) => {
      setPersonName('');
      setPersonRole('');
      fetchPeople();
    }).catch((error) => {
      console.log('whoopsie:', error);
    })
  }
    // TODO: create POST request to add this new person to the database

    // HINT: the server is expecting a person object 
    //       with a `name` and a `role` property
  

    return (
      <section className="new-person-section">
        <form onSubmit={addPerson}>
          <label htmlFor="name-input">Name:</label>
          <input id="name-input" placeholder='Person Name' onChange={e => setPersonName(e.target.value)} />
          <label htmlFor="role-input">Famous for:</label>
          <input id="role-input" placeholder='Famous for...' onChange={e => setPersonRole(e.target.value)} />
          <button type="submit">Done</button>
        </form>
        <p>
          {famousPersonName} is famous for "{famousPersonRole}".
        </p>
        <ul>
      
          {
          famousPeopleArray.map((person) => {
            return <li key={person.id}>{person.name} is famous for {person.role}</li> 
          })
          }

        </ul>
      </section>
    );

}
export default FamousSection;
