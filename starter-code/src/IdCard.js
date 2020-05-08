import React from 'react';
import Greetings from "./Greetings";
import "./IdCard.css"

const IdCard = (props) => {
  console.log(props);
  return (
      <div>
        <div className="contactbox">
          <img src={props.data.picture} alt="" style={{ width: '200px' }} />
          <ul>
            <li><b>First name:</b> {props.data.firstName}</li>
            <li><b>Last name:</b> {props.data.lastName}</li>
            <li><b>Gender:</b> {props.data.gender}</li>
            <li><b>Superpower:</b> {props.data.superpower}</li>
            <li><b>Birth:</b> {props.data.birth}</li>
          </ul>
        </div>
        <Greetings lang="en"/>
        <Greetings text="This is a lot of text"/>
      </div>
  )
}

export default IdCard;
