function getMyDate(str){    
            var oDate = new Date(str),    
            oYear = oDate.getFullYear(),    
            oMonth = oDate.getMonth()+1,    
            oDay = oDate.getDate(),   
            oTime = oYear +'-'+ getzf(oMonth) +'-'+ getzf(oDay);//最后拼接时间    
            return oTime;    
        };    
        //补0操作    
        function getzf(num){    
            if(parseInt(num) < 10){    
                num = '0'+num;    
            }    
            return num;    
        } 

        console.log(getMyDate(151225735000));