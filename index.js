function concatStrings(arg, separator) {
  let sumValue = arg;
  let nextValue;
  
  if (typeof arg !== 'string') {
    sumValue = '';
  }
  
  return function func() {
    nextValue = arguments[0];
    const isCorrectString = typeof nextValue === 'string';
    const isCorrectSeparator = typeof separator === 'string';
    
    if (isCorrectString) {
      isCorrectSeparator ? sumValue += separator + nextValue : sumValue += nextValue;
      
      return func;
    }
    
    return sumValue;
  }
}


class Calculator {
  constructor(numberOne, numberTwo) {
    if (!Number.isSafeInteger(numberOne) || !Number.isSafeInteger(numberTwo)) {
      throw new Error('Ошибка!');
    }
    
    this.numberOne = numberOne;
    this.numberTwo = numberTwo;
    
    this.setX = this.setX.bind(this);
    this.setY = this.setY.bind(this);
    this.logSum = this.logSum.bind(this);
    this.logMul = this.logMul.bind(this);
    this.logSub = this.logSub.bind(this);
    this.logDiv = this.logDiv.bind(this);
  }
  
  setX(num) {
    if (!Number.isSafeInteger(num)) {
      throw new Error('Ошибка!');
    }
    
    return this.numberOne = num;
  }
  
  setY(num) {
    if (!Number.isSafeInteger(num)) {
      throw new Error('Ошибка!');
    }
    
    return this.numberTwo = num;
  }
  
  logSum() {
    return this.numberOne + this.numberTwo;
  }
  
  logMul() {
    return this.numberOne * this.numberTwo;
  }
  
  logSub() {
    return this.numberOne - this.numberTwo;
  }
  
  logDiv() {
    if (this.numberTwo === 0) {
      throw new Error('Ошибка!');
    }
    
    return this.numberOne / this.numberTwo;
  };
}




