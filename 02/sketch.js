function setup() 
{
  
  //
  createCanvas(610, 575);
  background(255);
  
  //
  var s = 35;
  //
  var s1= 70;
  //
  var s2 = 105;
  //
  var s3 = 140;
  //
  var s4 = 175;
  //
  var s5 = 210;
  //
  var s6 = 245;
  //
  var x = 280;
  //
  var y = 245;
  
  // Pushes the 1st row increasing 140 in p.
 	for(var p = 0; p<150; p = p+s3)
  {
    // Determines the color of the border and fill.
    noStroke();
    fill(0);

    //Creates the triangles in the 1st row sup.
    triangle(330-p,50,295-p,50,330-p,85);
    triangle(330-p-s,50,295-p-s,50,330-p-s,85); 

    // Creates the triangles in the 1st row inf.
    triangle(50+p,50,85+p,85,50+p,85);
    triangle(50+p+s,50,85+p+s,85,50+p+s,85);

    // Creates the triangles in the 2nd row sup.
    triangle(330-p-s,50+s,295-p-s,50+s,330-p-s,85+s);
    triangle(330-p-s1,50+s,295-p-s1,50+s,330-p-s1,85+s);
    
    // Creates the triangles in the 5th row sup.
    triangle(330-p,50+s3,295-p,50+s3,330-p,85+s3);
    triangle(330-p-s,50+s3,295-p-s,50+s3,330-p-s,85+s3); 

    // Creates the triangles in the 5th row inf.
    triangle(50+p,50+s3,85+p,85+s3,50+p,85+s3);
    triangle(50+p+s,50+s3,85+p+s,85+s3,50+p+s,85+s3);
    
    // Creates the triangles in the 6th row sup.
    triangle(330-p-s,50+s4,295-p-s,50+s4,330-p-s,85+s4);
    triangle(330-p-s1,50+s4,295-p-s1,50+s4,330-p-s1,85+s4);
    
    // Creates the triangles in the 4th row sup.
    triangle(330-p,50+s2,295-p,50+s2,330-p,85+s2);
    
    // Creates the triangles in the 8th row sup.
    triangle(330-p,50+s6,295-p,50+s6,330-p,85+s6);
  }
  
  // Pushes the 2nd row increasing 105 in p.
 	for(p = 0; p<150; p = p+105)
  { 
    // Creates the triangles in the 2nd row inf.
    triangle(50+p,50+s,85+p,85+s,50+p,85+s);
    triangle(50+p+s3,50+s,85+p+s3,85+s,50+p+s3,85+s);
    
    //Crea los trangulos en la 6ta fila inf.
    triangle(50+p,50+s4,85+p,85+s4,50+p,85+s4);
    triangle(50+p+s3,50+s4,85+p+s3,85+s4,50+p+s3,85+s4);
  }
 
  // Pushes the 3rd row increasing 35 by p.
 	for(p = 70; p<130; p = p+s)
  { 
    // Creates the triangles in the 3rd row inf.
    triangle(50+p,50+s1,85+p,85+s1,50+p,85+s1);
    triangle(50+p+s3,50+s1,85+p+s3,85+s1,50+p+s3,85+s1);
    
    // Creates the triangles in the 3rd row sup.
		triangle(330-p,50+s1,295-p,50+s1,330-p,85+s1);
    triangle(330-p-s3,50+s1,295-p-s3,50+s1,330-p-s3,85+s1);
    
    // Creates the triangles in the 7th row inf.
    triangle(50+p,50+s5,85+p,85+s5,50+p,85+s5);
    triangle(50+p+s3,50+s5,85+p+s3,85+s5,50+p+s3,85+s5);
    
    // Creates the triangles in the 7th row sup.
		triangle(330-p,50+s5,295-p,50+s5,330-p,85+s5);
    triangle(330-p-s3,50+s5,295-p-s3,50+s5,330-p-s3,85+s5);
  }
  
  // Pushes the 4th row increasing 140 in p.
  for(p=35; p<250; p = p+140)
  {
    // Creates the triangles in the 4th row inf.
  	triangle(50+p,50+s2,85+p,85+s2,50+p,85+s2);
    triangle(50+p+s,50+s2,85+p+s,85+s2,50+p+s,85+s2);
    
    // Creates the triangles in the 4th row sup.
    triangle(330-p-s1,50+s2,295-p-s1,50+s2,330-p-s1,85+s2);
    
    // Creates the triangles in the 8th row inf.
  	triangle(50+p,50+s6,85+p,85+s6,50+p,85+s6);
    triangle(50+p+s,50+s6,85+p+s,85+s6,50+p+s,85+s6);
    
    // Creates the triangles in the 8th row sup.
    triangle(330-p-s1,50+s6,295-p-s1,50+s6,330-p-s1,85+s6);
  }
  
  // Pushes the 1st upper right row increasing or 140 in p.
 	
	for( p = 0; p<150; p = p+s3)
  {
    // Creates the triangles in the 6th row sup.
    triangle(330+x-p-s,50+s2,295+x-p-s,50+s2,295+x-p-s,85+s2); 
    triangle(330+x-p-s1,50+s2,295+x-p-s1,50+s2,295+x-p-s1,85+s2);
    
    // Creates the triangles in the 5th row sup.
    triangle(330+x-p,50+s1,295+x-p,85+s1,330+x-p,85+s1);
		triangle(330+x-p-s,50+s1,295+x-p-s,85+s1,330+x-p-s,85+s1); 
    
    // Creates the triangles in the 5th row inf.
    triangle(50+x+p,50+s1,50+x+p,85+s1,85+x+p,50+s1);
    triangle(50+x+p+s,50+s1,50+x+p+s,85+s1,85+x+p+s,50+s1);
    
    // Creates the triangles in the 4th row sup.
		triangle(330+x-p,50+s,295+x-p,50+s,295+x-p,85+s);
    
    // Creates the triangles in the 8th row sup.
    triangle(330+x-p,50+s4,295+x-p,50+s4,295+x-p,85+s4);
    
    // Creates the triangles in the 1st row sup.
    triangle(330+x-p,50+s5,295+x-p,85+s5,330+x-p,85+s5);
    triangle(330+x-p-s,50+s5,295+x-p-s,85+s5,330+x-p-s,85+s5); 

    // Creates the triangles in the 1st row inf.
    triangle(50+x+p,50+s5,85+x+p,50+s5,50+x+p,85+s5);
    triangle(50+x+p+s,50+s5,85+x+p+s,50+s5,50+x+p+s,85+s5);
    
    // Creates the triangles in the 2nd row sup.
    triangle(330+x-p-s,50+s6,295+x-p-s,50+s6,295+x-p-s,85+s6);
    triangle(330+x-p-s1,50+s6,295+x-p-s1,50+s6,295+x-p-s1,85+s6);
  }
  
  // Pushes the 2nd upper right row increasing 140 in p.
  for(p=35; p<250; p = p+140)
  {
    // Creates the triangles in the 4th row inf.
  	triangle(50+x+p,85+s,85+x+p,85+s,85+x+p,50+s);
    triangle(50+x+p+s,85+s,85+x+p+s,85+s,85+x+p+s,50+s);
    
    // Creates the triangles in the 4th row sup.
    triangle(330+x-p-s1,50+s,295+x-p-s1,50+s,295+x-p-s1,85+s);
    
    // Creates the triangles in the 8th row inf.
  	triangle(85+x+p,50+s4,85+x+p,85+s4,50+x+p,85+s4);
    triangle(85+x+p+s,50+s4,85+x+p+s,85+s4,50+x+p+s,85+s4);
    
    // Creates the triangles in the 8th row sup.
    triangle(330+x-p-s1,50+s4,295+x-p-s1,50+s4,295+x-p-s1,85+s4);
  }
    
  //  Pushes the 2nd upper right row increasing 35 in p.
 	for(p = 70; p<130; p = p+s)
  {
    
  // Creates the triangles in the 3rd row inf.
    triangle(50+x+p,50,85+x+p,50,50+x+p,85);
    triangle(50+x+p+s3,50,85+x+p+s3,50,50+x+p+s3,85);
    
    // Creates the triangles in the 3rd row sup.
		triangle(330+x-p,50,295+x-p,85,330+x-p,85);
    triangle(330+x-p-s3,50,295+x-p-s3,85,330+x-p-s3,85);
    
    // Creates the triangles in the 7th row inf.
    triangle(50+x+p,50+s3,85+x+p,50+s3,50+x+p,85+s3);
    triangle(50+x+p+s3,50+s3,85+x+p+s3,50+s3,50+x+p+s3,85+s3);
    
    // Creates the triangles in the 7th row sup.
		triangle(330+x-p,50+s3,295+x-p,85+s3,330+x-p,85+s3);
    triangle(330+x-p-s3,50+s3,295+x-p-s3,85+s3,330+x-p-s3,85+s3);
  }
  
  // Pushes the 4th row increasing 105 in p.
 	for(p = 0; p<150; p = p+105)
  {
    // Creates the triangles in the 6th row inf.
    triangle(85+x+p,50+s2,85+x+p,85+s2,50+x+p,85+s2);
    triangle(85+x+p+s3,50+s2,85+x+p+s3,85+s2,50+x+p+s3,85+s2);
    
    // Creates the triangles in the 2nd row inf.
    triangle(85+x+p,50+s6,85+x+p,85+s6,50+x+p,85+s6);
    triangle(85+x+p+s3,50+s6,85+x+p+s3,85+s6,50+x+p+s3,85+s6);
  }
     
  // Pushes the 1st lower right row increasing 140 in p.
 	for( p = 0; p<150; p = p+s3)
  {
    // Determines the color of the border and fill.
    noStroke();
    fill(255,204,55);
    
    // Creates the triangles in the 2nd row sup.
    triangle(330+x-p-s,50+y+s,295+x-p-s,50+y+s,330+x-p-s,85+y+s);
    triangle(330+x-p-s1,50+y+s,295+x-p-s1,50+y+s,330+x-p-s1,85+y+s);
    
    // Creates the triangles in the 4th row sup.
    triangle(330+x-p,50+y+s2,295+x-p,50+y+s2,330+x-p,85+y+s2);
    
    // Creates the triangles in the 5th row inf.
    triangle(50+x+p,50+y+s3,85+x+p,85+y+s3,50+x+p,85+y+s3);
    triangle(50+x+p+s,50+y+s3,85+x+p+s,85+y+s3,50+x+p+s,85+y+s3);
    
    // Creates the triangles in the 5th row sup.
    triangle(330+x-p,50+y+s3,295+x-p,50+y+s3,330+x-p,85+y+s3);
    triangle(330+x-p-s,50+y+s3,295+x-p-s,50+y+s3,330+x-p-s,85+y+s3);
    
    // Creates the triangles in the 6th row sup.
    triangle(330+x-p-s,50+y+s4,295+x-p-s,50+y+s4,330+x-p-s,85+y+s4);
    triangle(330+x-p-s1,50+y+s4,295+x-p-s1,50+y+s4,330+x-p-s1,85+y+s4);
    
    // Creates the triangles in the 8th row sup.
    triangle(330+x-p,50+y+s6,295+x-p,50+y+s6,330+x-p,85+y+s6);
    
  }  
  
  // Pushes the 2nd lower right row increasing 105 in p.
 	for(p = 0; p<150; p = p+105)
  { 
    // Creates the triangles in the 2nd row inf.
    triangle(50+x+p,50+y+s,85+x+p,85+y+s,50+x+p,85+y+s);
    triangle(50+x+p+s3,50+y+s,85+x+p+s3,85+y+s,50+x+p+s3,85+y+s);
    
    // Creates the triangles in the 6th row inf.
    triangle(50+x+p,50+y+s4,85+x+p,85+y+s4,50+x+p,85+y+s4);
    triangle(50+x+p+s3,50+y+s4,85+x+p+s3,85+y+s4,50+x+p+s3,85+y+s4);
  }
  
  // Pushes the 3rd lower right row increasing 35 by p.
 	for(p = 70; p<130; p = p+s)
  { 
    // Creates the triangles in the 3rd row inf.
    triangle(50+x+p,50+y+s1,85+x+p,85+y+s1,50+x+p,85+y+s1);
    triangle(50+x+p+s3,50+y+s1,85+x+p+s3,85+y+s1,50+x+p+s3,85+y+s1);
    
    // Creates the triangles in the 3rd row sup.
		triangle(330+x-p,50+y+s1,295+x-p,50+y+s1,330+x-p,85+y+s1);
    triangle(330+x-p-s3,50+y+s1,295+x-p-s3,50+y+s1,330+x-p-s3,85+y+s1);
    
    // Creates the triangles in the 7th row inf.
    triangle(50+x+p,50+y+s5,85+x+p,85+y+s5,50+x+p,85+y+s5);
    triangle(50+x+p+s3,50+y+s5,85+x+p+s3,85+y+s5,50+x+p+s3,85+y+s5);
    
    // Creates the triangles in the 7th row sup.
		triangle(330+x-p,50+y+s5,295+x-p,50+y+s5,330+x-p,85+y+s5);
    triangle(330+x-p-s3,50+y+s5,295+x-p-s3,50+y+s5,330+x-p-s3,85+y+s5);
  }
  
  // Pushes the 4th lower right row increasing 140 in p.
  for(p=35; p<250; p = p+140)
  {
    // Creates the triangles in the 4th row inf.
  	triangle(50+x+p,50+y+s2,85+x+p,85+y+s2,50+x+p,85+y+s2);
    triangle(50+x+p+s,50+y+s2,85+x+p+s,85+y+s2,50+x+p+s,85+y+s2);
    
    // Creates the triangles in the 4th row sup.
    triangle(330+x-p-s1,50+y+s2,295+x-p-s1,50+y+s2,330+x-p-s1,85+y+s2);
    
    // Creates the triangles in the 8th row inf.
  	triangle(50+x+p,50+y+s6,85+x+p,85+y+s6,50+x+p,85+y+s6);
    triangle(50+x+p+s,50+y+s6,85+x+p+s,85+y+s6,50+x+p+s,85+y+s6);
    
    // Creates the triangles in the 8th row sup.
    triangle(330+x-p-s1,50+y+s6,295+x-p-s1,50+y+s6,330+x-p-s1,85+y+s6);
  }
  
  // Pushes the 1st lower left row increasing or 140 in p.
 	
 	for( p = 0; p<150; p = p+s3)
   {
    // Determines the color of the border and fill.
    noStroke();
    fill(0);
     
    // Creates the triangles in the 6th row sup.
  	triangle(330-p-s,50+y+s2,295-p-s,50+y+s2,295-p-s,85+y+s2); 
    triangle(330-p-s1,50+y+s2,295-p-s1,50+y+s2,295-p-s1,85+y+s2);
    
    // Creates the triangles in the 5th row sup.
    triangle(330-p,50+y+s1,295-p,85+y+s1,330-p,85+y+s1);
 		triangle(330-p-s,50+y+s1,295-p-s,85+y+s1,330-p-s,85+y+s1); 
    
     // Creates the triangles in the 5th row inf.
     triangle(50+p,50+y+s1,50+p,85+y+s1,85+p,50+y+s1);
     triangle(50+p+s,50+y+s1,50+p+s,85+y+s1,85+p+s,50+y+s1);
    
     // Creates the triangles in the 4th row sup.
 		triangle(330-p,50+y+s,295-p,50+y+s,295-p,85+y+s);
    
     // Creates the triangles in the 8th row sup.
     triangle(330-p,50+y+s4,295-p,50+y+s4,295-p,85+y+s4);
    
     // Creates the triangles in the 1st row sup.
     triangle(330-p,50+s5+y,295-p,85+s5+y,330-p,85+s5+y);
     triangle(330-p-s,50+s5+y,295-p-s,85+s5+y,330-p-s,85+s5+y); 

     // Creates the triangles in the 1st row inf.
     triangle(50+p,50+s5+y,85+p,50+s5+y,50+p,85+s5+y);
     triangle(50+p+s,50+s5+y,85+p+s,50+s5+y,50+p+s,85+s5+y);
    
     // Creates the triangles in the 2nd row sup.
     triangle(330-p-s,50+s6+y,295-p-s,50+s6+y,295-p-s,85+s6+y);
     triangle(330-p-s1,50+s6+y,295-p-s1,50+s6+y,295-p-s1,85+s6+y);
   }
  
   // Pushes the 2nd upper right row increasing 140 in p.
   for(p=35; p<250; p = p+140)
   {
     // Creates the triangles in the 4th row inf.
   	triangle(50+p,85+s+y,85+p,85+s+y,85+p,50+s+y);
     triangle(50+p+s,85+s+y,85+p+s,85+s+y,85+p+s,50+s+y);
    
     // Creates the triangles in the 4th row sup.
     triangle(330-p-s1,50+s+y,295-p-s1,50+s+y,295-p-s1,85+s+y);
    
     // Creates the triangles in the 8th row inf.
   	triangle(85+p,50+s4+y,85+p,85+s4+y,50+p,85+s4+y);
     triangle(85+p+s,50+s4+y,85+p+s,85+s4+y,50+p+s,85+s4+y);
    
     // Creates the triangles in the 8th row sup.
     triangle(330-p-s1,50+s4+y,295-p-s1,50+s4+y,295-p-s1,85+s4+y);
   }
    
   // Pushes the 2nd upper right row increasing 35 in p.
  	for(p = 70; p<130; p = p+s)
   {
     // Creates the triangles in the 7th row inf.
     triangle(50+p,50+s3+y,85+p,50+s3+y,50+p,85+s3+y);
     triangle(50+p+s3,50+s3+y,85+p+s3,50+s3+y,50+p+s3,85+s3+y);
    
     // Creates the triangles in the 7th row sup.
 		triangle(330-p,50+s3+y,295-p,85+s3+y,330-p,85+s3+y);
     triangle(330-p-s3,50+s3+y,295-p-s3,85+s3+y,330-p-s3,85+s3+y);
   }
  
   // Pushes the 4th row increasing 105 in p.
  	for(p = 0; p<150; p = p+105)
   {
     // Creates the triangles in the 6th row inf.
     triangle(85+p,50+s2+y,85+p,85+s2+y,50+p,85+s2+y);
     triangle(85+p+s3,50+s2+y,85+p+s3,85+s2+y,50+p+s3,85+s2+y);
    
     // Creates the triangles in the 2nd row inf.
     triangle(85+p,50+s6+y,85+p,85+s6+y,50+p,85+s6+y);
     triangle(85+p+s3,50+s6+y,85+p+s3,85+s6+y,50+p+s3,85+s6+y);
   }
}
