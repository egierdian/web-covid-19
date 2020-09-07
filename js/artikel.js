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
        <div class="col-sm-12 col-md-6 col-s-12 pt-3 pb-3">
            <div class="card bg-secondary text-light">
                <div class="card-body" style="margin-top:-10px;">
                    <a href="/artikel.html?id=${konten.val().ID}" class="text-light"> <h5 class="card-title">${konten.val().Judul}</h5></a>
                    <p><span class="border-bottom" style="float: left;"><i>oleh</i> ${konten.val().Oleh}</span> <span class="border-bottom" style="float: right;">${konten.val().Tanggal}</span></p>
                </div>
            </div>
        </div>
        `;
    });
    ambilData.innerHTML += tampilkan;  
}

function dataGagal(err){
  console.log(err);
}