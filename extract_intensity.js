function extractIntensity(color) {
	return {r: (color & 0xff0000) >> 16, g:(color & 0x00ff00) >> 8, b:color & 0xff};
}
console.log(extractIntensity(0xf0407f));
