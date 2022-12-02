(()=>{
    const $=document.querySelector.bind(document);
    let timer=6000;
    let isRotating=false;
    let currentRotate=0;
    const wheel=$('.wheel');
    const btnStart=$('.btn-start');
    const msg=$('.msg');
    const listGift=[

        {
            txtName:'Voucher 200K',
            percent:10/100
        },
        {
            txtName:'Code giảm 30%',
            percent:10/100
        },
        {
            txtName:'Code giảm 50%',
            percent:10/100
        },
        {
            txtName:'Bình giữ nhiệt NINOMAXX',
            percent:10/100
        },
        {
            txtName:'Nón bảo hiểm NINOMAXX',
            percent:10/100
        },
        {
            txtName:'Code giảm giá 10%',
            percent:30/100
        },
        {
            txtName:'Voucher 100K',
            percent:10/100
        },
        {
            txtName:'Voucher 500K',
            percent:10/100
        },
    ];
    const size=listGift.length;
    const rotateV=360/size;
    const skewYV=90-rotateV;
    const renderItem=()=>{
        listGift.forEach((item, index)=>{
            const itemGift=document.createElement('li');
            let a= parseInt(rotateV) * parseInt(index) ;
            let b=parseInt(rotateV)/2;
            let c= parseInt(index%2);
            itemGift.style.transform = ' rotate('+a+'deg) skewY(-'+skewYV+'deg) ';  
            if(c==0){
                itemGift.innerHTML ='<p class="text-item even" style="transform:skewY('+skewYV+'deg) rotate('+b+'deg)"><b>' + item.txtName + '</b></p>';
            }else{
                itemGift.innerHTML ='<p class="text-item " style="transform:skewY('+skewYV+'deg) rotate('+b+'deg)"><b>' + item.txtName + '</b></p>';
            }
            
            wheel.appendChild(itemGift);
         
        });
    };
    const rotateWheel=(currentRotate,index)=>{
        let rW=currentRotate-index*rotateV-rotateV/2;
        wheel.style.transform=' rotate('+rW+'deg) '; 
    };
    const getGift=(randomNumber)=>{
        let curentPercent=0;
        let list=[];
        listGift.forEach((item,index)=>{
            curentPercent +=item.percent;
            randomNumber <=curentPercent && list.push({
                ...item,index
        });
        }) ;
        return list[0];
    };
    const showtxtGift=txt=>{
        setTimeout(()=>{
            isRotating=false;
            msg.innerHTML='Chúc mừng bạn đã trúng:' +txt ;
            },timer);
    };
    const start=()=>{
        isRotating=true;
        msg.innerHTML='';
        const random=Math.random();
        const gift=getGift(random);
        currentRotate +=360*10;
        rotateWheel(currentRotate,gift.index);
        showtxtGift(gift.txtName);
    };
    btnStart.addEventListener('click',()=>{
        !isRotating && start();
    });
    renderItem();
})();
