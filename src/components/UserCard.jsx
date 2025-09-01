import React from "react";

const UserCard = (props) => {
    console.log(props.data);
  return (
    <div className="user-card">
        <img className='user-image' src={props.data.picture.large} alt="User" />
        <h3>{props.data.name.first} {props.data.name.last}</h3>
        <p>{props.data.email}</p>
        <p>{props.data.phone}</p>
        <p>{props.data.location.city}, {props.data.location.state}, {props.data.location.country}</p>
    </div>
  );
};

export default UserCard;
