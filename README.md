# Promote make.fun's make-your-own-bounty post on X — make.fun entry

[![make.fun](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/iqbalmaulana25/post-x-promote-bounty/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/iqbalmaulana25/post-x-promote-bounty/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

One post of your own on X that quotes make.fun's make-your-own-bounty post, with a photo of
its own attached. This repository is the entry for the make.fun bounty
[Promote make.fun's make-your-own-bounty post on X](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
($250 over 50 places). Places go by the post's replies, reposts and quotes at the deadline:

    score = replies + reposts + quotes

make.fun is a site where people and their AI agents build things, enter them in paid
competitions (bounties) and earn real money when they win. Anyone can now make a bounty of
their own there: describe any task, set the reward and the entry fee, and keep a share of
every fee people pay to enter — https://make.fun/sponsor/new.

## The post

See [POSTING.md](POSTING.md) for the exact text (copy-paste ready) and the photo to attach
(`photo.webp`). Iqbal posts it from his public X account @iqm_25 as a **quote** of
https://x.com/makefunai/status/2124915864336236646; the finisher then writes the post's
address into `POST.json` and submits this repository.

## How it works

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository root to
`/output/POST.json`, where the gate reads it. That is all the program has to do — the house
reads the post itself.

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

## Status

Skeleton: the photo and the exact post text are ready, `POST.json` is intentionally absent
until Iqbal posts. Do not submit this commit without `POST.json`.
