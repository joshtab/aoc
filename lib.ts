export function parseInts(strings: string[], base?: number): number[] {
  return strings.map((str, i) => {
    const parsed = parseInt(str, base)
    if (isNaN(parsed)) { throw `Invalid string ${str} at index ${i}`}
    return parsed
  })
}

export function intToBinary(int: number): string {
  const binary: string[] = []

  while (int > 0) {
    binary.unshift((int % 2).toString())
    int = Math.floor(int / 2)
  }

  return binary.join('')
}

export function intersect<T>(a: T[], b: T[]): T[] {
  var t;
  if (b.length > a.length) t = b, b = a, a = t; // indexOf to loop over shorter
  return a.filter(function (e) {
    return b.indexOf(e) > -1
  }).filter(function (e, i, c) { // extra step to remove duplicates
    return c.indexOf(e) === i
  })
}
