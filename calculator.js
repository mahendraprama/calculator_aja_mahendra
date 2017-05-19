window.onload = function(){

	var keys = document.getElementsByTagName('button');

	for(var i = 0; i < keys.length; i++){
		
		keys[i].onclick = function(){

			var keyValue 	= this.innerHTML;
				detail 		= document.getElementById('detail'),
				detailValue = detail.innerHTML;
				result 		= document.getElementById('result-value');

		switch	(keyValue){
		case 'C':
			detail.innerHTML ='';
			result.innerHTML ='0';
			break
		case '/':
		case '*':
		case '-':
		case '+':
		case '%':
		
			detail.innerHTML += this.innerHTML;
			break;
		case '=':
			result.innerHTML = eval(detail.innerHTML);
			break;
		default:
			detail.innerHTML += this.innerHTML;
			break;
	
		}
	}
	}
}