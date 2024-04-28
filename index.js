/* 
    const colorBoxes = document.querySelectorAll(".color-box");
    const productImage = document.getElementById("product-image");

    colorBoxes.forEach(colorBox => {
        colorBox.addEventListener("click", () => {

            // vezme vybranou třídu a obraví to podle názvu třídy, tedy podle základní barvy white/black/red...

            const color = colorBox.classList[1];
            productImage.style.fill = color;

            colorBoxes.forEach(box => {
                box.classList.remove("vybrana");
            });

                box.classList.add("vybrana");
        });
    }); */


    const colorBoxes = document.querySelectorAll(".color-box");
    const productImage = document.getElementById("product-image");
    
    colorBoxes.forEach(colorBox => {
        colorBox.addEventListener("click", () => {
    
            //způsob jedna - vezme barvu přímo z html
            const color = colorBox.style.backgroundColor;
            productImage.style.fill = color;
    
            // způsob dva - využije barvu ze stylů s třídy .white/...
    /*         const color = window.getComputedStyle(colorBox).getPropertyValue("background-color"); 
            productImage.style.fill = color; */
    

            colorBoxes.forEach(box => {
                box.classList.remove("vybrana");
            });
    
            colorBox.classList.add("vybrana");
        });
    });
    
