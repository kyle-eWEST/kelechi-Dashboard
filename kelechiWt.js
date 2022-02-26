document.addEventListener("DOMContentLoaded",()=>{
	//variables for pops related divs
	depositDiv = document.querySelector(".dp-div");
	withdrawDiv = document.querySelector(".wt-div");
	depositPop = document.querySelector("#pop-dp");
	withdrawPop = document.querySelector("#pop-wt");
	height = document.querySelector(".section3-ht");

	//call-back function to close pop divs
	function closeDp(){
		depositPop.style.display = "none";
		withdrawPop.style.display = "none";
		height.style.height = "75px";
		depositDiv.style.background = "none";
		withdrawDiv.style.background = "none";
	}

	//conditions
	depositDiv.onclick = ()=>{
		if(depositPop.style.display === "none"){
			depositPop.style.display = "block";
			withdrawPop.style.display = "none";
			height.style.height = "165px";
			depositDiv.style.background = "white";
			withdrawDiv.style.background = "none";
		}
		else{
			depositPop.style.display = "none";
			height.style.height = "75px";
			depositDiv.style.background = "none";
			withdrawDiv.style.background = "none";
		}
	}

	withdrawDiv.onclick = ()=>{
		if(withdrawPop.style.display === "none"){
			withdrawPop.style.display = "block";
			depositPop.style.display = "none";
			height.style.height = "165px";
			withdrawDiv.style.background = "white";
			depositDiv.style.background = "none";
		}
		else{
			withdrawPop.style.display = "none";
			height.style.height = "75px";
			withdrawDiv.style.background = "none";
			depositDiv.style.background = "none";
		}
	}

	//click on HTML DOM to close pops
	section1 = document.querySelector("#section1");
	section1.onclick = closeDp;
	section2 = document.querySelector("#section2");
	section2.onclick = closeDp;
	section4 = document.querySelector("#section4");
	section4.onclick = closeDp;
	section5 = document.querySelector("#section5");
	section5.onclick = closeDp;
	section6 = document.querySelector("#section6");
	section6.onclick = closeDp;
	section7 = document.querySelector("#section7");
	section7.onclick = closeDp;
	section8 = document.querySelector("#section8");
	section8.onclick = closeDp;
	section9 = document.querySelector("#section9");
	section9.onclick = closeDp;
	
})

		//functions for my MENU button
		function openNav() {
	 		document.getElementById("myNav").style.height = "100%";
	 		closeDp;
		}

		function closeNav() {
	 		document.getElementById("myNav").style.height = "0%";
		}