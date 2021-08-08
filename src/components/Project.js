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
		<main className="bg-gray-200 min-h-screen p-8 myFont">
			<section className="container mx-auto">
				<h1 className="text-5xl flex justify-center">My Projects</h1>
				<section className="grid grid-cols-2 gap-8 mt-5">
					{projectData &&
						projectData.map((project, index) => (
							<article
								key={index}
								className="relative bg-black text-white rounded-xl hover:shadow-2xl p-4"
							>
								<h3 className="text-xl font-bold mb-4 bg-white rounded-lg text-black text-center p-3">
									<a
										href={project.link}
										alt={project.title}
										target="_blank"
										rel="noopener noreferrer"
									>
										{project.title}
									</a>
								</h3>
								<div className="space-x-4">
									<div className="flex justify-around text-lg">
										<span className="text-white">
											<strong className="text-gray-500 text-xl">
												Finished On
											</strong>
											:{" "}
											{new Date(
												project.date
											).toLocaleDateString()}
										</span>
										<span className="text-white">
											<strong className="text-gray-500 text-xl">
												Type
											</strong>
											: {project.projectType}
										</span>
									</div>
									<p className="my-6 text-lg leading-relaxed">
										{project.description}
									</p>
									<div className="grid grid-cols-2 gap-8 flex justify-center">
										<div>
											<p className="text-xl text-gray-400">
												Languages Used:
											</p>
											<ul className="list-style">
												{project.languages.map(
													(language, index) => (
														<li
															className="ml-4 text-lg text-white"
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
												<p className="text-xl text-gray-400">
													Tools Used:
												</p>
												{project.tools.map(
													(tool, index) => (
														<li
															className="ml-4 text-lg text-white"
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
							</article>
						))}
				</section>
			</section>
		</main>
	);
};

export default Project;
