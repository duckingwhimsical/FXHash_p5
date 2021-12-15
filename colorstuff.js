function colorStuff() {
    colorMode(HSB);

  const baseColor           = color(random(0, 255), 255, 255);
  const analogous1          = color((hue(baseColor) + 330) % 360, saturation(baseColor), brightness(baseColor));
  const analogous3          = color((hue(baseColor) +  30) % 360, saturation(baseColor), brightness(baseColor));
  const complementary       = color((hue(baseColor) + 180) % 360, saturation(baseColor), brightness(baseColor));
  const splitComplementary2 = color((hue(baseColor) + 150) % 360, saturation(baseColor), brightness(baseColor));
  const splitComplementary3 = color((hue(baseColor) + 210) % 360, saturation(baseColor), brightness(baseColor));
  const triadic2            = color((hue(baseColor) + 120) % 360, saturation(baseColor), brightness(baseColor));
  const triadic3            = color((hue(baseColor) + 240) % 360, saturation(baseColor), brightness(baseColor));
  const tetradic2           = color((hue(baseColor) +  60) % 360, saturation(baseColor), brightness(baseColor));
  const square2             = color((hue(baseColor) +  90) % 360, saturation(baseColor), brightness(baseColor));
  const square4             = color((hue(baseColor) + 270) % 360, saturation(baseColor), brightness(baseColor));
  const shades = [];
  const tints  = [];
  const tones  = [];
  for (let i = 0; i < 15; i++) {
    shades.push(color(hue(baseColor), saturation(baseColor), map(i, 0, 14, brightness(baseColor), 0)));
  }
  for (let i = 0; i < 15; i++) {
    tints.push(color(hue(baseColor), map(i, 0, 14, saturation(baseColor), 0), map(i, 0, 14, brightness(baseColor), 100)));
  }
  for (let i = 0; i < 15; i++) {
    tones.push(color(hue(baseColor), map(i, 0, 14, saturation(baseColor), 0), brightness(baseColor)));
  }
}

function getComplementary(baseColor)
{
    return color((hue(baseColor) + 180) % 360, saturation(baseColor), brightness(baseColor));
}

function getAnalogous(baseColor)
{
    return color((hue(baseColor) + 330) % 360, saturation(baseColor), brightness(baseColor));
}
function colorName(hsl) {
    var l = Math.floor(hsl[2]), s = Math.floor(hsl[1]), h = Math.floor(hsl[0]);
    if (s <= 10 && l >= 90) {
        return ("White")
    } else if (l <= 15) {
        return ("Black")
    } else if ((s <= 10 && l <= 70) || s === 0) {
        return ("Gray")
    } else if ((h >= 0 && h <= 15) || h >= 346) {
        return ("Red");
    } else if (h >= 16 && h <= 35) {
        if (s < 90) {
            return ("Brown");
        } else {
            return ("Orange");
        }
    } else if (h >= 36 && h <= 54) {
        if (s < 90) {
            return ("Brown");
        } else {
            return ("Yellow");
        }
    } else if (h >= 55 && h <= 165) {
        return ("Green");
    } else if (h >= 166 && h <= 260) {
        return ("Blue")
    } else if (h >= 261 && h <= 290) {
        return ("Purple")
    } else if (h >= 291 && h <= 345) {
        return ("Pink")
    }
}