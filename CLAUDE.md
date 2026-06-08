# deanmathieson.github.io

Personal site (custom domain **toast.house**) served by **GitHub Pages from the
`master` branch**. Mostly static pages; the active project is the game **CRUMB**
in `crumb/`.

## Deploy / git
- GitHub Pages builds from **`master`** (no Actions workflow). Pushing `master`
  redeploys in ~1–2 min. Test live in a fresh incognito tab — Pages caches HTML
  (~10 min) and browsers cache, so a normal reload can show the old build.
- Work happens on the feature branch but is fast-forwarded to `master` and
  pushed (the user wants changes live to play-test). Keep both in sync.

## CRUMB — the game (`crumb/`)
A Vampire-Survivors-style Three.js auto-battler ("kitchen roguelite", Toast
House Games). Move, dodge, auto-firing weapons, level-up cards, heat zones,
bosses, chests, rarities, turrets, auto-play.

### IMPORTANT: there is no source tree
CRUMB ships **only as a built bundle** at the **stable path**
`crumb/assets/game.js` (+ `game.css`), referenced (un-hashed) by
`crumb/index.html`. There is **no src/, no package.json, no sourcemap**. The
shipped JS is already **beautified** (prettier), so it is directly
editable/readable. Filenames are stable (NOT content-hashed) on purpose — see
the concurrency section.

### Dev workflow (follow exactly)
1. **Sync first**: `git fetch origin master && git checkout master && git pull --rebase origin master`.
   Then `cp crumb/assets/game.js /tmp/crumb.pretty.js` (it's already beautified).
2. Edit `/tmp/crumb.pretty.js` with **targeted, localized changes**. Three.js is
   lines ~1–22000; **CRUMB game code is ~line 22000 → end**. Use the symbol map
   below. Do NOT reformat / re-beautify the whole file — it wrecks 3-way merges.
3. `node --check /tmp/crumb.pretty.js` (must pass).
4. Deploy by overwriting the stable file in place (no rename, no hash):
   ```
   cp /tmp/crumb.pretty.js crumb/assets/game.js
   ```
   (Edit `crumb/assets/game.css` directly when CSS changes. `index.html` only
   changes if you add/remove a script/style tag.)
5. **Verify in a real headless browser before pushing** (one typo blanks the
   game). Playwright + chromedriver are installed globally:
   - Serve: `http-server . -p 8099 -c-1` (run in background).
   - Import: `import pkg from '/opt/node22/lib/node_modules/playwright/index.js'; const {chromium}=pkg;`
     launch with `--use-gl=angle --use-angle=swiftshader --ignore-gpu-blocklist`.
   - Navigate `http://127.0.0.1:8099/crumb/index.html`; capture `pageerror` +
     console `error`. Drive/inspect via the debug globals below.
6. **Re-sync, then push**: `git add -A && git commit`, then
   `git pull --rebase origin master` (3-way auto-merges others' non-overlapping
   edits to `game.js`; resolve any real overlap by re-applying your change),
   re-verify if it merged, then `git push origin master`. Sync the feature branch.
7. Cache: stable filenames mean returning players may need a **hard refresh**
   (Ctrl/Cmd+Shift+R) or fresh incognito to see changes — GitHub Pages/browser
   cache `game.js` (~10 min). This is expected; tell the user.

### ⚠ Concurrency — multiple Claude instances edit this repo at once
`game.js` is one big file but it's beautified (line-based), so git **can**
3-way-merge concurrent edits **as long as they touch different regions** and
the filename stays stable (hence no hashing). To keep merges clean:
- **Always `git pull --rebase origin master` before editing AND before pushing.**
- Make **surgical edits** to the existing beautified file; never reformat
  unrelated lines or change whitespace globally.
- **Claim your area** in `crumb/WORKLOG.md` (append a line: instance, the
  feature/region you're touching, timestamp) and skim it before starting so two
  instances don't edit the same function.
- If a pull conflicts inside `game.js`, the other instance changed an
  overlapping region — re-derive `/tmp/crumb.pretty.js` from the freshly pulled
  `game.js` and re-apply your edit on top, then re-verify.
- Push small and often to shrink the collision window.

### Debug globals (set at bundle entry)
- `window.CRUMB` — the app instance (`pm`). e.g. `CRUMB.state`, `CRUMB.runState`,
  `CRUMB.player`, `CRUMB.enemies.count`, `CRUMB.weapons._turrets`, `CRUMB._openChest()`.
- `window.CRUMB_WEAPONS` — base weapon defs by id (`Fp`). Grant: `CRUMB.runState.addWeapon(CRUMB_WEAPONS.turret)`.
- `window.CRUMB_EVOS` — evolution defs (`Up`). Merge: `CRUMB.runState.mergeWeapons("turret","aura",CRUMB_EVOS.turret_flame)`.

### Symbol map (minified identifiers, game region)
- Config object: **`J`** (`world, camera, player, heat, enemies, projectiles,
  pickups, spawn, level, meta`).
- App / state machine: **`pm`** (states: menu, select, playing, levelup, ready,
  prize, paused, gameover, shop). Loop `_loop`, `_updatePlaying`.
- Systems: renderer `wp`; camera rig `Ap` (`_zoom()` = zoom/FOV, smaller = closer);
  world `Rp()` (`userData.ground/grid`); player `zp` (mesh group + face children);
  enemies `Wp` (instanced body + googly-eye instanced mesh `buildEyesGeo`);
  projectiles `qp`; pickups `Kp` (`collectAll`); weapons `jp` (fire patterns +
  turret logic `_updateTurrets/_turretShoot/_turretMirror`); explosions
  `CrumbExplosions`; heat `tm` (`setColor`); collision `Jp`.
- UI overlays: HUD `am`; level-up `lm`; main menu `cm`; setup/select
  `CrumbSelect`; chest prize `CrumbPrize`; game-over `um`; shop `dm`; pause `fm`.
- Content data (edit these to add content):
  - Weapons array **`ol`** (+ id map `Fp`); evolutions **`Up`**; merge recipes
    **`Np`** (`{a,b,into}`). Patterns: `nearest, orbit, aura, nova, chain, mine,
    homing, turret`. Turret defs may add `fireMode` (`spread|nova|flame`),
    `fireCount`, `fireHoming`.
  - Passives **`ll`** (`{id,name,icon,stat,perLevel,desc}`, stat keyed into `Op()`).
  - Meta/shop upgrades **`al`**.
  - Enemies **`To`** (`{id,name,hp,speed,damage,radius,scale,height,xp,color,tier,weight}`);
    bosses **`CRUMB_BOSSES`** (adds `minion`).
  - Characters **`CRUMB_CHARS`** (`{id,name,icon,desc,diff,weapon,mods(stats)}`).
  - Stages/biomes **`CRUMB_STAGES`** (`{ground,grid,fog,fogNear,fogFar,heat,spawn}`).
  - Rarities **`CRUMB_RARITIES`**; roll via `rollRarity()`, build via `rarityCard()`.
  - Level-up choices `sm()`; chest rewards `rollChestRewards()`; base stats `Op()`;
    per-weapon computed stats `$p()`.
- Three.js helper aliases: `Ae`=Color, `na`=Fog, `ft`=Mesh, `Kn`=Group,
  `oi`=Box/RoundedBox geo, `ms`=octahedron/sphere geo `(r,detail)`, `ia`=icosa geo,
  `fs`=circle geo, `Ei`=plane geo, `sa`=ring geo, `yi`=MeshBasicMaterial,
  `ra`=MeshStandardMaterial, `sl`=ground/lambert material, `il`=line material,
  `Lt`=BufferGeometry, `rt`=Float32BufferAttribute, `oa`=instanced-mesh wrapper
  (`.write(i,x,y,z,scale,rotY)`, `.setColor`, `.finalize`), `er`=AdditiveBlending,
  `Pt`=DoubleSide, `I`=Vector3. Colors are hex **integers** (e.g. `0xff5a2a`).

### Conventions
- Edit the beautified bundle in place; never hand-write minified code.
- Each ship gets new hashed asset filenames (cache-busting).
- Verify with Playwright before every push.
- Keep gameplay tuning in the `J` config and content in the data arrays above.
