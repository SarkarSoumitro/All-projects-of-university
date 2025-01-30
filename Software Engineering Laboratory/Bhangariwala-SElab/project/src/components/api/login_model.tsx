// apiService.ts

import axios from 'axios';
import { baseUrl } from './api_config';
interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  rspnsCode: string;
  rspnsMsg: string;
  rspnData?: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    location: string;
    date: string;
    jwtToken: string;
    expires_in: string;
  };
}

export const login = async (loginData: LoginRequest): Promise<LoginResponse> => {
  try {
    const response = await axios.post(`${baseUrl}/user/Login`, loginData);
    return response.data;
  } catch (error) {
    // Handle error here
    console.error('Error occurred during login:', error);
    throw error;
  }
};
