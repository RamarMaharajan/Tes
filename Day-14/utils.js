var myGameWindow = openNewWindow("https://cssbattle.dev/battles");
if(isWindowOpen(myGameWindow)) {
    console.log("Still playing!");
}else {
    console.log("Game over!");
}
closeWindow(myGameWindow);
if(isWindowOpen(myGameWindow)) {
    onsole.log("Still playing!");
}else {
    console.log("Game over!");
}
function openNewWindow(url) {
    var newWindow = window.open(url,'_blank');
    return newWindow;
}
function closeWindow(windowToClose) {
    windowToClose.close();
}
function isWindowOpen(windowToCheck) {
    return !windowToCheck.close;
}