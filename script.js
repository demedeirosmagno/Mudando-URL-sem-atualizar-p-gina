window.history.pushState('NewPage', 'Title', '/index');

function processAjaxData(response, url){
    document.getElementById("content").innerHTML = response.Title;
    window.history.pushState({"html":response.html, "Title":response.Title}, "", url);
}