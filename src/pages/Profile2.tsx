import { Component, createSignal } from 'solid-js';
import styles from './Profile2.module.css';
import accountIcon from '../img/UserCircle.svg';
import { useNavigate } from "@solidjs/router";
import logo from '../img/logo.png';
import logowhite from '../img/logowhite.png';
import befooter from '../img/befooter.png';
import cartIcon from '../img/Tote.svg';

interface Address {
    name: string;
    phone: string;
    address: string;
    type: string;
}

const Profile: Component = () => {
    const navigate = useNavigate();

    // Fungsi untuk navigasi ke halaman Cart
    const goToCart = () => {
        navigate("/cart");
    };

    // Fungsi untuk navigasi ke halaman Account
    const goToAccount = () => {
        navigate("/profile");
    };

    const [addresses, setAddresses] = createSignal<Address[]>([
        {
            name: 'Diva Faizah Dwiyanti - Home (Main)',
            phone: '0813xxxxxxxx',
            address: 'Jalan Abc No. 1 RT 4 RW 1, Purwokerto',
            type: 'Home'
        }
    ]);

    const handleAddNewAddress = () => {
        // Handle add new address logic here
        console.log('Adding new address');
    };

    const handleChangeAddress = (index: number) => {
        // Handle change address logic here
        console.log('Changing address at index:', index);
    };

    return (
        <div class={styles.container}>
            <header>
                <div class="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <nav class="navbar">
                    <ul>
                        <li><a href="/">Home</a></li>
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
                        <img src={accountIcon} class="active" alt="Profile" />
                    </button>
                </div>
            </header>

            <div class={styles.header}>
                <h1 class={styles.title}>Profile</h1>
            </div>

            <div class={styles.content}>
                <nav class={styles.tabs}>
                    <a href="Profile" class={styles.tab}>My Profile</a>
                    <a href="#" class={styles.activeTab}>Address</a>
                </nav>

                <div class={styles.addressSection}>
                    <div class={styles.addressHeader}>
                        <button
                            class={styles.addAddressButton}
                            onClick={handleAddNewAddress}
                        >
                            Add New Address
                        </button>
                    </div>

                    <div class={styles.addressList}>
                        {addresses().map((address, index) => (
                            <div class={styles.addressCard}>
                                <div class={styles.addressContent}>
                                    <h3 class={styles.addressName}>{address.name}</h3>
                                    <p class={styles.addressPhone}>{address.phone}</p>
                                    <p class={styles.addressText}>{address.address}</p>
                                </div>
                                <button
                                    class={styles.changeAddressButton}
                                    onClick={() => handleChangeAddress(index)}
                                >
                                    Change Address
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <img src={befooter} alt="Banner" class="full-width-image" />

            {/* Footer */}
            <footer class={styles.footer}>
                <div class={styles.footerContent}>
                    <img src={logowhite} alt="Theyy" class={styles.footerLogo} />
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

export default Profile;