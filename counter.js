

let Counter = (function () {
    let count_total = 0;
    function increment () {
        return ++count_total;
    }
    function count () {
        return count_total;
    }

    return {
        "increment": increment,
        "count": count,
    };
})();

