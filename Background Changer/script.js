const hexColor = ["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
const button = document.getElementById("buttonChanger")
const color = document.getElementById("color")
console.log(button)

// cara gtuin teks
// color.innerHTML = "<h1>Halo Selamat datang</h1>"
// color.textContent = 'Halo Selamat datang'
// color.innerText = 'Halo Selamat datang'

function changeColor(){
    //alert('Wadidaw')
    let warna = "#"
    for (let i=1;i<=6;i++){
        warna += hexColor[randomNumber()]
    }
    console.log(warna)
    color.textContent = warna
    document.body.style.backgroundColor = warna
}

function randomNumber(){
    return  Math.floor(Math.random() * hexColor.length)
}