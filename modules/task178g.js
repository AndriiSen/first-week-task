function integersThatFits (arr) {
    return arr.filter((el,i,arr) => 
       i === 0 || i === arr.length -1 ? false : el < (arr[i-1] + arr[i+1])/2
    ).length;
}
module.exports = integersThatFits;
