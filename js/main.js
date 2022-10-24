//THIS IS THE MAIN JAVASCRIPT FOR MY COIN FLIP

document.querySelector('button').addEventListener('click', makeReq)


function makeReq(){
//the userFlip is selecting the values of the buttons in your
//html with the IDs heads and tails
  const userFlip = document.querySelector("#headsOrTails").value;

  fetch(`/api?coinResult=${userFlip}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#yourSelection").textContent = data.selection
      document.querySelector("#theFinalAnswer").textContent = data.result
      //this is selecting the h2 ID "theFinalAnswer" and telling it to display
      //the result of that.
      
    });

}

// document.getElementById("clickMe").onclick = makeReq;
//
// function makeReq(){
//
//   var userName = document.getElementById("userName").value;
//
//   var request = new XMLHttpRequest();
//   request.open('GET', '/api?student='+userName, true);
//
//   request.onload = function() {
//       console.log("works")
//       if (request.status >= 200 && request.status < 400) {
//         // Success!
//         var data = JSON.parse(request.responseText);
//         console.log(data)
//         document.getElementById("personName").innerHTML = data.name
//         document.getElementById("personStatus").innerHTML = data.status
//         document.getElementById("personOccupation").innerHTML = data.currentOccupation
//
//       } else {
//         // We reached our target server, but it returned an error
//
//       }
//     };
//
//     request.onerror = function() {
//       // There was a connection error of some sort
//     };
//
//     request.send();
// }
