let states = document.getElementById("states");
let selected = document.getElementById("selected");
let state = [];
let n = 0;
function selectedItem() {
  selected.innerHTML = ` selected the state : ${states.value} `;
  n = states.length;
}
for (let i = 0; i < states.length; i++) {
  state.push(states[i].text);
}

function clickMe() {
  let si = states.selectedIndex;
  states.remove(si);

  if (si > -1) {
    state.splice(si, 1);
  }
  console.log(state);

  alert(`Number of items in list : ${n} \n
        Dropdown List : ${state}`);
}
