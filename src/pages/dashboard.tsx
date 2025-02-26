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
import accountIcon from '../img/UserCircle (2).svg'
import tas5 from '../img/tas5.png';
import tas6 from '../img/tas6.png';
import tas7 from '../img/tas7.png';
import cover1 from '../img/cover1.png';
import cover2 from '../img/cover2.png';
import cover3 from '../img/cover3.png';
import cover4 from '../img/cover4.png';
import video1 from '../img/1.mp4';
import video2 from '../img/2.mp4';
import video3 from '../img/3.mp4';
import video4 from '../img/4.mp4';
import tas8 from '../img/tas8.png';
import './dashboard.css';
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

const Dashboard = () => {
    const [mainImage1, setMainImage1] = createSignal(tas1groupred);
    const [mainImage2, setMainImage2] = createSignal(tas2groupbrown);
    const [mainImage3, setMainImage3] = createSignal(tas3groupa);
    const [mainImage4, setMainImage4] = createSignal(tas4groupblack);
    const videoData = [
        { src: video1, cover: cover1, title: "Exclusive Designs,  Timeless, and Effortlessly Stylish", date: "2024-03-30" },
        { src: video2, cover: cover2, title: "Best-Selling Bags You Can’t Miss!", date: "2024-01-17" },
        { src: video3, cover: cover3, title: "Theyy Wearr's Kebaya Kutu Baru Collection", date: "2024-01-12" },
        { src: video4, cover: cover4, title: "Elevate Your Look with Our Signature Bags", date: "2024-01-11" }
    ];
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
                        <li><a href="/" class="active">Home</a></li>
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

            {/* Hero Section */}
            <section class="hero">
                <div class="overlay-lines">
                    <img src={line} />
                    <div class="desc">
                        <h3>Accessoris</h3>
                        <h2>Glasses</h2>
                        <p>$20</p>
                    </div>
                </div>
                <div class="hero-content">
                    <div class="overlay-lines"></div>
                    <h1>Wear Confidence, Own the Moment</h1>
                    <p>Discover exquisite fashion pieces that accentuate your style and confidence. Elevate your everyday look with our curated collection.</p>
                    <button class="explore-btn">Get Started</button>
                </div>
                <div class="limited-offer">
                    <span>Limited Edition Alert! New arrivals are here - Don't miss out</span>
                    <span>Limited Edition Alert! New arrivals are here - Don't miss out</span>
                    <span>Limited Edition Alert! New arrivals are here - Don't miss out</span>
                    <span>Limited Edition Alert! New arrivals are here - Don't miss out</span>
                    <span>Limited Edition Alert! New arrivals are here - Don't miss out</span>
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
                        <div class="product-image" style="background-color: rgba(242, 242, 242, 1); padding: 30px;">
                            <img src={mainImage1()} alt="Litchi Pattern Pillow Handbag" class="main-image" />
                        </div>
                        <h3>Lady Pattern Pillow Handbag</h3>
                        <p class="price">285.300 IDR</p>
                        <div class="color-options" onMouseLeave={() => setMainImage1(tas1groupred)}>
                            <span
                                class="color black"
                                onMouseOver={() => setMainImage1(tas1groupblack)}
                            ></span>
                            <span
                                class="color red"
                                onMouseOver={() => setMainImage1(tas1groupred)}
                            ></span>
                            <span
                                class="color mint"
                                onMouseOver={() => setMainImage1(tas1groupmint)}
                            ></span>
                            <span
                                class="color pink"
                                onMouseOver={() => setMainImage1(tas1grouppink)}
                            ></span>
                        </div>
                    </div>
                    <div class="product-card">
                        <div class="product-image" style="background-color: rgba(242, 242, 242, 1); padding: 30px;">
                            <img src={mainImage2()} alt="Autumn Pearl Handbag" class="main-image" />
                        </div>
                        <h3>Retro Small Square Handbag</h3>
                        <p class="price">174.000 IDR</p>
                        <div class="color-options" onMouseLeave={() => setMainImage2(tas2groupbrown)}>
                            <span class="color blackgrey" onMouseOver={() => setMainImage2(tas2groupblackgrey)}></span>
                            <span class="color brown" onMouseOver={() => setMainImage2(tas2groupbrown)}></span>
                            <span class="color ijo" onMouseOver={() => setMainImage2(tas2groupijo)}></span>
                            <span class="color beige" onMouseOver={() => setMainImage2(tas2groupbeige)}></span>
                        </div>
                    </div>
                    <div class="product-card">
                        <div class="product-image" style="background-color: rgba(242, 242, 242, 1); padding: 30px;">
                            <img src={mainImage3()} alt="Autumn Pearl Handbag" class="main-image" />
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
                            <img src={mainImage4()} alt="Autumn Pearl Handbag" class="main-image" />
                        </div>
                        <h3>Focused Bowling Handbag</h3>
                        <p class="price">⁠192.000 IDR</p>
                        <div class="color-options" onMouseLeave={() => setMainImage4(tas4groupblack)}>
                            <span class="color black" onMouseOver={() => setMainImage4(tas4groupblack)}></span>
                            <span class="color brown" onMouseOver={() => setMainImage4(tas4groupbrown)}></span>
                            <span class="color grey" onMouseOver={() => setMainImage4(tas4groupgrey)}></span>
                            <span class="color orange" onMouseOver={() => setMainImage4(tas4grouporange)}></span>
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
                    <button
                        class="shop-now-btn"
                        onClick={() => navigate("/clothes")}
                    >
                        Shop Now
                    </button>
                </div>
                <div class="category-card accessories">
                    <h2>Accessories</h2>
                    <button class="shop-now-btn" onClick={() => navigate("/accessories")}>Shop Now</button>
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
                    {videoData.map((video) => {
                        const [isHovered, setIsHovered] = createSignal(false);

                        return (
                            <div
                                class="motion-item"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <div class="video-container">
                                    {isHovered() ? (
                                        <video
                                            src={video.src}
                                            class="motion-video"
                                            muted
                                            loop
                                            preload="metadata"
                                            playsinline
                                            autoplay
                                        />
                                    ) : (
                                        <img
                                            src={video.cover}
                                            alt="Video Cover"
                                            class="video-cover"
                                        />
                                    )}
                                </div>
                                <div class="video-info">
                                    <p>{video.date}</p>
                                    <h3>{video.title}</h3>
                                </div>
                            </div>
                        );
                    })}
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

export default Dashboard;