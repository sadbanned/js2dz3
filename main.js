
const tenge = document.querySelector("#tenge");
const sum = document.querySelector("#sum");

// som.addEventListener("input", () => {
//     const request = new XMLHttpRequest();
//     request.open("GET", "data.json");
//     request.setRequestHeader("Content-type","application/json");
//     request.send();
//     request.addEventListener("load", () => {
//         const response = JSON.parse(request.response);
//         sum.value = (tenge.value / response.sum);
//     });
// });



// som.addEventListener("input", () => {
//     const request = new XMLHttpRequest();
//     request.open("GET", "data.json");
//     request.setRequestHeader("Content-type","application/json");
//     request.send();
//     request.addEventListener("load", () => {
//         const response = JSON.parse(request.response);
//         usd.value = (som.value / response.usd);
//     });
// });


// function convert(elem, target, isTrue) {
//     elem.addEventListener("input", () => {
//         const request = new XMLHttpRequest();
//         request.open("GET", "data.json");
//         request.setRequestHeader("Content-type", "application/json");
//         request.send()

//         request.addEventListener("load", () => {
//             const response = JSON.parse(request.response);
//             if(isTrue) {
//                 target.value = (+elem.value / response.sum)
//             } else {
//                 target.value = (+elem.value * response.sum)
//             }
    
//             elem.value === "" ? (target.value = "") : null;
//         })   
//     })
// }

// convert(tenge, sum, 1)
// convert(sum, tenge, 1)

function moneyConverter(vaLNum){
    document.getElementById('outputsum').innerHTML = vaLNum*22.17
}


function moneyConverter1(vaRNum){
    document.getElementById('outputtenge').innerHTML = vaRNum*0.17
}