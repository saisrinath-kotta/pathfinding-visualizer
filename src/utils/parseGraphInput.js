export function parseGraphInput(input) {

  const lines = input.trim().split("\n");

  return lines.map((line) => {

    const [source, target] = line.trim().split(" ");

    return {
      source,
      target,
    };
  });
}