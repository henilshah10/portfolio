import React, { useEffect, useState } from "react";
import sanityClient from "../client";

const Achievements = () => {
	const [achievementData, setachievementData] = useState(null);

	const clickHandler = (e) => {
		window.open(e.target.id, "_blank");
	};

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "achievement"]{
				title,
				pursuedDate,
				institution,
				link,
			}`
			)
			.then((data) => {
				setachievementData(data);
			})
			.catch(console.error());
	}, []);

	return (
		<main className="p-8 myFont">
			<section className="container mx-auto">
				<h1 className="text-5xl flex justify-center">
					My Achievements
				</h1>
				<div className="mt-5">
					{achievementData &&
						achievementData.map((achievement, index) => (
							<div
								className="relative bg-black text-white rounded-xl p-4 mt-5"
								key={index}
							>
								<p className="text-3xl">{achievement.title}</p>
								<p className="text-xl text-white mt-3">
									<strong className="text-gray-500">
										Institution:
									</strong>{" "}
									{achievement.institution}
								</p>
								<p className="text-xl text-white mt-3">
									<strong className="text-gray-500">
										Date Completed:
									</strong>{" "}
									{achievement.pursuedDate}
								</p>
								<button
									id={achievement.link}
									onClick={clickHandler}
									type="button"
									className="bg-white text-black px-4 py-2 rounded-lg text-lg social-icons mt-5"
								>
									View Certificate
								</button>
							</div>
						))}
				</div>
			</section>
		</main>
	);
};

export default Achievements;
