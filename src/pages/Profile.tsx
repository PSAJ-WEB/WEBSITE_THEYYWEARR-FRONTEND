import { Component, createSignal } from 'solid-js';
import styles from './Profile.module.css';
import accountIcon from '../img/UserCircle.svg';
import { useNavigate } from "@solidjs/router";
import logo from '../img/logo.png';
import logowhite from '../img/logowhite.png';
import befooter from '../img/befooter.png';
import cartIcon from '../img/Tote.svg';

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


    const [profileData, setProfileData] = createSignal({
        fullName: 'Diva Faizah Dwiyanti',
        email: 'xxxxx@gmail.com',
        birthday: 'January 19, 2007',
        gender: 'Female'
    });

    const handleSave = (e: Event) => {
        e.preventDefault();
        // Handle save logic here
        console.log('Profile saved:', profileData());
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
                    <a href="#" class={styles.activeTab}>My Profile</a>
                    <a href="profile2" class={styles.tab}>Address</a>
                </nav>

                <div class={styles.profileSection}>
                    <div class={styles.avatarSection}>
                        <div class={styles.avatar}>
                            <img src={accountIcon} alt="Profile" />
                        </div>
                    </div>

                    <form class={styles.form} onSubmit={handleSave}>
                        <div class={styles.formGroup}>
                            <label>Full Name</label>
                            <input
                                type="text"
                                value={profileData().fullName}
                                onChange={(e) => setProfileData({ ...profileData(), fullName: e.currentTarget.value })}
                            />
                        </div>

                        <div class={styles.formGroup}>
                            <label>Email</label>
                            <input
                                type="email"
                                value={profileData().email}
                                onChange={(e) => setProfileData({ ...profileData(), email: e.currentTarget.value })}
                            />
                        </div>

                        <div class={styles.formGroup}>
                            <label>Birthday</label>
                            <input
                                type="text"
                                value={profileData().birthday}
                                onChange={(e) => setProfileData({ ...profileData(), birthday: e.currentTarget.value })}
                            />
                        </div>

                        <div class={styles.formGroup}>
                            <label>Gender</label>
                            <div class={styles.radioGroup}>
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Female"
                                        checked={profileData().gender === 'Female'}
                                        onChange={(e) => setProfileData({ ...profileData(), gender: e.currentTarget.value })}
                                    />
                                    Female
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                        checked={profileData().gender === 'Male'}
                                        onChange={(e) => setProfileData({ ...profileData(), gender: e.currentTarget.value })}
                                    />
                                    Male
                                </label>
                            </div>
                        </div>

                        <div class={styles.buttonSection}>
                            <button type="submit" class={styles.saveButton}>Save</button>
                        </div>
                    </form>
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