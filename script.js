/*******Animation of Knowlegdes Mastery Percentage*******/
//ProgressJS
let animeBar = (idElement, percentage) => {
    let bar = new ProgressBar.Line('#'+idElement, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFAA00',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'},
        text: {
            style: {
            color: '#999',
            position: 'absolute',
            right: '0',
            top: '-20px',
            padding: 0,
            margin: 0,
            transform: null
            },
            autoStyleContainer: false
        },
        //from: {color: 'rgb(255, 0, 0)'},
        //to: {color: 'rgb(0, 255, 0)'},
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
            //bar.path.setAttribute('stroke', state.color);
        }
    });
    bar.animate(percentage);
};
//IntersectionObserver
let animeBarIntersector = {
    root: null,
    rootMargin: "0px",
    threshold: 1
};
let launchAnimationBar = (entries) => {
    entries.forEach(element => {
        if(element.intersectionRatio > 0){
            animeBar(element.target.id, element.target.getAttribute("for"));
            animeBarObserver.unobserve(element.target);
        }
    });
};
let animeBarObserver = new IntersectionObserver( launchAnimationBar, animeBarIntersector);
let progressBar = document.querySelectorAll(".progressBar");
progressBar.forEach(element => {
    animeBarObserver.observe(element);
});