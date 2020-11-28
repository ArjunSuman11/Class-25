class Log extends BaseClass {
    constructor(x, y, height, angle) {
      super(x, y, 20, height, angle);
      this.image= loadImage("sprites/wood2.png");
      Matter.Body.setAngle(this.body, angle);
    }

  };


  /*
  INHERITANCE

  Parent class ==> Base Class 
  Children Classes==> Sub-classes

  Sub classes inherit all the properties & functions from the base class


  */
  