/*
    폼 검증 
*/

$(document).ready(function(){
 
    $('#testForm').submit(function(e) {
        e.preventDefault();
        var subjectInput = $('#testForm input[name=subject]');
        var eamilInput = $('#testForm input[name=email]');
        var divisionSelect = $('#testForm select[name=division]');
        var contentInput = $('#testForm textarea[name=content]');
 
 
        if(!subjectInput.val()){
            alert('제목을 입력해주세요');
            subjectInput.focus();
            return false;
        }
 
        if(!eamilInput.val()){
            alert('이메일을 입력해주세요');
            eamilInput.focus();
            return false;
        }
 
        if(!divisionSelect.val()){
            alert('지역을 선택해주세요');
            divisionSelect.focus();
            return false;
        }
 
        if(!contentInput.val()){
            alert('내용을 입력해주세요');
            contentInput.focus();
            return false;
        }
 
 
        return false;
    });


});
