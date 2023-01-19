fetch('https://api.whatexploitsare.online/status/WeAreDevs')
  .then(response => response.json())
  .then(wrd => {
    let item = wrd[0]; // get the first (and only) object in the data array
    for (let name in item) {
      document.getElementById("wal").innerHTML = "Last update: " + item[name].last_update;
      if ((item[name].updated) === true) {
        console.log('✅ Updated');
        document.getElementById("wad").innerHTML = "✅ WeAreDevs";
      } else {
        console.log('⛔️ Patched');
        document.getElementById("wad").innerHTML = "⛔️ WeAreDevs";
      }
    }
  });

  fetch('https://api.whatexploitsare.online/status/KRNL')
  .then(response => response.json())
  .then(krnl => {
    let item = krnl[0]; // get the first (and only) object in the data array
    for (let name in item) {
      document.getElementById("krl").innerHTML = "Last update: " + item[name].last_update;
      if ((item[name].updated) === true) {
        console.log('✅ Updated');
        document.getElementById("krnl").innerHTML = "✅ KRNL";
      } else {
        console.log('⛔️ Patched');
        document.getElementById("krnl").innerHTML = "⛔️ KRNL";
      }
    }
  });

  fetch('https://api.whatexploitsare.online/status/Oxygen')
  .then(response => response.json())
  .then(oxy => {
    let item = oxy[0]; // get the first (and only) object in the data array
    for (let name in item) {
      document.getElementById("oxl").innerHTML = "Last update: " + item[name].last_update;
      if ((item[name].updated) === true) {
        console.log('✅ Updated');
        document.getElementById("oxy").innerHTML = "✅ Oxygen U";
      } else {
        console.log('⛔️ Patched');
        document.getElementById("oxy").innerHTML = "⛔️ Oxygen U";
      }
    }
  });