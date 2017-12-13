window.onload=function(){
	var oNav=document.getElementById("nav");
	var aLi=oNav.getElementsByTagName("li");
	var oContent=document.getElementById("contents");
	var aImg = oContent.getElementsByTagName('img');
	var aUl = oContent.getElementsByTagName('ul');
	var arrImg = [
        ['img/pic1.jpg', 'img/pic2.jpg', 'img/pic3.jpg'],
        ['img/pic1.jpg', 'img/pic2.jpg', 'img/pic3.jpg', 'img/pic4.jpg'],
        ['img/pic1.jpg', 'img/pic2.jpg', 'img/pic3.jpg', 'img/pic4.jpg', 'img/pic5.jpg'],
        ['img/pic1.jpg', 'img/pic2.jpg', 'img/pic3.jpg', 'img/pic4.jpg']
    ];
    fnSmallTab(aUl[0]);
	var num=0;
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onclick=function(){
			 num=this.index;
			for(var j=0;j<aLi.length;j++){
				aLi[j].className='';
				aUl[j].className = '';
				aImg[j].style.display = 'none';
			}
			this.className='selected';
			aUl[num].className = 'show';
			aImg[num].style.display = 'block';
			fnSmallTab(aUl[num]);
		}
	}
	function fnSmallTab(smallUl){
			var oLi=smallUl.getElementsByTagName("li");
			for(var k=0;k<oLi.length;k++){
				oLi[k].index=k;
				oLi[k].onclick=function(){
				for(var k=0;k<oLi.length;k++){
					oLi[k].className='';
					}
				this.className='active';
				num1=this.index;
				aImg[num].src=arrImg[num][num1];
			}
		}
	}
}