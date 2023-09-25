const ages = [25, 31, 42, 77];

const PartD = ages.map((item) => {
    if (item < 70) {
        return item * 2;
    } else {
        return item;
    }
})


console.log(PartD);