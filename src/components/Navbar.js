import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	return (
		<header className="bg-black">
			<div className="container mx-auto flex justify-around">
				<nav style={{ fontSize: "18px" }} className="flex myFont">
					<NavLink
						to="/"
						exact
						className="text-center inflex-flex items-center py-3 px-3 my-6 mr-2 text-3xl text-gray-500 hover:text-white hover:no-underline"
						activeClassName="text-white hover:text-gray-900"
					>
						<FontAwesomeIcon icon={faUserCircle} />
						<p className="text-sm">About Me</p>
					</NavLink>
					<NavLink
						to="/education"
						className="text-center inflex-flex items-center py-3 px-3 my-6 mr-2 text-3xl text-gray-500 hover:text-white hover:no-underline"
						activeClassName="text-white hover:text-gray-900"
					>
						<FontAwesomeIcon icon={faGraduationCap} />
						<p className="text-sm">Education</p>
					</NavLink>
					<NavLink
						to="/work"
						className="text-center inflex-flex items-center py-3 px-3 my-6 mr-2 text-3xl text-gray-500 hover:text-white hover:no-underline"
						activeClassName="text-white hover:text-gray-900"
					>
						<FontAwesomeIcon icon={faBuilding} />
						<p className="text-sm">Work</p>
					</NavLink>
					<NavLink
						to="/project"
						className="text-center inflex-flex items-center py-3 px-3 my-6 mr-2 text-3xl text-gray-500 hover:text-white hover:no-underline"
						activeClassName="text-white hover:text-gray-900"
					>
						<FontAwesomeIcon icon={faLaptopCode} />
						<p className="text-sm">Projects</p>
					</NavLink>
					<NavLink
						to="/achievements"
						className="text-center inflex-flex items-center py-3 px-3 my-6 mr-2 text-3xl text-gray-500 hover:text-white hover:no-underline"
						activeClassName="text-white hover:text-gray-900"
					>
						<FontAwesomeIcon icon={faAward} />
						<p className="text-sm">Achievements</p>
					</NavLink>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
