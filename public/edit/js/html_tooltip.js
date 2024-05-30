// Free for any type of use so long as original notice remains unchanged.
// Report errors to feedback@ashishware.com
//Copyrights 2006, Ashish Patil , ashishware.com
//////////////////////////////////////////////////////////////////////////

function ToolTip(id,isAnimated,aniSpeed)
{ var isInit = -1;
  var frm,divWidth,divHeight;
  var xincr=10,yincr=10;
  var animateToolTip =false;
  var html;
  
  function Init(id)
  {
   frm = document.getElementById(id);
   if(frm==null) return;
   
   if((frm.style.width=="" || frm.style.height==""))
   {alert("Both width and height must be set");
   return;}
   
   divWidth = parseInt(frm.style.width);
   divHeight= parseInt(frm.style.height);
   if(frm.style.overflow!="hidden")frm.style.overflow="hidden";
   if(frm.style.display!="none")frm.style.display="none";
   if(frm.style.position!="absolute")frm.style.position="absolute";
   
   if(isAnimated && aniSpeed>0)
   {xincr = parseInt(divWidth/aniSpeed);
    yincr = parseInt(divHeight/aniSpeed);
    animateToolTip = true;
    }
        
   isInit++; 
   
  }
  
    
  this.Show =  function(e,srcpath)
  {
    if(isInit<0) return;
    
    var newPosx,newPosy,height,width;
    if(typeof( document.documentElement.clientWidth ) == 'number' ){
    width = document.body.clientWidth;
    height = document.body.clientHeight;}
    else
    {
    width = parseInt(window.innerWidth);
    height = parseInt(window.innerHeight);
    
    }
    var curPosx = (e.x)?parseInt(e.x):parseInt(e.clientX);
    var curPosy = (e.y)?parseInt(e.y):parseInt(e.clientY);
    
    frm.src=srcpath;
    
    if((curPosx+divWidth+10)< width)
    newPosx= curPosx+10;
    else
    newPosx = curPosx-divWidth;

    if((curPosy+divHeight)< height)
    newPosy= curPosy;
    else
    newPosy = curPosy-divHeight-10;

   if(window.pageYOffset)
   { newPosy= newPosy+ window.pageYOffset;
     newPosx = newPosx + window.pageXOffset;}
   else
   { newPosy= newPosy+ document.body.scrollTop;
     newPosx = newPosx + document.body.scrollLeft;}

    frm.style.display='block';
    //debugger;
    //alert(document.body.scrollTop);
    frm.style.top= newPosy + "px";
    frm.style.left= newPosx+ "px";

    frm.focus();
    if(animateToolTip){
    frm.style.height= "0px";
    frm.style.width= "0px";
    ToolTip.animate(frm.id,divHeight,divWidth);}
      
    
    }

    

   this.Hide= function(e)
    {frm.style.display='none';
    if(!animateToolTip)return;
    frm.style.height= "0px";
    frm.style.width= "0px";}
    
    
    ToolTip.animate = function(a,iHeight,iWidth)
  { a = document.getElementById(a);
         
   var i = parseInt(a.style.width)+xincr ;
   var j = parseInt(a.style.height)+yincr;  
   
   if(i <= iWidth)
   {a.style.width = i+"px";}
   else
   {a.style.width = iWidth+"px";}
   
   if(j <= iHeight)
   {a.style.height = j+"px";}
   else
   {a.style.height = iHeight+"px";}
   
   if(!((i > iWidth) && (j > iHeight)))      
   setTimeout( "ToolTip.animate('"+a.id+"',"+iHeight+","+iWidth+")",1);
    }
    
   Init(id);
}
