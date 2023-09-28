const ages = [25, 31, 42, 77];
//array function which multiples each number shown above//
const PartD = ages.map((item) => {
    if (item < 70) {
        return item * 2;
    } else {
        return item;
    }
})


console.log(PartD);
