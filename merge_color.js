function mergeColor(r, g, b) {
	return (r<<16) + (g<<8) + b
}
console.log(mergeColor(12,6,3));
