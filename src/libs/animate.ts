const options = {
    // rootMargin: '50px 0px 0px 0px',
    threshold: 0.5,
};
const observer = new IntersectionObserver((entries, self) => {
    entries.forEach((element, i) => {
        const { isIntersecting, target, intersectionRatio } = element
        console.log(i, { isIntersecting, target, intersectionRatio });
        console.log(i, );
        target.classList.toggle('show', isIntersecting);
    })
}, options);

export default function observe(...targets: string[] | any[]) {
    targets.forEach(target => {
        if (typeof target === 'string') {
            target = document.querySelector(target)
        }
        if (target) observer.observe(target)
    })
}
