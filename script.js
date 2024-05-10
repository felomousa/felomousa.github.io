document.body.style.height = '255vh';

document.addEventListener('scroll', function () {
    const currentScrollY = window.scrollY;
    const letterF = document.getElementById('letterF');
    const letterM = document.getElementById('letterM');
    const maxScrollThreshold = 10 * window.innerHeight / 100;
    let effectiveScrollY = Math.min(currentScrollY, maxScrollThreshold);
    let transformAmountF = (effectiveScrollY / maxScrollThreshold) * 100;
    let transformAmountM = (effectiveScrollY / maxScrollThreshold) * 159;

    letterF.style.transform = `translateX(${-transformAmountF}vh)`;
    letterM.style.transform = `translateX(${transformAmountM}vh)`;
});
