console.log('connected');
// alert('ki khobor dost')
const showAlert = () =>{

    const num = Math.random()*10;
    console.log(num);
    if(num < 5){
      alert('ki khobor dosto');
    }
}
const askSomething = () =>{
   const decision =  confirm('are you comming to the picnic?')
   console.log(decision);
   if(decision === true){
        alert('Dosto 500 bkash kor')
   }
   else{
    console.log("dure gie mor" );
   }

}
const getUserInfo =() =>{
    const name = prompt('Tell us your name');
    console.log(name);
    if(!!name){
        console.log('welcome here', name);
    }
}