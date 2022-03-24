import { useState, useRef } from 'react';
import styles from './style.module.css'

const Form = ({ inputs, setInputs, fileRef }) => {

    const [error, setError] = useState([]);

    const fileInput = useRef(fileRef);
    const usernameRegex = /^[A-Za-z\s]*$/;
    const numberRegex = /^^[0-9\s]*$/;

    const handleInput = (value, key) => {
        const newInputs = { ...inputs };

        newInputs[key] = value;

        setInputs(newInputs);

    }

    const handleReset = () => {
        setError([]);
    }

    const fileHandler = (e) => {
        console.log(e.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const errorTemp = [];

        const formInputs = inputs;

        if (!usernameRegex.test(formInputs.nama) || formInputs.nama.length === 0) {
            errorTemp.push('Nama Lengkap harus berupa huruf & wajib diisi');
        }

        if (formInputs.email.length === 0) {
            errorTemp.push('Email Wajib Diisi');
        }

        if (!numberRegex.test(formInputs.noHp) || formInputs.noHp.length === 0) {
            errorTemp.push('no handphone harus memiliki panjang 9-14 karakter, berupa angka & wajib diisi')
        }

        if (formInputs.pendidikan === '') {
            errorTemp.push('pendidikan harus dipilih');
        }

        if (formInputs.kelas === '') {
            errorTemp.push('kelas harus dipilih');
        }

        console.log('form inputs after submit: ', formInputs);

        setError(errorTemp);

        if (errorTemp.length !== 0) {
            alert(`Data Pendaftar Tidak Sesuai\n-> ${errorTemp.join('\n-> ')}`)
        } else {
            setInputs({
                nama: "",
                email: "",
                noHp: "",
                pendidikan: "",
                kelas: "",
                harapan: "",
            });

            e.target.reset();
        }

    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor="fullnameInput">
                    Nama Lengkap:
                </label>
                <input id="fullnameInput" name="fullnameInput" type="text" className={styles.formControl} value={inputs.nama} onChange={(e) => handleInput(e.target.value, 'nama')} />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="emailInput">
                    Email:
                </label>
                <input id="emailInput" name="emailInput" type="email" className={styles.formControl} value={inputs.email} onChange={(e) => handleInput(e.target.value, 'email')} />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="phoneInput">
                    No. Handphone:
                </label>
                <input id="phoneInput" name="phoneInput" type="text" minLength={9} maxLength={14} className={styles.formControl} value={inputs.noHp} onChange={(e) => handleInput(e.target.value, 'noHp')} />
            </div>
            <div className={styles.formGroup}>
                <label>
                    Latar Belakang Pendidikan:
                </label>
                <label htmlFor="it">
                    <input id="it" value="it" name="pendidikanInput" type="radio" className={styles.formControl} checked={inputs.pendidikan === 'it'} onChange={(e) => handleInput(e.target.value, 'pendidikan')} />
                    IT
                </label>
                <label htmlFor="nonit">
                    <input id="nonit" value="nonIt" name="pendidikanInput" type="radio" className={styles.formControl} checked={inputs.pendidikan === 'nonIt'} onChange={(e) => handleInput(e.target.value, 'pendidikan')} />
                    Non IT
                </label>
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="kelasInput">
                    Kelas Coding yang Dipilih:
                </label>
                <select name="kelasCode" id="kelasInput" className={styles.formControl} value={inputs.kelas} onChange={(e) => handleInput(e.target.value, 'kelas')}>
                    <option value="">Pilih Salah Satu Program</option>
                    <option value="backendGolang">Coding Backend with Golang</option>
                    <option value="frontendReact">Coding Frontend with ReactJS</option>
                    <option value="fullStack">Fullstack Developer</option>
                </select>
            </div>
            <div className={styles.formGroup}>
                <label>
                    Foto Surat Kesungguhan
                </label>
                <input name="suratInput" type="file" ref={fileInput} onChange={fileHandler} />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="harapanInput">
                    Harapan Untuk Coding Bootcamp ini:
                </label>
                <textarea id="harapanInput" name="harapanInput" cols="8" rows="10" className={styles.formControl} value={inputs.harapan} onChange={(e) => handleInput(e.target.value, 'harapan')} />
            </div>
            <div className={styles.buttonGroup}>
                <button className={styles.submit} type="submit">Submit</button>
                <button className={styles.reset} type="reset" onClick={handleReset}>Reset</button>
            </div>
            {
                error.length !== 0 && <p className={styles.m0}>Error List:</p>
            }
            <ul className={styles.listContainer}>
                {
                    error.map((errorMsg, errorMsgIdx) => (
                        <li key={errorMsgIdx}>{errorMsg}</li>
                    ))
                }
            </ul>
        </form>
    );
}

export default Form;