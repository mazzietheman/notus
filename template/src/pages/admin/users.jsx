import { useState, useEffect } from "react"; 
import axios from "axios"; 
import { baseUrl } from "../../context/AuthContext"; 
 
import { Link } from "react-router-dom"; 
export default function Users() { 
    const [users, setUsers] = useState([]); 
    const [searchEmail, setSearchEmail] = useState(""); 
 
    const getUsers = () => { 
        axios 
            .get(`${baseUrl}/users/list`, { 
                params: { 
                    email: searchEmail, 
                }, 
            }) 
            .then((res) => { 
                setUsers(res.data); 
            }) 
            .catch((error) => { 
                console.error("Error sending data: ", error); 
            }); 
    }; 
 
    const deleteUser = (userId) => { 
        axios 
            .delete(`${baseUrl}/users/${userId}`, {}) 
            .then(() => { 
                getUsers(); 
            }) 
            .catch((error) => { 
                alert("Failed", "delete unsuccesfull!"); 
                console.error("Error delete data: ", error); 
            }); 
    }; 
 
    useEffect(() => { 
        getUsers(); 
    }, []); 
 
    const handleSubmit = (event) => { 
        console.log(searchEmail); 
        event.preventDefault(); 
        getUsers(); 
    }; 
 
    return ( 
        <> 
            <div className="flex flex-wrap mt-4"> 
                <div className="w-full mb-12 px-4"> 
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-0 shadow
lg rounded-lg bg-blueGray-200 border-0"> 
                        <div className="rounded-t px-6 py-2"> 
                            <div className="text-center"> 
                                <h6 className="text-blueGray-500 text-sm font-bold"> 
                                    Search Form 
                                </h6> 
                            </div> 
 
                            <hr className="mt-2 border-b-1 border-blueGray-300" /> 
                        </div> 
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0"> 
                            <form onSubmit={handleSubmit}> 
                                <div className="relative w-full "> 
                                    <label 
                                        className="block uppercase text-blueGray-600 text-xs font
bold mb-2" 
                                        htmlFor="grid-password" 
                                    > 
                                        Email 
                                    </label> 
                                    <input 
                                        type="text" 
                                        className="border-0 px-2 py-2 placeholder-blueGray-300 
text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear 
transition-all duration-150" 
                                        placeholder="Email" 
                                        defaultValue={searchEmail} 
                                        onChange={(e) => 
                                            setSearchEmail(e.target.value) 
                                        } 
                                    /> 
                                </div> 
 
                                <div className="text-left mt-3"> 
                                    <button 
                                        className="bg-blueGray-800 text-white active:bg-blueGray
600 text-sm uppercase px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr
1 mb-1 ease-linear transition-all duration-150" 
                                        type="submit" 
                                    > 
                                        <i className="fa fa-floppy-disk"></i> 
                                        &nbsp;Find 
                                    </button> 
                                </div> 
                            </form> 
                        </div> 
                    </div> 
                </div> 
            </div> 
 
            <div className="flex flex-wrap "> 
                <div className="w-full mb-12 px-4"> 
                    <div 
                        className={ 
                            "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg 
rounded bg-white" 
                        } 
                    > 
                        <div className="rounded-t mb-0 px-4 py-3 border-0"> 
                            <div className="flex flex-wrap items-center"> 
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1"> 
                                    <h3 className=" float-left font-semibold text-lg text
blueGray-700 "> 
                                        Card Tables 
                                    </h3> 
 
                                    <Link 
                                        to={"/admin/userform"} 
                                        className="bg-blueGray-50 active:bg-blueGray-50 text
blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 shadow 
hover:shadow-md inline-flex items-center  text-xs ease-linear transition-all duration-150 float
right" 
                                        type="button" 
                                    > 
                                        <i className="fa fa-plus"></i> 
                                        &nbsp;Create New User 
                                    </Link> 
                                </div> 
                            </div> 
                        </div> 
                        <div className="block w-full overflow-x-auto"> 
                            <table className="items-center w-full bg-transparent border-collapse"> 
                                <thead> 
                                    <tr> 
                                        <th 
                                            className={ 
                                                "px-6 align-middle border border-solid py-3 text
xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text
blueGray-500 border-blueGray-100" 
                                            } 
                                        > 
                                            User Name 
                                        </th> 
 
                                        <th 
                                            className={ 
                                                "px-6 align-middle border border-solid py-3 text
xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text
blueGray-500 border-blueGray-100" 
                                            } 
                                        ></th> 
                                    </tr> 
                                </thead> 
                                <tbody> 
                                    {users.map((row) => ( 
                                        <tr key={row.id}> 
                                            <th className="border-t-0 px-6 align-middle border-l-0 
border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"> 
                                                <span 
                                                    className={ 
                                                        "ml-3 font-bold text-blueGray-600" 
                                                    } 
                                                > 
                                                    {row.email} 
                                                </span> 
                                            </th> 
                                            <td className="border-t-0 px-6 align-middle border-l-0 
border-r-0 text-xs whitespace-nowrap p-4"> 
                                                <button 
                                                    className="float-right bg-blueGray-50 
active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline
none mr-2 mb-1 shadow hover:shadow-md inline-flex items-center  text-xs ease-linear transition-all 
duration-150" 
                                                    type="button" 
                                                    onClick={() => { 
                                                        deleteUser(row.id); 
                                                    }} 
                                                > 
                                                    <i className="fa fa-trash"></i> 
                                                    &nbsp;Delete 
                                                </button> 
 
                                                <Link 
                                                    to={ 
                                                        "/admin/userform/" + 
                                                        row.id 
                                                    } 
                                                    className="float-right bg-blueGray-50 
active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline
none mr-2 mb-1 shadow hover:shadow-md inline-flex items-center  text-xs ease-linear transition-all 
duration-150" 
                                                    type="button" 
                                                > 
                                                    <i className="fa fa-edit"></i> 
                                                    &nbsp;Edit 
                                                </Link> 
                                            </td> 
                                        </tr> 
                                    ))} 
                                </tbody> 
                            </table> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </> 
    ); 
}