import React, { useEffect, useState } from "react";
import sanityClient from "../client";

const Project = () => {
	const [projectData, setProjectData] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "project"]{
			title,
			date,
			description,
			projectType,
			link,
			languages,
			tools,
		}`
			)
			.then((data) => {
				setProjectData(data);
			})
			.catch(console.error());
	}, []);

	return (
		<main className="p-2 myFont">
			<section className="container mx-auto">
				<h1 className="mt-3 text-3xl flex justify-center mb-3">
					My Projects
				</h1>
				<div className="md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-2 lg:gap-6 xl:grid xl:grid-cols-2 xl:gap-8 text-white rounded-xl p-2 mb-4 text-lg sm:text-2xl md:text-xl lg:text-2xl xl:text-2xl">
					{projectData &&
						projectData.map((project, index) => (
							<div
								key={index}
								className="bg-black text-white rounded-xl p-4 mb-4 text-md sm:text-lg md:text-xl lg:text-2xl xl:text-2xl"
							>
								<h3 className="text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-bold mb-4 bg-white rounded-lg text-black text-center p-3">
									<a
										href={project.link}
										alt={project.title}
										target="_blank"
										rel="noopener noreferrer"
									>
										{project.title}
									</a>
								</h3>
								<div>
									<div>
										<div className="text-white">
											<strong className="text-gray-500">
												Finished On
											</strong>
											:{" "}
											{new Date(
												project.date
											).toLocaleDateString()}
										</div>
										<br />
										<div className="text-white">
											<strong className="text-gray-500">
												Type
											</strong>
											: {project.projectType}
										</div>
									</div>
									<p className="my-6 leading-relaxed">
										{project.description}
									</p>
									<div className="grid grid-cols-2 gap-8 md:flex md:justify-around lg:flex lg:justify-around xl:flex xl:justify-around">
										<div>
											<p className="text-gray-400">
												Languages Used:
											</p>
											<ul className="list-style">
												{project.languages.map(
													(language, index) => (
														<li
															className="ml-4 text-white"
															key={index}
														>
															{language}
														</li>
													)
												)}
											</ul>
										</div>
										<div>
											<ul className="list-style">
												<p className="text-gray-400">
													IDEs and Tools Used:
												</p>
												{project.tools.map(
													(tool, index) => (
														<li
															className="ml-4 text-white"
															key={index}
														>
															{tool}
														</li>
													)
												)}
											</ul>
										</div>
									</div>
								</div>
							</div>
						))}
				</div>
			</section>
		</main>
	);
};

export default Project;
