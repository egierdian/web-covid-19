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

    // console.log(data);
    let tanggalDiperbarui = new Date(data.lastUpdate);
    // console.log(tanggalDiperbarui);

    iniData = `
    <div class="card custom-card">
        <div class="d-flex align-items-center text-white bg-custom custom-artikel-heading">
            <div class="lh-100">
            <h4 class="mb-0 text-white lh-100">Jumlah kasus di Indonesia saat ini.</h4>
            </div>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-lg-3 col-sm-6 col-md-6 col-s-12 pt-2">
                    <div class="alert alert-secondary custom-alert" role="alert">
                        <h1 class="card-title display-5">
                        ${data.jumlahKasus}</h1>
                        <p class="card-text">Terkonfirmasi</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-md-6 col-s-12 pt-2">
                    <div class="alert alert-success custom-alert" role="alert">
                        <h1 class="card-title display-5">
                        ${data.sembuh}</h1>
                        <p class="card-text">Sembuh</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-md-6 col-s-12 pt-2">
                    <div class="alert alert-warning custom-alert" role="alert">
                        <h1 class="card-title display-5">
                        ${data.perawatan}</h1>
                        <p class="card-text">Perawatan</p>
                    </div>
                </div>
                
                <div class="col-lg-3 col-sm-6 col-md-6 col-s-12 pt-2">
                    <div class="alert alert-danger custom-alert" role="alert">
                        <h1 class="card-title display-5">
                        ${data.meninggal}</h1>
                        <p class="card-text">Meninggal</p>
                    </div>
                </div>
            </div>
            <p>Terakhir diperbarui <br />
            <strong>${tanggalDiperbarui}</strong></p>
        </div>
    </div>
    
    `;
    element.innerHTML = iniData;
}

data();