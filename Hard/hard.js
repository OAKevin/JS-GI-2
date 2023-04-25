function BMI(name , height, mass){
    this.name = name;
    this.height = height;
    this.mass = mass;
}
var BMI = [
    new BMI("Tom", 9, 8),
    new BMI("Jerry", 10, 45)
]
var tomsBmi = BMI[0].mass / BMI[0].height
var jerrysBmi = BMI[1].mass / BMI[1].height
bmi = Boolean(tomsBmi > jerrysBmi)
console.log("Is",BMI[0].name+"'s BMI higher than", BMI[1].name+"'s?", bmi);