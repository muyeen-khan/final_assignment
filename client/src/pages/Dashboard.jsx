import React, { useEffect, useState } from "react";
import {
  CreateBlog,
  CreateService,
  CreateTeamMember,
  DeleteBlog,
  DeleteService,
  DeleteTeamMember,
  GetBlogs,
  GetServices,
  GetTeamMembers,
  UpdateBlog,
  UpdateService,
  UpdateTeamMember,
  UserLogout,
} from "../apiService";
import Layout from "../components/Layout";
import Section from "../components/Section";

function Dashboard() {
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await GetBlogs();
        setBlogs(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };
    const fetchTeamMembers = async () => {
      try {
        const response = await GetTeamMembers();
        setTeamMembers(response.data);
      } catch (error) {
        console.error("Failed to fetch team members:", error);
      }
    };
    const fetchServices = async () => {
      try {
        const response = await GetServices();
        setServices(response.data);
      } catch (error) {
        console.error("Failed to fetch services:", error);
      }
    };
    fetchTeamMembers();
    fetchServices();
    fetchBlogs();
  }, []);

  // State for Sidebar Navigation
  const [activeSection, setActiveSection] = useState("blogs");

  // State for Blog Section
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({
    name: "",
    img: "",
    title: "",
    description: "",
  });
  const [editBlogId, setEditBlogId] = useState(null);

  // State for Team Member Section
  const [teamMembers, setTeamMembers] = useState([]);
  const [newMember, setNewMember] = useState({
    name: "",
    img: "",
    title: "",
    description: "",
  });
  const [editMemberId, setEditMemberId] = useState(null);

  // State for Service Section
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({
    name: "",
    img: "",
    title: "",
    description: "",
  });
  const [editServiceId, setEditServiceId] = useState(null);

  // Handle Form Input Changes
  const handleInputChange = (e, setState) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  // Add or Update Item
  const addItem = (state, setState, setItems) => {
    if (editBlogId || editMemberId || editServiceId) {
      // API Call to Update Item
      if (editBlogId) {
        UpdateBlog(editBlogId, JSON.stringify(state)).then((res) =>
          alert(res.message)
        );
      } else if (editMemberId) {
        UpdateTeamMember(editMemberId, JSON.stringify(state)).then((res) =>
          alert(res.message)
        );
      } else {
        UpdateService(editServiceId, JSON.stringify(state)).then((res) =>
          alert(res.message)
        );
      }

      // Update existing item
      setItems((prevItems) =>
        prevItems.map((item) =>
          item._id === (editBlogId || editMemberId || editServiceId)
            ? { ...item, ...state }
            : item
        )
      );
      setEditBlogId(null);
      setEditMemberId(null);
      setEditServiceId(null);
    } else {
      // Add new item
      const newItem = { ...state };
      setItems((prevItems) => [...prevItems, newItem]);

      // API Call to Create Item
      if (activeSection === "blogs") {
        CreateBlog(JSON.stringify(newItem)).then((res) => alert(res.message));
      } else if (activeSection === "team-members") {
        CreateTeamMember(JSON.stringify(newItem)).then((res) =>
          alert(res.message)
        );
      } else {
        CreateService(JSON.stringify(newItem)).then((res) =>
          alert(res.message)
        );
      }
    }
    setState({ name: "", img: "", title: "", description: "" });
  };

  // Delete Item
  const deleteItem = (id, setItems) => {
    // API Call to Delete Item
    if (activeSection === "blogs") {
      DeleteBlog(id).then((res) => alert(res.message));
    } else if (activeSection === "team-members") {
      DeleteTeamMember(id).then((res) => alert(res.message));
    } else {
      DeleteService(id).then((res) => alert(res.message));
    }

    setItems((prevItems) => prevItems.filter((item) => item._id !== id));
  };

  return (
    <Layout>
      {localStorage.getItem("token") ? (
        <div className="flex bg-gray-100 min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-blue-600 text-white p-4">
            <h1 className="text-xl font-bold mb-6">Admin Dashboard</h1>
            <ul>
              <li
                onClick={() => setActiveSection("blogs")}
                className={`cursor-pointer p-2 rounded ${
                  activeSection === "blogs" ? "bg-blue-800" : ""
                }`}
              >
                Blogs
              </li>
              <li
                onClick={() => setActiveSection("team-members")}
                className={`cursor-pointer p-2 rounded mt-2 ${
                  activeSection === "team-members" ? "bg-blue-800" : ""
                }`}
              >
                Team Members
              </li>
              <li
                onClick={() => setActiveSection("services")}
                className={`cursor-pointer p-2 rounded mt-2 ${
                  activeSection === "services" ? "bg-blue-800" : ""
                }`}
              >
                Services
              </li>
            </ul>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                window.location.href = "/";
                UserLogout();
              }}
              className="bg-red-500 hover:bg-red-700 text-white w-full font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
            >
              Logout
            </button>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-4">
            {/* Blogs Section */}
            {activeSection === "blogs" && (
              <Section
                title="Blogs"
                items={blogs}
                newItem={newBlog}
                setNewItem={setNewBlog}
                addItem={() => addItem(newBlog, setNewBlog, setBlogs)}
                deleteItem={(id) => deleteItem(id, setBlogs)}
                editItemId={editBlogId}
                setEditItemId={setEditBlogId}
                handleInputChange={(e) => handleInputChange(e, setNewBlog)}
              />
            )}

            {/* Team Members Section */}
            {activeSection === "team-members" && (
              <Section
                title="Team Members"
                items={teamMembers}
                newItem={newMember}
                setNewItem={setNewMember}
                addItem={() => addItem(newMember, setNewMember, setTeamMembers)}
                deleteItem={(id) => deleteItem(id, setTeamMembers)}
                editItemId={editMemberId}
                setEditItemId={setEditMemberId}
                handleInputChange={(e) => handleInputChange(e, setNewMember)}
              />
            )}

            {/* Services Section */}
            {activeSection === "services" && (
              <Section
                title="Services"
                items={services}
                newItem={newService}
                setNewItem={setNewService}
                addItem={() => addItem(newService, setNewService, setServices)}
                deleteItem={(id) => deleteItem(id, setServices)}
                editItemId={editServiceId}
                setEditItemId={setEditServiceId}
                handleInputChange={(e) => handleInputChange(e, setNewService)}
              />
            )}
          </main>
        </div>
      ) : (
        (window.location.href = "/login")
      )}
    </Layout>
  );
}

export default Dashboard;
