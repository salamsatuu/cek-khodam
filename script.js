document.getElementById('namaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = document.getElementById('nama').value.trim();
    const makhlukText = document.getElementById('makhlukText');
    const makhlukImg = document.getElementById('makhlukImg');

    const makhluk = [
        { name: 'Macan Putih', img: 'https://i.pinimg.com/564x/85/29/4e/85294e439c19486517488d07752bf58a.jpg' },
        { name: 'Macan Kumbang', img: 'https://i.pinimg.com/564x/48/28/e5/4828e5c641957a386417bcb677099d15.jpg' },
        { name: 'Naga', img: 'https://i.pinimg.com/236x/8e/52/bf/8e52bf40af937f33d946578091ae6bb6.jpg' },
        { name: 'Ular', img: 'https://i.pinimg.com/550x/fd/23/ba/fd23ba4494a292d2d2a94422d15c809c.jpg' },
        { name: 'Buaya Putih', img: 'https://awsimages.detik.net.id/community/media/visual/2023/10/22/komik-legenda-buaya-putih-penunggu-sungai-cirebon-2.png?w=600&q=90' },
        { name: 'Nyi Roro Kidul', img: 'https://imgx.sonora.id/crop/0x0:0x0/x/photo/2020/01/10/3196568835.jpg' },
        { name: 'Wesi Kuning', img: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/11/1/7abdbd3d-e68d-4672-852f-d5d199270fc6.jpg' },
        { name: 'Mahkota Bermustika', img: 'https://images.tokopedia.net/img/cache/250-square/hDjmkQ/2023/6/6/14b6ef20-88c5-43de-9644-492bee3c2b4a.jpg?ect=4g' },
        { name: 'Singo Barong', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRic--1LOy5ilDbTctjILpJg-cEzQ3OyW87Q&s' },
        { name: 'Eyang Semar', img: 'https://asset-a.grid.id/crop/0x0:0x0/x/photo/2023/05/31/fotojet-11jpg-20230531055856.jpg' },
        { name: 'Idu Geni Sabdo Dadi', img: 'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/294/2023/12/09/weton-si-pahit-lidah-395732510.jpeg' },
        { name: 'Kera Putih', img: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1fROy7.img?w=750&h=500&m=6&x=120&y=120&s=280&d=280' },
        { name: 'Nenek Tua', img: 'https://i.pinimg.com/736x/f3/f2/83/f3f28359eab16929772e405d7463895a.jpg' },
        { name: 'Naga Emas', img: 'https://i.pinimg.com/736x/e2/67/53/e26753756001d8dfdd4d41b344e7d5d9.jpg' },
        { name: 'Banaspati', img: 'https://e1.pxfuel.com/desktop-wallpaper/83/613/desktop-wallpaper-gambar-tengkorak-3d-kampung-di-2019-tengkorak.jpg' },        
        { name: 'Singa Api', img: 'https://cdn.pixabay.com/photo/2014/07/28/20/26/fire-4040661280.jpg' },
        { name: 'Yuyu Kangkang', img: 'https://qph.cf2.quoracdn.net/main-qimg-47de200f775a3fbedc545ff3f59bee28-lq' },
        { name: 'Jenglot', img: 'https://img.okezone.com/okz/500/content/2022/12/12/406/2725383/5-hal-mistis-tentang-jenglot-makhluk-peminum-darah-sebagai-sarana-pesugihan-AGvPl7qOGb.JPG' },
        { name: 'Nyi Blorong', img: 'https://s.kaskus.id/images/2018/05/11/994032720180511050549.jpg' },
        { name: 'Kalong', img: 'https://asset-a.grid.id/crop/0x0:0x0/x/photo/2023/02/14/bat-9882251280jpg-20230214114953.jpg' },
        { name: 'Kadal Buntong', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD5XpZiyUEs0MU_dmLgov0nAoHjjMF1U1NpQ&s' },
        { name: 'Anjing', img: 'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2024/01/16/675743818.jpg' },
        { name: 'Genderuwo', img: 'https://d220hvstrn183r.cloudfront.net/attachment/77737548048900116757.large' },
        { name: 'Leak', img: 'https://i.pinimg.com/236x/09/8b/a1/098ba103f8bafa7e4563bd7914dda8d9.jpg' },
        { name: 'Babi Ngepet', img: 'https://imgcdn.solopos.com/@space/_large/2015/05/ft0KSnqf-Babi-Ngepet-Youtube.jpg' },
        { name: 'Buto Ijo', img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/736ce22a-df63-4911-9b3f-d5b5bd8d1a81/d9sfmsk-e036b920-2c8d-49c1-9c56-2cb4029b2f2c.jpg/v1/fill/w1024,h1449,q75,strp/daily_sketch22__buto_ijo_by_xeno_agito_d9sfmsk-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ0OSIsInBhdGgiOiJcL2ZcLzczNmNlMjJhLWRmNjMtNDkxMS05YjNmLWQ1YjViZDhkMWE4MVwvZDlzZm1zay1lMDM2YjkyMC0yYzhkLTQ5YzEtOWM1Ni0yY2I0MDI5YjJmMmMuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Kz-CUKbKPAr_dmWxaE3xdWvwql2JSlItaJBg1NHr3G0' },
    ];

    if (nama) {
        const hash = hashString(nama);
        const randomIndex = hash % makhluk.length;
        const selectedMakhluk = makhluk[randomIndex];
        
        makhlukText.textContent = `${nama}, Khodam Kamu adalah: ${selectedMakhluk.name}`;
        makhlukImg.src = selectedMakhluk.img;
        makhlukImg.alt = `Gambar ${selectedMakhluk.name}`;
        makhlukImg.style.display = 'block';
    } else {
        makhlukText.textContent = 'Masukkan nama Anda terlebih dahulu.';
        makhlukImg.style.display = 'none';
    }
});

// Fungsi hash sederhana
function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0; // Konversi ke 32bit integer
    }
    return Math.abs(hash);
}
document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('myAudio');
    document.body.addEventListener('click', function() {
        audio.play();
    });
});