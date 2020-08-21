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

const dataProvinsi = () => { 
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
    data.data.forEach(provinsi => {
        // console.log(provinsi);
        let kode = provinsi.fid;
        if(kode != 35){
            iniData += `
            <div class="col-sm-6 col-md-4 col-s-12" style="padding-top:10px; text-align:center;">
                <div class="alert alert-dark" role="alert">
                    <p>${provinsi.provinsi}</p>
                    <hr>
                    <a href="./detail.html?id=${provinsi.kodeProvi}">Cek</a>
                </div>
            </div>
            `;
        }
    });
    element.innerHTML = iniData;
}

dataProvinsi();