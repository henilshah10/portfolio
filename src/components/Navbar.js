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
				<nav className="flex myFont text-gray-500 hover:text-white hover:no-underline">
					<NavLink
						to="/"
						exact
						className="text-center py-3 px-3 mr-2 my-4 sm:my-6 sm:text-3xl md:my-6 md:text-xl lg:my-6 lg:text-xl"
						activeClassName="text-white hover:text-gray-900"
					>
						<FontAwesomeIcon
							className="text-lg"
							icon={faUserCircle}
						/>
						<p className="sm:text-xl md:block lg:block hidden">
							About Me
						</p>
					</NavLink>
					<NavLink
						to="/education"
						className="text-center py-3 px-3 mr-2 my-4 sm:my-6 sm:text-3xl md:my-6 md:text-xl lg:my-6 lg:text-xl"
						activeClassName="text-white hover:text-gray-900"
					>
						<FontAwesomeIcon
							className="text-lg"
							icon={faGraduationCap}
						/>
						<p className="sm:block md:block lg:block hidden">
							Education
						</p>
					</NavLink>
					<NavLink
						to="/work"
						className="text-center py-3 px-3 mr-2 my-4 sm:my-6 sm:text-3xl md:my-6 md:text-xl lg:my-6 lg:text-xl"
						activeClassName="text-white hover:text-gray-900"
					>
						<FontAwesomeIcon
							className="text-lg"
							icon={faBuilding}
						/>
						<p className="sm:block md:block lg:block hidden">
							Work
						</p>
					</NavLink>
					<NavLink
						to="/project"
						className="text-center py-3 px-3 mr-2 my-4 sm:my-6 sm:text-3xl md:my-6 md:text-xl lg:my-6 lg:text-xl"
						activeClassName="text-white hover:text-gray-900"
					>
						<FontAwesomeIcon
							className="text-lg"
							icon={faLaptopCode}
						/>
						<p className="sm:block md:block lg:block hidden">
							Projects
						</p>
					</NavLink>
					<NavLink
						to="/achievements"
						className="text-center py-3 px-3 mr-2 my-4 sm:my-6 sm:text-3xl md:my-6 md:text-xl lg:my-6 lg:text-xl"
						activeClassName="text-white hover:text-gray-900"
					>
						<FontAwesomeIcon className="text-lg" icon={faAward} />
						<p className="sm:block md:block lg:block hidden">
							Achievements
						</p>
					</NavLink>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
