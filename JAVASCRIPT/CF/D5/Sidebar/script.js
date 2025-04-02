let toggleBtn = document.querySelector('.sidebar-toggle');
let closeBtn = document.querySelector('.close-btn');
let sidebar = document.querySelector('.sidebar');
// select the items that are gona be changed/used
let menuStatus = false;
//the status false tells the browser that the sidebar is closed
function menuToggle() {
    if (menuStatus == false){
        sidebar.style.transform = 'translateX(0)';
        menuStatus = true;
    }else{
        sidebar.style.transform = 'translateX(-100%)';
        menuStatus = false;
    }
    //check if the sidebar is closed or open and make them transition 
}
toggleBtn.addEventListener('click', menuToggle);
//we add the eventlistener to make the button open
function closeMenu() {
    sidebar.style.transform = 'translate(-100%)';
    menuStatus = false;
}
//create a function that closes the sidebar 
closeBtn.addEventListener('click', closeMenu);
//create an event listener for the button to close the sidebar
