/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        c1: "#07C8F3",
        c1_20: "rgb(7, 200, 243,.2)",
        c2_20: "rgb(238, 143, 227, .2)",
        c5_20: "rgb(224, 58, 160,.2)",
        c3_5: "rgb(224, 58, 160,.05)",
        c2: "#EE8FE3",
        c3: "#070707",
        c4: "#37B4C8",
        c5: "#E03AA0",
        white10: "rgba(255,255,255,.1)",
        white02: "rgba(255,255,255,.02)",
        white05: "rgba(255,255,255,.05)",
        white2: "rgba(255,255,255,.2)",
        white5: "rgba(255,255,255,.3)",
        white6: "rgba(255,255,255,.6)",
        white8: "rgba(255,255,255,.8)",
        white20: "#1B1B1B",
        red20: "rgba(231,97,98,.2)",
        blue20: "rgba(7,200,243,.2)",
        back60: "rgba(0,0,0,.9)",
      },
    },
  },
  plugins: [],
};
