module.exports = {
  mode: "jit",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./app/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        gradientanim: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        gradientanim: "gradientanim 20s ease infinite",
      },
    },
    backgroundSize: {
      400: "400% 400%",
    },
  },
  plugins: [],
};
