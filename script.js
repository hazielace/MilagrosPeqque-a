/*$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    $('.navbar .menu li a').click(function(){

        $('html').css("scrollBehavior", "smooth");
    })
    
});*/

((d)=>{
    window.addEventListener('scroll', function(e){
        const $navbar = d.querySelector(".navbar")
      
        if(this.scrollY > 20){
            
            $navbar.classList.add("sticky");
            //$('.navbar').addClass("sticky");
        }else{
            $navbar.classList.remove("sticky");
            //$('.navbar').removeClass("sticky");
        }
    }
        
    );
})(document);

((d) => {
    const $btnMenu = d.querySelector(".menu-btn"),
      $menu = d.querySelector(".menu");
    $btnMenu.addEventListener("click", (e) => {
      $menu.classList.toggle("active");
    });
  
    d.addEventListener("click", (e) => {
      if (!e.target.matches(".menu a")) return false;
      $menu.classList.remove("active");
    });
  })(document);