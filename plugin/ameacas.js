// Code based on https://github.com/mdn/webextensions-examples/tree/master/list-cookies

// function method3(url) {
//   var xhr = new XMLHttpRequest();
//   xhr.onload = function () {
//       console.log(xhr.responseText);
//   };
//   xhr.open("GET", url);
//   xhr.send();
// }

// function method2(id) {
//   chrome.tabs.sendMessage(id, {action: "getSource"}, function(response) {
//       console.log(response.sourceCode);
//   });
// }


// Code based on https://github.com/mdn/webextensions-examples/tree/master/list-cookies
// this video helps a lot
// https://www.youtube.com/watch?v=wjiku6X-hd8&list=PLYxzS__5yYQlWil-vQ-y7NR902ovyq1Xi&index=4
// also the documentation from mozilla

async function showThreats(tabs){
    
  let tab = tabs.pop();

    var activeTabUrl = document.getElementById('header-title');
    var text = document.createTextNode("Conexions at: " + tab.title);
    var cookieList = document.getElementById('cookie-list');
    activeTabUrl.appendChild(text);

    const tabStore = await browser.tabs.sendMessage(tab.id, {code: "ameacas"})

    if (tabStore.response.length > 0) {
      for (let localItem of tabStore.response) {
        let li = document.createElement("li");
        let content = document.createTextNode(localItem);
        li.appendChild(content);
        cookieList.appendChild(li);
      }

      let quantity = document.createElement("p");
      let quantityText = document.createTextNode("Total Conexions: " + tabStore.response.length);
      quantity.appendChild(quantityText);
      cookieList.appendChild(quantity);

    } else {
      let p = document.createElement("p");
      let content = document.createTextNode("This site has no threats.");
      let parent = cookieList.parentNode;

      p.appendChild(content);
      parent.appendChild(p);
    }
}

function getActiveTab() {
  return browser.tabs.query({currentWindow: true, active: true});
}

getActiveTab().then(showThreats);








// async function showCookiesForTab(tabs) {
//   let tab = tabs.pop();

// //var gettingAllLink =browser.get({url: tab.url});
// //method1(tab.id);
// //gettingAllLink.then(() => {
//   //var results = await browser.tabs.get(info.tab.id)
//     //method2(tab.id)
//   //var lis = tab.getElementsByTagName("li");
//   //var results = browser.tabs.executeScript(tab.id,{code:  'document.getElementsByTagName("link").innerText'})
//   var results = document.getElementsByTagName("link");
//   var activeTabUrl = document.getElementById('header-title');
//   var text = document.createTextNode("Ameaças at: " + tab.title);
//   var cookieList = document.getElementById('amecas-list');
//   activeTabUrl.appendChild(text);
//   let quantity = document.createElement("p");
//   let quantityText = document.createTextNode("links : "+results.length);
//   let quanlityText = document.createTextNode("link : "+results[0].href);
//   quantity.appendChild(quantityText);
//   quantity.appendChild(quanlityText);
//   cookieList.appendChild(quantity);


// //   if (cookies.length > 0) {
// //     for (let cookie of cookies) {
// //       let li = document.createElement("li");
// //       let content = document.createTextNode(cookie.name + ": "+ cookie.value);
// //       li.appendChild(content);
// //       cookieList.appendChild(li);
// //     }

// //     let quantity = document.createElement("p");
// //     let quantityText = document.createTextNode("Total cookies: " + cookies.length);
// //     quantity.appendChild(quantityText);
// //     cookieList.appendChild(quantity);

// //   } else {
// //     let p = document.createElement("p");
// //     let content = document.createTextNode("No cookies in this tab.");
// //     let parent = cookieList.parentNode;

// //     p.appendChild(content);
// //     parent.appendChild(p);
// //   }
//   //});
// }

// function getActiveTab() {
//   return browser.tabs.query({currentWindow: true, active: true});
// }

// getActiveTab().then(showCookiesForTab);
