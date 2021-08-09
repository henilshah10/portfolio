import React from "react";
import profilePhoto from "../assets/photo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";

import Typical from "react-typical";

const AboutMe = () => {
	return (
		<div>
			<div className="container flex rounded-lg p-5 myFont">
				<div className="mt-5 grid gap-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
					<div>
						<img
							className="rounded-lg border-4 border-black profilePhoto"
							src={profilePhoto}
							alt="Profile Photo"
						/>
					</div>
					<div className="md:mt-5 lg:mt-5 xl:mt-5">
						<p className="text-center text-5xl">Henil Shah</p>
						<p className="text-center text-3xl mt-3">
							I'm a{" "}
							<Typical
								loop={Infinity}
								wrapper="b"
								steps={[
									"developer 🖥",
									2000,
									"designer 🎨",
									2000,
									"open sourcer 📚",
									2000,
									"soccer fan ⚽️",
									2000,
									"music lover 🎧",
									2000,
									"reader 📗",
									2000,
									"gamer 🎮",
									2000,
								]}
							/>
						</p>
						<p className="mt-5 text-2xl">
							A passionate and focussed developer holding 5+ years
							of developing exciting projects and googling random
							compiler issues. My goal has always been about
							delivering rich experiences along with magical
							features on the end user's palm or screen.
						</p>
					</div>
				</div>
			</div>
			<div className="container rounded-lg mt-4 px-5 myFont text-5xl text-center">
				<p className="text-3xl">Wanna Talk? Hit me up.!</p>
				<div className="grid gap-5 mt-5 grid-cols-3">
					<div>
						<FontAwesomeIcon
							style={{ color: "#333" }}
							className="text-5xl social-icons"
							icon={faGithubSquare}
						/>
					</div>
					<div>
						<FontAwesomeIcon
							style={{ color: "#0077b5" }}
							className="text-5xl social-icons"
							icon={faLinkedin}
						/>
					</div>
					<div>
						<FontAwesomeIcon
							style={{ color: "#dd4b39" }}
							className="text-5xl social-icons"
							icon={faGooglePlusSquare}
						/>
					</div>
					<div>
						<FontAwesomeIcon
							style={{ color: "#1877f2" }}
							className="text-5xl social-icons"
							icon={faFacebookSquare}
						/>
					</div>
					<div>
						<FontAwesomeIcon
							style={{ color: "#e1306c" }}
							className="text-5xl social-icons"
							icon={faInstagramSquare}
						/>
					</div>
					<div>
						<FontAwesomeIcon
							style={{ color: "#25d366" }}
							className="text-5xl social-icons"
							icon={faWhatsappSquare}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
