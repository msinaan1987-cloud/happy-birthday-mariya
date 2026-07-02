const save=document.getElementById("saveBtn");

const success=document.getElementById("success");

const finalBtn=document.getElementById("finalBtn");

save.onclick=function(){

const text=document.getElementById("memoryBox").value.trim();

if(text===""){

alert("Please write one memory first ❤️");

return;

}

success.style.display="block";

finalBtn.style.display="inline-block";

};

finalBtn.onclick=function(){

window.location.href="final.html";

};
