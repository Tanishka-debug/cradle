class rope{
	constructor(body1,body2, offsetX, offsetY)
	{
		this.offsetX=offsetX
		this.offsetY=offsetY
		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.offsetX, y:this.offsetY}
		}
	
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

		var slinger1X=pointA.x
		var slinger1Y=pointA.y

		var slinger2X=pointB.x+this.offsetX
		var slinger2Y=pointB.y+this.offsetY

		line(slinger1X,slinger1Y,slinger2X,slinger2Y);
	}

}