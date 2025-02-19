document.addEventListener('DOMContentLoaded',()=>{
    const btnAh=document.getElementById('btnAh')
    const btnLa=document.getElementById('btnLa')
    const sectionLa=document.getElementById('La')
    const SectionAhLa=document.getElementById('AhLa')
    const LaTitle=document.getElementById('LaTitle')
    const LaGifAngry=document.getElementById('LaGifAngry')
    const LaGifHappy=document.getElementById('LaGifHappy')
    const form =document.getElementById('form')
    let n=0
    

    if (document.body.clientWidth<600){
        btnLa.addEventListener('click',()=>{
            n++
            let t=Math.floor((Math.random()*document.body.clientHeight)/2)
            let l=Math.floor((Math.random()*document.body.clientWidth)/2)
            btnLa.style.cssText=`position:absolute; top:${t}px; left:${l}px;`
        })
    }else{
        btnLa.addEventListener('mouseover',()=>{
            n++
            let t=Math.floor((Math.random()*document.body.clientHeight)/2)
            let l=Math.floor((Math.random()*document.body.clientWidth)/2)
            btnLa.style.cssText=`position:absolute; top:${t}px; left:${l}px;`
            console.log(t,l)
        })
    }
    if(btnAh){
        btnAh.addEventListener('click',async ()=>{
            sectionLa.style.display='flex'
            SectionAhLa.style.cssText=`display:none !important;`
            if(n>0) {
                LaGifAngry.style.display='block'
                form.style.cssText='background-color:#fcfefc !important;'
                let title=document.createElement('h1')
                title.textContent=`kdbti clikiti 3la La ${n} mra`
                LaTitle.appendChild(title)
            }else{
                
                LaGifHappy.style.display='block'
                form.style.cssText='background-color:white !important;'
                let title=document.createElement('h1')
                title.textContent=`7ta ana 😍`
                LaTitle.appendChild(title)

            }
        })
    }
})