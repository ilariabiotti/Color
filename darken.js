// write a function that lowers the intensity of all channels (r,g,b) to 50%.
// The function should take a colorValue (merged color) and returns a color value.

function darken(color) {
    var r = (color & 0xff0000)>>16;
    var g = (color & 0x00ff00)>>8;
    var b = color & 0x0000ff;

    r = r >> 1;
    g = g >> 1;
    b = b >> 1;
    
    return (r<<16) + (g<<8) + b; 
}

console.log(darken(0xff00ff));

// color = 0xff00ff
// color2 = darkem(color)
// --> color2 == 0x7f007f
