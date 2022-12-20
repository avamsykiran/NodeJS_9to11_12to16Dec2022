

export default (doSkip = false) => {
    console.log("Standard Library Demo: ");
    console.log("------------------------------------------------");

    if(doSkip){
        console.log("Execution skipped");
        return;
    }

    let unm = "Vamsy Kiran";

    console.log(unm.toLowerCase());
    console.log(unm.toUpperCase());
    console.log(unm.length);
    console.log(unm.substring(3,8));
    console.log(unm.split(" "));
    console.log(unm.lastIndexOf("a"));

    console.log(Math.PI);
    console.log(Math.pow(2,4));
    console.log(Math.ceil(13.6));
    console.log(Math.ceil(13.4));
    console.log(Math.floor(13.6));
    console.log(Math.floor(13.4));
    console.log(Math.round(13.6));
    console.log(Math.round(13.4));

    let dt = new Date();
    let dt2 = new Date("1947-08-15");
    console.log(dt);
    console.log(dt2);
    console.log(dt.getFullYear()-dt2.getFullYear())
    console.log(dt.toISOString());

    //new javascript date-time api
    //https://2ality.com/2021/06/temporal-api.html#the-temporal-api
}