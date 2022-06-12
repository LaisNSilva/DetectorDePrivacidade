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
    }
  });
