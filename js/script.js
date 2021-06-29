const data = "result.json";
const ListAnotasi = document.querySelector('#list-anotasi');

// const getAnotasiList =  () =>{
//     fetch(data)
//         .then(reseponse =>{
//             return response.json();
//         }).then(responseJson=>{
//             console.log(responseJson);
//         }).catch(error =>{
//             console.log(error);
//         });
    
// }

function getAnotasiList(req, response){
    fetch(data)
        .then(response =>{
            return response.json();
        }).then(responseJson=>{
            console.log(responseJson);
            ListAnotasi.innerHTML = "";
            let anotasi = responseJson;
    
            anotasi.forEach(panggil=>{
                ListAnotasi.innerHTML += `
                <div class="col s12 m6 l4">
                    <div class="card">
                        <div class="card-image">
                            <img src="${panggil.data.image}">
                        </div>
                        <div class="card-content">
                            <p align="center">
                                ${panggil.completions[0].result[0].value.choices}<br>
                            </p>
                        </div>
                    </div>
                </div>                
                `
            });
        }).catch(error =>{
            console.log(error);
        });

}

document.addEventListener('DOMContentLoaded', getAnotasiList);