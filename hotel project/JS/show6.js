(function checkForClick6() {
    console.log("running....");
    if (sessionStorage.getItem('show-more6')) {
        for (let index = 1; index <= 3; index++) {
            let image = document.createElement('img');
            image.src = `/image/${sessionStorage.getItem('show-more6')}${index}.jpg`;
            document.body.firstElementChild.append(image);

            image.style.width = '700px'
            image.style.height = '600px'
            image.style.margin = '30px'
            image.style.borderRadius = '70px'
        }
    }
})();

