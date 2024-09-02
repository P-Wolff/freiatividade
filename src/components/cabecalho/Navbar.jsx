import './Navbar.scss';
import Logo from '../assets/images/success.png';

export default function Cabecalho() {
  return (
    <div className="comp-navbar">

      <header className="head">
        <img className='logo' src={Logo} alt='Logo frei' title='Logo do frei'/>

        <p className='text-head'>Atividades</p>
      </header>

    </div>
  );
}