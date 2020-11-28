class Bird extends BaseClass {
    constructor(x, y) {
      super(x, y, 50, 50);  //Transfers all the properties from the base to the sub
      this.image= loadImage("sprites/bird.png");
    }
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;

      super.display(); //transfers display() of base to display() of sub
    }
  }
  