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
			<div class="container flex rounded-lg mt-5 p-5 myFont">
				<div class="grid gap-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
					<div>
						<img
							className="rounded-lg border-4 border-black"
							src={profilePhoto}
							alt="Profile Photo"
						/>
					</div>
					<div className="text-center md:mt-5 lg:mt-5 xl:mt-5">
						<p className="text-5xl">Henil Shah</p>
						<p className="mt-5 text-xl">
							A focussed and passionate developer residing in the
							beautiful city of Vancouver, Canada.
						</p>
						<p className="mt-5 text-2xl">Wanna Talk? Hit me up.!</p>
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
			</div>
			<div className="container flex rounded-lg p-5 myFont text-5xl justify-center">
				<p>
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
			</div>
		</div>
	);
};

export default AboutMe;
