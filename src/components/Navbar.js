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
			<div className="container items-center">
				<nav className="flex justify-around myFont text-gray-500">
					<NavLink
						to="/"
						exact
						className="text-center py-3 px-3 my-4 sm:my-6 md:my-6 lg:my-6 hover:text-white hover:no-underline"
						activeClassName="text-white hover:text-gray-900"
					>
						<FontAwesomeIcon
							className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl"
							icon={faUserCircle}
						/>
						<p className="sm:hidden md:block lg:block xl:block md:text-lg lg:text-2xl xl:text-2xl hidden">
							About Me
						</p>
					</NavLink>
					<NavLink
						to="/education"
						className="text-center py-3 px-3 my-4 sm:my-6 md:my-6 lg:my-6 hover:text-white hover:no-underline"
						activeClassName="text-white hover:text-gray-900"
					>
						<FontAwesomeIcon
							className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl"
							icon={faGraduationCap}
						/>
						<p className="sm:hidden md:block lg:block xl:block md:text-lg lg:text-2xl xl:text-2xl hidden">
							Education
						</p>
					</NavLink>
					<NavLink
						to="/work"
						className="text-center py-3 px-3 my-4 sm:my-6 md:my-6 lg:my-6 hover:text-white hover:no-underline"
						activeClassName="text-white hover:text-gray-900"
					>
						<FontAwesomeIcon
							className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl"
							icon={faBuilding}
						/>
						<p className="sm:hidden md:block lg:block xl:block md:text-lg lg:text-2xl xl:text-2xl hidden">
							Work
						</p>
					</NavLink>
					<NavLink
						to="/project"
						className="text-center py-3 px-3 my-4 sm:my-6 md:my-6 lg:my-6 hover:text-white hover:no-underline"
						activeClassName="text-white hover:text-gray-900"
					>
						<FontAwesomeIcon
							className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl"
							icon={faLaptopCode}
						/>
						<p className="sm:hidden md:block lg:block xl:block md:text-lg lg:text-2xl xl:text-2xl hidden">
							Projects
						</p>
					</NavLink>
					<NavLink
						to="/achievements"
						className="text-center py-3 px-3 my-4 sm:my-6 md:my-6 lg:my-6 hover:text-white hover:no-underline"
						activeClassName="text-white hover:text-gray-900"
					>
						<FontAwesomeIcon
							className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl"
							icon={faAward}
						/>
						<p className="sm:hidden md:block lg:block xl:block md:text-lg lg:text-2xl xl:text-2xl hidden">
							Achievements
						</p>
					</NavLink>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
