class Loop {
  constructor(context, player, background, platforms) {
    this.context = context;
    this.player = player;
    this.background = background;
    this.platforms = platforms;
  }

  update(timestamp) {
    // update all the things
    // update player animation state
  }

  render() {
    // render all the things
    // render player
    // this.player.x = this.player.x + 1;
    this.background.render(
      this.context.canvas.width,
      this.context.canvas.height,
    );
    this.platforms.forEach((platform) => platform.render());
    this.player.render();
  }

  step(timestamp) {
    this.update(timestamp);
    this.render();
    requestAnimationFrame(this.step.bind(this));
  }
}
