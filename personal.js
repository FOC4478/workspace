const tabs = document.querySelectorAll('.p1');
const tabContents =document.querySelectorAll('.div3');

tabs.forEach(tab => {
tab.addEventListener('click', ()=> {
 tabs.forEach(t => t.classList.remove('active'));
 tabContents.forEach(content => content.classList.remove('active-div'));
   
 tab.classList.add('active');
  
 const targetiD = tab.dataset.target;
 document.getElementById(targetiD).classList.add('active-div'); 


})



})
