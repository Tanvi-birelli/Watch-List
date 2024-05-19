const form = document.getElementById("input-form");
const input = document.getElementById("name");
const submitBtn = document.getElementById("submit-btn");
const watchList = document.getElementById("watch-list");
const listItems = document.getElementsByClassName("list-item");


submitBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    const value = input.value;
    if(value != ""){
        const listItem = document.createElement("li");
        listItem.setAttribute('class','list-item');
        listItem.innerText = value;
        watchList.appendChild(listItem);
        input.value =" ";
        listItem.addEventListener("dblclick", () => {
            listItem.remove();
        });
    }
})
