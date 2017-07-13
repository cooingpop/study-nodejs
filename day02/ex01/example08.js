

$(document).ready(function(){

    $('#start').click(function() {
        if(Timer.isPending) {
            return false;
        }
        Timer.isPending = true;
        Timer.startTimer();
    });
 
    $('#pause').click(function(){
        Timer.pauseTimer();
    });
    
    $('#reset').click(function(){
        Timer.resetTimer();
    });



});


var Timer = {
    
    isPending : false,
    currentSec : 0,
    currentMin : 0,
 
    startTimer : function(){
        if(this.isPending){ 
            this.currentSec+=1;
            if(this.currentSec==60){         
                this.currentSec=0;         
                this.currentMin+=1;         
            }     
            $('#min').html( ('0' + this.currentMin).slice(-2) ); // 뒤에 2자리 자름
            $('#sec').html( ('0' + this.currentSec).slice(-2) );
            setTimeout("Timer.startTimer()", 1000);         
        } 
    },
 
    pauseTimer : function(){
        this.isPending = false;
    },
 
    resetTimer : function(){
        this.isPending = false;
        this.currentSec = 0;
        this.currentMin = 0;
        $('#min').html( "00" );
        $('#sec').html( "00" );
    }
 
}