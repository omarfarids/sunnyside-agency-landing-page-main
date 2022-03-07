// ===== document elements =====
let humpIcon = document.querySelector(".navigation");
let listItems = document.querySelector(".header-list")

// ===== events =====
humpIcon.addEventListener("click",()=>{
    showingItems(listItems);
})

// ===== functions =====
function showingItems(selectedItem){
    selectedItem.classList.toggle("popover");
}