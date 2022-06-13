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

async function showQtd(tabs){
    
    let tab = tabs.pop();

    
    const tabStore = await browser.tabs.sendMessage(tab.id, {code: "qtd"})
      var gettingAllCookies = browser.cookies.getAll({url: tab.url});
      var l;
      gettingAllCookies.then((cookies) => {
        l=cookies.length;
      });
    var x =  tabStore + l;
    var cookieList = document.getElementById('pontuacao');
      if (x>150) {
        var beastImage = document.createElement("img");
        beastImage.setAttribute("src", "icons/perigo.png");
        beastImage.setAttribute("style", "width: 20vw");
        beastImage.setAttribute("style", "height: 20vh");
        //let li = document.createElement("li");
        let content = document.createTextNode("Dangerous site");
        //li.appendChild(content);
        cookieList.appendChild(beastImage);
        cookieList.appendChild(content);
 
      } else if (x<=150 && x>80){
        var beastImage = document.createElement("img");
        beastImage.setAttribute("src", "icons/medio.png");
        beastImage.setAttribute("style", "width: 10vw");
        beastImage.setAttribute("style", "height: 10vh");
        //let li = document.createElement("li");
        let content = document.createTextNode("Alert");
        //li.appendChild(content);
        cookieList.appendChild(beastImage);
        cookieList.appendChild(content);
      } else{
        var beastImage = document.createElement("img");
        beastImage.setAttribute("src", "icons/positivo.png");
        beastImage.setAttribute("style", "width: 10vw");
        beastImage.setAttribute("style", "height: 10vh");
        //let li = document.createElement("li");
        let content = document.createTextNode("Secure site");
        //li.appendChild(content);
        cookieList.appendChild(beastImage);
        cookieList.appendChild(content);
      }
    const canvasFP = await browser.tabs.sendMessage(tab.id, {code: "canvas"})
    var canvasList = document.getElementById('canvas');

    if (Object.values(canvasFP)>0) {
        //let li = document.createElement("li");
        let text = document.createTextNode("Canvas fingerprint detectado!");
        //li.appendChild(content);
        canvasList.appendChild(text);
  } else{
        let text = document.createTextNode("Canvas fingerprint NÃO detectado!");
        //li.appendChild(content);
        canvasList.appendChild(text);
  }

    var politica = await browser.tabs.sendMessage(tab.id, {code: "politica"})
    var politicaList = document.getElementById('politica');
    
    if (Object.values(politica)>0) {
        //let li = document.createElement("li");
        let text = document.createTextNode("O site mostra politca de privacidade");
        //li.appendChild(content);
        politicaList.appendChild(text);
  } else{
   
        let text = document.createTextNode("O site NÃO mostra politca de privacidade");
        //li.appendChild(content);
        politicaList.appendChild(text);
  }
}
  
  function getActiveTab() {
    return browser.tabs.query({currentWindow: true, active: true});
  }
  
  getActiveTab().then(showQtd);
  
