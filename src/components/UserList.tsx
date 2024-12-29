import React, { useEffect, useState } from 'react';
import { fetchUserFakeData, UserData } from '../service/UserService';
import UserDetails from './UserDetails';
import SearchBar from './SearchBar/SearchBar';

const UserList: React.FC = () => {
  const [data, setData] = useState<UserData[]>([]);
  const [filteredData, setFilteredData] = useState<UserData[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedPersonId, setSelectedPersonId] = useState<number | null>(null);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchUserFakeData();
      setData(fetchedData);
      setFilteredData(fetchedData);
    };
    getData();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term) {
      setFilteredData(data.filter(person =>
        `${person.firstname} ${person.lastname}`.toLowerCase().includes(term.toLowerCase())
      ));
    } else {
      setFilteredData(data);
    }
  };

  const handleNameClick = (id: number) => {
    setSelectedPersonId(selectedPersonId === id ? null : id);
  };

  return (
    <div>
      <h2>Faker API User List</h2>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearch} />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            <div style={{ cursor: 'pointer' }} onClick={() => handleNameClick(item.id)}>
              <strong>Name:</strong> {item.firstname} {item.lastname}<br />
              <strong>Email:</strong> {item.email} <br />
            </div>
            {selectedPersonId === item.id && <UserDetails person={item} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;