function SuperType(){
    this.property = true;
}
SuperType.prototype.getSuperValue = function () {
    return this.property;
};

function SubType() {
    this.subproperty = false;
}

SubType.prototyp = new SuperType();

SubType.prototyp.getSubValue = function () {
    return this.subproperty;
};

var instance = new SubType();
console.log(instance.getSuperValue());