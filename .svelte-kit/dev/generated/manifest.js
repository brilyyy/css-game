const c = [
	() => import("..\\..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\components\\error.svelte"),
	() => import("..\\..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\play\\1.svelte"),
	() => import("..\\..\\..\\src\\routes\\play\\2.svelte"),
	() => import("..\\..\\..\\src\\routes\\play\\3.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/play/1.svelte
	[/^\/play\/1\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/play/2.svelte
	[/^\/play\/2\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/play/3.svelte
	[/^\/play\/3\/?$/, [c[0], c[5]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];