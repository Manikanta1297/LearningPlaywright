// step 1 - Defination of Function
function getUserStatus()
{
    // var status_code = undefined;  <-- hoisted declaration with undefined
    console.log(Status_Code);
    var Status_Code = "ACTIVE";
    console.log(Status_Code);
}

// step 2 - Calling the function
getUserStatus();

// NOTE : VAR IS FUNCTION -SCOPED Status is hosted to the top of the function getUserStatus, 
// not to global scope  