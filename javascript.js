// //old version:


// const personArray = [];
// let moneyArray = [];
// const divId = [];
// const nameIdArr = [];
// const nameSort = [];
// let newMoneyArray = [];
// let isValid = false;
// let isRich = false;
// let isCalc = false;

// const addUser1 = async () => {
//   document.querySelector("#totalWealth").disabled = false;
//   if (validation()) {
//     removeTotal();
//   }
//   const person = await axios
//     .get("https://randomuser.me/api/")
//     .then((response) => displayInfo(response.data))
//     .catch((error) => console.log(error));
// };

// const displayInfo = (data) => {
//   data.results.map((item) => {
//     const money = Math.floor(Math.random() * 1000000);
//     const personItem = `
//         <div class='tab-header' id=${item.login.uuid}>
//           <h3 class="name" id="${money + 1}">${item.name.first} ${
//       item.name.last
//     }</h3>
//           <h3 class="money" id="${money}">$${money}.00</h3>
//         </div>`;
//     const newDiv = document.createElement("div");
//     const container = document.getElementById("persons");
//     newDiv.innerHTML = personItem;
//     container.appendChild(newDiv);
//     personArray.push(
//       `${data.results[0].name.first} ${data.results[0].name.last}`
//     );
//     moneyArray.push(money);
//     divId.push(data.results[0].login.uuid);
//     nameIdArr.push(money + 1);
//   });
// };

// const doubleMoney1 = () => {
//   document.querySelector("#totalWealth").disabled = false;
//   if (validation()) {
//     removeTotal();
//   }
//   if (isRich) {
//     moneyArray.sort((a, b) => b - a);
//     isRich = false;
//   }
//   moneyArray.map((item) => {
//     let id = String(item);
//     document.getElementById(id).innerHTML = `$${item * 2}.00`;
//   });
//   newMoneyArray = moneyArray.map((item) => item * 2);
//   moneyArray = newMoneyArray;
// };

// const validation = () => {
//   if (isValid) {
//     return true;
//   }
//   return false;
// };

// const removeTotal = () => {
//   const totalElement = document.getElementById("total");
//   totalElement.remove();
//   isValid = false;
// };

// const totalWealth1 = () => {
//   if (moneyArray.length !== 0) {
//     document.querySelector("#totalWealth").disabled = true;
//     isValid = true;
//     const total = moneyArray.reduce(
//       (preValue, currValue) => preValue + currValue
//     );
//     const totalDiv = document.createElement("div");
//     totalDiv.setAttribute("id", "total");
//     const totalItem = `<h3>Total:</h3><h3>$${total}.00</h3>`;
//     totalDiv.innerHTML = totalItem;
//     const container = document.getElementById("persons");
//     container.appendChild(totalDiv);
//   }
// };

// const refresh = () => {
//   window.location.reload();
// };

// const richest = () => {
//   isRich = true;
//   moneyArray.sort((a, b) => b - a);
//   nameIdArr.sort((a, b) => b - a);

//   nameIdArr.map((item) => {
//     let nameVal = document.getElementById(String(item)).innerHTML;
//     nameSort.push(nameVal);
//   });

//   for (let i = 0; i < nameIdArr.length; i++) {
//     document.getElementById(divId[i]).firstElementChild.innerHTML = nameSort[i];
//     document.getElementById(
//       divId[i]
//     ).lastElementChild.innerHTML = `$${moneyArray[i]}.00`;
//   }
// };

// const millionaires = () => {
//   const result = moneyArray.filter((item) => item >= 1000000);
// };
