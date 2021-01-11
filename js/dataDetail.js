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

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
            <div class="card custom-card">
                <div class="d-flex align-items-center text-white bg-custom custom-artikel-heading">
                    <div class="lh-100">
                    <h4 class="mb-0 text-white lh-100">Jumlah kasus saat ini di ${provinsi.provinsi}</h4>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row">
                        
                        <div class="col-lg-4 col-sm-12 col-md-12 col-s-12 pt-2">
                            <div class="alert alert-success custom-alert" role="alert">
                                <h1 class="card-title display-5">
                                ${numberWithCommas(provinsi.kasusSemb)}</h1>
                                <p class="card-text" style="margin-top:-10px;">Sembuh</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-12 col-md-12 col-s-12 pt-2">
                            <div class="alert alert-warning custom-alert" role="alert">
                                <h1 class="card-title display-5">
                                ${numberWithCommas(provinsi.kasusPosi)}</h1>
                                <p class="card-text" style="margin-top:-10px;">Positif</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-12 col-md-12 col-s-12 pt-2">
                            <div class="alert alert-danger custom-alert" role="alert">
                                <h1 class="card-title display-5">
                                ${numberWithCommas(provinsi.kasusMeni)}</h1>
                                <p class="card-text" style="margin-top:-10px;">Meninggal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    
            `;
        }
        
    });
    element.innerHTML = iniData;
}

data();