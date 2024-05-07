import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../context/AuthContext";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("name", name);
    axios
      .post(`${baseUrl}/users/register`, formData)
      .then((res) => {
        if (res.data.result) {
          navigate("/auth/login");
        } else {
          setError(true);
          setMessage(res.data.message);
        }
      })
      .catch((error) => {
        console.error("Error sending data: ", error);
      });
  };

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div
              className="relative flex flex-col min-w-0 break-words w-full mb-6 
shadow-lg rounded-lg bg-blueGray-200 border-0"
            >
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign up with
                  </h6>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Sign up with credentials</small>
                </div>

                {error && (
                  <div
                    className="bg-orange-100 border-l-4 border-orange-500 
text-orange-700 p-4"
                    role="alert"
                  >
                    <p className="font-bold">Failed</p>
                    <p>{message}</p>
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs 
font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 
text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear 
transition-all duration-150"
                      placeholder="Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs 
font-bold mb-2"
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
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs 
font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 
text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear 
transition-all duration-150"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div>
                    <label
                      className="inline-flex items-center cursor
pointer"
                    >
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text
blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                      />
                      <span
                        className="ml-2 text-sm font-semibold text
blueGray-600"
                      >
                        I agree with the{" "}
                        <Link
                          to="#"
                          className="text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          Privacy Policy
                        </Link>
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg
blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none 
focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                      disabled={!isChecked}
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
