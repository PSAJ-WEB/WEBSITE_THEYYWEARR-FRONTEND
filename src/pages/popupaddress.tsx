import { Component, createSignal, Show } from 'solid-js';
import styles from './popupaddress.module.css';
import closeIcon from '../img/X.svg'; // Sesuaikan dengan lokasi file gambar


interface PopupAddressProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (addressData: AddressData) => void;
    editAddress?: AddressData | null;
}

interface AddressData {
    name: string;
    phone: string;
    address: string;
    isDefault: boolean;
}

const PopupAddress: Component<PopupAddressProps> = (props) => {
    const [name, setName] = createSignal(props.editAddress?.name || '');
    const [phone, setPhone] = createSignal(props.editAddress?.phone || '');
    const [address, setAddress] = createSignal(props.editAddress?.address || '');
    const [isDefault, setIsDefault] = createSignal(props.editAddress?.isDefault || false);

    const handleSubmit = (e: Event) => {
        e.preventDefault();

        const addressData: AddressData = {
            name: name(),
            phone: phone(),
            address: address(),
            isDefault: isDefault()
        };

        props.onSave(addressData);
        resetForm();
        props.onClose();
    };

    const resetForm = () => {
        setName('');
        setPhone('');
        setAddress('');
        setIsDefault(false);
    };

    return (
        <Show when={props.isOpen}>
            <div class={styles.overlay}>
                <div class={styles.popupContainer}>
                    <div class={styles.popupHeader}>
                        <h2>{props.editAddress ? 'Edit Address' : 'New Address'}</h2>
                        <button class={styles.closeButton} onClick={props.onClose}>
                            <img src={closeIcon} alt="Close" class={styles.closeIcon} />
                        </button>

                    </div>

                    <form onSubmit={handleSubmit}>
                        <div class={styles.formGroup}>
                            <label for="recipientName">Recipient Name</label>
                            <input
                                type="text"
                                id="recipientName"
                                value={name()}
                                onInput={(e) => setName(e.target.value)}
                                placeholder="Recipient Name"
                                required
                            />
                        </div>

                        <div class={styles.formGroup}>
                            <label for="phoneNumber">Phone Number</label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                value={phone()}
                                onInput={(e) => setPhone(e.target.value)}
                                placeholder="Phone Number"
                                required
                            />
                        </div>

                        <div class={styles.formGroup}>
                            <label for="address">Address</label>
                            <textarea
                                id="address"
                                value={address()}
                                onInput={(e) => setAddress(e.target.value)}
                                placeholder="Address Label, City and Sub-district"
                                required
                                rows={4}
                            />
                        </div>

                        <div class={styles.checkboxGroup}>
                            <input
                                type="checkbox"
                                id="defaultAddress"
                                checked={isDefault()}
                                onChange={(e) => setIsDefault(e.target.checked)}
                            />
                            <label for="defaultAddress">Set as default</label>
                        </div>

                        <button type="submit" class={styles.submitButton}>
                            {props.editAddress ? 'Save Changes' : 'Add New Address'}
                        </button>
                    </form>
                </div>
            </div>
        </Show>
    );
};

export default PopupAddress;