/*function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
        image.src = "images//pic_bulboff.gif";
    } else {
        image.src = "images//pic_bulbon.gif";
    }
}*/

function change(x) {
    if (x.match('blog')) {
        window.open('pages/blog.html');
    }
    else {
        var a = "sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t";
        var b = "sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider";
        var c = "menu-content-selected";
        var d = "menu-content"
        var elemsSelected = document.getElementsByClassName(a);
        var elemSelected = elemsSelected.item(0);
        var contentsSelected = document.getElementsByClassName(c);
        var contentSelected = contentsSelected.item(0);
        var elemClicked = document.getElementById('menu ' + x);
        var contentClicked = document.getElementById('menu-content ' + x);
        elemClicked.className = elemClicked.className.replace(b, a);
        elemSelected.className = elemSelected.className.replace(a, b);
        contentClicked.className = contentClicked.className.replace(d, c);
        contentSelected.className = contentSelected.className.replace(c, d);
        elemClicked.id = elemClicked.id.replace("menu", "menu-selected");
        elemSelected.id = elemSelected.id.replace("menu-selected", "menu");
        contentClicked.id = contentClicked.id.replace(d, c);
        contentSelected.id = contentSelected.id.replace(c, d);
    }
}




function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}


/* 
about me
resume
contact
blog
projects
videos

"sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t"
"sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider"
*/
