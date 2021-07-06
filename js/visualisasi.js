var xmlhttp = new XMLHttpRequest();
var url = "result.json";
xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange =function(){
    if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        var choices = data.map(function(elem){
            return elem.completions[0].result[0].value.choices;
        });
        var hutan = 0;
        var tanaman = 0;
        var hewan = 0;
        var manusia = 0;
        var laut = 0;
        var sungai = 0;
        var airterjun = 0;
        var bunga = 0;
        var taman = 0;
        var rumah = 0;
        var danau = 0;
        var batu = 0;
        var gunung = 0;
        var langit = 0;
        var count = 0;

        var i;
        
        // for(i = 0; i < 6 ; i++ ){
        //     for(const property in choices){
        //         if(choices[property] == "rumah"){
        //             laut = laut + 1;
        //         }
        //     }
        // }
        choices.forEach(element => {
            count++;
            for(i = 0; i < 6; i++) {
                if(element[i] == "hutan") hutan++;
                if(element[i] == "tanaman") tanaman++;
                if(element[i] == "hewan") hewan++;
                if(element[i] == "manusia") manusia++;
                if(element[i] == "laut") laut++;
                if(element[i] == "sungai") sungai++;
                if(element[i] == "airterjun") airterjun++;
                if(element[i] == "bunga") bunga++;
                if(element[i] == "taman") taman++;
                if(element[i] == "rumah") rumah++;
                if(element[i] == "danau") danau++;
                if(element[i] == "batu") batu++;
                if(element[i] == "gunung") gunung++;
                if(element[i] == "langit") langit++;
            }
                
        });

        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Hutan', 'Tanaman', 'Hewan', 'Manusia', 'Laut', 'Sungai', 'Air Terjun', 'Bunga', 'Rumah', 'Danau', 'Batu', 'Gunung', 'Langit'],
                datasets: [{
                    label: '# of Votes',
                    data: [hutan, tanaman, hewan, manusia, laut, sungai, airterjun, bunga, rumah, danau, batu, gunung, langit],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        const total = document.querySelector('#anjayani');
        total.innerHTML=`
        <h3>${count}</h3>
        <p>Total Gambar Terlabeli</p>
        `

        var alams = hutan + laut + sungai + danau + langit + gunung + airterjun;
        const alam = document.querySelector('#pog');
        alam.innerHTML=`
        <h3>${alams}</h3>
        <p>Alam</p>
        `

        var hidup = manusia + hewan + bunga + tanaman;
        const ningen = document.querySelector('#picardia');
        ningen.innerHTML=`
        <h3>${hidup}</h3>
        <p>Mahluk Hidup</p>
        `

        var mati = batu + rumah + taman;
        const died = document.querySelector('#mike');
        died.innerHTML=`
        <h3>${mati}</h3>
        <p>Benda Mati</p>
        `

    }
}
// labels: ['Hutan', 'Tanaman', 'Hewan', 'Manusia', 'Laut', 'Sungai', 'Air Terjun', 'Bunga', 'Rumah', 'Danau', 'Batu', 'Gunung', 'Langit'],
// data: [hutan, tanaman, hewan, manusia, laut, sungai, airterjun, bunga, rumah, danau, batu, gunung, langit],

