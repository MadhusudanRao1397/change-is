import axios from 'axios';

export interface UserDetails {
  id: number;
  street: string;
  streetName: string;
  buildingNumber: string;
  city: string;
  zipcode: string;
  country: string;
  country_code: string;
  latitude: number;
  longitude: number;
}

export interface UserData {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  birthday: string;
  gender: string;
  address: UserDetails;
  website: string;
}

export const fetchUserFakeData = async (): Promise<UserData[]> => {
  try {
    const response = await axios.get('https://fakerapi.it/api/v1/persons?_quantity=10');
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data from Faker API", error);
    return [];
  }
};