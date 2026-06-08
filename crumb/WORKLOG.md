# CRUMB worklog — coordinate concurrent edits

Multiple Claude instances edit `crumb/assets/game.js` (one big file). Before you
start, **append a line** claiming the area you're touching, and **skim recent
lines** so two instances don't edit the same function at once. Remove or mark
your line `done` when you finish. Keep edits surgical; pull --rebase before
editing and before pushing. See `../CLAUDE.md` → "Concurrency".

Format: `YYYY-MM-DD HH:MM | instance | area / functions | status`

## Log
- 2026-06-08 | instance-A | set up stable filenames (`game.js`/`game.css`) + concurrency protocol; reworked CHAR_BODY (character models) | done
- 2026-06-08 | instance-B | weapons/sprites/turrets expansion: per-shape projectile renderer (`qp`), new patterns + fire methods (`jp`), `ol`/`Up`/`Np` content, turret passives (`ll`), mobile drones (`makeTurretMesh`), config `J.level`, `Op()` | done
- (next instance: add your line here before editing)
