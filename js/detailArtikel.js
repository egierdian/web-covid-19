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
    let urlParam = new URLSearchParams(window.location.search);
    let idParam = urlParam.get("id");
    let tampilkan = "";
    let ambilData = document.getElementById("dataArtikel");

    data.forEach(function(konten) {
        if(idParam == konten.val().ID){
            tampilkan =
            `
            <div class="col-sm-12 col-md-12 col-s-12  pt-3 pb-3">
                <div class="card bg-white text-secondary">
                    <div class="card-body" >
                        <h2 class="card-title display-5">${konten.val().Judul}</h2>
                        ${konten.val().Isi}    
                    </div>
                </div>
            </div>
            `;
        }
    });
    ambilData.innerHTML = tampilkan;  
}

function dataGagal(err){
  console.log(err);
}