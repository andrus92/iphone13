const tabsFunc = () => {
    const tabs = document.querySelectorAll('.card-detail__change');
    const tabsTitle = document.querySelector('.card-details__title');
    const tabsPrice = document.querySelector('.card-details__price');
    const tabsImage = document.querySelector('.card__image_item');

    const tabsOptions = [
        {
            name: 'Graphite',
            memory: '128GB',
            price: 60000,
            img: './img/iPhone-graphite.webp',
        },
        {
            name: 'Silver',
            memory: '256GB',
            price: 65000,
            img: './img/iPhone-silver.webp',
        },
        {
            name: 'Sierra Blue',
            memory: '512GB',
            price: 70000,
            img: './img/iPhone-sierra_blue.webp',
        },
    ];

    const changeContent = (index) => {
        tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory} ${tabsOptions[index].name}`;
        tabsPrice.textContent = `${tabsOptions[index].price}Р`;

        tabsImage.setAttribute('src', tabsOptions[index].img);
    }

    const changeActiveTabs = (indexClickedTab) => {
        tabs.forEach((tab, index) => {
            if (index === indexClickedTab) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        })
    };

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            changeActiveTabs(index);
            changeContent(index);
        })
    })

    changeContent(0);
};

tabsFunc();