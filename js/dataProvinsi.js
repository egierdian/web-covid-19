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
                <div class="col-sm-6 col-md-3 col-s-12" style="padding-top:10px; text-align:center;">
                    <div class="card bg-light" style="border:0; border-bottom: 5px solid grey;">
                        <div class="card-body text-info" style="margin-bottom:-15px;">
                            <a href="/detail.html?id=${provinsi.kodeProvi}" class="text-secondary"><strong><p class="card-title display-5">
                            ${provinsi.provinsi}</p></strong></a>
                        </div>
                    </div>
                </div>
            `;
        }
    });
    element.innerHTML = iniData;
}

dataProvinsi();