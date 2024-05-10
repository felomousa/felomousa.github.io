document.body.style.height = '222vh';

document.addEventListener('scroll', function () {
    const currentScrollY = window.scrollY;
    const letterF = document.getElementById('letterF');
    const letterM = document.getElementById('letterM');
    const maxScrollThreshold = 10 * window.innerHeight / 100;

    let effectiveScrollY = Math.min(currentScrollY, maxScrollThreshold);

    letterF.style.transform = `translateX(${-effectiveScrollY}vh)`;
    letterM.style.transform = `translateX(${effectiveScrollY}vh)`;
});
