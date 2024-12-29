import React from 'react';
import { UserData } from '../service/UserService';

interface UserDetailsProps {
  person: UserData;
}

const UserDetails: React.FC<UserDetailsProps> = ({ person }) => {
  const { address } = person;

  return (
    <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
      <strong>ID:</strong> {person.id} <br />
      <strong>Name:</strong> {person.firstname} {person.lastname} <br />
      <strong>Email:</strong> {person.email} <br />
      <strong>Phone:</strong> {person.phone} <br />
      <strong>Birthday:</strong> {person.birthday} <br />
      <strong>Gender:</strong> {person.gender} <br />
      <strong>Website:</strong> <a href={person.website} target="_blank" rel="noopener noreferrer">{person.website}</a> <br />
      <strong>Street:</strong> {address.street} <br />
      <strong>Building Number:</strong> {address.buildingNumber} <br />
      <strong>City:</strong> {address.city} <br />
      <strong>Country Code:</strong> {address.country_code} <br />
      <strong>Latitude:</strong> {address.latitude} <br />
      <strong>Longitude:</strong> {address.longitude} <br />
    </div>
  );
};

export default UserDetails;