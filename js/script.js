const data = "result.json";
const ListAnotasi = document.querySelector('#list-anotasi');
var urlParams = new URLSearchParams(window.location.search);

let jsonData;

function getAnotasiList(req, response){
    console.log(urlParams.get("choices"))
    fetch(data)
        .then(response =>{
            return response.json();
        }).then(responseJson=>{
            console.log(responseJson);
            ShowAnotasiData(responseJson);
            jsonData = responseJson;
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

/***************************** 
 * Filter Data sesuai anotasi 
 *****************************/

// dibantu teman sebaya 

function filterData(type) {
    // * get attribute data-filter dari html
    const filter = type.getAttribute("data-filter");

    // * jika filter === all, langsung lempar balik ke show anotasi data
    if(filter === "all") ShowAnotasiData(jsonData);

    // * jika bukan, maka akan filter choices sesuai value data-filter
    const filteredData = jsonData.filter( function(entry) {
        return (entry.completions[0].result[0].value.choices.indexOf(filter) >= 0);
    } );
    
    // * lempar data hasil filter ke show anotasi data
    ShowAnotasiData(filteredData);
}


document.addEventListener('DOMContentLoaded', getAnotasiList);