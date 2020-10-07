class Loop {
  constructor(context, player, background, platformCollection) {
    this.context = context;
    this.player = player;
    this.background = background;
    this.platformCollection = platformCollection;
    this.isMoving = false;
  }

  toggleMoving() {
    this.isMoving = !this.isMoving;
    this.player.setIsMoving(this.isMoving);
  }

  update(timestamp) {
    // update all the things
    // update player animation state
    this.player.update(timestamp);
    if (this.isMoving) {
      this.platformCollection.update(timestamp);
    }
  }

  render() {
    // render all the things
    // render player
    // this.player.x = this.player.x + 1;
    this.background.render(
      this.context.canvas.width,
      this.context.canvas.height,
    );
    this.platformCollection.render();
    this.player.render();
  }

  step(timestamp) {
    this.update(timestamp);
    this.render();
    requestAnimationFrame(this.step.bind(this));
  }
}
