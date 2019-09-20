window.onload = function() {  
    let preloader = document.getElementById('preloader'); 
    function foo() {
       preloader.style.display = 'none';
    }
    setInterval(foo, 2000);
}