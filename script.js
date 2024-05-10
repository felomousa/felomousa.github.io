document.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const letterF = document.getElementById('letterF');
    const letterM = document.getElementById('letterM');

    letterF.style.transform = `translateX(${-scrollPosition}px)`;
    letterM.style.transform = `translateX(${scrollPosition}px)`;
});

document.body.style.height = '200vh';