fetch('https://baseplate.win/status.json')
  .then(response => response.json())
  .then(bspl => {
    let item = bspl[0]; // get the first (and only) object in the data array
    for (let name in item) {
      document.getElementById("wal").innerHTML = "Last update: " + item[name].last_update;
      if ((item[name].updated) === true) {
        console.log('✅ Updated');
        document.getElementById("wad").innerHTML = "✅ Online";
      } else {
        console.log('⛔️ Patched');
        document.getElementById("wad").innerHTML = "⛔️ Patched";
      }
    }
});