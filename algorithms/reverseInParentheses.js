function reverseInParentheses(inputString) {
  let parenthArray = [];
  
  for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] === '(') {
          parenthArray.push(i);
      } else if (inputString[i] == ')') {
         
      let A = [...inputString]
      reverse(A, parenthArray[parenthArray.length-1] + 1, i);
      inputString = [...A];
      parenthArray.pop();
    }
  }
  
  let resultString = "";
  for (let i = 0; i < inputString.length; i++)
  {
    if (inputString[i] != ')' && inputString[i] != '(')
    {
      resultString += (inputString[i]);
    }
  }
  return resultString;
}

function reverse(str, parenth, index)
{
  if (parenth < index)
  {
    let char = str[parenth];
    str[parenth] = str[index];
    str[index] = char;
    reverse(str, parenth + 1, index - 1);
  }
}