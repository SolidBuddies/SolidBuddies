const data = "result.json";
const ListAnotasi = document.querySelector('#list-anotasi');


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
                <div class="col-4 s12 m6 l4">
                    <div class="card">
                        <div class="card-image">
                            <img src="${panggil.data.image}" style="width: 100%">
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

var isotope = function () {
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $('.portfolioFilter a').click(function () {
        $('.portfolioFilter .active').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    }); 
};