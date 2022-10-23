function checkCashRegister(price, cash, cid) {

  let change = cash - price;
  console.log("change due to cust: " + change);

  let cid2 = [ 
  [ 'PENNY', 0 ],
  [ 'NICKEL', 0 ],
  [ 'DIME', 0 ],
  [ 'QUARTER', 0 ],
  [ 'ONE', 0 ],
  [ 'FIVE', 0 ],
  [ 'TEN', 0 ],
  [ 'TWENTY', 0 ],
  [ 'ONE HUNDRED', 0 ] 
            ];

  console.log("cid: " + cid);
  console.log("cid2: " + cid2)

  let give20 = 0;
  let have20 = 0;

  let give10 = 0;
  let have10 = 0;

  let give5 = 0;
  let have5 = 0;

  let give1 = 0;
  let have1 = 0;

  let giveQ = 0;
  let haveQ = 0;

  let giveD = 0;
  let haveD = 0;

  let giveN = 0;
  let haveN = 0;

  let giveP = 0;
  let haveP = 0;


  if (change >= 20) {
    give20 = Math.floor(change / 20);
    console.log("20 bills: " + give20);
    console.log("Twenty in cid: " + cid[7][1] + " USD")
    have20 = cid[7][1]/20;
    console.log("have 20 bills: " + have20);
    console.log("have20: " + have20);
    console.log("give20: " + give20);
    if (have20 > 0) {
      if (give20 < have20) {
        cid2[7][1] = give20 * 20;
        console.log("Twenty to cust: " + cid2[7][1] + " USD");
        change = change - cid2[7][1];
        change = +change.toFixed(2);
        console.log("change due: " + change);
      } else {
        cid2[7][1] = have20 * 20;
        console.log("Twenty to cust: " + cid2[7][1] + " USD");
        console.log("T: " + change);
        change = change - cid2[7][1];
        change = +change.toFixed(2);
        console.log("change due: " + change);
      }
    }
  }

  if (change >= 10) {
    give10 = Math.floor(change / 10);
    console.log("10 bills: " + give10);
    console.log("Ten in cid: " + cid[6][1] + " USD")
    have10 = cid[6][1]/10;
    console.log("have 10 bills: " + have10);
    console.log("have10: " + have10);
    console.log("give10: " + give10);
    if (have10 > 0) {
      if (give10 < have10) {
        cid2[6][1] = give10 * 10;
        console.log("Ten to cust: " + cid2[6][1] + " USD");
        change = change - cid2[6][1];
        change = +change.toFixed(2);
        console.log("change due: " + change);
      } else {
        cid2[6][1] = have10 * 10;
        console.log("Ten to cust: " + cid2[6][1] + " USD");
        change = change - cid2[6][1];
        change = +change.toFixed(2);
        console.log("change due: " + change);
      }
    }
  }

  if (change >= 5) {
    give5 = Math.floor(change / 5);
    console.log("5 bills: " + give5);
    console.log("Five in cid: " + cid[5][1] + " USD")
    have5 = cid[5][1]/5;
    console.log("have 5 bills: " + have5);
    console.log("have5: " + have5);
    console.log("give5: " + give5);
    if (have5 > 0) {
      if (give5 < have5) {
        cid2[5][1] = give5 * 5;
        console.log("Five to cust: " + cid2[5][1] + " USD");
        change = change - cid2[5][1];
        change = +change.toFixed(2);
        console.log("change due: " + change);
      } else {
        cid2[5][1] = have5 * 5;
        console.log("Five to cust: " + cid2[5][1] + " USD");
        change = change - cid2[5][1];
        change = +change.toFixed(2);
        console.log("change due: " + change);
      }
    }
  }

   if (change >= 1) {
    give1 = Math.floor(change / 1);
    console.log("1 bills: " + give1);
    console.log("One in cid: " + cid[4][1] + " USD")
    have1 = cid[4][1]/1;
    console.log("have 1 bills: " + have1);
    console.log("have1: " + have1);
    console.log("give1: " + give1);
    if (have1 > 0) {
      if (give1 < have1) {
        cid2[4][1] = give1 * 1;
        console.log("One to cust: " + cid2[4][1] + " USD");
        change = change - cid2[4][1];
        change = +change.toFixed(2);
        console.log("change due: " + change);
      } else {
        cid2[4][1] = have1 * 1;
        console.log("One to cust: " + cid2[4][1] + " USD");
        change = change - cid2[4][1];
        change = +change.toFixed(2);
        console.log("change due: " + change);
      }
    }
  }

  if (change >= 0.25) {
    giveQ = Math.floor(change / 0.25);
    console.log("Q coins: " + giveQ);
    console.log("Q in cid: " + cid[3][1] + " USD")
    haveQ = cid[3][1]/0.25;
    console.log("have Q coins: " + haveQ);
    console.log("haveQ: " + haveQ);
    console.log("giveQ: " + giveQ);
    if (haveQ > 0) {
      if (giveQ < haveQ) {
        cid2[3][1] = giveQ * 0.25;
        console.log("Q to cust: " + cid2[3][1] + " USD");
        change = change - cid2[3][1];
        change = +change.toFixed(2);
        console.log("change due: " + change);
      } else {
        cid2[3][1] = haveQ * 0.25;
        console.log("Q to cust: " + cid2[3][1] + " USD");
        change = change - cid2[3][1];
        change = +change.toFixed(2);
        console.log("change due: " + change);
      }
    }
  }

  if (change >= 0.1) {
    giveD = Math.floor(change / 0.1);
    console.log("D coins: " + giveD);
    console.log("D in cid: " + cid[2][1] + " USD")
    haveD = cid[2][1]/0.1;
    console.log("have D coins: " + haveD);
    console.log("haveD: " + haveD);
    console.log("giveD: " + giveD);
    if (haveD > 0) {
      if (giveD < haveD) {
        cid2[2][1] = giveD * 0.1;
        console.log("D to cust: " + cid2[2][1] + " USD");
        change = change - cid2[2][1];
        change = +change.toFixed(2);
        console.log("change due: " + change);
      } else {
        cid2[2][1] = haveD * 0.1;
        console.log("D to cust: " + cid2[2][1] + " USD");
        change = change - cid2[2][1];
        change = +change.toFixed(2);
        console.log("change due: " + change);
      }
    }
  }

  if (change >= 0.05) {
    giveN = Math.floor(change / 0.05);
    console.log("N coins: " + giveN);
    console.log("N in cid: " + cid[1][1] + " USD")
    haveN = cid[1][1]/0.05;
    console.log("have N coins: " + haveN);
    console.log("haveN: " + haveN);
    console.log("giveN: " + giveN);
    if (haveN > 0) {
      if (giveN < haveN) {
        cid2[1][1] = giveN * 0.05;
        console.log("N to cust: " + cid2[1][1] + " USD");
        change = change - cid2[1][1];
        change = +change.toFixed(2);
        console.log("change due: " + change);
      } else {
        cid2[1][1] = haveN * 0.05;
        console.log("N to cust: " + cid2[1][1] + " USD");
        change = change - cid2[1][1];
        change = +change.toFixed(2);
        console.log("change due: " + change);
      }
    }
  }

  if (change >= 0.01) {
    giveP = Math.floor(change / 0.01);
    console.log("P coins: " + giveP);
    console.log("P in cid: " + cid[0][1] + " USD")
    haveP = cid[0][1]/0.01;
    console.log("have P coins: " + haveP);
    console.log("haveP: " + haveP);
    console.log("giveP: " + giveP);
    if (haveP > 0) {
      if (giveP < haveP) {
        cid2[0][1] = giveP * 0.01;
        console.log("P to cust: " + cid2[0][1] + " USD");
        change = change - cid2[0][1];
        change = +change.toFixed(2);
        console.log("change due: " + change);
      } else {
        cid2[0][1] = haveP * 0.01;
        console.log("P to cust: " + cid2[0][1] + " USD");
        change = change - cid2[0][1];
        change = +change.toFixed(2);
        console.log("change due: " + change);
      }
    }
  }

  // console.log("cid2: " + cid2);

  let cid3 = [
    [cid2[7][0], cid2[7][1]],
    [cid2[6][0], cid2[6][1]],
    [cid2[5][0], cid2[5][1]],
    [cid2[4][0], cid2[4][1]],
    [cid2[3][0], cid2[3][1]],
    [cid2[2][0], cid2[2][1]],
    [cid2[1][0], cid2[1][1]],
    [cid2[0][0], cid2[0][1]],
    ]
  // console.log(cid2);
  // console.log(cid3);

  if(cid3[7][1] == 0) {
    cid3.splice(7,1);
  }
  if(cid3[6][1] == 0) {
    cid3.splice(6,1);
  }
  if(cid3[5][1] == 0) {
    cid3.splice(5,1);
  }
  if(cid3[4][1] == 0) {
    cid3.splice(4,1);
  }
  if(cid3[3][1] == 0) {
    cid3.splice(3,1);
  }
  if(cid3[2][1] == 0) {
    cid3.splice(2,1);
  }
  if(cid3[1][1] == 0) {
    cid3.splice(1,1);
  }
  if(cid3[0][1] == 0) {
    cid3.splice(0,1);
  }

  console.log(change);

  console.log(cid2[0][1])

  // for status: "CLOSED"
  if (cid2[0][1] == 0.5) {
      console.log({
      status: "CLOSED", 
      change: cid2
      })
    return {
      status: "CLOSED", 
      change: cid2
      }
  } else if (change == 0) {
    console.log({
      status: "OPEN", 
      change: cid3
      })
    return {
      status: "OPEN", 
      change: cid3
      }
  } else if (change > 0) {
    cid3 = [];
    console.log({
      status: "INSUFFICIENT_FUNDS", 
      change: cid3
      })
    return {
      status: "INSUFFICIENT_FUNDS", 
      change: cid3
      }
  }

  // return change;
}

/*
checkCashRegister(19.5, 20, 
[
  ["PENNY", 1.01], 
  ["NICKEL", 2.05], 
  ["DIME", 3.1], 
  ["QUARTER", 4.25], 
  ["ONE", 90], 
  ["FIVE", 55], 
  ["TEN", 20], 
  ["TWENTY", 60], 
  ["ONE HUNDRED", 100]
]
  );
  */

  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01], 
    ["NICKEL", 2.05], 
    ["DIME", 3.1], 
    ["QUARTER", 4.25], 
    ["ONE", 90], 
    ["FIVE", 55], 
    ["TEN", 20], 
    ["TWENTY", 60], 
    ["ONE HUNDRED", 100]]);

    console.log(checkCashRegister(3.26, 100, [
    ["PENNY", 1.01], 
    ["NICKEL", 2.05], 
    ["DIME", 3.1], 
    ["QUARTER", 4.25], 
    ["ONE", 90], 
    ["FIVE", 55], 
    ["TEN", 20], 
    ["TWENTY", 60], 
    ["ONE HUNDRED", 100]]))

    checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

    checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
    
    /* 
    should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
    */
