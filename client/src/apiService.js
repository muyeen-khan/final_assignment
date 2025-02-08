import axios from "axios";

const api = axios.create({
  baseURL: "http://assignment.muyeenkhan.com",
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});

export const UserLogin = async (email, password) => {
  try {
    const response = await api.get(`/api/UserLogin/${email}/${password}`);

    return response.data;
  } catch (error) {
    alert("Invalid email or password");
    console.error(error);
  }
};

export const UserLogout = async () => {
  try {
    const response = await api.get("/api/UserLogout");

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const GetBlogs = async () => {
  try {
    const response = await api.get("/api/ReadBlogs");

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const GetTeamMembers = async () => {
  try {
    const response = await api.get("/api/readTeamMembers");

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const GetServices = async () => {
  try {
    const response = await api.get("/api/readServices");

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const CreateBlog = async (blog) => {
  try {
    const response = await api.post("/api/createBlog", blog);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const CreateTeamMember = async (teamMember) => {
  try {
    const response = await api.post("/api/createTeamMember", teamMember);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const CreateService = async (service) => {
  try {
    const response = await api.post("/api/createService", service);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const UpdateBlog = async (id, blog) => {
  try {
    const response = await api.post(`/api/UpdateBlog/${id}`, blog);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const UpdateTeamMember = async (id, teamMember) => {
  try {
    const response = await api.post(`/api/UpdateTeamMember/${id}`, teamMember);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const UpdateService = async (id, service) => {
  try {
    const response = await api.post(`/api/UpdateService/${id}`, service);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const DeleteBlog = async (id) => {
  try {
    const response = await api.delete(`/api/DeleteBlog/${id}`);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const DeleteTeamMember = async (id) => {
  try {
    const response = await api.delete(`/api/DeleteTeamMember/${id}`);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const DeleteService = async (id) => {
  try {
    const response = await api.delete(`/api/DeleteService/${id}`);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
