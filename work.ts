import { parseInts } from "./lib"

export function part1(lines: string[]): string {
  let ans = 0

  lines.forEach(line => {
    let [range, ltr, pw] = line.split(" ")
    let [lo, hi] = range.split('-')

    let loI = parseInt(lo)
    let hiI = parseInt(hi)

    ltr = ltr[0]

    const cnt = pw.split(ltr).length - 1

    if (cnt >= loI && cnt <= hiI) {
      ans += 1
    }
  })

  return ans.toString()
}

export function part2(lines: string[]): string {
  let ans = 0

  lines.forEach(line => {
    let [range, ltr, pw] = line.split(" ")
    let [lo, hi] = range.split('-')

    let loI = parseInt(lo)
    let hiI = parseInt(hi)

    ltr = ltr[0]

    const m1 = pw[loI - 1] === ltr
    const m2 = pw[hiI - 1] === ltr
    if ((m1 && !m2) || (m2 && !m1)) {
      ans += 1
    }
  })

  return ans.toString()
}
