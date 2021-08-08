export default {
	name: "project",
	title: "Project",
	type: "document",
	fields: [
		{
			name: "title",
			type: "string",
		},
		{
			name: "date",
			type: "date",
		},
		{
			name: "description",
			type: "text",
		},
		{
			name: "projectType",
			title: "Project Type",
			type: "string",
			options: {
				list: [
					{ value: "Personal", title: "Personal" },
					{ value: "College", title: "College" },
					{ value: "Work", title: "Work" },
				],
			},
		},
		{
			name: "link",
			type: "url",
		},
		{
			name: "languages",
			type: "array",
			of: [
				{
					type: "string",
				},
			],
			options: {
				layout: "tags",
			},
		},
		{
			name: "tools",
			type: "array",
			of: [
				{
					type: "string",
				},
			],
			options: {
				layout: "tags",
			},
		},
	],
};
