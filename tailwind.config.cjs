const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles");

module.exports = {
	mode: "all",
	purge: {
		content: [
			"./src/**/*.svelte",
			"./src/app.html",
		],
		options: {
			defaultExtractor: (content) => [
				// If this stops working, please open an issue at https://github.com/svelte-add/tailwindcss/issues rather than bothering Tailwind Labs about it
				...tailwindExtractor(content),
				// Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
				...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
			],
			keyframes: true,
			fontFace: true,
		},
		enabled: true
	},
	darkMode: 'class',
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
