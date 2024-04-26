import React from "react";
import { createPopper } from "@popperjs/core";
import { Link } from "react-router-dom";

const NotificationDropdown = () => {
	// dropdown props
	const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
	const btnDropdownRef = React.createRef();
	const popoverDropdownRef = React.createRef();
	const openDropdownPopover = () => {
		createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
			placement: "bottom-start",
		});
		setDropdownPopoverShow(true);
	};
	const closeDropdownPopover = () => {
		setDropdownPopoverShow(false);
	};
	return (
		<>
			<Link
				className="text-blueGray-500 block py-1 px-3"
				to="#"
				ref={btnDropdownRef}
				onClick={(e) => {
					e.preventDefault();
					dropdownPopoverShow
						? closeDropdownPopover()
						: openDropdownPopover();
				}}
			>
				<i className="fas fa-bell"></i>
			</Link>
			<div
				ref={popoverDropdownRef}
				className={
					(dropdownPopoverShow ? "block " : "hidden ") +
					"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
				}
			>
				<Link
					to="#"
					className={
						"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
					}
					onClick={(e) => e.preventDefault()}
				>
					Action
				</Link>
				<Link
					to="#"
					className={
						"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
					}
					onClick={(e) => e.preventDefault()}
				>
					Another action
				</Link>
				<Link
					to="#"
					className={
						"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
					}
					onClick={(e) => e.preventDefault()}
				>
					Something else here
				</Link>
				<div className="h-0 my-2 border border-solid border-blueGray-100" />
				<Link
					to="#"
					className={
						"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
					}
					onClick={(e) => e.preventDefault()}
				>
					Seprated link
				</Link>
			</div>
		</>
	);
};

export default NotificationDropdown;
