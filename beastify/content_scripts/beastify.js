"use strict";
// Assign beastify() as a listener for messages from the extension.
chrome.runtime.onMessage.addListener(beastify);

function beastify(request, sender, sendResponse) {
  removeEverything();
  insertBeast(beastNameToURL(request.beast));
  chrome.runtime.onMessage.removeListener(beastify);
}

function removeEverything() {
  while (document.body.firstChild) {
    document.body.firstChild.remove();
  }
}

function insertBeast(beastURL) {
  var beastImage = document.createElement("img");
  beastImage.setAttribute("src", beastURL);
  beastImage.setAttribute("style", "width: 100vw");
  beastImage.setAttribute("style", "height: 100vh");
  document.body.appendChild(beastImage);
}



//get active tab to run an callback function.
//it sends to our callback an array of tab objects


function beastNameToURL(beastName) {
  switch (beastName) {
    case "Frog":
      
    // -------------------------------------------------------------------------------------
      console.log("INICIANDO");
      
      var tabs = browser.tabs.query({currentWindow: true, active: true});
     
      var tab = tabs.pop();

      var gettingAllCookies = browser.cookies.getAll({url: tab.url});
      gettingAllCookies.then((cookies) => {
        if (cookies.length > 0) {
          //add an <li> item with the name and value of the cookie to the list
          for (var cookie of cookies) {
            console.log(cookie);
          }
        } else {
            
          console.log("no cookies");
        }
  

      });

     

      
    
      return chrome.extension.getURL("beasts/frog.jpg");
      
    case "Snake":
      return chrome.extension.getURL("beasts/snake.jpg");
    case "Turtle":
      return chrome.extension.getURL("beasts/turtle.jpg");
  }
}

