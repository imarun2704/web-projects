
class Arun {
    constructor(name, buildYear, noOfTrees, area) {

        this.buildYear = buildYear;
        this.name = name;
        this.noOfTrees = noOfTrees;
        this.area = area;

    }

    calcAge() {
        return new Date().getFullYear() - this.buildYear
    }



    calcDensity() {
        let name, val, tree;
        
        name = this.name;
        tree = this.noOfTrees;

        val = this.noOfTrees / this.area;
     
        return [name, val, tree];

    }


}

let sum = 0, tree, name;
const parks = [new Arun('Apark', 1967, 870, 1000), new Arun('Bpark', 1998, 950, 1200), new Arun('Cpark', 1980, 1100, 1000)];


parks.forEach(cur => {
    sum += cur.calcAge();
});
console.log(`Our ${parks.length} parks have an average of ${sum / parks.length}`);

parks.forEach(cur => {

    [name, val, tree] = cur.calcDensity();
    console.log(`${name} has tree density of ${val} trees per km2 `);

    tree >= 1000 ? console.log(`${name} has more than 1000 trees  `) : console.log(``);

});



class janasri extends Arun {

    constructor(name, buildYear, noOfTrees, area, streetLength) {
        super(name, buildYear, noOfTrees, area);

        this.streetLength = streetLength;

    }


    getArea() {

        return this.area;
    }



    getStreetLen() {
        return [this.streetLength, this.name, this.buildYear];
    }

}



let cal = 0;
const streets = [
    new janasri('1st Street', 2003, 0, 4, 7),
    new janasri('2nd Street', 2001, 0, 5, 6), new janasri('3rd Street', 2005, 0, 3, 2), new janasri('4th Street', 2007, 0, 3)];



streets.forEach(cur => {
    cal += cur.getArea();

});
console.log(`Our ${streets.length} streets have a total length of ${cal} km, with an average of ${cal / streets.length} km. `)


streets.forEach(cur => {
    let [len, name, year] = cur.getStreetLen();

    if (len <= 5) {
        console.log(`${name} , built in ${year}, is a small street`);
    } else if (len == 6) {
        console.log(`${name} , built in ${year}, is a normal street`);
    } else {
        console.log(`${name} , built in ${year}, is a huge street`);
    }

});



















