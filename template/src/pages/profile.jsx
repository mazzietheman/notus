import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../context/AuthContext";
import Navbar from "../components/Navbars/AuthNavbar";
import Footer from "../components/Footers/Footer";
import { useAuth } from "../context/AuthContext";

export default function ProfileForm() {
  const { getUserID } = useAuth();
  const navigate = useNavigate();
  const userID = getUserID();

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [image, setImage] = useState("");

  const getProfile = async () => {
    axios
      .get(`${baseUrl}/profile/${userID}`)
      .then((res) => {
        setName(res.data.row.name);
        setEmail(res.data.row.email);
        setAddress(res.data.row.address);
        setPosition(res.data.row.position);
        setCompany(res.data.row.company);
        setDescription(res.data.row.description);
        setPhoto(res.data.row.image);
      })
      .catch((error) => {
        alert("Network error");
        console.log("Error sending data: ", error);
      });
  };
  useEffect(() => {
    getProfile();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("userId", userID);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("address", address);
      formData.append("position", position);
      formData.append("companny", company);
      formData.append("description", description);
      formData.append("image", image);

      const response = await axios.post(`${baseUrl}/profile_save`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.result) {
        navigate("/profile");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error sending data: ", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer
events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div
              className="relative flex flex-col min-w-0 break-words bg-white w-full 
mb-6 shadow-xl rounded-lg -mt-64"
            >
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div
                    className="w-full lg:w-12/12 px-4 lg:order-1 flex 
justify-center"
                  >
                    <div className="relative">
                      <img
                        alt="..."
                        src={photo}
                        className="shadow-xl rounded-full h-auto align
middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                </div>
                <div className=" mt-24">
                  <div
                    className="flex content-center items-center justify
center h-full"
                  >
                    <div className="w-full lg:w-6/12 px-4">
                      <div
                        className="relative flex flex-col min-w-0 break
words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
                      >
                        <div className="rounded-t mb-0 px-6 py-6">
                          <div className="text-center mb-3">
                            <h6
                              className="text-blueGray-500 text-sm 
font-bold"
                            >
                              Update Profile
                            </h6>
                          </div>

                          <hr
                            className="mt-6 border-b-1 border
blueGray-300"
                          />
                        </div>

                        <div
                          className="flex-auto px-4 lg:px-10 py-10 pt
0"
                        >
                          <form onSubmit={handleSubmit}>
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text
blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Name
                              </label>
                              <input
                                type="text"
                                className="border-0 px-3 py-3 
placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none 
focus:ring w-full ease-linear transition-all duration-150"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                              />
                            </div>

                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text
blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Email
                              </label>
                              <input
                                type="email"
                                className="border-0 px-3 py-3 
placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none 
focus:ring w-full ease-linear transition-all duration-150"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>

                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text
blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Address
                              </label>
                              <input
                                type="text"
                                className="border-0 px-3 py-3 
placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none 
focus:ring w-full ease-linear transition-all duration-150"
                                placeholder="Address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                              />
                            </div>
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text
blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Position
                              </label>
                              <input
                                type="text"
                                className="border-0 px-3 py-3 
placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none 
focus:ring w-full ease-linear transition-all duration-150"
                                placeholder="Position"
                                value={position}
                                onChange={(e) => setPosition(e.target.value)}
                              />
                            </div>
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text
blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Company
                              </label>
                              <input
                                type="text"
                                className="border-0 px-3 py-3 
placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none 
focus:ring w-full ease-linear transition-all duration-150"
                                placeholder="Company"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                              />
                            </div>

                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text
blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Description
                              </label>
                              <input
                                type="text"
                                className="border-0 px-3 py-3 
placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none 
focus:ring w-full ease-linear transition-all duration-150"
                                placeholder="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                              />
                            </div>

                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text
blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Photo
                              </label>
                              <input
                                type="file"
                                accept=".png, .jpg, .jpeg"
                                className="border-0 px-3 py-3 
placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none 
focus:ring w-full ease-linear transition-all duration-150"
                                onChange={(e) => setImage(e.target.files[0])}
                              />
                            </div>

                            <div className="text-center mt-6">
                              <button
                                className="bg-blueGray-800 text
white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg 
outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                type="submit"
                                disabled={loading}
                              >
                                Update
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
