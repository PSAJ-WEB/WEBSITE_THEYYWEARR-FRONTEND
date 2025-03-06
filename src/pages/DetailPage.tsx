import { createSignal } from "solid-js";
import "./DetailPage.css";
import befooter from '../img/befooter.png';
import cartIcon from '../img/Tote.svg';
import accountIcon from '../img/UserCircle (2).svg';
import { useNavigate } from "@solidjs/router";
import logo from '../img/logo.png';
import logowhite from '../img/logowhite.png';
import { createEffect, onCleanup } from "solid-js";
import { useLocation } from "@solidjs/router";
import translate from '../img/Translate.svg';
import tas8grouplightdenim from '../img/8) American Shoulder Bag/1 ASB LIGHT DENIM (Cover).svg';

const DetailPage = () => {
    const navigate = useNavigate();

    // Fungsi untuk navigasi ke halaman Cart
    const goToCart = () => {
        navigate("/cart");
    };

    const location = useLocation();

    createEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });


    // Fungsi untuk navigasi ke halaman Account
    const goToAccount = () => {
        navigate("/account");
    };
    const goToReadMore = () => {
        navigate("/blogpage/readmore5fahion");
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100); // Memberi jeda agar navigasi selesai dulu
    };

    const [quantity, setQuantity] = createSignal(1);
    const [selectedColor, setSelectedColor] = createSignal("blue");
    const [isFavorite, setIsFavorite] = createSignal(false);

    const incrementQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    const decrementQuantity = () => {
        if (quantity() > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    const handleColorSelect = (color: string) => {
        setSelectedColor(color);
    };

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite());
    };

    return (
        <div class="Container">
            {/* Header */}
            <header>
                <div class="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <nav class="navbar-blog">
                    <ul>
                        <li><a href="/dashboard">Home</a></li>
                        <li><a href="/products">Products</a></li>
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
            <div class="product-detail-content">
                <div class="product-images">
                    <div class="main-image">
                        <img src= {tas8grouplightdenim} alt="American Shoulder Bag" />
                    </div>
                    <div class="thumbnail-images">
                        <div class="thumbnail">
                            <img src={tas8grouplightdenim} alt="Thumbnail 1" />
                        </div>
                        <div class="thumbnail">
                        <img src={tas8grouplightdenim} alt="Thumbnail 2" />
                        </div>
                        <div class="thumbnail">
                        <img src={tas8grouplightdenim} alt="Thumbnail 3" />
                        </div>
                    </div>
                </div>

                <div class="product-info">
                    <div class="product-category">Bags</div>
                    <h1 class="product-title">American Shoulder Bag</h1>

                    <div class="product-rating">
                        <span class="star-rating">★ 4.8</span>
                        <span class="sold-count">16 sold</span>
                        <button class={`favorite-btn ${isFavorite() ? 'active' : ''}`} onClick={toggleFavorite}>
                            {isFavorite() ? '❤️' : '♡'}
                        </button>
                    </div>

                    <div class="product-price">256.000 IDR</div>

                    <div class="product-description">
                        <h3>Description</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>

                    <div class="product-colors">
                        <h3>Color</h3>
                        <div class="color-options">
                            <div
                                class={`color-option black ${selectedColor() === 'black' ? 'selected' : ''}`}
                                onClick={() => handleColorSelect('black')}
                            ></div>
                            <div
                                class={`color-option brown ${selectedColor() === 'brown' ? 'selected' : ''}`}
                                onClick={() => handleColorSelect('brown')}
                            ></div>
                            <div
                                class={`color-option blue ${selectedColor() === 'blue' ? 'selected' : ''}`}
                                onClick={() => handleColorSelect('blue')}
                            ></div>
                            <div
                                class={`color-option beige ${selectedColor() === 'beige' ? 'selected' : ''}`}
                                onClick={() => handleColorSelect('beige')}
                            ></div>
                        </div>
                    </div>

                    <div class="product-quantity">
                        <h3>Quantity</h3>
                        <div class="quantity-controls">
                            <button class="quantity-btn" onClick={decrementQuantity}>−</button>
                            <input
                                type="text"
                                class="quantity-input"
                                value={quantity()}
                                readonly
                            />
                            <button class="quantity-btn" onClick={incrementQuantity}>+</button>
                        </div>
                    </div>

                    <div class="product-actions">
                        <button class="buy-now-btn">Buy Now</button>
                        <button class="add-to-cart-btn">Add to Cart</button>
                    </div>
                </div>
            </div><img src={befooter} alt="Banner" class="full-width-image" />

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

export default DetailPage;