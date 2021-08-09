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
		<main className="p-8 myFont">
			<section className="container mx-auto">
				<h1 className="text-5xl flex justify-center">My Work</h1>
				<div className="mt-5">
					{workData &&
						workData.map((work, index) => (
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
											src={work.companyLogo.asset.url}
											alt={work.position}
										/>
									</div>
									<div className="col-span-2">
										<p className="text-3xl">
											{work.position}
										</p>
										<p className="text-xl text-white mt-3">
											<strong className="text-gray-500">
												Company:{" "}
											</strong>
											{work.company + ", " + work.place}
										</p>
										<p className="text-xl text-white mt-3">
											<strong className="text-gray-500">
												Role:
											</strong>{" "}
											{work.role}
										</p>
										<p className="text-xl text-white mt-3">
											<strong className="text-gray-500">
												Tenure:{" "}
											</strong>
											{work.startDate +
												" " +
												work.endDate}
										</p>
									</div>
								</div>
								<div className="mt-4">
									<p className="text-white text-xl leading-relaxed">
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
