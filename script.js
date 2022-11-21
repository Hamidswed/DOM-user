let userInfo = [];
let doubleClick = false;
const containerDiv = document.getElementById("persons");
// get user information from api
const addUser = async () => {
  const response = await axios.get("https://randomuser.me/api/");
  const data = await response.data;
  const user = data.results[0];
  const fullName = `${user.name.first} ${user.name.last}`;
  const balance = Math.floor(Math.random() * 1000000);
  console.log(user);
  const newUser = {
    name: fullName,
    balance: balance,
  };
  userInfo.push(newUser);
  console.log(userInfo);
  displayUserInfo(userInfo);
};

const displayUserInfo = (userInfo) => {
  containerDiv.innerHTML = "";
  userInfo.map((item) => {
    const userItem = `<h3>${item.name}</h3><h3>$${item.balance}.00</h3>`;
    const userDiv = document.createElement("div");
    userDiv.setAttribute("class", "tab-header");
    userDiv.innerHTML = userItem;
    containerDiv.appendChild(userDiv);
  });
};

//double balance
const doubleMoney = () => {
  doubleClick = true;
  const result = userInfo.map((item) => {
    return { ...item, balance: item.balance * 2 };
  });
  console.log(result, "result");
  displayUserInfo(result);
};

const showMillioniares = () => {
  const result = userInfo.filter((item) => item.balance > 1000000);
  displayUserInfo(result);
};

const sortRichest = () => {
  userInfo.sort((a, b) => b.balance - a.balance);
  displayUserInfo(userInfo);
};

const sortByName = () => {
  userInfo.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  displayUserInfo(userInfo);
};

const calcWealth = () => {
  const total = userInfo.reduce((acc, curr) => acc + curr.balance, 0);
  console.log(total);
  const totalDiv = document.createElement("div");
  totalDiv.setAttribute("id", "total");
  const totalItem = `<h3>Total:</h3><h3>$${
    doubleClick ? total * 2 : total
  }.00</h3>`;
  totalDiv.innerHTML = totalItem;
  containerDiv.appendChild(totalDiv);
};

const refresh = () => {
  window.location.reload();
};
