function loadHomePage(){
    const content = document.querySelector("#content");

    const hero = document.createElement("div");
    hero.id = "hero";
    content.append(hero);
    
    const background = document.createElement("div");
    background.id = "background";
    hero.append(background);

    const text = document.createElement("div");
    text.id = "text";
    hero.append(text);

    const titleContainer = document.createElement("div");
    text.append(titleContainer);

    const textTitle = document.createElement("h1");
    textTitle.textContent = "Welcome to Nordic Foods!";
    titleContainer.append(textTitle);

    const textSubTitle = document.createElement("h2");
    textSubTitle.textContent = "A Tasteful Experience in the Heart of the City";
    titleContainer.append(textSubTitle);

    const paragraph = document.createElement("p");
    paragraph.textContent = "At our restaurant, we combine fresh ingredients, creativity, and a love for food. We offer a unique dining experience where every bite takes you on a journey through the best seasonal flavors.";
    text.append(paragraph);

    const btn = document.createElement("button");
    btn.textContent = "Make a reservation";
    text.append(btn);
}

function loadMenuPage(){
    const content = document.querySelector("#content");

    const hero = document.createElement("div");
    hero.id = "hero";
    hero.className = "menu";
    content.append(hero);

    const title = document.createElement("h1");
    title.textContent = "Check out our Menu";
    hero.append(title);

    const list = document.createElement("div");
    list.className = "menu-list";
    hero.append(list);

    for(let i=1; i <= 10; i++){
        const num = document.createElement("p");
        num.textContent = `${i}.`;
        list.append(num);

        const name = document.createElement("p");
        name.textContent = "'Item name'";
        list.append(name);

        const price = document.createElement("p");
        price.textContent = `00$ USD`;
        list.append(price);
    }
}


function loadAboutPage(){
    const content = document.querySelector("#content");

    const hero = document.createElement("div");
    hero.id = "hero";
    hero.className = "about";
    content.append(hero);

    const title1 = document.createElement("h1");
    title1.textContent = "About";
    hero.append(title1);

    const aboutText1 = document.createElement("p");
    aboutText1.textContent = "At Nordic Food, food is more than just a meal – it’s an experience. Founded in 2015, our mission has always been to bring people together over dishes crafted with passion and care.";
    hero.append(aboutText1);

    const aboutText2 = document.createElement("p");
    aboutText2.textContent = "Our kitchen celebrates the finest ingredients, sourcing locally whenever possible to create seasonal menus that highlight freshness and flavor. From comforting classics like roasted lamb with herb jus to innovative creations like beetroot-infused risotto, every plate tells a story.";
    hero.append(aboutText2);

    const aboutText3 = document.createElement("p");
    aboutText3.textContent = "We believe in the magic of good food, great company, and warm hospitality. Whether you’re here for a casual lunch, a romantic dinner, or a special celebration, our team is dedicated to making your visit memorable.";
    hero.append(aboutText3);

    const title2 = document.createElement("h1");
    title2.textContent = "Our Philosophy";
    hero.append(title2);
    
    const aboutText4 = document.createElement("p");
    const strong1 = document.createElement("strong");
    strong1.textContent = "Quality First: ";
    aboutText4.appendChild(strong1);
    aboutText4.innerHTML += "Every dish is prepared with attention to detail and a commitment to excellence.";
    hero.append(aboutText4);

    const aboutText5 = document.createElement("p");
    const strong2 = document.createElement("strong");
    strong2.textContent = "Sustainability Matters: ";
    aboutText5.appendChild(strong2);
    aboutText5.innerHTML += "We strive to make choices that are good for our guests and the planet.";
    hero.append(aboutText5);

    const aboutText6 = document.createElement("p");
    const strong3 = document.createElement("strong");
    strong3.textContent = "A Place for Everyone: ";
    aboutText6.appendChild(strong3);
    aboutText6.innerHTML += "Our menu caters to a variety of tastes, with options for meat lovers, vegetarians, and those with dietary preferences.";
    hero.append(aboutText6);
}

export {
    loadHomePage,
    loadMenuPage,
    loadAboutPage
};