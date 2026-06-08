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
CRUMB ships **only as a built bundle**: `crumb/assets/index-<hash>.js` (+
`index-<hash>.css`), referenced by hash from `crumb/index.html`. There is **no
src/, no package.json, no sourcemap**. The shipped JS is already **beautified**
(prettier), so it is directly editable/readable.

### Dev workflow (follow exactly)
1. `cp crumb/assets/index-*.js /tmp/crumb.pretty.js` (it's already beautified).
2. Edit `/tmp/crumb.pretty.js`. Three.js bundle is lines ~1–22000; **CRUMB game
   code is ~line 22000 → end**. Use the symbol map below.
3. `node --check /tmp/crumb.pretty.js` (must pass).
4. Deploy with a fresh cache-busting hash:
   ```
   cd crumb/assets; OLD=$(ls index-*.js); NEW=$(md5sum /tmp/crumb.pretty.js | cut -c1-8)
   cp /tmp/crumb.pretty.js "index-$NEW.js"; rm -f "$OLD"
   cd ../..; sed -i "s#assets/index-[a-f0-9]*\.js#assets/index-$NEW.js#" crumb/index.html
   ```
   (Same pattern for the CSS file when it changes.)
5. **Verify in a real headless browser before pushing** (this is a minified
   bundle — one typo blanks the game). Playwright + chromedriver are installed
   globally:
   - Serve: `http-server . -p 8099 -c-1` (run in background).
   - Import: `import pkg from '/opt/node22/lib/node_modules/playwright/index.js'; const {chromium}=pkg;`
     launch with `--use-gl=angle --use-angle=swiftshader --ignore-gpu-blocklist`.
   - Navigate `http://127.0.0.1:8099/crumb/index.html`; capture `pageerror` +
     console `error`. Drive/inspect via the debug globals below.
6. Commit, push `master`, sync the feature branch.

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
