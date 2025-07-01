import type { AstroInstance } from 'astro';

export interface SocialLink {
	name: string;
	url: string;
	icon: AstroInstance;
}

export default {
	title: 'Payton and Grant Wedding Photos',
	favicon: 'favicon.ico',
	owner: 'Grant Montgomery',
};
