const navEmail = document.querySelector('.email');
const desktopMenu = document.querySelector('.desktop-menu');

const burguerMenu = document.querySelector('.burguerMenu');
const mobileMenu = document.querySelector('.mobile-menu');

const backMyOrder = document.querySelector('.title-container');
const cartIco = document.querySelector('.nav-shopping-cart');
const asideDetail = document.querySelector('.product-detail');

const mainProductsContainer = document.querySelector('.main-products-container');
const cardsContainer = document.querySelector('.cards-container');

const productos = [
    {
        "nombre": "Nube de algodón",
        "precio": 12.99,
        "descripcion": "Este dulce producto tiene una textura suave y deliciosa que te transportará a un mundo de felicidad y dulzura."
    },
    {
        "nombre": "Estrella del mar de caramelo",
        "precio": 19.99,
        "descripcion": "Este producto es una deliciosa mezcla de caramelo y chocolate con forma de estrella marina. ¡Es el regalo perfecto para los amantes del mar!"
    },
    {
        "nombre": "Torre de cupcakes",
        "precio": 14.99,
        "descripcion": "Este producto es una torre de cupcakes empilados uno encima de otro. Cada uno tiene un sabor diferente y están cubiertos con frosting y toppings deliciosos."
    },
    {
        "nombre": "Galletas de unicornio",
        "precio": 9.99,
        "descripcion": "Este producto es una caja de galletas en forma de unicornios. Cada galleta está cubierta con glaseado de colores brillantes y decorada con detalles mágicos."
    },
    {
        "nombre": "Pastel de fresa con corazón",
        "precio": 22.99,
        "descripcion": "Este producto es un pastel de fresa con forma de corazón. Está cubierto con frosting rojo y decorado con fresas y crema batida en la parte superior."
    },
    {
        "nombre": "Bolsa de dulces de arcoiris",
        "precio": 12.99,
        "descripcion": "Este producto es una bolsa llena de dulces de colores brillantes en forma de estrellas, corazones y nubes. ¡Es una explosión de sabor y alegría!"
    },
    {
        "nombre": "Caja de bombones de chocolate",
        "precio": 24.99,
        "descripcion": "Este producto es una caja elegante llena de bombones de chocolate de diferentes sabores: vainilla, menta, fresa y nuez. ¡Es un regalo perfecto para los amantes del chocolate!"
    }, {
        "nombre": "Auto fugaz",
        "precio": 19.95,
        "descripcion": "Este producto es una caja elegante llena de bombones de chocolate de diferentes sabores: vainilla, menta, fresa y nuez. ¡Es un regalo perfecto para los amantes del chocolate!"
    },
]

navEmail.addEventListener('click', () => toggle(desktopMenu));

burguerMenu.addEventListener('click', () => {
    if (window.matchMedia("(max-width: 640px)").matches) {
        toggle(mobileMenu, [asideDetail])
    } else {
        toggle(mobileMenu, [asideDetail]);
    }
});

cartIco.addEventListener('click', () => {
    if (window.matchMedia("(max-width: 770px)").matches) {
        toggle(asideDetail, [mobileMenu])
    } else {
        toggle(asideDetail, [mobileMenu]);
    }
});

backMyOrder.addEventListener('click', () => toggle(asideDetail, mobileMenu));

function toggle(totoggle, tohide) {
    totoggle.classList.toggle('hide')
    if (tohide !== undefined) {
        for (th of tohide) {
            if (!th.classList.contains('hide') || th.classList.contains('defhide')) {
                th.classList.add('hide')
            }
        }
    }
}

printProducts()
function printProducts() {
    productos.forEach(producto => {
        let div = document.createElement('div');
        div.className = 'product-card';
        div.innerHTML = `<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>${producto.precio}</p>
            <p>${producto.nombre}</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>`

        cardsContainer.appendChild(div);
    });
}