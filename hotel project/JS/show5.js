(function checkForClick5() {
    console.log("running....");
    if (sessionStorage.getItem('show-more5')) {
        for (let index = 1; index <= 6; index++) {
            let image = document.createElement('img');
            image.src = `/image/${sessionStorage.getItem('show-more5')}${index}.jpg`;
            document.body.firstElementChild.append(image);

            image.style.width = '700px'
            image.style.height = '600px'
            image.style.margin = '30px'
            image.style.borderRadius = '70px'
        }
    }
})();

