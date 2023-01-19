fetch('https://api.whatexploitsare.online/status/WeAreDevs')
  .then(response => response.json())
  .then(wrd => {
    let item = wrd[0]; // get the first (and only) object in the data array
    for (let name in item) {
      console.log(name);
      console.log(item[name].updated);
      console.log(item[name].exploit_version);
      document.getElementById("wad").innerHTML = "Working: " + item[name].updated;
    }
  });

  fetch('https://api.whatexploitsare.online/status/KRNL')
  .then(response => response.json())
  .then(krnl => {
    let item = krnl[0]; // get the first (and only) object in the data array
    for (let name in item) {
      console.log(name);
      console.log(item[name].updated);
      console.log(item[name].exploit_version);
      document.getElementById("krnl").innerHTML = "Working: " + item[name].updated;
    }
  });

  fetch('https://api.whatexploitsare.online/status/Oxygen')
  .then(response => response.json())
  .then(oxy => {
    let item = oxy[0]; // get the first (and only) object in the data array
    for (let name in item) {
      console.log(name);
      console.log(item[name].updated);
      console.log(item[name].exploit_version);
      document.getElementById("oxy").innerHTML = "Working: " + item[name].updated;
    }
  });