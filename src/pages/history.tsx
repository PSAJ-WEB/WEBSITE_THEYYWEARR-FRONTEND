import { createSignal } from "solid-js";
import styles from "./history.module.css";
import { useNavigate } from "@solidjs/router";
import logo from '../img/logo.png';
import profile from '../img/UserCircle (2).svg';
import logowhite from '../img/logowhite.png';
import befooter from '../img/befooter.png';
import translate from '../img/Translate.svg';
import cartIcon from '../img/Tote.svg';
import tas1groupred from '../img/1) Litchi Pattern Pillow Handbag/1 LPPH RED (Cover).svg';
import tas2groupbrown from '../img/2 ) Retro Small Square Handbag/1 RSSH BROWN (Cover).svg';


interface OrderItem {
    id: string;
    name: string;
    color: string;
    colorCode: string;
    quantity: number;
    price: number;
    date: string;
    time: string;
    image: string;
}

export default function History() {
    const navigate = useNavigate();

    // Fungsi untuk navigasi ke halaman Cart
    const goToCart = () => {
        navigate("/cart");
    };

    // Fungsi untuk navigasi ke halaman Account
    const goToAccount = () => {
        navigate("/account");
    };

    const [orderHistory] = createSignal<OrderItem[]>([
        {
            id: "1",
            name: "Litchi Pattern Pillow Handbag",
            color: "Red",
            colorCode: "#9E1F25",
            quantity: 1,
            price: 285300,
            date: "28-02-2025",
            time: "02:26 PM",
            image: tas1groupred
        },
        {
            id: "2",
            name: "Retro Small Square Handbag",
            color: "Brown",
            colorCode: "#89644B",
            quantity: 1,
            price: 174000,
            date: "05-01-2025",
            time: "07:30 AM",
            image: tas2groupbrown
        }
    ]);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat("id-ID").format(amount);
    };

    return (
        <div class={styles.Container}>
            <header>
                <div class="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <nav class="navbar">
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
                        <img src={profile} alt="Account" />
                    </button>
                </div>
            </header>
            <div class={styles.header}>
                <h1 class={styles.title}>Profile</h1>
            </div>

            <div class={styles.content}>
                <nav class={styles.tabs}>
                    <a href="/account" class={styles.tab}>My Profile</a>
                    <a href="/address" class={styles.tab}>Address</a>
                    <a href="/history" class={styles.activeTab}>History</a>
                </nav>

                <div class={styles.orderHistory}>
                    {orderHistory().map((order) => (
                        <div class={styles.orderItem}>
                            <div class={styles.orderImageContainer}>
                                <img src={order.image} alt={order.name} class={styles.orderImage} />
                            </div>

                            <div class={styles.orderDetails}>
                                <h3 class={styles.productName}>{order.name}</h3>
                                <div class={styles.colorInfo}>
                                    <span
                                        class={styles.colorDot}
                                        style={{ "background-color": order.colorCode }}
                                    ></span>
                                    <span class={styles.colorName}>{order.color}</span>
                                </div>
                                <div class={styles.quantity}>Qty: {order.quantity}</div>
                                <div class={styles.orderDate}>
                                    Order Completed at {order.date} {order.time}
                                </div>
                            </div>

                            <div class={styles.orderPriceSection}>
                                <div class={styles.orderPriceLabel}>Total Orders</div>
                                <div class={styles.orderPrice}>{formatCurrency(order.price)} IDR</div>
                                <button class={styles.buyAgainButton}>Buy Again</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
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
}