window.onload=function(){
	var oImg=document.getElementsByTagName("img");
	var arrImg=["img/nst.gif","img/nsg.gif","img/st.gif","img/sth.gif"];
	var oConment=document.getElementById('conment');
	var num=-1;
	function score(nn,aa){
		switch(nn){
				case 0:	for (var i = 0; i <= nn; i++) {
					oImg[i].src=arrImg[1];
				};
				oConment.innerHTML='极差';
				break;
				case 1:
				for (var i = 0; i <= nn; i++) {
					oImg[i].src=arrImg[1];
				};
					oConment.innerHTML='很差';
				break;
				case 2:	for (var i = 0; i <= nn; i++) {
					oImg[i].src=aa;
					oConment.innerHTML='还行';
				};
				break;
				case 3:for (var i = 0; i <= nn; i++) {
					oImg[i].src=aa;
				};
				oConment.innerHTML='不错';
				break;
				case 4:
				for (var i = 0; i <= nn; i++) {
					oImg[i].src=aa;
				};
					oConment.innerHTML='推荐';
				break;
			}
	}
	for(var i=0;i<oImg.length;i++){
		oImg[i].index=i;
		oImg[i].onclick=function(){
			for(var i=0;i<oImg.length;i++){
				oImg[i].src=arrImg[0];
			}
			num=this.index
			score(num,arrImg[2])
		};
	oImg[i].onmouseover=function(){
			for(var i=0;i<oImg.length;i++){
				oImg[i].src=arrImg[0];
			}
			var n=this.index;
			score(n,arrImg[3])
	};
	oImg[i].onmouseout=function(){
					for(var i=0;i<oImg.length;i++){
				oImg[i].src=arrImg[0];
			}
		if(num){
			for (var j= 0; j<=num; j++) {
				if(num<2){
					oImg[j].src=arrImg[1];
					if(num==0){
						oConment.innerHTML='极差';
					}else{
						oConment.innerHTML='很差';
					}
				}else{
					oImg[j].src=arrImg[2];
					if(num==2){
						oConment.innerHTML='还行';
					}else if(num==3){
						oConment.innerHTML='不错';
					}else{
						oConment.innerHTML='推荐';
					}
				}
				}
	        };
		}
	}
}

