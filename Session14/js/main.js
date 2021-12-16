let url = "https://jsonplaceholder.typicode.com/users";
// let ele = document.getElementById("info");
// // promise

// Async Await

// function getUsers() {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch(function (err) {});
// }

// getUsers();
// Try Catch
async function getUsers() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    drawUi(data);
  } catch (err) {
    console.log(err);
  }
}

getUsers();

function drawUi(data) {
  console.log("data", data);
}
