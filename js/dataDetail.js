const urlData = "https://indonesia-covid-19.mathdro.id/api/provinsi";

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
    let urlParam = new URLSearchParams(window.location.search);
    let idParam = urlParam.get("id");

    let iniData = "";
    let element = document.getElementById("dataCovid");
    data.data.forEach(provinsi => {
        // 
        let kode = provinsi.kodeProvi;
        if(idParam == kode){
            // console.log(provinsi);
            iniData = `
            <h4>Jumlah kasus saat ini di ${provinsi.provinsi}</h4>
            <div class="row">
                <div class="col-sm-6 col-md-4 col-s-12" style="padding-top:10px; text-align:center;">
                    <div class="alert alert-success" role="alert">
                        <h1>${provinsi.kasusSemb}</h1>
                        <hr>
                        Sembuh
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-s-12" style="padding-top:10px; text-align:center;">
                    <div class="alert alert-warning" role="alert">
                        <h1>${provinsi.kasusPosi}</h1>
                        <hr>
                        Positif
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-s-12" style="padding-top:10px; text-align:center;">
                    <div class="alert alert-danger " role="alert">
                        <h1>${provinsi.kasusMeni}</h1>
                        <hr>
                        Meninggal
                    </div>
                </div>
            </div>
            `;
        }
        
    });
    element.innerHTML = iniData;
}

data();