import { Background } from './js/background.js';
import PlatformCollection from './js/platformCollection.js';
import Loop from './js/loop.js';
import Player from './js/player.js';

document.addEventListener('DOMContentLoaded', async () => {
  const canvas = document.getElementById('sheep-and-run');
  const context = canvas.getContext('2d');

  const background = new Background(context);
  const backbroundPromise = background.init('assets/background1.png');

  const platformCollection = new PlatformCollection(context);
  const platformPromise = platformCollection.init();

  const player = new Player(context);
  const playerPromise = player.init();

  await Promise.all([backbroundPromise, platformPromise, playerPromise]);

  const loop = new Loop(context, player, background, platformCollection);

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      // stop start moving
      loop.toggleMoving();
    } else if (e.code === 'Space') {
      // jump
      player.jump();
    }
  });

  requestAnimationFrame(loop.step.bind(loop));
  // requestAnimationFrame((ts) => loop.step(ts));
});
