document.addEventListener("keyup",function (e) {
    const a=e.key;
    console.log(a);
    if (!isNaN(a)) {
           const a= sum(a,a);
            console.log(a);
            let display= document.getElementById("display");
            display.innerText=a;
            display='';
      
    }
})
