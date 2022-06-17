function loadJS(FILE_URL, async = true) {
  let scriptEle = document.createElement("script");

  scriptEle.setAttribute("src", FILE_URL);
  scriptEle.setAttribute("type", "text/javascript");
  scriptEle.setAttribute("async", async);

  document.body.appendChild(scriptEle);

  // success event 
  scriptEle.addEventListener("load", () => {
    console.log("File loaded")
  });
   // error event
  scriptEle.addEventListener("error", (ev) => {
    console.log("Error on loading file", ev);
  });
}

if (document.getElementById("Date") !== null) {
	loadJS("assets/js/datetime.js", true);
}
if (document.querySelector(".stars") !== null) {
	loadJS("assets/js/stars.js", true);
}
if (document.querySelector(".ripples") !== null) {
	loadJS("assets/js/jquery.min.js", false);
	loadJS("assets/js/jquery.ripples.min.js", true);
	loadJS("assets/js/jquery.ripples-config.js", true);
}
