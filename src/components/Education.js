import React, { useEffect, useState } from "react";
import sanityClient from "../client";

const Education = () => {
	const [educationData, setEducationData] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "education"]{
					title,
					degree,
					institution,
					place,
					link,
					endDate,
					institutionLogo{
						asset->{
							_id,
							url
						},
						alt
					},
					learningoutcomes,
				}`
			)
			.then((data) => {
				setEducationData(data);
			})
			.catch(console.error());
	}, []);

	return (
		<main className="p-2 myFont">
			<section className="container mx-auto">
				<h1 className="mt-3 text-3xl flex justify-center mb-3">
					My Education
				</h1>
				<div>
					{educationData &&
						educationData.map((edu, index) => (
							<div
								key={index}
								className="bg-black text-white rounded-xl p-4 mb-4 text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-2xl"
							>
								<div className="grid grid-col-12 gap-8 sm:grid sm:grid-col-12 sm:gap-8 md:flex md:justify-start">
									<div className="flex justify-items-center mx-5 mt-4 md:my-4 lg:my-4 xl:my-4">
										<img
											className="bg-white p-3 rounded-lg mx-auto my-edu-image"
											src={edu.institutionLogo.asset.url}
											alt={edu.institution}
										/>
									</div>
									<div className="sm:mt-5 md:mt-5 lg:mt-5 xl:mt-5">
										<a
											className="hover:text-gray-400"
											href={edu.link}
										>
											<p>{edu.title}</p>
										</a>
										<p className="text-white mt-3">
											<strong className="text-gray-500">
												Degree:
											</strong>{" "}
											{edu.degree}
										</p>
										<p className="text-white mt-3">
											<strong className="text-gray-500">
												Institution:{" "}
											</strong>
											{edu.institution + ", " + edu.place}
										</p>
										<p className="text-white mt-3">
											<strong className="text-gray-500">
												Graduated In:{" "}
											</strong>
											{edu.endDate}
										</p>
									</div>
								</div>
							</div>
						))}
				</div>
			</section>
		</main>
	);
};

export default Education;
