//for shuffling array

Array.prototype.shuffle=function(){
 	var l=this.length-1;
   for(var i=l; i>0; i--){
   	   var itemIndex=Math.floor(Math.random()*(i+1));
   	   var item=source[i];
		 source[i] = source[itemIndex];
		 source[itemIndex]=item;
   }
   return source;
}