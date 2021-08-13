import React, { useEffect, useState } from "react";
import sanityClient from "../client";

const Work = () => {
	const [workData, setWorkData] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "work"]{
				position,
				company,
				role,
				place,
				startDate,
				endDate,
				responsibilities,
				companyLogo{
						asset->{
							_id,
							url
						},
						alt
					},
			}`
			)
			.then((data) => {
				setWorkData(data);
			})
			.catch(console.error());
	}, []);

	return (
		<main className="p-2 myFont">
			<section className="container mx-auto">
				<h1 className="mt-3 text-3xl flex justify-center mb-3">
					My Work
				</h1>
				<div>
					{workData &&
						workData.map((work, index) => (
							<div
								key={index}
								className="bg-black text-white rounded-xl p-4 mb-4 text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-2xl"
							>
								<div className="grid grid-col-12 gap-8 sm:grid sm:grid-col-12 sm:gap-8 md:flex md:justify-start">
									<div className="flex justify-items-center mx-5 mt-4 md:my-4 lg:my-4 xl:my-4">
										<img
											className="bg-white p-3 rounded-lg mx-auto my-work-image"
											src={work.companyLogo.asset.url}
											alt={work.position}
										/>
									</div>
									<div className="sm:mt-5 md:mt-5 lg:mt-5 xl:mt-5">
										<p>{work.position}</p>
										<p className="text-white mt-3">
											<strong className="text-gray-500">
												Company:{" "}
											</strong>
											{work.company + ", " + work.place}
										</p>
										<p className="text-white mt-3">
											<strong className="text-gray-500">
												Role:
											</strong>{" "}
											{work.role}
										</p>
										<p className="text-white mt-3">
											<strong className="text-gray-500">
												Tenure:{" "}
											</strong>
											{work.startDate +
												"-" +
												work.endDate}
										</p>
									</div>
								</div>
								<div className="xs:mx-5 sm:mx-5 md:mx-5 lg:mx-5 xl:mx-5 mt-3">
									<p className="text-white leading-relaxed">
										<strong className="text-gray-500">
											Key Responsibilities:
											<br />{" "}
										</strong>
										{" " + work.responsibilities}
									</p>
								</div>
							</div>
						))}
				</div>
			</section>
		</main>
	);
};

export default Work;
