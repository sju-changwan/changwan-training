function test(){

    //요소
    const userid = document.getElementById('userid');
    const userpwd = document.getElementById('userpwd');
    const reuserpwd = document.getElementById('reuserpwd');
    const username = document.getElementById('username');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const hobby = document.getElementsByName('hobby');
    const isRRN = document.getElementById('isrrn');

    //정규식
    const expPw = new RegExp("^[0-9a-zA-Z]{4,7}$");
    const expName = /^[가-힣]+$/;
    const expPhone = /^[0-1]{3}\-\d{3,4}\-\d{4}$/;
    const expEmail = /^[0-9a-zA-z]+@[a-zA-z]+.[a-zA-z]+$/;


    if(userid.value == ""){
        alert('아이디를 입력해주세요.');
        userid.focus();
        return false;
    }
    if(userpwd.value == ""){
        alert('비밀번호를 입력해주세요.');
        userpwd.focus();
        return false;
    }
    
    if(!(expPw.test(userpwd.value))){
        alert('비밀번호 형식을 지켜주세요');
        userpwd.focus();
        return false;
    }
    if(userpwd.value != reuserpwd.value){
        alert('비밀번호 확인과 일치시켜주세요.');
        userpwd.focus();
        return false;
    }
    if(username.value == ""){
        alert('이름을 입력하세요');
        username.focus();
        return false;
    }
    if(expName.test(username.value) == false){
        alert('이름 형식을 확인하세요');
        username.focus();
        return false;
    }
    if(expPhone.test(phone.value) == false){
        alert('휴대폰번호 형식확인');
        phone.focus();
        return false;
    }
    if(expEmail.test(email.value) == false){
        alert('이메일 형식확인');
        email.focus;
        return false;
    }
    let flag = false;
    for(let i of hobby){
        if(i.checked){
            flag = true;
        }
    }
    if(!flag){
        alert('체크 항목에 1개 이상 체크해주세요.');
        return false;
    }
    if(isRRN.value == 'false'){
        alert('주민등록번호 검증을 해주세요.');

        return false;
    }
    
}
function moveNext(){
    const rrn1= document.getElementById('rrn1');
    if(rrn1.value.length>=6){
        document.getElementById('rrn2').focus();
    }
}
function checkRRN(){
    const ssn1 = document.getElementById('rrn1');
    const ssn2 = document.getElementById('rrn2');
    const isRRN = document.getElementById('isrrn');

    if(ssn1.value == "" || ssn2.value == ""){
        alert('주민등록번호를 입력하세요.');
        ssn1.focus();
        return false;
    }

    const ssn = ssn1.value + ssn2.value;
    const s1 = Number(ssn.substr(0, 1))*2;
    const s2 = Number(ssn.substr(1, 1))*3;
    const s3 = Number(ssn.substr(2, 1))*4;
    const s4 = Number(ssn.substr(3, 1))*5;
    const s5 = Number(ssn.substr(4, 1))*6;
    const s6 = Number(ssn.substr(5, 1))*7;
    const s7 = Number(ssn.substr(6, 1))*8;
    const s8 = Number(ssn.substr(7, 1))*9;
    const s9 = Number(ssn.substr(8, 1))*2;
    const s10 = Number(ssn.substr(9, 1))*3;
    const s11 = Number(ssn.substr(10, 1))*4;
    const s12 = Number(ssn.substr(11, 1))*5;
    const s13 = Number(ssn.substr(12, 1));

    let result = s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12;
    result = result % 11;
    result = 11 - result;
    if(result >= 10) result = result % 10;

    if(result == s13){
        alert('유효한 주민등록번호입니다.');
        isRRN.value = 'true';
    }else{
        alert('유효하지 않은 주민등록번호입니다.');
        
    }
}
