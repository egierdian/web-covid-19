// Initialize Firebase 
var config = {
    apiKey: "AIzaSyDg7MkSBFSBnJhqwIsl-SXb76DrDHRxu30",
    authDomain: "informasi-covid19.firebaseapp.com",
    databaseURL: "https://informasi-covid19.firebaseio.com",
    projectId: "informasi-covid19",
    storageBucket: "informasi-covid19.appspot.com",
    messagingSenderId: "163176246296",
    appId: "1:163176246296:web:17d089451cf04fbef4e76d",
    measurementId: "G-1MQXEPY0TY"
};
firebase.initializeApp(config);

let db , dataRef;

// referensi ke database
db = firebase.database();
dataRef = db.ref('Artikel');

// menampilkan data ke halaman browser
dataRef.on('value' , dataBerhasil , dataGagal);

function dataBerhasil(data){
    // console.log(data.val());
    let tampilkan = "";
    let ambilData = document.getElementById("dataArtikel");
    data.forEach(function(konten) {
        tampilkan +=
        `
        <div class="media text-muted pt-3">
            <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div class="d-flex justify-content-between align-items-center w-100">
                <h5 class="display-5 text-gray-dark">${konten.val().Judul}</h5>
            </div>
            <span class="d-block"><a class="text-secondary" href="./artikel.html?id=${konten.val().ID}">Baca Selengkapnya</a></span>
            </div>
        </div>
        `;
    });
    ambilData.innerHTML += tampilkan;  
}

function dataGagal(err){
  console.log(err);
}

{/* <div class="col-sm-12 col-md-6 col-s-12 pt-1 pb-3">
            <div class="my-1 p-3 bg-white text-dark rounded box-shadow" style="border-top: 5px solid grey;">
                <div class="card-body" style="margin-top:-15px;">
                    <a href="/artikel.html?id=${konten.val().ID}" class="text-dark"> <h5 class="card-title">${konten.val().Judul}</h5></a>
                    <p><span class="border-bottom" style="float: left;"><i>oleh</i> ${konten.val().Oleh}</span> <span class="border-bottom" style="float: right;">${konten.val().Tanggal}</span></p>
                </div>
            </div>
        </div> */}