export default {
	name: "education",
	title: "Education",
	type: "document",
	fields: [
		{
			name: "title",
			type: "string",
		},
		{
			name: "degree",
			type: "string",
		},
		{
			name: "institution",
			type: "string",
		},
		{
			name: "place",
			type: "string",
		},
		{
			name: "link",
			type: "string",
		},
		{
			name: "endDate",
			type: "string",
		},
		{
			title: "Institution Logo",
			name: "institutionLogo",
			type: "image",
		},
		{
			title: "Learning Outcomes",
			name: "learningOutcomes",
			type: "string",
		},
	],
};
