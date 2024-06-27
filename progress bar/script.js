const bar=document.querySelector(".outer")
let inner=document.querySelector(".inner")
let progressStart=0;
let progressEnd=85;
        
let progress=setInterval(()=>{
        progressStart++;
        bar.style.background=`conic-gradient(#7d2ae8 ${progressStart*3.6}deg, rgba(237,237,237) 0deg)`
        inner.textContent=`${progressStart}%`
        if(progressStart == progressEnd){
            clearInterval(progress);
            }},10)