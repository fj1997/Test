window.onload = function(){
            var oDaily = document.getElementById('daily'),
                oMonthly = document.getElementById('monthly'),
                oAll = document.getElementById('all'),
                oTabNav = document.getElementById('tabNav'),
                aNav = oTabNav.getElementsByTagName('li'),
                oContent = document.getElementById('tabContent'),
                aUl = oContent.getElementsByTagName('ul');
                prevTab = aNav[0];

             function fnTab(num){
             	for(var i=0; i<aNav.length; i++) {
             		aNav[i].className = '';
             		aUl[i].className = '';
             	}
             	aNav[num].className = 'active';
             	aUl[num].className = 'show';
             }

             for (var i=0; i<aNav.length; i++) {
             	aNav[i].index = i;
             	aNav[i].onclick = function(){
             		num = this.index;
             		fnTab(num);
             	}
             }
            
            for (var i=0; i<aUl.length; i++) {
                hover(aUl[i]);
            }
            
            function hover(ul) {
                var aLi = ul.getElementsByTagName('li');
                for(var i=0; i<aLi.length; i++){
                    aLi[i].onmouseover = function(){
                        this.getElementsByTagName('a')[0].style.display = 'none';
                        this.getElementsByTagName('div')[0].style.display = 'block';
                    }
                    aLi[i].onmouseout = function(){
                        this.getElementsByTagName('a')[0].style.display = 'block';
                        this.getElementsByTagName('div')[0].style.display = 'none';
                    }
                }
                    
            }
        }