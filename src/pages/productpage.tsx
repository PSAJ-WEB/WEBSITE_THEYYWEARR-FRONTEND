import { createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";
import logo from '../img/logo.png';
import logowhite from '../img/logowhite.png';
import translate from '../img/Translate.svg';
import trendy from '../img/Infinity.svg';
import totebag from '../img/Tote.svg';
import truck from '../img/Truck.svg';
import returns from '../img/ArrowsClockwise.svg'
import line from '../img/Union.png';
import styleinmotion from '../img/styleinmotion.png';
import fashiontips from '../img/fashiontips.png';
import mixnmatch from '../img/mixnmatch.png';
import behindthedesign from '../img/behindthedesign.png';
import befooter from '../img/befooter.png';
import cartIcon from '../img/Tote.svg';
import accountIcon from '../img/UserCircle.svg'
import tas1 from '../img/tas1.png';
import tas2 from '../img/tas2.png';
import tas3 from '../img/tas3.png';
import tas4 from '../img/tas4.png';
import tas5 from '../img/tas5.png';
import tas6 from '../img/tas6.png';
import tas7 from '../img/tas7.png';
import tas8 from '../img/tas8.png';
import './productpage.css';

const ProductPage = () => {
    const navigate = useNavigate();

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
            <section class="fresh-drops">
                <div class="section-header">
                    <h2>Fresh Drops for You</h2>
                    <a href="/view-all" class="view-all">View More</a>
                </div>
                <div class="products-grid">
                    {/* Row 1 */}
                    <div class="product-card">
                        <img src={tas1} alt="Lady Pattern Pillow Handbag" />
                        <h3>Lady Pattern Pillow Handbag</h3>
                        <p class="price">$89,500.00</p>
                        <div class="color-options">
                            <span class="color black"></span>
                            <span class="color red"></span>
                            <span class="color brown"></span>
                            <span class="color pink"></span>
                        </div>
                    </div>
                    <div class="product-card">
                        <img src={tas2} alt="Retro Small Square Handbag" />
                        <h3>Retro Small Square Handbag</h3>
                        <p class="price">$49,500.00</p>
                        <div class="color-options">
                            <span class="color black"></span>
                            <span class="color brown"></span>
                            <span class="color beige"></span>
                            <span class="color gold"></span>
                        </div>
                    </div>
                    <div class="product-card">
                        <img src={tas3} alt="Autumn Pearl Handbag" />
                        <h3>Autumn Pearl Handbag</h3>
                        <p class="price">$75,000.00</p>
                        <div class="color-options">
                            <span class="color beige"></span>
                            <span class="color orange"></span>
                            <span class="color brown"></span>
                            <span class="color cream"></span>
                        </div>
                    </div>
                    <div class="product-card">
                        <img src={tas4} alt="Focused Bowling Handbag" />
                        <h3>Focused Bowling Handbag</h3>
                        <p class="price">$67,900.00</p>
                        <div class="color-options">
                            <span class="color black"></span>
                            <span class="color brown"></span>
                            <span class="color red"></span>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div class="product-card">
                        <img src={tas5} alt="Versatile Shoulder Bag" />
                        <h3>Versatile Shoulder Bag</h3>
                        <p class="price">$21,000.00</p>
                        <div class="color-options">
                            <span class="color brown"></span>
                            <span class="color beige"></span>
                            <span class="color black"></span>
                            <span class="color cream"></span>
                        </div>
                    </div>
                    <div class="product-card">
                        <img src={tas6} alt="Shamrock Shoulder Bag" />
                        <h3>Shamrock Shoulder Bag</h3>
                        <p class="price">$45,000.00</p>
                        <div class="color-options">
                            <span class="color navy"></span>
                            <span class="color black"></span>
                            <span class="color brown"></span>
                            <span class="color beige"></span>
                        </div>
                    </div>
                    <div class="product-card">
                        <img src={tas7} alt="Diamond Chain Circular Bag" />
                        <h3>Diamond Chain Circular Bag</h3>
                        <p class="price">$95,000.00</p>
                        <div class="color-options">
                            <span class="color black"></span>
                            <span class="color brown"></span>
                            <span class="color mint"></span>
                        </div>
                    </div>
                    <div class="product-card">
                        <img src={tas8} alt="American Shoulder Bag" />
                        <h3>American Shoulder Bag</h3>
                        <p class="price">$89,900.00</p>
                        <div class="color-options">
                            <span class="color blue"></span>
                            <span class="color black"></span>
                            <span class="color beige"></span>
                            <span class="color pink"></span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section class="categories">
                <div class="category-card clothes">
                    <h2>Clothes</h2>
                    <button class="shop-now-btn">Shop Now</button>
                </div>
                <div class="category-card accessories">
                    <h2>Accessories</h2>
                    <button class="shop-now-btn">Shop Now</button>
                </div>
            </section>
            <div class="limited-offer">
                <span>Be Bold, Be Different – Fashion is an Expression!</span>
                <span>Be Bold, Be Different – Fashion is an Expression!</span>
                <span>Be Bold, Be Different – Fashion is an Expression!</span>
                <span>Be Bold, Be Different – Fashion is an Expression!</span>
                <span>Be Bold, Be Different – Fashion is an Expression!</span>
            </div>
            {/* Lifestyle Banner */}
            <section class="lifestyle-banner">
                <div class="banner-text">
                    <h2>Beyond Fashion, It's a Lifestyle</h2>
                    <a href="/about-us" class="view-all">About Us</a>
                </div>
                <div class="features">
                    <div class="feature">
                        <div class="icon">
                            <img src={trendy} alt="Trendy Icon" />
                        </div>
                        <h3>Trendy & Timeless</h3>
                        <p>Stay at the edge of what's hot while maintaining timeless elegance</p>
                    </div>
                    <div class="feature">
                        <div class="icon">
                            <img src={totebag} alt="Premium Icon" />
                        </div>
                        <h3>Premium Quality</h3>
                        <p>High quality materials and impeccable craftsmanship in every piece</p>
                    </div>
                    <div class="feature">
                        <div class="icon">
                            <img src={truck} alt="Shipping Icon" />
                        </div>
                        <h3>Express Shipping</h3>
                        <p>Fast and reliable delivery across the world at your convenience</p>
                    </div>
                    <div class="feature">
                        <div class="icon">
                            <img src={returns} alt="Returns Icon" />
                        </div>
                        <h3>Easy Returns</h3>
                        <p>Hassle-free returns within 30 days if you're not satisfied</p>
                    </div>
                </div>
            </section>

            {/* Style in Motion Section */}
            <section class="style-motion">
                <div class="section-header">
                    <h2>Style in Motion</h2>
                    <a href="/viewmore" class="view-all">View More</a>
                </div>
                <div class="motion-grid">
                    <div class="motion-item">
                        <img src={styleinmotion} alt="Style in Motion" />
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div class="motion-item">
                        <img src={styleinmotion} alt="Style in Motion" />
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div class="motion-item">
                        <img src={styleinmotion} alt="Style in Motion" />
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div class="motion-item">
                        <img src={styleinmotion} alt="Style in Motion" />
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div class="motion-item">
                        <img src={styleinmotion} alt="Style in Motion" />
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div class="motion-item">
                        <img src={styleinmotion} alt="Style in Motion" />
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div class="motion-item">
                        <img src={styleinmotion} alt="Style in Motion" />
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div class="motion-item">
                        <img src={styleinmotion} alt="Style in Motion" />
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </section>

            {/* Style Talks Section */}
            <section class="style-talks">
                <div class="section-header">
                    <h2>Style Talks & Trends</h2>
                    <a href="/blogpage" class="blog">Blog</a>
                </div>
                <div class="blog-posts">
                    <div class="blog-post">
                        <img src={fashiontips} alt="Fashion Tips" />
                        <div class="blog-content">
                            <h3>5 Fashion Tips to Instantly Elevate Your Look</h3>
                            <p>Want to level up your style effortlessly? Fashion is more than just clothes—it’s about confidence, attitude, and knowing how to put the right pieces together. In this article, we’ll explore five expert-approved fashion tips that will help you transform your everyday outfits into stunning, head-turning ensembles. From understanding color coordination to choosing the right accessories, these simple yet effective tricks will make a significant difference in your personal style.</p>
                            <a href="#" class="read-more">Read More</a>
                        </div>
                    </div>
                    <div class="blog-post">
                        <img src={mixnmatch} alt="Mix & Match" />
                        <div class="blog-content">
                            <h3>Mix & Match: The Art of Pairing Bags & Outfits</h3>
                            <p>A great outfit isn’t complete without the perfect bag. But how do you choose the right one? Whether you’re going for a chic, casual, or elegant look, the way you pair your bag with your outfit can elevate your style effortlessly. This article will guide you through the essentials of bag-outfit coordination, including color harmony, texture balance, and occasion-based selections. Learn how to make a statement with the perfect mix-and-match combinations!</p>
                            <a href="#" class="read-more">Read More</a>
                        </div>
                    </div>
                    <div class="blog-post">
                        <img src={behindthedesign} alt="Behind the Design" />
                        <div class="blog-content">
                            <h3>Behind the Design: The Inspiration Behind Our Collection</h3>
                            <p>Every piece in our collection has a story. From concept to creation, our design process is driven by inspiration from global fashion trends, cultural influences, and timeless style. In this exclusive behind-the-scenes look, we’ll walk you through the journey of how our latest collection came to life—starting from mood boards, fabric selection, to the final product. Get an insider’s perspective on the creative process, and discover the passion behind every stitch and detail.</p>
                            <a href="#" class="read-more">Read More</a>
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