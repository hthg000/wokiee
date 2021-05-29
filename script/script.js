$(function () {
    const products = [
        {
            name: "Paint-Splatter Fleece Pullover",
            image: "https://cdn.shopify.com/s/files/1/0130/5041/3114/products/Paint-Splatter_Fleece_Pullover_4f2c0cff-e946-439d-adbe-a5d0d99774e3_237x.jpg?v=1542307401",
            price: "$40.00",
            star: 5,
            addInfo: "zara",
            discount: 0
        },
        {
            name: "Pink Pony Leather Sneaker",
            image: "https://cdn.shopify.com/s/files/1/0130/5041/3114/products/Pink_Pony_Leather_Sneaker_71a9994a-829c-484a-92f5-b6b765b0da7d_237x.jpg?v=1542307462",
            star: 0,
            price: "$60.00",
            addInfo: "polo",
            discount: 0
        },
        {
            name: "Two-Tone Sleeveless Dress",
            image: "https://cdn.shopify.com/s/files/1/0130/5041/3114/products/Two-Tone_Sleeveless_Dress_0c19f674-98a1-47e0-acd7-c71242e96eb6_237x.jpg?v=1542378295",
            star: 5,
            price: "$340.00",
            addInfo: "guess",
            discount: 0
        },
        {
            name: "Striped Cap-Sleeve Polo",
            image: "https://cdn.shopify.com/s/files/1/0130/5041/3114/products/Striped_Cap-Sleeve_Polo_2_155048d6-7c16-4aca-96c3-798578bd6801_237x.jpg?v=1542377394",
            star: 5,
            price: "$260.00",
            addInfo: "guess",
            discount: 0
        },
        {
            name: "Rae Suede Sandal",
            image: "https://cdn.shopify.com/s/files/1/0130/5041/3114/products/Rae_Suede_Sandal_33ed1bdb-f45a-4fa7-be40-48700ac622cc_237x.jpg?v=1542374270",
            star: 4.5,
            price: "$100.00",
            addInfo: "gab"
        },
        {
            name: "Relaxed Painted Oxford Shirt",
            image: "https://cdn.shopify.com/s/files/1/0130/5041/3114/products/Relaxed_Painted_Oxford_Shirt_a05b7822-2e2f-40da-986f-4bcd650ba584_237x.jpg?v=1542374406",
            star: 4.5,
            price: "$140.00",
            addInfo: "gab",
            discount: 22
        },
        {
            name: "Rounded Cat Eye Sunglasses",
            image: "https://cdn.shopify.com/s/files/1/0130/5041/3114/products/Rounded_Cat_Eye_Sunglasses_f1da40e7-625e-4361-ba65-66e597145a06_237x.jpg?v=1542375223",
            star: 0,
            price: "$180.00",
            addInfo: "polo",
            discount: 0
        },
        {
            name: "Saffiano Leather Belt",
            image: "https://cdn.shopify.com/s/files/1/0130/5041/3114/products/Saffiano_Leather_Belt_013384fb-f4ca-425a-9865-1a9c0db0f802_237x.jpg?v=1542375251",
            star: 0,
            price: "$200.00",
            addInfo: "lacoste",
            discount: 0
        }
    ]
    renderProducts(products, ".products-trending");
});

function renderStar(numberOfStar = 0) {
    if (numberOfStar === 0) {
        return "";
    }
    let res = "";
    const star = '<i class="fas fa-star"></i>';
    const halfStar = '<i class="fas fa-star-half-alt"></i>';
    for (let i = 1; i < numberOfStar; i++) {
        res += star;
    }
    if (numberOfStar % 1 !== 0) {
        res += halfStar;
    } else {
        res += star;
    }
    return res;
}

function renderProducts(products = [], selector) {
    products.map(val => (
        $(
            `
                <div class="trending-product">
                    <div class="images-trending">
                   
                    ${val.discount ? `<span>sale ${val.discount}%</span>` : ""}
                        <a href=""> <img
                                src=${val.image} alt="">
                        </a>
                        <div class="iconn">
                            <ul>
                                <li>
                                    <a href="">
                                        <i class="far fa-eye"></i>
                                    </a>
                                    <div class="ribbon">
                                        <div class="wrapper-ribbon">
                                            <span>Quick View</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="">
                                        <i class="far fa-heart"></i>
                                    </a>
                                    <div class="ribbon">
                                        <div class="wrapper-ribbon">
                                            <span>You need to login</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="">
                                        <i class="fas fa-balance-scale"></i>
                                    </a>
                                    <div class="ribbon">
                                        <div class="wrapper-ribbon">
                                            <span>Add to Compare</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="infor">
                        <div class="wrapper-info">
                            <div class="gap">
                                <a href="">${val.addInfo}</a>
                            </div>
                            <div class="five-star">
                                ${renderStar(val.star)}
                                
                            </div>
                            <div class="text">
                                <a href="">${val.name}</a>
                            </div>
                            <div class="price">
                                <span>${val.price}</span>
                            </div>
                            <div class="btn-add-to-cart">
                                <button>
                                    <i class="fas fa-shopping-bag"></i>
                                    <span>add to cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `
        ).appendTo(selector)
    ))
}

$(function () {
    $(".remove").click(function (e) {
        e.preventDefault();
        $(".fixed-promo").css("display", "none");
    });

    // setTimeout(() => {
    //     $(".fixed-promo").css("display", "block");
    // }, 20000);

    setInterval(() => {
        $(".fixed-promo").css("display", "block");
    }, 5000);
});