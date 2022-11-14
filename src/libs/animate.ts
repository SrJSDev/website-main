const options = {
    // rootMargin: '50px 0px 0px 0px',
    threshold: 0.5,
};
const observer = new IntersectionObserver((entries, self) => {
    entries.forEach((element, i) => {
        const { isIntersecting, target, intersectionRatio } = element
        console.log(i, { isIntersecting, target, intersectionRatio });
        target.classList.toggle('show', isIntersecting);
    })
}, options);

export default function observe(...targets: string[] | any[]) {
    targets.forEach(target => {
        if (typeof target === 'string') {
            target = [...document.querySelectorAll(target)]
        }
        [].concat(target).forEach((t: any) => {
            if (t) observer.observe(t)
        })
    })
}
