/**********************/
// stack(premitive) ,heap(non-primitive)
 let mylinkdinName="aditya shrivastwa";
 let anotherName=mylinkdinName;
    anotherName="aditya shrivastwa 2.0";
    console.log(mylinkdinName);
    console.log(anotherName);
    let user1={
        email:"aditay@gmail.com",
        upi:"aditya@ybl",
    }
    let user2=user1
    user2.email="newemail@com"
    console.log(user1.email);
    console.log(user2.email);