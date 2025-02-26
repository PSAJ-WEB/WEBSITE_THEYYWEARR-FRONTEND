import { createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";
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
import tas4groupblack from '../img/4) Frosted Bowling Handbag/1 FBH BLACK (Cover).svg'
import tas4groupbrown from '../img/4) Frosted Bowling Handbag/2 FBH BROWN.svg'
import tas4groupgrey from '../img/4) Frosted Bowling Handbag/3 FBH GREY.svg'
import tas4grouporange from '../img/4) Frosted Bowling Handbag/4 FBH  BUTTERSCOTCH.svg'
import tas5groupblack from '../img/5) Versatile Shoulder Bag/2 VSB BLACK.svg'
import tas5groupbrown from '../img/5) Versatile Shoulder Bag/1 VSB DESERT (Cover).svg'
import tas5grouppink from '../img/5) Versatile Shoulder Bag/3 VSB OAT.svg'
import tas5groupbeige from '../img/5) Versatile Shoulder Bag/4 VSB LEMONADE.svg'
import tas6groupblack from '../img/6) Rhombus Shoulder Bag/2 RSB BLACK.svg'
import tas6groupnavy from '../img/6) Rhombus Shoulder Bag/1 RSB BOLD DENIM (Cover).svg'
import tas6groupdenim from '../img/6) Rhombus Shoulder Bag/3 RSB LIGHT DENIM.svg'
import tas7groupblack from '../img/7) Diamond Chain Shoulder Bag/1 DCSB BLACK (Cover).svg'
import tas7groupsalmon from '../img/7) Diamond Chain Shoulder Bag/2 DCSB SALMON.svg'
import tas7groupseafoam from '../img/7) Diamond Chain Shoulder Bag/3 DCSB SEAFOAM.svg'
import tas7groupbone from '../img/7) Diamond Chain Shoulder Bag/4 DCSB BONE.svg'
import tas8grouplightdenim from '../img/8) American Shoulder Bag/1 ASB LIGHT DENIM (Cover).svg'
import tas8groupashgrey from '../img/8) American Shoulder Bag/2 ASB GREY.svg'
import tas8groupbrown from '../img/8) American Shoulder Bag/3 ASB BROWN.svg'
import tas8grouplightgrey from '../img/8) American Shoulder Bag/4 ASB LIGHT GREY.svg'
import befooter from '../img/befooter.png';
import cartIcon from '../img/Tote.svg';
import accountIcon from '../img/UserCircle (2).svg'
import './productpage.css';

const ProductPage = () => {
    const navigate = useNavigate();
    const [mainImage1, setMainImage1] = createSignal(tas1groupred);
    const [mainImage2, setMainImage2] = createSignal(tas2groupbrown);
    const [mainImage3, setMainImage3] = createSignal(tas3groupa);
    const [mainImage4, setMainImage4] = createSignal(tas4groupblack);
    const [mainImage5, setMainImage5] = createSignal(tas5groupbrown);
    const [mainImage6, setMainImage6] = createSignal(tas6groupnavy);
    const [mainImage7, setMainImage7] = createSignal(tas7groupblack);
    const [mainImage8, setMainImage8] = createSignal(tas8grouplightdenim);

    // Fungsi untuk navigasi ke halaman Cart
    const goToCart = () => {
        navigate("/cart");
    };

    // Fungsi untuk navigasi ke halaman Account
    const goToAccount = () => {
        navigate("/account");
    };
    return (
        <div class="landing-page">
            {/* Header */}
            <header>
                <div class="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <nav class="navbar">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/products" class="active">Products</a></li>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/blogpage">Blog</a></li>
                    </ul>
                </nav>
                <div class="dash-auth-buttons">
                    <button class="dash-cart-btn" onClick={goToCart}>
                        <img src={cartIcon} alt="Cart" />
                    </button>
                    {/* Tombol Account dengan Navigasi */}
                    <button class="dash-account-btn" onClick={goToAccount}>
                        <img src={accountIcon} alt="Account" />
                    </button>
                </div>
            </header>

            {/* Hero Section */}
            <section class="heroproduct">
                <div class="hero-content-product">
                    <div class="overlay-lines"></div>
                    <h1>Discover Your Signature Style</h1>
                    <p>Find the perfect bags and outfits that complement your personality.</p>
                    <button class="shpnow">Shop Now</button>
                </div>
                <div class="productpage">
                    <span>Handpicked Styles Premium Quality Trend-Forward Fashion Elevate Your Wardrobe Today</span>
                    <span>Handpicked Styles Premium Quality Trend-Forward Fashion Elevate Your Wardrobe Today</span>
                    <span>Handpicked Styles Premium Quality Trend-Forward Fashion Elevate Your Wardrobe Today</span>
                    <span>Handpicked Styles Premium Quality Trend-Forward Fashion Elevate Your Wardrobe Today</span>
                    <span>Handpicked Styles Premium Quality Trend-Forward Fashion Elevate Your Wardrobe Today</span>
                </div>
            </section>

            {/* Fresh Drops Section */}
            <section class="product">
                <div class="section-header">
                    <h2>Fresh Drops for You</h2>
                    <div class="search-container">
                        <input type="text" class="search-box" placeholder="Type something here" />
                        <button class="search-button">Search</button>
                    </div>
                </div>

                <div class="products-grid2">
                    {/* Row 1 */}
                    <div class="product-card">
                        <div class="product-image" style="background-color: rgba(242, 242, 242, 1); padding: 30px;">
                            <img src={mainImage1()} alt="Litchi Pattern Pillow Handbag" class="main-image" />
                        </div>
                        <h3>Lady Pattern Pillow Handbag</h3>
                        <p class="price">285.300 IDR</p>
                        <div class="color-options" onMouseLeave={() => setMainImage1(tas1groupblack)}>
                            <span class="color black" onMouseOver={() => setMainImage1(tas1groupblack)}></span>
                            <span class="color red" onMouseOver={() => setMainImage1(tas1groupred)}></span>
                            <span class="color mint" onMouseOver={() => setMainImage1(tas1groupmint)}></span>
                            <span class="color pink" onMouseOver={() => setMainImage1(tas1grouppink)}></span>
                        </div>
                    </div>
                    <div class="product-card">
                        <div class="product-image" style="background-color: rgba(242, 242, 242, 1); padding: 30px;">
                            <img src={mainImage2()} alt="Litchi Pattern Pillow Handbag" class="main-image" />
                        </div>
                        <h3>Retro Small Square Handbag</h3>
                        <p class="price">174.000 IDR</p>
                        <div class="color-options" onMouseLeave={() => setMainImage2(tas2groupbrown)}>
                            <span class="color black" onMouseOver={() => setMainImage2(tas2groupblackgrey)}></span>
                            <span class="color brown" onMouseOver={() => setMainImage2(tas2groupbrown)}></span>
                            <span class="color ijo" onMouseOver={() => setMainImage2(tas2groupijo)}></span>
                            <span class="color beige" onMouseOver={() => setMainImage2(tas2groupbeige)}></span>
                        </div>
                    </div>
                    <div class="product-card">
                        <div class="product-image" style="background-color: rgba(242, 242, 242, 1); padding: 30px;">
                            <img src={mainImage3()} alt="Litchi Pattern Pillow Handbag" class="main-image" />
                        </div>
                        <h3>Autumn Pearl Handbag</h3>
                        <p class="price">250.000 IDR</p>
                        <div class="color-options" onMouseLeave={() => setMainImage3(tas3groupa)}>
                            <span class="color gradient1" onMouseOver={() => setMainImage3(tas3groupb)}></span>
                            <span class="color gradient2" onMouseOver={() => setMainImage3(tas3groupc)}></span>
                            <span class="color gradient3" onMouseOver={() => setMainImage3(tas3groupd)}></span>
                            <span class="color gradient4" onMouseOver={() => setMainImage3(tas3groupa)}></span>
                        </div>
                    </div>
                    <div class="product-card">
                        <div class="product-image" style="background-color: rgba(242, 242, 242, 1); padding: 30px;">
                            <img src={mainImage4()} alt="Litchi Pattern Pillow Handbag" class="main-image" />
                        </div>
                        <h3>Frosted Bowling Handbag</h3>
                        <p class="price">192.000 IDR</p>
                        <div class="color-options" onMouseLeave={() => setMainImage4(tas4groupblack)}>
                            <span class="color black" onMouseOver={() => setMainImage4(tas4groupblack)}></span>
                            <span class="color brown" onMouseOver={() => setMainImage4(tas4groupbrown)}></span>
                            <span class="color grey" onMouseOver={() => setMainImage4(tas4groupgrey)}></span>
                            <span class="color orange" onMouseOver={() => setMainImage4(tas4grouporange)}></span>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div class="product-card">
                        <div class="product-image" style="background-color: rgba(242, 242, 242, 1); padding: 30px;">
                            <img src={mainImage5()} alt="Litchi Pattern Pillow Handbag" class="main-image" />
                        </div>
                        <h3>Versatile Shoulder Bag</h3>
                        <p class="price">221.000 IDR</p>
                        <div class="color-options" onMouseLeave={() => setMainImage5(tas5groupblack)}>
                            <span class="color black" onMouseOver={() => setMainImage5(tas5groupblack)}></span>
                            <span class="color brownlight" onMouseOver={() => setMainImage5(tas5groupbrown)}></span>
                            <span class="color pinkmuda" onMouseOver={() => setMainImage5(tas5grouppink)}></span>
                            <span class="color beige2" onMouseOver={() => setMainImage4(tas5groupbeige)}></span>
                        </div>
                    </div>
                    <div class="product-card">
                        <div class="product-image" style="background-color: rgba(242, 242, 242, 1); padding: 30px;">
                            <img src={mainImage6()} alt="Litchi Pattern Pillow Handbag" class="main-image" />
                        </div>
                        <h3>Rhombus Shoulder Bag</h3>
                        <p class="price">134.000 IDR</p>
                        <div class="color-options" onMouseLeave={() => setMainImage6(tas6groupnavy)}>
                            <span class="color blacky" onMouseOver={() => setMainImage6(tas6groupblack)}></span>
                            <span class="color navy" onMouseOver={() => setMainImage6(tas6groupnavy)}></span>
                            <span class="color denim" onMouseOver={() => setMainImage6(tas6groupdenim)}></span>
                        </div>
                    </div>
                    <div class="product-card">
                        <div class="product-image" style="background-color: rgba(242, 242, 242, 1); padding: 30px;">
                            <img src={mainImage7()} alt="Litchi Pattern Pillow Handbag" class="main-image" />
                        </div>
                        <h3>Diamond Chain Shoulder Bag</h3>
                        <p class="price">⁠160.000 IDR</p>
                        <div class="color-options" onMouseLeave={() => setMainImage7(tas7groupblack)}>
                            <span class="color black" onMouseOver={() => setMainImage7(tas7groupblack)}></span>
                            <span class="color pink" onMouseOver={() => setMainImage7(tas7groupsalmon)}></span>
                            <span class="color mint" onMouseOver={() => setMainImage7(tas7groupseafoam)}></span>
                            <span class="color beige3" onMouseOver={() => setMainImage7(tas7groupbone)}></span>
                        </div>
                    </div>
                    <div class="product-card">
                        <div class="product-image" style="background-color: rgba(242, 242, 242, 1); padding: 30px;">
                            <img src={mainImage8()} alt="Litchi Pattern Pillow Handbag" class="main-image" />
                        </div>
                        <h3>American Shoulder Bag</h3>
                        <p class="price">256.000 IDR</p>
                        <div class="color-options" onMouseLeave={() => setMainImage8(tas8grouplightdenim)}>
                            <span class="color domgrey" onMouseOver={() => setMainImage8(tas8groupashgrey)}></span>
                            <span class="color brown2" onMouseOver={() => setMainImage8(tas8groupbrown)}></span>
                            <span class="color denim2" onMouseOver={() => setMainImage8(tas8grouplightdenim)}></span>
                            <span class="color grey2" onMouseOver={() => setMainImage8(tas8grouplightgrey)}></span>
                        </div>
                    </div>
                    <div class="product-card">
                        <div class="product-image" style="background-color: rgba(242, 242, 242, 1); padding: 30px;">
                            <img src={mainImage5()} alt="Litchi Pattern Pillow Handbag" class="main-image" />
                        </div>
                        <h3>Versatile Shoulder Bag</h3>
                        <p class="price">221.000 IDR</p>
                        <div class="color-options" onMouseLeave={() => setMainImage5(tas5groupblack)}>
                            <span class="color black" onMouseOver={() => setMainImage5(tas5groupblack)}></span>
                            <span class="color brownlight" onMouseOver={() => setMainImage5(tas5groupbrown)}></span>
                            <span class="color pinkmuda" onMouseOver={() => setMainImage5(tas5grouppink)}></span>
                            <span class="color beige2" onMouseOver={() => setMainImage4(tas5groupbeige)}></span>
                        </div>
                    </div>
                    <div class="product-card">
                        <div class="product-image" style="background-color: rgba(242, 242, 242, 1); padding: 30px;">
                            <img src={mainImage6()} alt="Litchi Pattern Pillow Handbag" class="main-image" />
                        </div>
                        <h3>Rhombus Shoulder Bag</h3>
                        <p class="price">134.000 IDR</p>
                        <div class="color-options" onMouseLeave={() => setMainImage6(tas6groupnavy)}>
                            <span class="color blacky" onMouseOver={() => setMainImage6(tas6groupblack)}></span>
                            <span class="color navy" onMouseOver={() => setMainImage6(tas6groupnavy)}></span>
                            <span class="color denim" onMouseOver={() => setMainImage6(tas6groupdenim)}></span>

                        </div>
                    </div>
                </div>
            </section>
            <img src={befooter} alt="Banner" class="full-width-image" />

            {/* Footer */}
            <footer>
                <div class="footer-top">
                    <div class="store-image">
                        <img src={logowhite} alt="Our Store" />
                    </div>
                    <div class="newsletter">
                        <p>Stay updated with our latest drops & exclusive deals</p>
                        <div class="subscribe-form">
                            <input type="email" placeholder="Enter your email" />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>

                <div class="footer-links">
                    <div class="link-column">
                        <h4>Theyy Wearr.</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Product</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div class="link-column">
                        <h4>About Us</h4>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Community</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Investors</a></li>
                        </ul>
                    </div>
                    <div class="link-column">
                        <h4>Get More</h4>
                        <ul>
                            <li><a href="#">Upgrade Premium</a></li>
                            <li><a href="#">Personal Plan</a></li>
                            <li><a href="#">Business Plan</a></li>
                            <li><a href="#">Enterprise Plan</a></li>
                        </ul>
                    </div>
                    <div class="link-column">
                        <h4>Connect With Us</h4>
                        <ul>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Youtube</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                </div>

                <div class="footer-bottom">
                    <p>@ 2025 Theyy Wearr. Inc</p>
                    <p>Terms and privacy</p>
                    <div class="translate-section">
                        <img src={translate} alt="Translate Icon" />
                        <span>English</span>
                    </div>
                </div>

            </footer>
        </div>
    );
};

export default ProductPage;