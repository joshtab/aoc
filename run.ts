import * as fs from 'fs';
import { exit } from 'process';
import { part1, part2 } from './work';
const myArgs = process.argv.slice(2);

const parseFile = (fileName: string): string[] => {
  return fs.readFileSync(fileName, 'utf8').split("\n").filter(z => z.length > 0)
}

let mainFn: (lines: string[]) => string

if (myArgs[0] === '--part1') {
  mainFn = part1
} else if (myArgs[0] === '--part2') {
  mainFn = part2
} else {
  console.error("first argument must specify part")
  exit(1)
}

if (!myArgs[1]) {
  console.error("need an input file")
  exit(1)
}


let testOut: string | undefined

const out = mainFn(parseFile(myArgs[1]))

if (myArgs[2]) {
  testOut = parseFile(myArgs[2])[0]
}

if (testOut) {
  if (testOut !== out) {
    console.log("TEST FAIL\n")
    console.log(`Expected: ${testOut}`)
    console.log(`Output: ${out}`)
    exit()
  }
  console.log('TEST PASS')
  if (myArgs[3]) {
    console.log(`Answer: ${mainFn(parseFile(myArgs[3]))}`)
  }
} else {
  console.log(`Answer: ${out}`)
}
