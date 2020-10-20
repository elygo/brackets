module.exports = function check(str, bracketsConfig) {

  const conf = Object.fromEntries(bracketsConfig);
  var stack = [];

  for(var i = 0; i < str.length; i++){
  		switch(str.charAt(i)){
  			case '(': case '[': case '{': case '1': case '3': case '5':
  				stack.push(str.charAt(i));
  			break;
  			case ')': case ']': case '}': case '2': case '4': case '6':
  				if(conf[stack.pop()] !== str.charAt(i)) return false;
  			break;
  			case '|': case '7': case '8':
  				if(stack.length === 0 || stack[stack.length-1] !== str.charAt(i)){
  					stack.push(str.charAt(i));
  				} else {
  					stack.pop();
  				}
  		}
  	}


  return stack.length === 0;

}
