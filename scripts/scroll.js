seamless.polyfill();

const links = document.querySelectorAll('.header-menu__item a');
console.log(links);
links.forEach((element) => {

    element.addEventListener('click', (event) => {
        event.preventDefault();
        const id = element.getAttribute('href').substring(1);

        const section = document.getElementById(id);

        if (section) {
            // section.scrollIntoView({
            //     behavior: 'smooth',
            //     block: 'start'
            // });
            seamless.elementScrollIntoView(section, {
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
        } else {
            seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
        }
    })
})