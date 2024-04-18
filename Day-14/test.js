var myWindow;
function openNewWindow() {
    var url = document.getElementById("urlInput").value;
    if (url) {
        myWindow = window.open(url, "_blank");
    } else {
        alert("Please enther the URL!");
    }
}
function checkWindowStatus() {
    if (myWindow && !myWindow.closed) {
        appendAlert("The window is still open.", "success");
    }else {
        appendAlert("The window is closed or was never opened!", "success");
    }
}
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
    const wrapper = document.createElement("div");
    
}