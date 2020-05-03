const primary = {
  "1100": "hsl(184, 91%, 17%)",
  "1000": "hsl(185, 84%, 25%)",
  "900": "hsl(185, 81%, 29%)",
  "800": "hsl(184, 77%, 34%)",
  "600": "hsl(185, 62%, 45%)",
  "500": "hsl(185, 57%, 50%)",
  "400": "hsl(184, 65%, 59%)",
  "300": "hsl(184, 80%, 74%)",
  "200": "hsl(185, 94%, 87%)",
  "100": "hsl(186, 100%, 94%)",
};
const neutral = {
  "1000": "hsl(209, 61%, 16%)",
  "900": "hsl(211, 39%, 23%)",
  "800": "hsl(209, 34%, 30%)",
  "700": "hsl(209, 28%, 39%)",
  "600": "hsl(210, 22%, 49%)",
  "500": "hsl(209, 23%, 60%)",
  "400": "hsl(211, 27%, 70%)",
  "300": "hsl(210, 31%, 80%)",
  "200": "hsl(212, 33%, 89%)",
  "100": "hsl(210, 36%, 96%)",
};
const support = {
  "1000": "hsl(330, 79%, 20%)",
  "900": "hsl(331, 74%, 27%)",
  "800": "hsl(330, 70%, 36%)",
  "700": "hsl(330, 68%, 40%)",
  "600": "hsl(330, 63%, 47%)",
  "500": "hsl(330, 66%, 57%)",
  "400": "hsl(330, 72%, 65%)",
  "300": "hsl(330, 77%, 76%)",
  "200": "hsl(330, 87%, 85%)",
  "100": "hsl(329, 100%, 94%)",
};
const base = {
  white: "#ffffff",
  black: "#000000",
  transparent: "transparent",
};
module.exports = {
  theme: {
    extend: {
      fontSize: {
        "7xl": "5rem",
        "8xl": "6rem",
        "9xl": "7rem",
        "10xl": "8rem",
        "11xl": "9rem",
        "12xl": "10rem",
      },
    },
    fontFamily: {
      display: ["Leo Rounded Pro", "Roboto"],
      body: ["Raleway", "sans-serif"],
      subtitle: ["Reenie Beanie", "cursive"],
      logo: ["urielcuriel", "Leo Rounded Pro", "Roboto"],
    },
    colors: { primary, neutral, support, ...base },
  },
  variants: { fill: ["hover"] },
  plugins: [],
};
