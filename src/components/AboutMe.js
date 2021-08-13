import React from "react";
import profilePhoto from "../assets/photo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";

import Typical from "react-typical";

const AboutMe = () => {
	return (
		<div>
			<div className="container flex px-5 rounded-lg myFont">
				<div className="mt-5 grid gap-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
					<div>
						<img
							className="rounded-lg border-4 border-black profilePhoto w-full"
							// style={{ width: "200px" }}
							src={profilePhoto}
							alt="Profile"
						/>
					</div>
					<div className="sm:mt-5 md:mt-5 lg:mt-5 xl:mt-5">
						<p className="text-center text-4xl sm:text-5xl md:text-5xl lg:text-5xl">
							Henil Shah
						</p>
						<p className="text-center text-lg sm:text-3xl md:text-3xl lg:text-3xl mt-3">
							I'm a{" "}
							<Typical
								loop={Infinity}
								wrapper="b"
								steps={[
									"developer 🖥",
									1500,
									"ux designer 🎨",
									1500,
									"open sourcer 📚",
									1500,
									"football fan ⚽️",
									1500,
									"music lover 🎧",
									1500,
									"reader 📗",
									1500,
									"gamer 🎮",
									1500,
								]}
							/>
						</p>
						<p className="text-center text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-3xl mt-3">
							A passionate and focussed developer holding 5+ years
							of developing exciting projects and googling random
							compiler issues. My goal has always been about
							delivering rich experiences along with magical
							features on the end user's palm or screen.
						</p>
					</div>
				</div>
			</div>
			<div className="container rounded-lg mt-4 px-5 myFont text-5xl text-center mb-5">
				<p className="text-2xl mt-5">Wanna Talk? Hit me up.!</p>
				<div className="grid gap-5 mt-4 grid-cols-3">
					<div>
						<a
							href="https://github.com/henilshah10"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon
								style={{ color: "#333" }}
								className="text-5xl social-icons"
								icon={faGithubSquare}
							/>
						</a>
					</div>
					<div>
						<a
							href="https://www.linkedin.com/in/henilshah106/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon
								style={{ color: "#0077b5" }}
								className="text-5xl social-icons"
								icon={faLinkedin}
							/>
						</a>
					</div>
					<div>
						<a
							href="mailto:henil.601@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon
								style={{ color: "#dd4b39" }}
								className="text-5xl social-icons"
								icon={faGoogle}
							/>
						</a>
					</div>
					<div>
						<a
							href="https://www.facebook.com/henil.shah.121"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon
								style={{ color: "#1877f2" }}
								className="text-5xl social-icons"
								icon={faFacebookSquare}
							/>
						</a>
					</div>
					<div>
						<a
							href="https://www.instagram.com/henil_106/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon
								style={{ color: "#e1306c" }}
								className="text-5xl social-icons"
								icon={faInstagramSquare}
							/>
						</a>
					</div>
					<div>
						<a
							href="//api.whatsapp.com/send?phone=17787510309&text=Hey, I saw your portfolio and thought to connect..."
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon
								style={{ color: "#25d366" }}
								className="text-5xl social-icons"
								icon={faWhatsappSquare}
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
