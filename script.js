function volume_sphere() {
    //Write your code here
   let r=parseInt(document.getElementById("radius").value);
	document.getElementById("volume").value=(4/3)*3.14*r*r*r;
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
