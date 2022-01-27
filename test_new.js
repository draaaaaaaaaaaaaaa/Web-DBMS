// //identifier

// /** Identifier adalah suatu tanda yang mewakili nama-nama variabel, method, class, dsb. Contoh dari Identifier adalah : Hello, main, System, out. Pendeklarasian Java adalah case-sensitive */

// //stait ment

// /**suatu pertanyaan js yang penting dasar dan memiliki tugas tertentu */

// // let name = "hello word"
// // console.log(name)

// //expressio

// /**expresion adalah expresi js yang akan  berfungsi untuk meng hasil kan nilai  */

// // let firs =1
// // let second = 2
// // let result = firs + second

// // if(result>1){
// //     console.log("benar " + result)
// // } 

// //scope

// /**adlah cakupan kode agar bisa mengakses atau mengatasi */

// //global scope 
// /**merupakan cskupan di seluruh file */

// // var a = "halo teman"
// // function firs(){
// //     console.log(a)
// // }

// // function second(){
// //     a = 'nilai sudah diubah'
// //     console.log(a)
// // }

// // //biar bisa di publik
// // firs() 
// // second()



// // let motor = yamaha
// // function kendaran(){
// //     console.log(motor)
// //     if(true){
// //         let mobil = angkot
// //         console.log(mobil)
// //     }
// // }
// // kendaran(kendaran)


// // function Hello(sapa) {
// //     var text = "Nama :" + sapa
// //     return function(){
// //         console.log(text)
// //     }
// // }
// // var nama = Hello(" fulan")

// // nama()


// function helo(Nama,kelas){
//     var nama = "Nama :" + Nama
//     var kelas = "Kelas :" + kelas
//     return function(){
//         console.log(nama,kelas)
//     }
// }
// var helo = helo("Daffa","rpl")

/**
 * * Tipe data undefined
 */

//let a = 1
//function first() {
//    a = 2
//}
//first()
//console.log(a)

//function second() {
//    a = "ini function kedua"
//    console.log(a)
//}

//first()
//second()

/**
 * * tipe data null
 * * tipe data primitif yang nilainya adala kosong / null
 */

//let a = null
//console.log(typeof a);

// ! number
/**
 * * number adalah angka 
 * * dan kakaknya yang mampu menampung nilai lebih banyak adalah BigInt dengan menaruh n dibelakang angka
 * * contoh: 69420n
 */

/**
 * * NaN atau Not a Number
 * * NaN merupakan nilai yang muncul dikarenakan nilai tersebut bukanlah angka (Not a Number)
 * * atau bukan number
 */
//let a = 17
//if (a >= 17) {
//    a = 'anda belum cukup umur'
//    console.log(a / 2)
//} else {
//    a = 'sudah cukup'
//    console.log(a)
//}

/**
 * * string
 * * merupakan tipe data yang menampung karakter.
 * * symbolnya bisa '', "", ``
 */

//let a = 'dias'
//console.log(a.length)

//let kata = 'helloworld'
//for (let i = 0;i < kata.length;i++) {
//    console.log(kata[i])
//}

/**
 * * boolean
 * * sebuah tipe data yang menentukan kebenaran, dan hanya memiliki 2 nilai
 * * yaitu true dan false
 */

//let belajar = true
//if (belajar) {
//    console.log('Kelas ini sedang belajar')
//}



const table = {
    kendaraan: {
        mobil: 'peugeot',
        motor: 'v-xion',
        sepeda: 'united'
    },
    jalan: 'Jalan berkah',
    kota: 'bekasi',
    platNomor: 'jabodetabek',
    kereta: {
        namaKa: 'Argo bromo anggrek',
        tujuan: 'senen - pasar turi'
    }
}

console.table(table)