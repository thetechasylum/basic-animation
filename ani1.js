$(document).ready(function(){
					var canvas = $("#Project1");
					var context = canvas.get(0).getContext("2d");
					
					var canvasWidth = 500;
					var canvasHeight = 500;
					var x = 40;
					var y=40;
					var width=50;
					var height=50;
					var speed = 2;
					//circle properties
					var circleX = 20;
					var circleY = 90;
					var circleRadius = 20;
					var circleBeginPath = 0;
					var circleEndPath = 360;
					var antiClockwise = false;
					var frameRate = speed;
					var colorChangeTime = 0;
					var r = 200;
					var g = 0;
					var b = 200;
					
					
					context.fillRect(x,y,width,height);
					//animation loop
					function animate()
					{
						colorChangeTime++;
						x+=speed;
						circleX+=speed;
						circleY+=speed*2;
						context.clearRect(0,0,canvasWidth,canvasHeight);
						context.fillRect(x,y,width,height);
						context.fillStyle = "rgb('r','g','b')";
						context.beginPath();
						context.arc(circleX,circleY,circleRadius,circleBeginPath,circleEndPath,antiClockwise);
						context.closePath();
						context.fill();
						if(colorChangeTime>=100)
						{
							context.fillStyle = 'rgb('+Math.random()*255 +','+Math.random()*255 +','+ Math.random()*255+ ')';
							colorChangeTime = 0;
						
						};
						if(x>canvasWidth+width)
						{
						
							x=0-width;
						
						}
						if(circleX>canvasWidth+circleRadius)
						{
							circleX = 0-circleRadius;
						}
						
						if(circleY>canvasHeight)
						{
							circleY = 0;
						
						}
						setTimeout(animate,frameRate);
					};
					//alert("hello world");
					animate();
				
				
				
				
				
				});
			