import { Component, createSignal } from 'solid-js';
import styles from './address.module.css';
import './address.module.css';
import PopupAddress from './popupaddress';
import accountIcon from '../img/UserCircle (2).svg';
import { useNavigate } from "@solidjs/router";
import logo from '../img/logo.png';
import logowhite from '../img/logowhite.png';
import translate from '../img/Translate.svg';
import befooter from '../img/befooter.png';
import cartIcon from '../img/Tote.svg';

interface Address {
    name: string;
    phone: string;
    address: string;
    type: string;
    isDefault?: boolean;
}

// Interface untuk data alamat yang dibutuhkan oleh PopupAddress
interface AddressData {
    name: string;
    phone: string;
    address: string;
    isDefault: boolean;
}

const Address: Component = () => {
    const navigate = useNavigate();

    // State management
    const [addresses, setAddresses] = createSignal<Address[]>([
        {
            name: 'Diva Faizah Dwiyanti - Home (Main)',
            phone: '0813xxxxxxxx',
            address: 'Jalan Abc No. 1 RT 4 RW 1, Purwokerto',
            type: 'Home',
            isDefault: true
        }
    ]);
    
    const [isPopupOpen, setIsPopupOpen] = createSignal(false);
    const [editingAddress, setEditingAddress] = createSignal<Address | null>(null);

    // Fungsi untuk navigasi ke halaman Cart
    const goToCart = () => {
        navigate("/cart");
    };

    // Fungsi untuk navigasi ke halaman Account
    const goToAccount = () => {
        navigate("/account");
    };

    // Fungsi untuk menambah alamat baru
    const handleAddNewAddress = () => {
        setEditingAddress(null);
        setIsPopupOpen(true);
    };

    // Fungsi untuk mengubah alamat
    const handleChangeAddress = (index: number) => {
        setEditingAddress(addresses()[index]);
        setIsPopupOpen(true);
    };

    // Fungsi untuk menyimpan alamat (baru atau edit)
    const handleSaveAddress = (addressData: AddressData) => {
        if (editingAddress()) {
            // Edit alamat yang sudah ada
            const updatedAddresses = addresses().map((addr, i) =>
                i === addresses().findIndex(a => a.name === editingAddress()?.name) ?
                    { ...addressData, type: addr.type } : addr
            );
            setAddresses(updatedAddresses);
        } else {
            // Tambah alamat baru
            setAddresses([...addresses(), { ...addressData, type: 'Home' }]);
        }
    };

    return (
        <div class={styles.container}>
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
                        <img src={accountIcon} class="active" alt="Profile" />
                    </button>
                </div>
            </header>

            <div class={styles.header}>
                <h1 class={styles.title}>Profile</h1>
            </div>

            <div class={styles.content}>
                <nav class={styles.tabs}>
                    <a href="/account" class={styles.tab}>My Profile</a>
                    <a href="/address" class={styles.activeTab}>Address</a>
                    <a href="/history" class={styles.tab}>History</a>
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
            
            {/* Popup Address Component */}
            <PopupAddress
                isOpen={isPopupOpen()}
                onClose={() => setIsPopupOpen(false)}
                onSave={handleSaveAddress}
                editAddress={editingAddress()}
            />
        </div>
    );
};

export default Address;