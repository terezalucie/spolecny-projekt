
    const colorBoxes = document.querySelectorAll(".color-box");
    const productImage = document.getElementById("product-image");

    colorBoxes.forEach(colorBox => {
        colorBox.addEventListener("click", () => {

            const color = colorBox.classList[1];
            productImage.style.fill = color;

            colorBoxes.forEach(box => {
                box.classList.remove("vybrana");
            });

                box.classList.add("vybrana");
        });
    });
