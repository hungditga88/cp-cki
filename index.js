// Bai 1
// var menu = ["rau xao", "thit luoc", "ga ran"];
// let input;

// do {
// input = prompt("Mời người dùng nhập vào C,R,U,D");
// if (input == 'C') {
//          menu.push(prompt("Mời người dùng nhập món ăn muốn thêm vào menu"));
//          localStorage.setItem('menu', menu);
// }

// else if (input == 'R') { 
//     prompt(localStorage.getItem('menu'));   
// }

// else if (input == 'U') {
//     let vitriupdate = menu.indexOf(prompt("Mời người dùng nhập vào tên món muốn update"))
//     menu[vitriupdate] = prompt("Mời người dùng nhập vào tên món ăn mới")
//     localStorage.setItem('menu', menu);
// }

// else if (input == 'D') {
//     let vitridelete = menu.indexOf(prompt("Mời người dùng nhập vào tên món muốn Delete"));
//     menu.splice(vitridelete, 1);
//     localStorage.setItem('menu', menu);
//   }
//   else {
//     input = prompt("Mời người dùng nhập vào C,R,U,D");
//   }
//  }
//  while (input == 'C', input == 'R', input == 'U', input == 'D');
 
//  Bai 2
document.getElementById('searchbar').addEventListener('click', getData);

function getData() {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(res => res.json())
        .then(data => {
            let poke = data.results; 
            
        });
};




