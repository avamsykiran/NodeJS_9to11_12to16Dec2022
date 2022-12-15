
export default (doSkip = false) => {
    console.log("Object Oriented Programming: ");
    console.log("------------------------------------------------");

    if(doSkip){
        console.log("Execution skipped");
        return;
    }

    //JSON
    var emp1 = {empId:101,name:"Vamsy",basic:45678};
    var emp2 = {empId:102,name:"Suseela",basic:45678};
    console.log(emp1);
    console.log(emp2);
    
    //constructor function is a function that accepts data and
    //associate to with the 'this' keyword.
    function Emp(empId,name,basic){
        this.empId=empId;
        this.name=name;
        this.basic=basic;
    }

    var emp3 = new Emp(103,"Sagar",7890);
    var emp4 = new Emp(104,"Saradha",7845);
    console.log(emp3);
    console.log(emp4);

    //class
    class Employee {
        constructor(empId,name,basic){
            this.empId=empId;
            this.name=name;
            this.basic=basic;
        }
        ta(){
            return this.basic*0.05;
        }      
        hra(){
            return this.basic*0.15;
        }
    }

    var emp5 = new Employee(105,"Indhikaa",8900);
    var emp6 = new Employee(107,"Bhargava",6900);
    console.log(emp5); console.log(emp5.ta());
    console.log(emp6); console.log(emp6.ta());

    //Inheretence
    class Manager extends Employee{
        constructor(empId,name,basic,allownece){
            super(empId,name,basic);
            this.allownece=allownece;
        }        
        ta(){
            return this.basic*0.10;
        }
    }

    var mgr = new Manager(201,"Nagesh",9900,980);
    console.log(mgr); console.log(mgr.ta());

    const estimatePaintingCost = paintingRate => this.area()*paintingRate;

    class Rectangle{
        constructor(len,brd){
            this.len=len;
            this.brd=brd;
        }
        area(){
            return this.len*this.brd;
        }
    }

    class Circle{
        constructor(radius){
            this.radius=radius;
        }
        area(){
            return Math.PI*this.radius*this.radius;
        }
    }

    var r = new Rectangle(10,10);
    console.log(estimatePaintingCost.call(r,12.25));
    
    var c = new Circle(10);
    console.log(estimatePaintingCost.call(c,12.25));
};