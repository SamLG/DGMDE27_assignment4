// window.addEventListener('load', 
//   function() { 
//     alert('hello!');
// 	}, false);
document.addEventListener("DOMContentLoaded", function(event) { 
  //do work
	var button = document.querySelector("button");
	var el = document.querySelector('div:first-of-type');
	var boxes = document.querySelectorAll('div div');

	button.addEventListener("click", function() {
		// alert('clicked');
		// alert(el);
		if ( el.className == "wrapper") {
		    el.className += " reverseWrapper";
		    for (i = 0; i < boxes.length; i++) {
		    	var string = " reverse_" + i;
		    	boxes[i].className += string;
		    	// alert(string + "for" + boxes[i].className);
		    }
		    // alert('changed');
		}
		else {
		    el.className = "wrapper";
		    for (i = 0; i < boxes.length; i++) {
		    	var string = " reverse_" + i;
		    	boxes[i].className.replace(string, "");
		    }
		    // alert('changed back', el);
		}
	});
});