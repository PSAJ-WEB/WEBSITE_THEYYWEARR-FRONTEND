import { Component, createSignal } from 'solid-js';
import styles from './ProductPage2.module.css';
import { useNavigate } from "@solidjs/router";
import logo from '../img/logo.png';
import cartIcon from '../img/Tote.svg';
import accountIcon from '../img/UserCircle.svg'
import tas1groupred from '../img/1) Litchi Pattern Pillow Handbag/1 LPPH RED (Cover).svg';
import tas2groupblackgrey from '../img/2 ) Retro Small Square Handbag/2 RSSH CHARCOAL.svg';

interface Product {
    id: number;
    name: string;
    price: string;
    category: string;
    colors: string[];
    image: string;
}

const ProductPage: Component = () => {
    const [searchQuery, setSearchQuery] = createSignal('');
    const navigate = useNavigate();
    
        // Fungsi untuk navigasi ke halaman Cart
        const goToCart = () => {
            navigate("/cart");
        };
    
        // Fungsi untuk navigasi ke halaman Account
        const goToAccount = () => {
            navigate("/account");
        };

    const products: Product[] = [
        {
            id: 1,
            name: 'Litchi Pattern Pillow Handbag',
            price: '285.300 IDR',
            category: 'Category',
            colors: ['#000000', '#CC0000', '#87CEEB', '#FFB6C1'],
            image: tas1groupred
        },
        {
            id: 2,
            name: 'Retro Small Square Handbag',
            price: '174.000 IDR',
            category: 'Category',
            colors: ['#000000', '#8B4513', '#DAA520', '#F5DEB3'],
            image: tas2groupblackgrey
        }
    ];

    return (
        <div class={styles.container}>
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
            <div class={styles.hero}>
                <div class={styles.heroContent}>
                    <h1>Discover Your<br />Signature Style</h1>
                    <p>Find the perfect bags and outfits that complement your personality.</p>
                    <button class={styles.shopNow}>Shop Now</button>
                </div>
                <div class={styles.marquee}>
                    <span>Handpicked Styles Premium Quality Trend-Forward Fashion Elevate Your Wardrobe Today</span>
                    <span>Handpicked Styles Premium Quality Trend-Forward Fashion Elevate Your Wardrobe Today</span>
                    <span>Handpicked Styles Premium Quality Trend-Forward Fashion Elevate Your Wardrobe Today</span>
                    <span>Handpicked Styles Premium Quality Trend-Forward Fashion Elevate Your Wardrobe Today</span>
                    <span>Handpicked Styles Premium Quality Trend-Forward Fashion Elevate Your Wardrobe Today</span>
                </div>
            </div>

            {/* Products Section */}
            <section class={styles.productsSection}>
                <div class={styles.sectionHeader}>
                    <h2>Clothes</h2>
                    <div class={styles.searchBox}>
                        <input
                            type="text"
                            placeholder="Type something here"
                            value={searchQuery()}
                            onInput={(e) => setSearchQuery(e.currentTarget.value)}
                        />
                        <button>Search</button>
                    </div>
                </div>

                <div class={styles.productGrid}>
                    {products.map(product => (
                        <div class={styles.productCard}>
                            <div class={styles.productImage}>
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div class={styles.productInfo}>
                                <span class={styles.category}>{product.category}</span>
                                <h3>{product.name}</h3>
                                <p class={styles.price}>{product.price}</p>
                                <div class={styles.colorOptions}>
                                    {product.colors.map(color => (
                                        <span
                                            class={styles.colorDot}
                                            style={{ "background-color": color }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer class={styles.footer}>
                <div class={styles.footerContent}>
                    <img src="/images/logo.png" alt="Theyy" class={styles.footerLogo} />
                    <div class={styles.newsletter}>
                        <p>Stay updated with our latest drops & exclusive deals</p>
                        <div class={styles.subscribeForm}>
                            <input type="email" placeholder="Enter your email" />
                            <button type="submit">Submit</button>
                        </div>
                    </div>
                    <div class={styles.footerLinks}>
                        <div class={styles.linkColumn}>
                            <h4>Theyy Wear</h4>
                            <a href="#">Home</a>
                            <a href="#">Product</a>
                            <a href="#">About Us</a>
                            <a href="#">Blog</a>
                        </div>
                        <div class={styles.linkColumn}>
                            <h4>About Us</h4>
                            <a href="#">Company</a>
                            <a href="#">Community</a>
                            <a href="#">Careers</a>
                            <a href="#">Investors</a>
                        </div>
                        <div class={styles.linkColumn}>
                            <h4>Connect with Us</h4>
                            <a href="#">TikTok</a>
                            <a href="#">Instagram</a>
                        </div>
                    </div>
                    <div class={styles.footerBottom}>
                        <p>© 2025 Theyy Wear Inc</p>
                        <div class={styles.legal}>
                            <a href="#">Terms and Conditions</a>
                            <select class={styles.language}>
                                <option value="en">English</option>
                            </select>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ProductPage;