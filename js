var menOpsWork = true;
function popup(x){
	document.getElementById('headDiv').style.filter='brightness(50%)';
	document.getElementById('menDiv').style.filter='brightness(50%)';
	document.getElementById('toyCars').style.filter='brightness(50%)';
	document.body.style.backgroundColor='#aab99c';
	document.getElementById('popup'+x).style.display='block';
	menOpsWork = false;
}
function popupclose(x)
{
	document.getElementById('headDiv').style.filter='brightness(1)';
	document.getElementById('menDiv').style.filter='brightness(1)';
	document.getElementById('toyCars').style.filter='brightness(1)';
	document.body.style.backgroundColor='#F5FBEF';
	document.getElementById('popup'+x).style.display='none';
	menOpsWork = true;
}
function menPop(x)
{
	if(menOpsWork){
		document.getElementById('menPop'+x).style.display='block';
		document.getElementById('menEle'+x).style.backgroundColor='#E85D75';
		for(let i = 1; i < 5; i++){
			if (i != parseInt(x)){
				document.getElementById('menPop'+String(i)).style.display='none';
				document.getElementById('menEle'+String(i)).style.backgroundColor='transparent';
			}
		}
	}
}
function closeAll(){
	for(let i = 1; i < 5; i++){
		document.getElementById('menPop'+String(i)).style.display='none';
		document.getElementById('menEle'+String(i)).style.backgroundColor='transparent';
	}
}
function openToyCars(){
	document.getElementById('menPop2').style.display='none';
	document.getElementById('toyCars').style.visibility='visible';
}
function addToCart(i){
	var n = document.getElementById('popup'+i).getAttribute("name")
	sel = document.getElementById('cart');
	sel.options[sel.options.length] = new Option(n, 'Value1');
	alert("Item added to cart!");
}
