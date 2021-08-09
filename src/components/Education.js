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
				console.log(data);
			})
			.catch(console.error());
	}, []);

	return (
		<main className="p-8 myFont">
			<section className="container mx-auto">
				<h1 className="text-5xl flex justify-center">My Education</h1>
				<div className="mt-5">
					{educationData &&
						educationData.map((edu, index) => (
							<div
								key={index}
								className="relative bg-black text-white rounded-xl p-4 mt-5"
							>
								<div className="flex xs:grid xs:grid-col-12 xs:gap-8">
									<div className="mr-5">
										<img
											className="bg-white p-3 rounded-lg"
											style={{
												minWidth: "175px",
												minHeight: "175px",
												width: "175px",
												height: "175px",
											}}
											src={edu.institutionLogo.asset.url}
											alt={edu.institution}
										/>
									</div>
									<div className="col-span-2">
										<a
											className="hover:text-gray-400"
											href={edu.link}
										>
											<p className="text-3xl">
												{edu.title}
											</p>
										</a>
										<p className="text-xl text-white mt-3">
											<strong className="text-gray-500">
												Degree:
											</strong>{" "}
											{edu.degree}
										</p>
										<p className="text-xl text-white mt-3">
											<strong className="text-gray-500">
												Institution:{" "}
											</strong>
											{edu.institution + ", " + edu.place}
										</p>
										<p className="text-xl text-white mt-3">
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
