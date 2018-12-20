window.addEventListener('load', function() {

    let svg = document.querySelectorAll(".svg-slice");
    let poly = document.querySelectorAll(".svg-slice polygon");
    let polyHeight = window.innerWidth/5;
    
    let setPolyHeight = () => {
        for(var i=0; i<poly.length; i++) {
            svg[i].setAttribute("height", polyHeight);
            poly[i].setAttribute("points", `0,0 ${window.innerWidth},${polyHeight} 0,${polyHeight}`);
        }
    }

    setPolyHeight();

    window.addEventListener('resize', function() {
        setPolyHeight();
    });
});