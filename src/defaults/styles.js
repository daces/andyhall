const hexToRGBA = (hex, opacity) => {
	return `rgba(${
		hex
			.match(/\w\w/g)
			.map((seg) => {
				return parseInt(seg, 16) + ',';
			})
			.join('') + opacity
	})`;
};

const palette = {
	base: '#eeeeee',
	white: '#ffffff',
	black700: '#262626',
	black: '#000000',
	gray100: '#f5f5f5',
	gray200: '#ece8ef',
	gray300: '#dbd5e0',
	gray400: '#bdb5c3',
	gray500: '#978e9e',
	gray600: '#776d7f',
	gray700: '#685d71',
	gray800: '#463652',
	gray900: '#1e0d2b',

	green100: '#f1f8e9',
	green200: '#c5e1a5',
	green300: '#aed581',
	green400: '#9ccc65',
	green500: '#8bc34a',
	green600: '#7cb342',
	green700: '#689f38',
	green800: '#009900',
	green900: '#33691e',
	red100: '#ffe9e9',
	red200: '#fec3c3',
	red300: '#f99e9e',
	red400: '#f36f6f',
	red500: '#f65858',
	red600: '#f63131',
	red700: '#e02121',
	red800: '#b81111',
	red900: '#860505',
};

export const colors = {
	...palette,

	base: palette.base,

	lightest: palette.white,
	darkest: palette.black,
	primary: palette.green600,

	navigation: '#eeeeee',
	navigationLinks: palette.black700,

	button: palette.green800,
	buttonShadow: palette.green900,

	get navigationFaded() {
		return hexToRGBA(this.navigation, 0.95);
	},
};
