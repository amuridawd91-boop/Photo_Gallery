function upDate(preview){
  console.log(preview)
  console.log(preview.src)
  console.log(preview.alt)
  
   document.getElementById("image").style.backgroundImage = "url('" + preview.src + "')";
  document.getElementById("image").innerHTML = preview.alt;
 
 
	}



	function unDo(){
    document.getElementById("image").innerHTML= "Hover over an image below to display here.";
		document.getElementById("image").style.backgroundImage = "url()";
	}
