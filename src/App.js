import { useState, useRef } from 'react';
import Form from './components/Form';
import './App.css';

function App() {
  const baseData = {
    nama: "",
    email: "",
    noHp: "",
    pendidikan: "",
    kelas: "",
    harapan: "",
  };

  const baseError = {
    nama: "",
    email: "",
    noHp: "",

  };

  const suratKesungguhan = useRef(null);
  const [data, setData] = useState(baseData);
  const [errorMsg, setErrorMsg] = useState(baseError);

  return (
    <div className="App">
      <h1>Pendaftaran Peserta Coding Bootcamp</h1>
      <Form inputs={data} setInputs={setData} errorMsg={errorMsg} setErrorMsg={setErrorMsg} fileRef={suratKesungguhan}/>
    </div>
  );
}

export default App;
