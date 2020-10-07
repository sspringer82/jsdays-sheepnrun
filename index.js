document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('sheep-and-run');
  const context = canvas.getContext('2d');

  const background = new Background(context);
  const backbroundPromise = background.init('assets/background1.png');

  const platformCollection = new PlatformCollection(context);
  const platformPromise = platformCollection.init();

  const player = new Player(context);
  const playerPromise = player.init();

  Promise.all([backbroundPromise, platformPromise, playerPromise]).then(() => {
    const loop = new Loop(context, player, background, platformCollection);

    player.y = 202;
    requestAnimationFrame(loop.step.bind(loop));
    // requestAnimationFrame((ts) => loop.step(ts));
  });
});
