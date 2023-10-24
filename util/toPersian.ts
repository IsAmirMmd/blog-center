export function toPersianDigits(n: number) {
  const farsiDigits: string[] = [
    "۰",
    "۱",
    "۲",
    "۳",
    "۴",
    "۵",
    "۶",
    "۷",
    "۸",
    "۹",
  ];
  return n.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
}
