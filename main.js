const productos = [
    {
        "nombre": "Nube de algodón",
        "precio": 12.99,
        "descripcion": "Este dulce y hermoso producto tiene una textura suave y deliciosa que te transportará a un mundo de felicidad y dulzura con sus exquisitos sabores. Disfruta de este encantador bocado de los dioses. Su ambiente alegre y vibrante te encantará en cada bocado, ¡y te sentirás como si estuvieras flotando en las nubes más suaves! Esta exquisitez de postre seguramente te traerá sonrisas y mucha dulzura.",
        "img": "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        "nombre": "Estrella del mar de caramelo",
        "precio": 19.99,
        "descripcion": "Este magnífico producto es una deliciosa mezcla de caramelo y chocolate con forma de estrella marina. Es el regalo perfecto para aquellos que desean disfrutar de las aguas profundas del mar en toda su plenitud. El sabor dulce y cremoso hace que este caramelo sea una experiencia única, incluso antes de saborearlo. ¡Experimenta la magia del mar con este increíble caramelo! Su increíble combinación de sabores te transportará a un lugar lejano, lleno de diversión y diversión sin fin.",
        "img": "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        "nombre": "Torre de cupcakes",
        "precio": 14.99,
        "descripcion": "Disfruta de este suculento producto hecho a mano. Esta torre de cupcakes empilados uno encima de otro ofrece una variedad única de sabores y están cubiertos con frosting y toppings deliciosos. Esta fantasía dulce y compleja es una obra maestra de los postres, y su sabor único hará que cada bocado sea un placer verdadero. ¡Es un regalo perfecto para cualquiera que ame los dulces! El diseño innovador y la combinación perfecta de sabores hará que cada momento sea una aventura dulce.",
        "img": "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        "nombre": "Galletas de unicornio",
        "precio": 9.99,
        "descripcion": "Descubre la magia mágica de los unicornios con este producto. Esta caja de galletas está decorada con colores brillantes y detalles mágicos. Cada bocado ofrece un sabor delicioso que te hará viajar a una tierra de fantasía y diversión. Los diferentes tonos de color, la presentación innovadora y los ricos sabores hacen de estas galletas la opción perfecta para aquellos que quieren disfrutar de la magia y la diversión con cada mordida. ¡Su sabor y estética únicos te encantarán!",
        "img": "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        "nombre": "Pastel de fresa con corazón",
        "precio": 22.99,
        "descripcion": "¡Déjate sorprender por este exquisito producto! Este pastel de fresa con forma de corazón está cubierto con frosting rojo y decorado con fresas y crema batida en la parte superior. La combinación de sabores, la apariencia tierna y la variedad de texturas en este postre hacen que sea un producto especial para aquellos que buscan sorprender a alguien especial. La combinación dulce y fresca de fresa, crema y frosting harán que cada bocado sea una aventura inolvidable.",
        "img": "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        "nombre": "Bolsa de dulces de arcoiris",
        "precio": 12.99,
        "descripcion": "Es hora de celebrar con esta divertida bolsa. Esta bolsa llena de dulces de colores brillantes en forma de estrellas, corazones y nubes hará que cualquier momento sea especial. La gran variedad de sabores y colores hará que cada mordida sea una nueva experiencia, lista para sorprenderte. El aroma a dulces, el sabor refrescante y los colores brillantes hacen de esta bolsa una combinación perfecta de sabor y alegría. ¡Experimenta una explosión de sabor y alegría!",
        "img": "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
]

//Obtiene elementos del DOM para manipularlos
const navEmail = document.querySelector('.email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.burguerMenu');
const mobileMenu = document.querySelector('.mobile-menu');
const backMyOrder = document.querySelector('.title-container');
const cartIco = document.querySelector('.nav-shopping-cart');
const myOrderDetail = document.querySelector('.my-order-aside');
const mainProductsContainer = document.querySelector('.main-products-container');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('.product-detail');
const productDetailClose = document.querySelector('.product-detail-close')

//Imprime los productos cargados en el DOM
printProducts(productos);

//Obtiene todos los productos cargados
const shownProducts = document.querySelectorAll('.product-card');

//Eventos
burguerMenu.addEventListener('click', () => {
    if (window.matchMedia("(max-width: 640px)").matches) {
        toggle(mobileMenu, [myOrderDetail])
    } else {
        toggle(mobileMenu, [myOrderDetail]);
    }
});

cartIco.addEventListener('click', () => {
    if (window.matchMedia("(max-width: 770px)").matches) {
        toggle(myOrderDetail, [mobileMenu, productDetail])
    } else {
        toggle(myOrderDetail, [mobileMenu, productDetail]);
    }
});

backMyOrder.addEventListener('click', () => toggle(myOrderDetail))

navEmail.addEventListener('click', () => toggle(desktopMenu));

productDetailClose.addEventListener('click', () => toggle(productDetail));

shownProducts.forEach((product) => {
    product.addEventListener('click', (event) => {
        let productClicked = event.currentTarget;
        let pid = productClicked.getAttribute('pid');
        showProductDetail(pid);
    });
});


//Funciones
function printProducts(arr) {
    arr.forEach((producto, index) => {
        let price = '$' + producto.precio;
        let name = producto.nombre;
        let img = producto.img;

        let div = document.createElement('div');
        div.className = 'product-card';
        div.setAttribute('pid', index)
        div.innerHTML = `<img src="${img}" alt="">
        <div class="product-info">
          <div>
            <p>${price}</p>
            <p>${name}</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
        `

        cardsContainer.appendChild(div);
    });
}

function showProductDetail(pid) {
    let producto = productos[pid];

    let price = '$' + producto.precio;
    let name = producto.nombre;
    let info = producto.descripcion;
    let img = producto.img;
    let div = document.querySelector('.container-info');
    div.innerHTML = `
        <div class="product-info-container">
        <img src="${img}" alt="bike">
        <div class="pd-product-info">
        <p>${price}</p>
        <p>${name}</p>
        <p>${info}</p>
        </div>
        </div>
        <button class="primary-btn add-to-cart-btn" value="${pid}">
        <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
        Add to cart
        </button>
    `
    if (productDetail.classList.contains('hide')) {
        toggle(productDetail, [myOrderDetail]);
    }
}

//Toggle entre el elemento objetivo y el elemento/los elementos a ocultar
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