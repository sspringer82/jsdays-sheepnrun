document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('sheep-and-run');
  const context = canvas.getContext('2d');

  const background = new Background(context);
  const promise = background.init('assets/background1.png');

  Promise.all([promise]).then(() => {
    background.render(canvas.width, canvas.height);
  });
});
