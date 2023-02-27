window.addEventListener('DOMContentLoaded', function () {
    let images = document.querySelectorAll('.trust__card-image');

    images.forEach(function (image) {

        image.addEventListener('click', function () {
            
            if (image.classList.contains('hidden')) {
                return;
            }
            
            image.classList.add('hidden');

            let src = image.dataset.src;

            image.insertAdjacentHTML('afterend','<iframe class="trust__card-iframe" width="100%" height="auto" src="' + src + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');

           

        });
    });

});