import { createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";
import logo from '../img/logo.png';
import logowhite from '../img/logowhite.png';
import translate from '../img/Translate.svg';
import glasses from '../img/Hippie  Mod Glasses.svg';
import belt1 from '../img/Theyy Wearr Belts Catalogue/Black Double O-Ring Belt.svg';
import belt2 from '../img/Theyy Wearr Belts Catalogue/Almond Belt Leather.svg';
import befooter from '../img/befooter.png';
import cartIcon from '../img/Tote.svg';
import accountIcon from '../img/UserCircle (2).svg'
import './accessories.css';

const Accessories = () => {
    const navigate = useNavigate();
    const [mainImage1, setMainImage1] = createSignal(glasses);
    const [mainImage2, setMainImage2] = createSignal(belt1);
    const [mainImage3, setMainImage3] = createSignal(belt2);

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
            <section class="product-accessories">
                <div class="section-header">
                    <h2>Accessories</h2>
                    <div class="search-container">
                        <input type="text" class="search-box" placeholder="Type something here" />
                        <button class="search-button">Search</button>
                    </div>
                </div>

                <div class="products-grid-accessories">
                    {/* Row 1 */}
                    <div class="product-card-acc">
                        <div class="product-image-acc" style="background-color: rgba(242, 242, 242, 1); padding: 30px;">
                            <img src={mainImage1()} alt="Litchi Pattern Pillow Handbag" class="main-image" />
                        </div>
                        <h3>Hippie Mod Glasses</h3>
                        <p class="price">67.300 IDR</p>
                        <div class="color-options" onMouseLeave={() => setMainImage1(glasses)}>
                            <span class="color glasses" onMouseOver={() => setMainImage1(glasses)}></span>
                        </div>
                    </div>
                    <div class="product-card-acc">
                        <div class="product-image-acc" style="background-color: rgba(242, 242, 242, 1); padding: 30px;">
                            <img src={mainImage2()} alt="Litchi Pattern Pillow Handbag" class="main-image" />
                        </div>
                        <h3>Black Double O-Ring Belt</h3>
                        <p class="price">129.000 IDR</p>
                        <div class="color-options" onMouseLeave={() => setMainImage2(belt1)}>
                            <span class="color black" onMouseOver={() => setMainImage2(belt1)}></span>
                        </div>
                    </div>
                    <div class="product-card-acc">
                        <div class="product-image-acc" style="background-color: rgba(242, 242, 242, 1); padding: 30px;">
                            <img src={mainImage3()} alt="Litchi Pattern Pillow Handbag" class="main-image" />
                        </div>
                        <h3>Almond Belt Leather</h3>
                        <p class="price">250.000 IDR</p>
                        <div class="color-options" onMouseLeave={() => setMainImage3(belt2)}>
                            <span class="color belt2" onMouseOver={() => setMainImage3(belt2)}></span>
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

export default Accessories;