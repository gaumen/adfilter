let div = document.getElementById('tads') || document.getElementById('ads');
let cu_cont = document.getElementsByClassName('cu-container')[0] || document.getElementsByClassName('js-sidebar-ads')[0];
try{
	if(div)
		div.style.display='none';
	if(cu_cont)
		cu_cont.remove()
}
catch(err){
	console.log(err);
}
