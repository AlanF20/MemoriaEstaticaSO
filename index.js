let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

let MemL
let posi;

function CapturarDatos () {
    let ran = Math.random() * 250
    let ran2 = Math.random() * 250
    let ran3 = Math.random() * 250
    let TamMem = parseInt(document.getElementById('TamMem').value)
    let TamSo = parseInt(document.getElementById('TamSo').value)
    if(TamSo > (TamMem * .30)){
        alert("Tamaño del sistema operativo mayor al 30%")
        document.getElementById('TamSo').value = ""
    }else{
        ctx.fillStyle = `rgb(${ran},${ran2},${ran3})`;
        ctx.fillRect (0, 20, TamMem, 50);
        ctx.beginPath();
        ctx.moveTo(TamSo, 100);
        ctx.lineTo(TamSo, 20);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = `rgb(${ran2},${ran3},${ran})`;
        ctx.fillRect (0, 20, TamSo, 50);
        ctx.beginPath();
        ctx.moveTo(TamMem, 100);
        ctx.lineTo(TamMem, 20);
        ctx.closePath();
        ctx.stroke();
        document.getElementById('MemoriaLibre').innerHTML =  TamMem - TamSo
        MemL = TamMem - TamSo
    }
    posi = 0 + TamSo
}

function AgregarPart(){
    let ran = Math.random() * 250
    let ran2 = Math.random() * 250
    let ran3 = Math.random() * 250
    let TamPart = parseInt(document.getElementById('TamPart').value)
    if(!MemL){
        alert("No ha ingresado memoria")
    }else   if(TamPart > MemL){
        alert("Tamaño de particion mayor a la memoria libre")
        document.getElementById('TamPart').value = ""
    }else{
        MemL = MemL - TamPart
        document.getElementById('MemoriaLibre').innerHTML =   MemL
        ctx.fillStyle = `rgb(${ran2},${ran3},${ran})`;
        ctx.fillRect (posi, 20, TamPart, 50);
        ctx.beginPath();
        ctx.moveTo(posi, 100);
        ctx.lineTo(TamPart, 20);
        ctx.closePath();
        ctx.stroke();
        posi = posi + TamPart
        alert(TamPart + " " + MemL + " " + posi)
    }
}
