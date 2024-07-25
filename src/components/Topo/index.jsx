import style from "./Topo.module.css";
import Image from "next/image";
import Logo from "/public/assets/logo.png"
import Btn_Lua from "/public/assets/moon.png";
import Btn_Sol from "/public/assets/sun.png"

const Topo = (props) => {

    function alterar_interruptor() {
        props.set_interruptor(!props.interruptor);
    };

    const Btn_Escolhido = props.interruptor ? Btn_Sol : Btn_Lua;
    const Thema_Escolhido = props.interruptor ? style.header_dark : style.header_light;

    return (
        <header className={Thema_Escolhido} >
            <Image className={style.logo} src={Logo} alt="Logo" />
            <button onClick={alterar_interruptor} className={style.btn} >
                <Image className={style.btn_img} src={Btn_Escolhido} alt="botão para dark-mode" />
            </button>
        </header>
    );
};

export default Topo;