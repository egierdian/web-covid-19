const urlData = "https://indonesia-covid-19.mathdro.id/api/";

const fetchApi = url => {
    return fetch(url).then(res => {
        if(res.status !== 200){
            console.log("Error "+ res.status);
            return Promise.reject(new Error(res.statusText));
        } else {
            return Promise.resolve(res);
        }
    })
    .then(res => res.json())
    .catch(error => {
        console.log("Error " +error);
    })

};

const data = () => { 
    fetchApi(urlData)
        .then(data => {
            ambilData(data);
        })
        .catch(error => {
            console.log(error);
        })
}

const ambilData = data => {
    let iniData = "";
    let element = document.getElementById("dataCovid");

    console.log(data);
    iniData = `
    <h4>Jumlah kasus saat ini di Indonesia</h4>
    <div class="row">
        <div class="col-sm-6 col-md-3 col-s-12" style="padding-top:10px; text-align:center;">
            <div class="alert alert-dark" role="alert">
                <h1>${data.jumlahKasus}</h1>
                <hr>
                Terkonfirmasi
            </div>
        </div>
        <div class="col-sm-6 col-md-3 col-s-12" style="padding-top:10px; text-align:center;">
            <div class="alert alert-success" role="alert">
                <h1>${data.sembuh}</h1>
                <hr>
                Sembuh
            </div>
        </div>
        <div class="col-sm-6 col-md-3 col-s-12" style="padding-top:10px; text-align:center;">
            <div class="alert alert-warning" role="alert">
                <h1>${data.perawatan}</h1>
                <hr>
                Perawatan
            </div>
        </div>
        <div class="col-sm-6 col-md-3 col-s-12" style="padding-top:10px; text-align:center;">
            <div class="alert alert-danger " role="alert">
                <h1>${data.meninggal}</h1>
                <hr>
                Meninggal
            </div>
        </div>
    </div>
    `;
    element.innerHTML = iniData;
}

data();