
//// 1 ////
function calculate(num1, num2, operator) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          return "Division by zero is not allowed";
        }
        return num1 / num2;
      default:
        return "Invalid operator";
    }
  }

console.log(calculate(5, 3, '-'));


//// 2 ////
function findSecondKey(inputObject) {
    let keys = Object.keys(inputObject);
    
    if (keys.length < 2) {
      return null;
    }
  
    let secondKey = keys[1];
  
    if (typeof inputObject[secondKey] === 'object') {
      return findSecondKey(inputObject[secondKey]);
    } else {
      return secondKey;
    }
  }
  
  const inputObject1 = {
    key1: 'value1',
    key2: {
      key3: 'value3',
      key4: 'value4',
    },
    key5: {
      key6: {
        key7: 'value7',
        key8: 'value8',
      },
    },
  };
  
  const secondKey1 = findSecondKey(inputObject);
  console.log(secondKey);
  
//// 3 ////

function findSecondKey(inputObject) {
    let keys = Object.keys(inputObject);
  
    if (keys.length < 2) {
      return null;
    }
  
    let secondKey = keys[1];
  
    if (typeof inputObject[secondKey] === 'object') {
      return findSecondKey(inputObject[secondKey]);
    } else {
      return secondKey;
    }
  }
  
  function processObject(obj, secondKeyFunction) {
    return secondKeyFunction(obj);
  }
  
  
  const inputObject = {
    key1: 'value1',
    key2: {
      key3: 'value3',
      key4: 'value4',
    },
    key5: {
      key6: {
        key7: 'value7',
        key8: 'value8',
      },
    }
  }
  
  const secondKey = processObject(inputObject, findSecondKey);
  console.log(secondKey); 
  
