class Platform {
  constructor(context) {
    this.context = context;
    this.image = new Image();

    this.x = 0;
    this.y = 0;
    this.height = 130;
    this.width = 200;
  }

  init() {
    const promise = new Promise((resolve) =>
      this.image.addEventListener('load', resolve),
    );
    this.image.src = 'assets/platform.png';

    return promise;
  }

  render() {
    this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
