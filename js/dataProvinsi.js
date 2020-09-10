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
            <div class="media text-muted pt-3">
                <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <div class="d-flex justify-content-between align-items-center w-100">
                    <strong class="display-5 text-gray-dark">${provinsi.provinsi}</strong>
                    <a href="/detail.html?id=${provinsi.kodeProvi}"><button type="button" class="btn btn-sm btn-secondary">Lihat</button></a>
                </div>
                </div>
            </div>
            `;
        }
    });
    element.innerHTML = iniData;
}

dataProvinsi();