import { createSignal, For } from "solid-js";
import { useParams, useNavigate } from "@solidjs/router";
import logo from '../img/logo.png';
import logowhite from '../img/logowhite.png';
import translate from '../img/Translate.svg';
import tas1groupred from '../img/1) Litchi Pattern Pillow Handbag/1 LPPH RED (Cover).svg';
import tas1groupblack from '../img/1) Litchi Pattern Pillow Handbag/2 LPPH BLACK.svg';
import tas1groupmint from '../img/1) Litchi Pattern Pillow Handbag/3 LPPH MINT.svg';
import tas1grouppink from '../img/1) Litchi Pattern Pillow Handbag/4 LPPH PINK.svg';
import tas2groupblackgrey from '../img/2 ) Retro Small Square Handbag/2 RSSH CHARCOAL.svg';
import tas2groupbrown from '../img/2 ) Retro Small Square Handbag/1 RSSH BROWN (Cover).svg';
import tas2groupijo from '../img/2 ) Retro Small Square Handbag/3 RSSH MATCHA.svg';
import tas2groupbeige from '../img/2 ) Retro Small Square Handbag/4 RSSH CREAM.svg';
import tas3groupa from '../img/3) Autumn Pearl Handbag/1 APH CREAM (Cover).svg';
import tas3groupb from '../img/3) Autumn Pearl Handbag/2 APH BLACK.svg';
import tas3groupc from '../img/3) Autumn Pearl Handbag/3 APH GREY.svg';
import tas3groupd from '../img/3) Autumn Pearl Handbag/4 APH PINK.svg';
import tas4groupblack from '../img/4) Frosted Bowling Handbag/1 FBH BLACK (Cover).svg';
import tas4groupbrown from '../img/4) Frosted Bowling Handbag/2 FBH BROWN.svg';
import tas4groupgrey from '../img/4) Frosted Bowling Handbag/3 FBH GREY.svg';
import tas4grouporange from '../img/4) Frosted Bowling Handbag/4 FBH  BUTTERSCOTCH.svg';
import tas5groupblack from '../img/5) Versatile Shoulder Bag/2 VSB BLACK.svg';
import tas5groupbrown from '../img/5) Versatile Shoulder Bag/1 VSB DESERT (Cover).svg';
import tas5groupbeige from '../img/5) Versatile Shoulder Bag/3 VSB OAT.svg';
import tas5grouppink from '../img/5) Versatile Shoulder Bag/4 VSB LEMONADE.svg';
import tas6groupblack from '../img/6) Rhombus Shoulder Bag/2 RSB BLACK.svg';
import tas6groupnavy from '../img/6) Rhombus Shoulder Bag/1 RSB BOLD DENIM (Cover).svg';
import tas6groupdenim from '../img/6) Rhombus Shoulder Bag/3 RSB LIGHT DENIM.svg';
import tas7groupblack from '../img/7) Diamond Chain Shoulder Bag/1 DCSB BLACK (Cover).svg';
import tas7groupsalmon from '../img/7) Diamond Chain Shoulder Bag/2 DCSB SALMON.svg';
import tas7groupseafoam from '../img/7) Diamond Chain Shoulder Bag/3 DCSB SEAFOAM.svg';
import tas7groupbone from '../img/7) Diamond Chain Shoulder Bag/4 DCSB BONE.svg';
import tas8grouplightdenim from '../img/8) American Shoulder Bag/1 ASB LIGHT DENIM (Cover).svg';
import tas8groupashgrey from '../img/8) American Shoulder Bag/2 ASB GREY.svg';
import tas8groupbrown from '../img/8) American Shoulder Bag/3 ASB BROWN.svg';
import tas8grouplightgrey from '../img/8) American Shoulder Bag/4 ASB LIGHT GREY.svg';
import clothes1 from '../img/Theyy Wearr Blouses Catalogue/Line Drawing Floral Pattern Blouse.svg';
import clothes2 from '../img/Theyy Wearr Blouses Catalogue/Ruffle Collar Design Blouse.svg';
import lunettesdesoleilm from '../img/Lunettes De Soleil M.svg';
import metalsunglasses from '../img/Metal Sunglasses.svg';
import aviatorsunglasses from '../img/Aviator Sunglasses.svg';
import blackfauxbelt from '../img/Faux Leather Belt with buckle.svg';
import thinbrownfauxbelt from '../img/Thin Brown Faux Leather Belt.svg'
import thinbeltsquarebuckle from '../img/Thin Belt with Square Buckle.svg'
import befooter from '../img/befooter.png';
import cartIcon from '../img/Tote.svg';
import accountIcon from '../img/UserCircle (2).svg';
import "./productpagedetail.css";

const products = [
    {
        id: 1,
        name: "Lady Pattern Pillow Handbag",
        category: "Handbag",
        price: "285.300 IDR",
        image: tas1groupred,
        defaultImage: tas1groupred,
        colors: [
            { color: "red", image: tas1groupred },
            { color: "black", image: tas1groupblack },
            { color: "mint", image: tas1groupmint },
            { color: "pink", image: tas1grouppink },
        ],
        liked: false,
        rating: 5.0, // Tambahkan properti rating
        sold: 10,    // Tambahkan properti sold
        description: "Elevate your style with the Litchi Pattern Pillow Handbag, a perfect blend of elegance and practicality. Crafted from high-quality textured leather with a distinctive litchi pattern, this handbag offers a sophisticated look while ensuring durability. The structured pillow shape provides ample space for your essentials, making it an ideal choice for both everyday use and special occasions. Featuring sturdy top handles, a secure zipper closure, and an elegant tag detail, this bag is available in four stunning colors: Black, Red, Mint, and Pink."
    },
    {
        id: 2,
        name: "Retro Small Square Handbag",
        category: "Handbag",
        price: "174.000 IDR",
        image: tas2groupbrown,
        defaultImage: tas2groupbrown,
        colors: [
            { color: "black", image: tas2groupblackgrey },
            { color: "brown", image: tas2groupbrown },
            { color: "ijo", image: tas2groupijo },
            { color: "beige", image: tas2groupbeige },
        ],
        liked: false,
        rating: 5.0, // Tambahkan properti rating
        sold: 10,    // Tambahkan properti sold
        description: "Elevate your style with the Litchi Pattern Pillow Handbag, a perfect blend of elegance and practicality. Crafted from high-quality textured leather with a distinctive litchi pattern, this handbag offers a sophisticated look while ensuring durability. The structured pillow shape provides ample space for your essentials, making it an ideal choice for both everyday use and special occasions. Featuring sturdy top handles, a secure zipper closure, and an elegant tag detail, this bag is available in four stunning colors: Black, Red, Mint, and Pink."
    },
    {
        id: 3,
        name: "Autumn Pearl Handbag",
        category: "Handbag",
        price: "250.000 IDR",
        image: tas3groupa,
        defaultImage: tas3groupa,
        colors: [
            { color: "gradient1", image: tas3groupb },
            { color: "gradient2", image: tas3groupc },
            { color: "gradient3", image: tas3groupd },
            { color: "gradient4", image: tas3groupa },
        ],
        liked: false,
        rating: 5.0, // Tambahkan properti rating
        sold: 10,    // Tambahkan properti sold
        description: "Elevate your style with the Litchi Pattern Pillow Handbag, a perfect blend of elegance and practicality. Crafted from high-quality textured leather with a distinctive litchi pattern, this handbag offers a sophisticated look while ensuring durability. The structured pillow shape provides ample space for your essentials, making it an ideal choice for both everyday use and special occasions. Featuring sturdy top handles, a secure zipper closure, and an elegant tag detail, this bag is available in four stunning colors: Black, Red, Mint, and Pink."
    },
    {
        id: 4,
        name: "Frosted Bowling Handbag",
        category: "Handbag",
        price: "⁠192.000 IDR",
        image: tas4groupblack,
        defaultImage: tas4groupblack,
        colors: [
            { color: "black", image: tas4groupblack },
            { color: "brown", image: tas4groupbrown },
            { color: "grey", image: tas4groupgrey },
            { color: "orange", image: tas4grouporange },
        ],
        liked: false,
        rating: 5.0, // Tambahkan properti rating
        sold: 10,    // Tambahkan properti sold
        description: "Elevate your style with the Litchi Pattern Pillow Handbag, a perfect blend of elegance and practicality. Crafted from high-quality textured leather with a distinctive litchi pattern, this handbag offers a sophisticated look while ensuring durability. The structured pillow shape provides ample space for your essentials, making it an ideal choice for both everyday use and special occasions. Featuring sturdy top handles, a secure zipper closure, and an elegant tag detail, this bag is available in four stunning colors: Black, Red, Mint, and Pink."
    },
    {
        id: 5,
        name: "Versatile Shoulder Bag",
        category: "Handbag",
        price: "221.000 IDR",
        image: tas5groupbrown,
        defaultImage: tas5groupbrown,
        colors: [
            { color: "black", image: tas5groupblack },
            { color: "brown", image: tas5groupbrown },
            { color: "pinkmuda", image: tas5grouppink },
            { color: "beige2", image: tas5groupbeige },
        ],
        liked: false,
        rating: 5.0, // Tambahkan properti rating
        sold: 10,    // Tambahkan properti sold
        description: "Elevate your style with the Litchi Pattern Pillow Handbag, a perfect blend of elegance and practicality. Crafted from high-quality textured leather with a distinctive litchi pattern, this handbag offers a sophisticated look while ensuring durability. The structured pillow shape provides ample space for your essentials, making it an ideal choice for both everyday use and special occasions. Featuring sturdy top handles, a secure zipper closure, and an elegant tag detail, this bag is available in four stunning colors: Black, Red, Mint, and Pink."
    },
    {
        id: 6,
        name: "Rhombus Shoulder Bag",
        category: "Handbag",
        price: "134.000 IDR",
        image: tas6groupnavy,
        defaultImage: tas6groupnavy,
        colors: [
            { color: "blacky", image: tas6groupblack },
            { color: "navy", image: tas6groupnavy },
            { color: "denim", image: tas6groupdenim },
        ],
        liked: false,
        rating: 5.0, // Tambahkan properti rating
        sold: 10,    // Tambahkan properti sold
        description: "Elevate your style with the Litchi Pattern Pillow Handbag, a perfect blend of elegance and practicality. Crafted from high-quality textured leather with a distinctive litchi pattern, this handbag offers a sophisticated look while ensuring durability. The structured pillow shape provides ample space for your essentials, making it an ideal choice for both everyday use and special occasions. Featuring sturdy top handles, a secure zipper closure, and an elegant tag detail, this bag is available in four stunning colors: Black, Red, Mint, and Pink."
    },
    {
        id: 7,
        name: "Diamond Chain Shoulder Bag",
        category: "Handbag",
        price: "⁠160.000 IDR",
        image: tas7groupblack,
        defaultImage: tas7groupblack,
        colors: [
            { color: "black", image: tas7groupblack },
            { color: "pink", image: tas7groupsalmon },
            { color: "mint", image: tas7groupseafoam },
            { color: "beige3", image: tas7groupbone },
        ],
        liked: false,
        rating: 5.0, // Tambahkan properti rating
        sold: 10,    // Tambahkan properti sold
        description: "Elevate your style with the Litchi Pattern Pillow Handbag, a perfect blend of elegance and practicality. Crafted from high-quality textured leather with a distinctive litchi pattern, this handbag offers a sophisticated look while ensuring durability. The structured pillow shape provides ample space for your essentials, making it an ideal choice for both everyday use and special occasions. Featuring sturdy top handles, a secure zipper closure, and an elegant tag detail, this bag is available in four stunning colors: Black, Red, Mint, and Pink."
    },
    {
        id: 8,
        name: "American Shoulder Bag",
        category: "Handbag",
        price: "256.000 IDR",
        image: tas8grouplightdenim,
        defaultImage: tas8grouplightdenim,
        colors: [
            { color: "domgrey", image: tas8groupashgrey },
            { color: "brown2", image: tas8groupbrown },
            { color: "denim2", image: tas8grouplightdenim },
            { color: "grey2", image: tas8grouplightgrey },
        ],
        liked: false,
        rating: 5.0, // Tambahkan properti rating
        sold: 10,    // Tambahkan properti sold
        description: "Elevate your style with the Litchi Pattern Pillow Handbag, a perfect blend of elegance and practicality. Crafted from high-quality textured leather with a distinctive litchi pattern, this handbag offers a sophisticated look while ensuring durability. The structured pillow shape provides ample space for your essentials, making it an ideal choice for both everyday use and special occasions. Featuring sturdy top handles, a secure zipper closure, and an elegant tag detail, this bag is available in four stunning colors: Black, Red, Mint, and Pink."
    },
    {
        id: 9,
        name: "Drawing Floral Pattern Blouse",
        category: "Clothes",
        price: "300.000 IDR",
        image: clothes1,
        defaultImage: clothes1,
        colors: [
            { color: "clothes1", image: clothes1 },
        ],
        liked: false,
        rating: 5.0, // Tambahkan properti rating
        sold: 10,    // Tambahkan properti sold
        description: "Elevate your style with the Litchi Pattern Pillow Handbag, a perfect blend of elegance and practicality. Crafted from high-quality textured leather with a distinctive litchi pattern, this handbag offers a sophisticated look while ensuring durability. The structured pillow shape provides ample space for your essentials, making it an ideal choice for both everyday use and special occasions. Featuring sturdy top handles, a secure zipper closure, and an elegant tag detail, this bag is available in four stunning colors: Black, Red, Mint, and Pink."
    },
    {
        id: 10,
        name: "Ruffle Collar Design Blouse",
        category: "CLothes",
        price: "220.000 IDR",
        image: clothes2,
        defaultImage: clothes2,
        colors: [
            { color: "clothes2", image: clothes2 },
        ],
        liked: false,
        rating: 5.0, // Tambahkan properti rating
        sold: 10,    // Tambahkan properti sold
        description: "Elevate your style with the Litchi Pattern Pillow Handbag, a perfect blend of elegance and practicality. Crafted from high-quality textured leather with a distinctive litchi pattern, this handbag offers a sophisticated look while ensuring durability. The structured pillow shape provides ample space for your essentials, making it an ideal choice for both everyday use and special occasions. Featuring sturdy top handles, a secure zipper closure, and an elegant tag detail, this bag is available in four stunning colors: Black, Red, Mint, and Pink."
    },
    {
        id: 11,
        name: "Lunettes De Soleil M",
        category: "Accessories",
        price: "112.300 IDR",
        image: lunettesdesoleilm,
        defaultImage: lunettesdesoleilm,
        colors: [
            { color: "glasses1", image: lunettesdesoleilm },
        ],
        liked: false,
        rating: 5.0, // Tambahkan properti rating
        sold: 10,    // Tambahkan properti sold
        description: "Elevate your style with the Litchi Pattern Pillow Handbag, a perfect blend of elegance and practicality. Crafted from high-quality textured leather with a distinctive litchi pattern, this handbag offers a sophisticated look while ensuring durability. The structured pillow shape provides ample space for your essentials, making it an ideal choice for both everyday use and special occasions. Featuring sturdy top handles, a secure zipper closure, and an elegant tag detail, this bag is available in four stunning colors: Black, Red, Mint, and Pink."
    },
    {
        id: 12,
        name: "Metal Sunglasses",
        category: "Accessories",
        price: "86.900 IDR",
        image: metalsunglasses,
        defaultImage: metalsunglasses,
        colors: [
            { color: "glasses2", image: metalsunglasses },
        ],
        liked: false,
        rating: 5.0, // Tambahkan properti rating
        sold: 10,    // Tambahkan properti sold
        description: "Elevate your style with the Litchi Pattern Pillow Handbag, a perfect blend of elegance and practicality. Crafted from high-quality textured leather with a distinctive litchi pattern, this handbag offers a sophisticated look while ensuring durability. The structured pillow shape provides ample space for your essentials, making it an ideal choice for both everyday use and special occasions. Featuring sturdy top handles, a secure zipper closure, and an elegant tag detail, this bag is available in four stunning colors: Black, Red, Mint, and Pink."
    },
    {
        id: 13,
        name: "Aviator Sunglasses",
        category: "Accessories",
        price: "79.900 IDR",
        image: aviatorsunglasses,
        defaultImage: aviatorsunglasses,
        colors: [
            { color: "glasses3", image: aviatorsunglasses },
        ],
        liked: false,
        rating: 5.0, // Tambahkan properti rating
        sold: 10,    // Tambahkan properti sold
        description: "Elevate your style with the Litchi Pattern Pillow Handbag, a perfect blend of elegance and practicality. Crafted from high-quality textured leather with a distinctive litchi pattern, this handbag offers a sophisticated look while ensuring durability. The structured pillow shape provides ample space for your essentials, making it an ideal choice for both everyday use and special occasions. Featuring sturdy top handles, a secure zipper closure, and an elegant tag detail, this bag is available in four stunning colors: Black, Red, Mint, and Pink."
    },
    {
        id: 14,
        name: "Black Faux Belt",
        category: "Accessories",
        price: "143.300 IDR",
        image: blackfauxbelt,
        defaultImage: blackfauxbelt,
        colors: [
            { color: "blackfaux", image: blackfauxbelt },
        ],
        liked: false,
        rating: 5.0, // Tambahkan properti rating
        sold: 10,    // Tambahkan properti sold
        description: "Elevate your style with the Litchi Pattern Pillow Handbag, a perfect blend of elegance and practicality. Crafted from high-quality textured leather with a distinctive litchi pattern, this handbag offers a sophisticated look while ensuring durability. The structured pillow shape provides ample space for your essentials, making it an ideal choice for both everyday use and special occasions. Featuring sturdy top handles, a secure zipper closure, and an elegant tag detail, this bag is available in four stunning colors: Black, Red, Mint, and Pink."
    },
    {
        id: 15,
        name: "Thin Brown Faux Belt",
        category: "Accessories",
        price: "96.200 IDR",
        image: thinbrownfauxbelt,
        defaultImage: thinbrownfauxbelt,
        colors: [
            { color: "belt2", image: thinbeltsquarebuckle },
        ],
        liked: false,
        rating: 5.0, // Tambahkan properti rating
        sold: 10,    // Tambahkan properti sold
        description: "Elevate your style with the Litchi Pattern Pillow Handbag, a perfect blend of elegance and practicality. Crafted from high-quality textured leather with a distinctive litchi pattern, this handbag offers a sophisticated look while ensuring durability. The structured pillow shape provides ample space for your essentials, making it an ideal choice for both everyday use and special occasions. Featuring sturdy top handles, a secure zipper closure, and an elegant tag detail, this bag is available in four stunning colors: Black, Red, Mint, and Pink."
    },
    {
        id: 16,
        name: "Thin Belt Square Buckle",
        category: "Accessories",
        price: "110.400 IDR",
        image: thinbeltsquarebuckle,
        defaultImage: thinbeltsquarebuckle,
        colors: [
            { color: "belt3", image: thinbeltsquarebuckle },
        ],
        liked: false,
        rating: 5.0, // Tambahkan properti rating
        sold: 10,    // Tambahkan properti sold
        description: "Elevate your style with the Litchi Pattern Pillow Handbag, a perfect blend of elegance and practicality. Crafted from high-quality textured leather with a distinctive litchi pattern, this handbag offers a sophisticated look while ensuring durability. The structured pillow shape provides ample space for your essentials, making it an ideal choice for both everyday use and special occasions. Featuring sturdy top handles, a secure zipper closure, and an elegant tag detail, this bag is available in four stunning colors: Black, Red, Mint, and Pink."
    },
    // Produk lainnya
];

const ProductPageDetail = () => {
    const params = useParams();
    const productId = parseInt(params.id);
    const navigate = useNavigate();
    const [quantity, setQuantity] = createSignal(1);

    const product = products.find(p => p.id === productId);

    if (!product) {
        return <div>Product not found</div>;
    }

    const [selectedColor, setSelectedColor] = createSignal(product.colors ? product.colors[0] : null);
    const [selectedImageIndex, setSelectedImageIndex] = createSignal(0);

    const handleQuantityChange = (increment) => {
        if (increment) {
            setQuantity(quantity() + 1);
        } else if (quantity() > 1) {
            setQuantity(quantity() - 1);
        }
    };

    const handleColorSelect = (color) => {
        setSelectedColor(color);
        const colorIndex = product.colors.findIndex(c => c.color === color.color);
        if (colorIndex >= 0) {
            setSelectedImageIndex(colorIndex);
        }
    };

    const handleImageSelect = (index) => {
        setSelectedImageIndex(index);
        setSelectedColor(product.colors[index]);
    };

    return (
        <div class="product-page">
            {/* Header */}
            <header>
                <div class="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <nav class="navbar">
                    <ul>
                        <li><a href="/dashboard">Home</a></li>
                        <li><a href="/products" class="active">Products</a></li>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/blogpage">Blog</a></li>
                    </ul>
                </nav>
                <div class="dash-auth-buttons">
                    <button class="dash-cart-btn" onClick={() => navigate("/cart")}>
                        <img src={cartIcon} alt="Cart" />
                    </button>
                    <button class="dash-account-btn" onClick={() => navigate("/account")}>
                        <img src={accountIcon} alt="Account" />
                    </button>
                </div>
            </header>

            {/* Product Details Section */}
            <section class="product-detail">
                <div class="product-images">
                    <div class="main-image-detail">
                        <img src={product.colors[selectedImageIndex()].image} alt={product.name} />
                    </div>
                    <div class="thumbnail-image">
                        <For each={product.colors}>
                            {(color, index) => (
                                <div
                                    class={`thumbnails ${index() === selectedImageIndex() ? 'active' : ''}`}
                                    onClick={() => handleImageSelect(index())}
                                >
                                    <img src={color.image} alt={`${product.name} view ${index() + 1}`} />
                                </div>
                            )}
                        </For>
                    </div>
                </div>
                <div class="product-info">
                    <div class="category">{product.category}</div>
                    <h1 class="product-name">{product.name}</h1>
                    <div class="rating">
                        <span class="stars">
                            ⭐⭐⭐⭐⭐
                        </span>
                        <span class="rating-value">{product.rating}</span>
                        <span class="sold">{product.sold} sold</span>
                    </div>
                    <div class="price-detail">{product.price}</div>

                    <div class="description">
                        <h2>Description</h2>
                        <p>{product.description}</p>
                    </div>

                    <div class="color-selection">
                        <h2>Color</h2>
                        <div class="color-options-detail">
                            <For each={product.colors}>
                                {(color, index) => (
                                    <div
                                        class={`color ${color.color} ${index() === selectedImageIndex() ? 'selected' : ''}`}
                                        onClick={() => handleColorSelect(color)}
                                    ></div>
                                )}
                            </For>
                        </div>
                    </div>

                    <div class="quantity-section">
                        <h2>Quantity</h2>
                        <div class="quantity-selector">
                            <button class="quantity-btn" onClick={() => handleQuantityChange(false)}>−</button>
                            <input
                                type="number"
                                min="1"
                                value={quantity()}
                                onInput={(e) => setQuantity(parseInt(e.currentTarget.value) || 1)}
                            />
                            <button class="quantity-btn" onClick={() => handleQuantityChange(true)}>+</button>
                        </div>
                    </div>

                    <div class="action-buttons">
                        <button class="buy-now">Buy Now</button>
                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                </div>
            </section>
            <img src={befooter} alt="Banner" class="full-width-image" />

            {/* Footer */}
            <footer>
                {/* ... (kode footer) ... */}
            </footer>
        </div>
    );
};

export default ProductPageDetail;