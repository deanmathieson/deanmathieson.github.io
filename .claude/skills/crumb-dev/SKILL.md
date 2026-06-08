---
name: crumb-dev
description: Develop the CRUMB game (crumb/) — add/tune weapons, items, enemies, bosses, characters, stages, UI, or visuals. Use whenever editing CRUMB gameplay or art. Loads the build-from-bundle workflow and the minified-symbol map.
---

# Developing CRUMB

CRUMB (`crumb/`) is a Three.js Vampire-Survivors-style auto-battler shipped as a
**single beautified bundle** with **no source tree** (`crumb/assets/index-<hash>.js`
+ `.css`, referenced by hash from `crumb/index.html`). You edit the bundle directly.

Read `CLAUDE.md` at the repo root first — it has the full workflow, the
minified-symbol map, the debug globals (`window.CRUMB`, `CRUMB_WEAPONS`,
`CRUMB_EVOS`), and the Three.js helper aliases. Do not duplicate that here; follow it.

## Golden rules
1. Copy the deployed JS to `/tmp/crumb.pretty.js`, edit there, `node --check`,
   re-deploy under a NEW md5 hash, update `index.html`.
2. **Always verify with headless Playwright before pushing** — a single syntax
   slip blanks the whole game. Drive the run via `window.CRUMB`.
3. Push to **`master`** (Pages deploys it); keep the feature branch in sync.
4. Gameplay numbers live in config `J`; content lives in the data arrays
   (`ol/Up/Np`, `ll`, `al`, `To/CRUMB_BOSSES`, `CRUMB_CHARS`, `CRUMB_STAGES`).

## Adding content — quick recipes
- **New weapon**: append to `ol` (pick a `pattern`); optionally add an evolution
  to `Up` + recipe to `Np`.
- **New passive**: append to `ll` with a `stat` (add the stat to `Op()` and wire
  it where it applies if it's a brand-new mechanic).
- **New enemy**: append to `To` (set `tier` = unlock time, `weight` = frequency).
- **New boss**: append to `CRUMB_BOSSES` (rotates automatically; `minion` = adds).
- **New character**: append to `CRUMB_CHARS` (`mods(stats)` + starting `weapon`).
- **New stage**: append to `CRUMB_STAGES` (colours + `spawn` difficulty).

## Visual/art work (the current focus — "make it a real game")
The procedural look is the weakest part. Priorities, in order of impact:
1. **Distinct characters** — each `CRUMB_CHARS` entry should get a unique in-game
   body (the player mesh is built in `zp`; currently all 4 share one toast slab).
   Give silhouette + colour identity per character so you know who you're playing.
2. **Distinct enemy shapes** — `Wp` uses ONE octahedron for every enemy. Give the
   main types readable silhouettes (ant/roach/rat/spore/blob) so the swarm reads.
3. **Stage identity** — `CRUMB_STAGES` + `Rp()`/lighting; biomes should feel
   different beyond a colour swap (props, grid style, hazards/layout).
4. **The floating-player-behind-menus glitch** — the 3D scene shows through the
   translucent overlays; hide the scene behind menus or make it a deliberate backdrop.
5. **Juice & audio** — hit/level-up/boss SFX, screen shake, more feedback.

Note: it's ONE bundle file, so parallel agents editing it collide. Do visual work
as focused, sequential, tested batches; use subagents for design specs/research
(read-only) rather than concurrent edits.
