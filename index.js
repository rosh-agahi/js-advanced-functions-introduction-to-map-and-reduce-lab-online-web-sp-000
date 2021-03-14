// Your code here
function mapToNegativize(sourceArray){
  return sourceArray.map(x => x * -1);
}

function mapToNoChange(sourceArray){
  return sourceArray.map(x => x);
}

function mapToDouble(sourceArray){
  return sourceArray.map(x => x * 2);
}

function mapToSquare(sourceArray){
  return sourceArray.map(x => x ** 2);
}

function reduceToTotal(sourceArray, sstartingPoint=0) => {
    let total = startingPoint;
    for(let num of sourceArray){
        total = total + num
    }
    return total

