window.onload = function () {
	var sendButton = document.getElementsByName("send")[0];
	var textArea = document.getElementsByName("comment")[0];	
	var timeLine = document.getElementsByName("newComment")[0];

	//agregando evento al botón
	sendButton.onclick = function() {
		if (textArea.value == "")   {
			document.getElementsByName("send").disabled = true;
			} else {
			//creando elementos del nuevo comentario
			var tweetDiv = document.createElement("div");
			var tweetName = document.createElement("span");
			var tweetDate = document.createElement("span");
			var tweetContent = document.createElement("p");
			//agregando el nuevo comentario a sus elementos
			tweetDiv.appendChild(tweetName);
			tweetDiv.appendChild(tweetDate);
			tweetDiv.appendChild(tweetContent);
			tweetDiv.className = "tweet";
		
			tweetName.textContent = "nuevo comentario ";
			tweetDate.textContent = new Date();
			tweetContent.textContent = textArea.value;
			textArea.value = "";
			contar();
			timeLine.insertBefore(tweetDiv, timeLine.children[0]);
		}
	}
}
//creando contador de caracteres
function contar() {
    var max = "140";
   var text = document.getElementById("comment").value;
   var large = text.length;
    if(large <= max) {
         document.getElementById("contador").value = max-large;
    } else {
         document.getElementsById("comment").value = text.substr(0, max);
    } 

}
 