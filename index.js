let n= 1
let m = 2
function nextImg(){
    m = n+1
    if (n==5)
    [
        m = 1
    ]
    img = document.getElementById("img").src
    document.getElementById("img").src =  img.replace("Image"+n ,"Image"+m)
    console.log(img.src)
    n = m
}
function prevImg(){
    m = n-1
    if (n==1)
    [
        m = 5
    ]
    img = document.getElementById("img").src
    document.getElementById("img").src =  img.replace("Image"+n ,"Image"+m)
    console.log(img.src)
    n = m
}