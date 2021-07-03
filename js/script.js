const data = "result.json";
const ListAnotasi = document.querySelector('#list-anotasi');
var urlParams = new URLSearchParams(window.location.search);

function getAnotasiList(req, response){
    console.log(urlParams.get("choices"))
    fetch(data)
        .then(response =>{
            return response.json();
        }).then(responseJson=>{
            console.log(responseJson);
            ShowAnotasiData(responseJson);
        }).catch(error =>{
            console.log(error);
        });

}

const ShowAnotasiData = anotasi =>{
    ListAnotasi.innerHTML = "";
    anotasi.forEach(panggil=>{
        ListAnotasi.innerHTML += `
        <nav class="col-4 s12 m6 l4">
            <div class="card">
                <div class="card-image">
                    <img src="${panggil.data.image}" style="width: 100%">
                </div>
                <div class="card-content">
                    <p align="center" style="opacity: 0">
                        ${panggil.completions[0].result[0].value.choices}
                    </p>
                </div>
            </div>
        </nav>                
        `
    });
}

$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#list-anotasi nav").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

//Select query input
const LabelRadio = document.querySelector('#myInput');
//Ambil value
const hutanValue = LabelRadio.value
//Ambil kondisi radio (checked or nah)
const hutanCheck = LabelRadio.check

document.addEventListener('DOMContentLoaded', getAnotasiList);