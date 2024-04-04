import axios from "axios";

const axiosWithCredentials = axios.create({
  withCredentials: true,
});

const API_BASE = process.env.REACT_APP_API_BASE;

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
  const response = await axiosWithCredentials.get(
    `${API_BASE}/api/users/profile`
  );
  return response.data;
};
