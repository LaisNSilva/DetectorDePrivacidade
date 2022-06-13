function tiraAcentos(i){
   
    var i = i.toLowerCase().trim();
 
    var acentos = "ãáàâäéèêëíìîïõóòôöúùûüç";
    var sem_acentos = "aaaaaeeeeiiiiooooouuuuc";
    
    for(var x=0; x<i.length; x++){
       var str_pos = acentos.indexOf(i.substr(x,1));
       if(str_pos != -1){
          i = i.replace(acentos.charAt(str_pos),sem_acentos.charAt(str_pos));
       }
    }
    
    return i;
 }

browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.code == "local") {
        sendResponse({response: Object.entries(localStorage)})
    } else if (request.code == "tab"){
        var results_links = document.getElementsByTagName("link");
        var sites = []
        for (let site of results_links) {
            sites.push(site.href)
        }

        // console.log(results);
        // console.log(Object.entries(results));
        // var quantity = results.length;
        sendResponse({response: sites})
    } else if (request.code == "ameacas"){
        var results_links = document.getElementsByTagName("link");
        var sites = []
        for (let site of results_links) {
            if (site.href.includes(".js")) {
                sites.push(site.href)
            }
            
        }

        // console.log(results);
        // console.log(Object.entries(results));
        // var quantity = results.length;
        sendResponse({response: sites})
    } 
    else if (request.code == "canvas"){
        var results_links = document.getElementsByTagName("canvas");
        var quant = results_links.length
        sendResponse({response: quant})
    } 
    else if (request.code == "politica"){
        var results_links = document.getElementsByTagName("a");
        var a = 0;
        for (let site of results_links) {
            
            if (site.textContent.includes("Política de Privacidade") || site.textContent.includes("Privacy policy")) {
                a = 1;
            }
            
        }
        
        sendResponse({response: a})
    } 

  });
