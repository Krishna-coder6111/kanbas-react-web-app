import axios from "axios";

const axiosWithCredentials = axios.create({
  withCredentials: true,
});

export const API_BASE = process.env.REACT_APP_API_BASE;
export const USERS_API = `${API_BASE}/api/users`;

// app.post("/api/users/register", register);
export const register = async (user: any) => {
  const response = await axiosWithCredentials.post(
    `${API_BASE}/api/users/register`,
    user
  );
  return response.data;
};

//   app.post("/api/users/login", login);
export const login = async (user: any) => {
  const response = await axiosWithCredentials.post(
    `${API_BASE}/api/users/login`,
    user
  );
  return response.data;
};
//   app.post("/api/users/logout", logout);
export const logout = async () => {
  const response = await axiosWithCredentials.post(
    `${API_BASE}/api/users/logout`
  );
  return response.data;
};
//   app.get("/api/users/profile", profile);
export const profile = async () => {
  const response = await axios.post(`${USERS_API}/profile`);
  return response.data;
};


export interface User { _id: string; username: string; password: string; role: string;
  firstName: string, lastName: string };


export const signin = async (credentials: User) => {
  const response = await axios.post( `${USERS_API}/signin`, credentials );
  return response.data;
};

export const updateUser = async (user: any) => {
  const response = await axios.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};

export const findAllUsers = async () => {
  const response = await axios.get(`${USERS_API}`);
  return response.data;
};

export const createUser = async (user: any) => {
  const response = await axios.post(`${USERS_API}`, user);
  return response.data;
};

export const deleteUser = async (user: any) => {
  const response = await axios.delete(
    `${USERS_API}/${user._id}`);
  return response.data;
};

export const findUserById = async (id: string) => {
  const response = await axios.get(`${USERS_API}/${id}`);
  return response.data;
};
export const findUsersByRole = async (role: string) => {
  const response = await
    axios.get(`${USERS_API}?role=${role}`);
  return response.data;
};

export const signup = async (user: any) => {
  const response = await axios.post(`${USERS_API}/signup`, user);
  return response.data;
};

export const signout = async () => {
  const response = await axios.post(`${USERS_API}/signout`);
  return response.data;
};

