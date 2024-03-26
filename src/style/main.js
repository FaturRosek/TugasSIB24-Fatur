let endpoint = 'https://crudcrud.com/api/af2ed99119f84ff9a887ce1472ee7516/users'

async function fetchProducts() {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
}

// Tampilan tabel
async function displayProducts() {
    const konten = document.getElementById('konten');
    const products = await fetchProducts();

    konten.innerHTML = '';

    products.forEach((product, index) => {
        konten.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${product.nama}</td>
                <td>${product.jumlah}</td>
                <td>${product.harga}</td>
                <td><button onclick="hapusData(${product._id})">Hapus</button></td>
            </tr>
        `;
    });
}


// Simpan data ke API
async function saveData() {
    const nama = document.getElementById('nama').value;
    const jumlah = document.getElementById('jumlah').value;
    const harga = document.getElementById('harga').value;

    nama && jumlah && harga
    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nama: nama,
            jumlah: jumlah,
            harga: harga
        })
    });
    document.getElementById('nama').value = '';
    document.getElementById('jumlah').value = '';
    document.getElementById('harga').value = '';
}


// Hapus Data
async function hapusData(_id) {
    const response = await fetch(`https://crudcrud.com/api/af2ed99119f84ff9a887ce1472ee7516/users/${_id}`, {
        method: 'DELETE'
    });

}

displayProducts();



// Ubah bg
function ubahMode() {
    const ubah = document.body;
    ubah.classList.toggle('dark');
}

// Product Responsive
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});