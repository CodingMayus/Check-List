

const renderChecklist= async()=>{

const listDiv = document.createElement("div");
listDiv.style.position = "fixed";
listDiv.style.right = "0px";
listDiv.style.top = "360px";
listDiv.style.backgroundColor = "white";
listDiv.style.width = "250px";
listDiv.style.height = "120px";
listDiv.style.padding = "10px";
listDiv.style.borderRadius = "5px";
listDiv.style.border = "solid 1px black";

chrome.storage.sync.get("thingtodo", function (data) {
  // Check if "thingtodo" exists in the data object
  if (data.thingtodo) {
    const arr = data.thingtodo;

    for (var i = 0; i < arr.length; i++) {
      const item = document.createElement("b");
      const buttoncheck = document.createElement("button");
      buttoncheck.style = "color:green";
      buttoncheck.innerHTML = "&#10003";
      item.innerText =" "+arr[i];
      const linebreak= document.createElement("br");
    
      listDiv.appendChild(buttoncheck);
      listDiv.appendChild(item);
      listDiv.appendChild(linebreak);
      buttoncheck.addEventListener("click", (function(index) {
        return function() {
          alert(arr[index]); // Now this should display the correct value
          arr.splice(index, 1);
          const arrr = arr.filter(goals => goals !== arr[index]);
    
          chrome.storage.sync.set({ "thingtodo": arrr }, function () {
            buttoncheck.remove();
            item.remove();
            linebreak.remove();
            alert("Good Job!");
          });
        };
      })(i));
   
    }

    // Append the created div to the body of the page
    document.body.appendChild(listDiv);
  } else {
    console.log("No valid checklist found in storage.");
  }
});
}
chrome.storage.onChanged.addListener(function(changes, namespace) {
  if (changes.thingtodo) {
    const updatedGoals = changes.thingtodo.newValue;
    //renderChecklist();
  }
});
renderChecklist();
// renderChecklist();
