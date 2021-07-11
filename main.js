function generateKey(){
    let key = Math.random();
    let fourKey =Math.round(key*10000);
    if(fourKey<1000){
        return generateKey();
    }
    else{
        document.getElementById('get-key').value = fourKey;
    }
}
var trialleft = 3;
const buttonContainer = document.getElementById('digit-container');
buttonContainer.addEventListener('click',function(event){
    const digit = event.target.innerText;
    if(isNaN(digit)){
        if(digit == 'C'){
            document.getElementById('typed-input').value = '';
        }
        if(digit == '<'){
            const enteredValue = document.getElementById('typed-input').value;
            document.getElementById('typed-input').value = enteredValue.substr(0,enteredValue.length - 1);
        }
    }
    else{
        const typedInput = document.getElementById('typed-input');
        typedInput.value = typedInput.value + digit;
    }
})
var count = 0;
var tried = 3;
document.getElementById('submit-btn').addEventListener('click',function(){
    const typedInput = document.getElementById('typed-input').value;
    const getKey = document.getElementById('get-key').value;
    if(typedInput === getKey){
        document.getElementById('not-match').style.display = 'none';
        document.getElementById('match').style.display = 'block';
    }
    if(typedInput != getKey){
        document.getElementById('not-match').style.display = 'block';
        document.getElementById('match').style.display = 'none';

    count = count + 1 ;
    if(count <=3){
        totalCount = tried - count;
        if(totalCount>0){
            document.getElementById('try').innerText = totalCount + ' try left';
        } 
        else if(totalCount ==0){
            document.getElementById('try').innerText = totalCount + ' try left';
            document.getElementById('submit-btn').disabled = true;
            document.getElementById('submit-btn').style.backgroundColor = 'grey';
        }
    }
    }
})


