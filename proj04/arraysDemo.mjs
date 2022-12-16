
export default (doSkip = false) => {
    console.log("Working with Arrays: ");
    console.log("------------------------------------------------");

    if (doSkip) {
        console.log("Execution skipped");
        return;
    }

    class Employee {
        constructor(empId, name, sal, hireDate) {
            this.empId = empId;
            this.name = name;
            this.sal = sal;
            this.hireDate = hireDate;
        }
    }

    var emps = [
        new Employee(101, "Rama", 45000, new Date("2021-01-01")),
        new Employee(102, "Bharata", 65000, new Date("2021-02-01")),
        new Employee(103, "Laxman", 35000, new Date("2021-03-01")),
        new Employee(104, "Shatrugnya", 85000, new Date("2022-01-01")),
        new Employee(105, "Sita", 49000, new Date("2022-01-01")),
        new Employee(106, "Urmila", 50000, new Date("2020-01-01")),
        new Employee(107, "Kausalya", 35000, new Date("2020-02-01")),
        new Employee(108, "Kaika", 95000, new Date("2020-03-01")),
        new Employee(109, "Sumitra", 98000, new Date("2022-05-01")),
        new Employee(110, "Dasharadha", 15000, new Date("2022-05-01"))
    ];

    const separator = "----------------------------------------------------------------";

    console.log(emps);
    console.log(separator);

    console.log(emps.length);
    console.log(separator);

    emps.push(new Employee(111, "Vamsy", 7890, new Date()));
    console.log(emps);
    console.log(separator);

    emps.pop();
    console.log(emps);
    console.log(separator);

    emps.splice(6, 3);
    console.log(emps);
    console.log(separator);

    emps.forEach(e => { e.empId = e.empId + 900; });
    console.log(emps);
    console.log(separator);

    console.log(emps.find( e => e.empId===1001 ));
    console.log(emps.findIndex( e => e.empId===1001 ));
    console.log(emps.find( e => e.empId===101 ));
    console.log(emps.findIndex( e => e.empId===101 ));
    console.log(separator);

    var strArray = emps.map( e => `${e.name} earns ${e.sal} per month, identified by ${e.empId}` );
    console.log(strArray);
    console.log(separator);

    var allEmpsJoinedIn2021 = emps.filter( e => e.hireDate.getFullYear()===2021 );
    console.log(allEmpsJoinedIn2021);
    console.log(separator);

    var highestPaidEmp = emps.reduce( (e1,e2) => e1.sal>e2.sal?e1:e2 );
    console.log(highestPaidEmp);
    console.log(separator);

    //spread operator on arrays
    var nums1 = [1,2,3,4];
    var nums2 = [6,7,8,9];
    var nums3 = [nums1,nums2];
    console.log(nums3);
    var nums4 = [...nums1,5,...nums2]; //[1,2,3,4,5,6,7,8,9]
    console.log(nums4);
    console.log(separator);

    //spread operator on objects
    var txn = {txnId:1,header:"Salary",amount:45678,type:"CREDIT",txnDate:new Date()};
    console.log(txn);
    var txn2 = {...txn,txnId:2,amount:78900};
    console.log(txn2);
    console.log(separator);


    var txns = [
        {txnId:1,header:"Salary",amount:45678,type:"CREDIT"},
        {txnId:2,header:"Rent",amount:4000,type:"DEBIT"},
        {txnId:3,header:"Fuel",amount:1200,type:"DEBIT"},
        {txnId:4,header:"Internet",amount:500,type:"DEBIT"},
        {txnId:5,header:"Bonus",amount:10000,type:"CREDIT"},
        {txnId:6,header:"Birthday Party",amount:5678,type:"DEBIT"}
    ];

    console.log(txns);
    var totalIncome = 0;
    var totalExpenditure = 0;
    var balane = totalIncome - totalExpenditure;
    console.log(totalIncome);
    console.log(totalExpenditure);
    console.log(balane);
}
