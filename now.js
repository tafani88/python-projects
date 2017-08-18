function openNav() {
  document.getElementById("dropcontent").style.visibility = "visible";
}

function closeNav() {
  document.getElementById("dropcontent").style.visibility = "hidden";
}

//function time(){
//  alert("What time do you want to do this task?")
  //takes input for hour and am or pm (using select)
//}
// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");  //works
  } else {
    document.getElementById("list").appendChild(li);
    alert("What time do you want to do this task?");
    //takes input for hour and am or pm (using select)
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("button");
  var txt = document.createTextNode("\u00D7");
  button.className = "close";
  button.appendChild(txt);
  myNodelist[i].appendChild(button);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
     div.style.display = "none";
  }
}

function line(){
  var lis = document.getElementsById("list").children
  var i;
  for (i = 0; i < lis.length; i++) {
    lis[i].onclick = function() {
      var litem = this;
      litem.style.textDecoration = "line-through";
    }
}
}
