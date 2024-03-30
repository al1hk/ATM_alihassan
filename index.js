import inquirer from "inquirer";
let mybalance = 10000;
let pin = 8899;
let pininput = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: "Please enter your correct pin code !",
});
if (pin === pininput.pin) {
    console.log("Correct Pin Code !");
    let opr = await inquirer.prompt({
        name: "operations",
        type: "list",
        message: "Please select on of the operations! ",
        choices: ['Fast Cash', "Deposit", "Withdrawl", 'Check Balance']
    });
    if (opr.operations === "Fast Cash") {
        let fc = await inquirer.prompt({
            name: "fast",
            type: "list",
            message: "Please select how much money would you like to withdrawl!",
            choices: ['1000', '5000', '10000', '20000']
        });
        if (fc.fast === '1000') {
            console.log(`Please collect your cash.\nYour remaining balance is ${mybalance - 1000}`);
        }
        else if (fc.fast === '5000') {
            console.log(`Please collect your cash.\nYour remaining balance is ${mybalance - 5000}`);
        }
        else if (fc.fast === '10000') {
            console.log(`Please collect your cash.\nYour remaining balance is ${mybalance - 10000}`);
        }
        else if (fc.fast === '20000') {
            console.log(`Insufficient Balance!`);
        }
    }
    else if (opr.operations === "Withdrawl") {
        let amountout = await inquirer.prompt({
            name: "amount",
            type: "number",
            message: 'Enter how much money would you like to withdrawl!'
        });
        if (mybalance > amountout.amount) {
            console.log(`Please collect your cash\nYour remaining balance is ${mybalance - amountout.amount}`);
        }
        else if (amountout.amount > mybalance) {
            console.log(`Insufficient Balance!`);
        }
    }
    else if (opr.operations === 'Deposit') {
        let dp = await inquirer.prompt({
            name: "deposit",
            type: "number",
            message: "Please enter how much money would you like to deposit!"
        });
        if (dp.deposit > 1000) {
            console.log(`Your balance now is ${mybalance + dp.deposit}`);
        }
        else if (dp.deposit < 1000) {
            console.log(`You can only deposit amount above 1000`);
        }
        else {
            console.log(`Invalid Operation!`);
        }
    }
    else if (opr.operations === "Check Balance") {
        console.log(`Your remaining balance is ${mybalance}`);
    }
    else {
        console.log("Invalid Operation!");
    }
}
else {
    console.log("Invalid Pin Code! ");
}
