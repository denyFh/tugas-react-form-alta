import { useState, useRef } from 'react';
import styles from './style.module.css'

const Form = ({ inputs, setInputs, errorMsg, setErrorMsg, fileRef }) => {

    const [error, setError] = useState(errorMsg);
    const fileInput = useRef(fileRef);
    const usernameRegex = /^[A-Za-z\s]*$/;
    const numberRegex = /^^[0-9\s]*$/;
    // console.log(Object.keys(inputs));
    const nameValue = inputs.nama;
    const emailValue = inputs.email;
    const noHpValue = inputs.noHp;
    const pendidikanValue = inputs.pendidikan;
    const kelasValue = inputs.kelas;
    const harapanValue = inputs.harapan;


    const handleInput = (value, key) => {
        const newInputs = { ...inputs };

        newInputs[key] = value;

        setInputs(newInputs);
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const errorTemp = [];

        const formInputs = {nameValue, emailValue, noHpValue, pendidikanValue, kelasValue, harapanValue};

        if (!usernameRegex.test(nameValue) || nameValue.length === 0) {
            errorTemp.push('Nama Lengkap harus berupa huruf & wajib diisi');
        }

        if (emailValue.length === 0) {
            errorTemp.push('Email Wajib Diisi');
        }

        if (!numberRegex.test(noHpValue) || noHpValue.length === 0) {
            errorTemp.push('no handphone harus memiliki panjang 9-14 karakter, berupa angka & wajib diisi')
        }


        // console.log({ value, key });
        // if (key === 'nama') {
        //     if (!usernameRegex.test(inputValue) || inputValue === '') {
        //         setError({
        //             nama: "nama lengkap harus berupa huruf & wajib diisi"
        //         });
        //     } else {
        //         setError({
        //             nama: ''
        //         });
        //     }
        // } else if (key === 'email') {
        //     if (emailValue === '') {
        //         setError({...error}, {
        //             email: "email wajib diisi"
        //         });
        //     } else {
        //         setError({
        //             email: ''
        //         });
        //     }
        // } else if (key === 'noHp') {
        //     if (!numberRegex.test(noHpValue) || noHpValue === '') {
        //         setError({...error}, {
        //             noHp: "no handphone harus memiliki panjang 9-14 karakter, berupa angka & wajib diisi"
        //         });
        //     } else {
        //         setError({
        //             noHp: ""
        //         })
        //     }
        // }

        setErrorMsg({errorMsg});

        setInputs({
            nama: "",   
            email: "",
            noHp: "",
            pendidikan: "",
            kelas: "",
            harapan: "",
        });
    }



    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor="fullnameInput">
                    Nama Lengkap:
                </label>
                <input id="fullnameInput" name="fullnameInput" type="text" className={styles.formControl} onChange={(e) => handleInput(e.target.value, 'nama')} />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="emailInput">
                    Email:
                </label>
                <input id="emailInput" name="emailInput" type="email" className={styles.formControl} onChange={(e) => handleInput(e.target.value, 'email')} />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="phoneInput">
                    No. Handphone:
                </label>
                <input id="phoneInput" name="phoneInput" type="text" className={styles.formControl} onChange={(e) => handleInput(e.target.value, 'noHp')} />
            </div>
            <div className={styles.formGroup}>
                <label>
                    Latar Belakang Pendidikan:
                </label>
                <label htmlFor="it">
                    <input id="it" value="it" name="pendidikanInput" type="radio" className={styles.formControl} onChange={(e) => handleInput(e.target.value, 'pendidikan')} />
                    IT
                </label>
                <label htmlFor="nonit">
                    <input id="nonit" value="nonIt" name="pendidikanInput" type="radio" className={styles.formControl} onChange={(e) => handleInput(e.target.value, 'pendidikan')} />
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
                <input name="suratInput" type="file" ref={fileInput} />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="harapanInput">
                    Harapan Untuk Coding Bootcamp ini:
                </label>
                <textarea id="harapanInput" name="harapanInput" cols="8" rows="10" className={styles.formControl} onChange={(e) => handleInput(e.target.value, 'harapan')} />
            </div>
            <div className={styles.buttonGroup}>
                <button className={styles.submit} type="submit">Submit</button>
                <button className={styles.reset} type="button">Reset</button>
            </div>
        </form>
    );
}

export default Form;