import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../context/AuthContext";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function UserForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getUser = async () => {
    if (id != "" && id !== undefined) {
      axios
        .get(`${baseUrl}/users/row/${id}`)
        .then((res) => {
          setEmail(res.data.row.email);
        })
        .catch((error) => {
          alert("Network error");
          console.log("Error sending data: ", error);
        });
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("userId", id);
    formData.append("email", email);
    formData.append("password", password);
    axios
      .post(`${baseUrl}/users/save`, formData)
      .then(() => {
        navigate("/admin/users");
      })
      .catch((error) => {
        console.error("Error sending data: ", error);
      });
  };
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <div
            className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow
lg rounded-lg bg-blueGray-200 border-0"
          >
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className="text-blueGray-500 text-sm font-bold">
                  User Form
                </h6>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit}>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font
bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 
text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear 
transition-all duration-150"
                    placeholder="Email"
                    defaultValue={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font
bold mb-2"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 
text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear 
transition-all duration-150"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="text-left mt-6">
                  <button
                    className="bg-blueGray-800 text-white active:bg-blueGray
600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none 
focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    <i className="fa fa-floppy-disk"></i>
                    &nbsp;Save
                  </button>

                  <Link
                    to={"/admin/users/"}
                    className="bg-blueGray-600 text-white active:bg-blueGray
500 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none 
focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i className="fa fa-rotate-left"></i>
                    &nbsp;Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
