const url =
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";

//↓確認 fetch 回來的資料
function checkStates(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

// ↓ 從 url fetch 資料
function ajax(url) {
  const div = document.getElementById("errorMessage");
  return (
    fetch(url)
      .then(checkStates)
      .then((response) => response.json())
      // .then((data) => console.log(data)) //中間用來確認 json() 返還的 data 是否為 array
      .catch((error) => {
        div.innerHTML = `There is an Error message: ${error}`;
      })
  );
}

function render(data) {
  const tBody = document.querySelector("tbody");
  let itemsInformation = data
    .map((item) => {
      return `<tr>
    <td>${item.name}</td>
    <td>${item.price}</td>
    <td>${item.description}</td>
  </tr>`;
    })
    .join("");
  tBody.innerHTML = itemsInformation;
}

ajax(url).then((data) => {
  render(data);
});
