const colorTranslator = (color) => {
  switch (color) {
    case "red":
      return "#cf000f";

    case "blue":
      return "#22a7f0";

    case "pink":
      return "#d2527f";

    case "yellow":
      return "#eeee00";

    case "purple":
      return "#663399";

    case "green":
      return "#019875";

    case "white":
      return "#e8ecf1";

    case "black":
      return "#2e3131";

    case "validRed":
      return "#96281b";

    default:
      return "#bdc3c7";
  }
};

export default colorTranslator;
