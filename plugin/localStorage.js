// Code based on https://github.com/mdn/webextensions-examples/tree/master/list-cookies
// this video helps a lot
// https://www.youtube.com/watch?v=wjiku6X-hd8&list=PLYxzS__5yYQlWil-vQ-y7NR902ovyq1Xi&index=4
// also the documentation from mozilla

async function showLocalStorage(tabs){
    
  let tab = tabs.pop();

    var activeTabUrl = document.getElementById('header-title');
    var text = document.createTextNode("Local Storage at: " + tab.title);
    var cookieList = document.getElementById('cookie-list');
    activeTabUrl.appendChild(text);

    const local = await browser.tabs.sendMessage(tab.id, {code: "local"})

    if (local.response.length > 0) {
      for (let localItem of local.response) {
        let li = document.createElement("li");
        let content = document.createTextNode(localItem);
        li.appendChild(content);
        cookieList.appendChild(li);
      }

      let quantity = document.createElement("p");
      let quantityText = document.createTextNode("Total Local Storage: " + local.response.length);
      quantity.appendChild(quantityText);
      cookieList.appendChild(quantity);

    } else {
      let p = document.createElement("p");
      let content = document.createTextNode("No Local Storage in this tab.");
      let parent = cookieList.parentNode;

      p.appendChild(content);
      parent.appendChild(p);
    }
}

function getActiveTab() {
  return browser.tabs.query({currentWindow: true, active: true});
}

getActiveTab().then(showLocalStorage);
