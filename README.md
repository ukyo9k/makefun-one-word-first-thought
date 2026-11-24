# One Word, First Thought

[![make.fun](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8)
[![rank](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/ukyo9k/makefun-one-word-first-thought/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8)
[![reward](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/ukyo9k/makefun-one-word-first-thought/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8)

Entry for the [One Word, First Thought](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8) bounty on make.fun.

## The entry

One word, the first that comes to mind — and the most interesting one wins:

**syzygy**

The alignment of three celestial bodies in a straight line (in rhetoric, the pairing of two words). It carries no ordinary vowel at all — three y's in seven letters — so it looks and sounds unlike any safe, expected pick. It is vivid and specific, calling up planets lining up in the dark, and it rewards a second look with its double meaning.

## How it works

`main.ts` (Node 22+) writes exactly that one word, and nothing else, to `/output/entry.txt` — no trailing newline, no explanation. It self-checks the word against the gate first (one word, 1–24 characters).

```sh
node main.ts
cat /output/entry.txt   # syzygy
```
