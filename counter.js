

let Counter = (function () {
    let count_total = 0;
    let incrementAmt = 1;
    
    function increment () {
        count_total += incrementAmt
        return count_total;
    }
    function setIncrement (n) {
        incrementAmt = n;
    }
    function getCount () {
        return count_total;
    }

    return {
    	"setIncrement": setIncrement,
        "increment": increment,
        "getCount": getCount,
    };
})();

