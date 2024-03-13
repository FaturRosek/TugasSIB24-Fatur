// JavaScript Fundamental //
// Struktur Code
// alert("Hello World"); console.log("Statement Baris Kedua");

// console.log("Statement Baris Pertama")

// JavaScript Variabel
// var
// var fullName = "Fatur"
// fullName = "Garnacho"
// fullName = "Neymar JR"
// document.write(fullName)

// let
// let fullName = "Joko"
// fullName = "Ronaldo"
// document.write(fullName)

// //const
// const fullName = "Messi"
// fullName = "Joko"
// document.write(fullName)

//TipeData
//Number
/*
let bulat = 25
let desima = 25.2

document.writeln(bulat)
document.writeln("<br>")
document.writeln(desimal)
document.writeln("<br>")
document.writeln("Hasil Penjumlahan = ")
document.writeln(desimal + bulat)
*/

//String
// let text = "Arkatama"
// document.writeln(text)

//Boolean
/*
let admin = true
let perbandingan = 15 > 9
document.writeln(perbandingan) 
*/


//POP up
//Alert
alert("Hallo Selamat Datang di Arkatama")

//prompt
let String = prompt("Apakah kamu senang hari ini?")
alert("Jawaban Anda " + String)

//Confirm
let senang = confirm("Apakah kamu senang hari ini?")
senang ? alert("Anda Senang Hari ini") : alert('Anda Sedang Tidak Senang')

//Percabangan
//Else-if
let string = prompt('1 + 1 ?')

if  (string=2){
    alert('Jawaban anda benar')
}else if(string > 2){
    alert('Jawaban anda kelebihan')
}else if(string < 2){
    alert('jawaban anda kurang')
}else{
    alert('Jawaban anda salah')
}


//Perulangan /Looping
//for
for (let i =1 ; i < 5; i++) {
    document.writeln('For Perulangan ke - ' + i)
    document.writeln('<br>')
    
}

//let
let b = 1
while (b<10) {
    document.writeln('While Perulangan ke - ' + b)
    document.writeln('<br>')
    b++
}

// //Do-While
// let i = 1;
// document.writeln('Perulangan Do-While')
// document.writeln('<br>')
// do{
//     document.writeln(i)
//     Document.writeln('<br>')
//     i++
// } while (i<5);

//Loop Control : break
document.writeln('Perulangan Loop Control : Break')
Document.writeln('<br>')
for (let a = 1; a < 5; a++) {
    if (a==3) {
        break
    }
    document.writeln(a)
    document.writeln('<br>')
}

//loop control :Continue
document.writeln('Perulangan Loop Control : Continue')
document.writeln('<br>')
for (let i = 1; i < 5; i++) {
    if (i==3) {
        continue
    }
    document.writeln(a)
    document.writeln('<br>')
    
}