const URL ="https://api.frankfurter.app/latest?from=EUR&to=USD";
 const dropdowns=document.querySelectorAll(".dropdown select");
  const from=document.querySelector(".from select");
   const to=document.querySelector(".to select");
const msg=document.querySelector(".msg");
const btn=document.querySelector("button");

 for( let select of dropdowns){
    for(curr in countryList){
      let newoption=document.createElement("option");
      newoption.innerText=curr;
      newoption.value=curr;
      if(select.name==="from" && curr==="USD"){
        newoption.selected="selected";
      }else if(select.name==="to" && curr==="INR"){
        newoption.selected="selected";
      }
      select.append(newoption);
    }
select.addEventListener("change",(evt)=>{
updateFlag(evt.target);
 })
 }
const updateFlag=(element)=>{
 let curr=element.value;
let countryCode=countryList[curr];
console.log(curr , countryCode);
let newsrc=`https://flagsapi.com/${countryCode}/flat/64.png`
let img=element.parentElement.querySelector("img"); //element=select , select=>parent=>img
img.src=newsrc;
}

btn.addEventListener("click", async (evt) => {
  evt.preventDefault();

  let amount = document.querySelector(".amount input");
  let amountval = amount.value;

  if (amountval === "" || amountval < 1) {
    amountval = 1;
    amount.value = "1";
  }

  const URLNEW = `https://api.frankfurter.app/latest?from=${from.value}&to=${to.value}`;

  let response = await fetch(URLNEW);
  let data = await response.json();

  let rate = data.rates[to.value];
  let finalAmount = (rate * amountval).toFixed(2);

  msg.innerText = `${amountval} ${from.value} = ${finalAmount} ${to.value}`;
});

 