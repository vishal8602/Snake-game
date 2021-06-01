 var canvas = document.getElementById("canvas");
 var pen = canvas.getContext("2d");
 w=canvas.width =900;
 h=canvas.height =900;
 pen.fillStyle ="solidgreen";
let size=80;

let count=0;

foodi=0;
function getRandomFood(){


    food={
	       x:parseInt(Math.random()*((h-size)/size)),
	       y:parseInt(Math.random()*((w-size)/size)),
         }
    return food;
}
snake=
{

       initial_len:5,
       color:"blue",
       cells:[],
       direction:"right",

       createSnake:function(){
       
        for(let i=0;i<this.initial_len;i++)
        {
        	this.cells.push({x:i,y:0});
        }
       }
       ,
       drawSnake:function(){
       
       	  for(let i=0;i<this.cells.length;i++)
       	  {
       	  	pen.fillRect(this.cells[i].x*size,this.cells[i].y*size,size-1,size-1);
       	  		
       	  }
       	  
       },

       updateSnake:function(){

          //console.log("food",food.x,food.y);
          //console.log("snake",snake.cells[snake.cells.length-1].x,snake.cells[snake.cells.length-1].y);
         
          if(snake.cells[snake.cells.length-1].x==foodi.x &&  snake.cells[snake.cells.length-1].y==foodi.y)
	     {
		  count++;
		  console.log(count);
		  foodi=getRandomFood();
		  pen.fillRect(foodi.x*size,foodi.y*size,size-1,size-1);
         
		 
	     }
         else {this.cells.shift();} 
         let end=this.cells.length;
         let headx=this.cells[end-1].x;
         let heady=this.cells[end-1].y;
        
         if(this.direction=="right"){headx+=1;}
         if(this.direction=="left") {headx-=1;}
         if(this.direction=="up")   {heady-=1;}
         if(this.direction=="down") {heady+=1;}
         this.cells.push({x:headx,y:heady});
         
        if(headx<0|| heady<0 || headx>((h-size)/size) || heady >((h-size)/size))
        {
        	clearInterval(interval);
        	alert("Game over your score is  "+ count);
        }

       }
}



snake.createSnake();
snake.drawSnake();
 
 foodi=getRandomFood();
 
function update()
{
	 
	pen.clearRect(0,0,h,w);
	snake.updateSnake();
	snake.drawSnake();
	pen.fillRect(foodi.x*size,foodi.y*size,size-1,size-1);
	//console.log();
	
}

 
interval=setInterval(update,1000);


document.addEventListener('keydown',TakeAction);

function TakeAction(e)
{
   if(e.key=="ArrowDown")
   {
   	
   	 snake.direction ="down";
   }
   else if(e.key=="ArrowUp")
   {
   	
   	snake.direction = "up";
   }
   else if(e.key=="ArrowRight")
   {
   	
   	snake.direction ="right";
   }
   else {

          snake.direction="left";
   }
}
 
