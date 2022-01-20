function toggleSidebarMovil(sidebar)
{
    if (sidebar.value == 'true') {
        document.getElementById("sidebar-movil").style.left="-100%";
        document.querySelector("#button-sidebar-movil").value = 'false'
    } else {
        document.getElementById("sidebar-movil").style.left="0";
        document.querySelector("#button-sidebar-movil").value = 'true'
    }
}
function toggleSidebarMovilListItems(value)
{
    console.log()
    if (document.getElementById("submenu-"+value.name).style.bottom == "-100%") {
        document.getElementById("submenu-"+value.name).style.bottom="0px";
    } else {
        document.getElementById("submenu-"+value.name).style.bottom="-100%";
    }
}

$(function(){
    var gallery = $('.gallery a').simpleLightbox({navText:    ['&lsaquo;','&rsaquo;']});
});
    