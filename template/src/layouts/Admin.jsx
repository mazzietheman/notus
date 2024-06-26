import React from "react";
import { Outlet } from "react-router-dom";
// components

import AdminNavbar from "../components/Navbars/AdminNavbar";
import Sidebar from "../components/Sidebar/Sidebar";
import HeaderStats from "../components/Headers/HeaderStats";
import FooterAdmin from "../components/Footers/FooterAdmin";

export default function Admin() {
	return (
		<>
			<Sidebar />
			<div className="relative md:ml-64 bg-blueGray-100">
				<AdminNavbar />
				{/* Header */}
				<HeaderStats />
				<div className="px-4 md:px-10 mx-auto w-full -m-24">
					<Outlet />
					<FooterAdmin />
				</div>
			</div>
		</>
	);
}
