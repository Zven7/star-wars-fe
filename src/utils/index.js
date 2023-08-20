export function dotsFormatter(value) {
  let formattedString;
  if (typeof value === "number") {
    formattedString = value.toLocaleString("es-MX");
  } else {
    let parsedString = Number(value);
    formattedString = parsedString.toLocaleString("es-MX");
  }
  const FINAL_FORMAT = formattedString.split(",").join(".");
  return FINAL_FORMAT;
}
