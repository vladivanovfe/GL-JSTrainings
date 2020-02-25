function isEven(num) {
    
  if (num % 1 !== 0) {
    return 'Number is not const!'
  } else if (num == 0) {
    return true
  } else if (num == 1) {
    return false
  } else if (num < 0) {
      return isEven(-num)
  } else {
      return isEven(num - 2)
  }
}