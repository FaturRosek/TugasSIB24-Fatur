let endpoint = 'https://crudcrud.com/api/4400afc109b04a1eba32238e5ed0e6ce/users'

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
    const response = await fetch(`https://crudcrud.com/api/ae7344f466764d7e8f25cd9642c34901/users/${_id}`, {
        method: 'DELETE'
    });

}

displayProducts();



// Ubah bg
function ubahMode() {
    const ubah = document.body;
    ubah.classList.toggle('dark');
}