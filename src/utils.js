export default function animation({ direction, delay = 0 }) {
  let directNum = direction == "left" || direction == "top" ? -1 : 1;
  let directLit = direction == "left" || direction == "right" ? "x" : "y";
  let result = {
    initial: { [directLit]: 50 * directNum, opacity: 0 },
    whileInView: { [directLit]: 0, opacity: 1 },
    viewport: { once: false },
    transition: { duration: 0.5, delay: 0.3 * delay },
  };
  return result;
}
