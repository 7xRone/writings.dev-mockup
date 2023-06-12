function display_nav(hovered) {
    var element2 = document.querySelector('.nav-list');
    if (hovered) {
      element2.style.display = 'block';
      document.querySelectorAll('.menu-lines').forEach(function(e){
        e.style.backgroundColor = "white";
      })
    } if  (!hovered) {
        element2.style.display = 'none'; // Set it back to the original width
        document.querySelectorAll('.menu-lines').forEach(function(e){
            e.style.backgroundColor = "rgb(171, 168, 168)";
        })
    }
  }