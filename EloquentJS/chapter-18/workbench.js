document.querySelector("#button").addEventListener("click", function() {
    let code = document.querySelector("#code").value;
    let output = document.querySelector("#output");
    try {
      let result = new Function(code)();
      output.innerText = String(result);
    } catch (e) {
      output.innerText = "Error: " + e;
    }
});