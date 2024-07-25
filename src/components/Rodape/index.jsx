import Image from "next/image";
import Logo from "/public/assets/logo.png";
import facebook from "/public/assets/facebook.png";
import twitter from "/public/assets/twitter.png";
import linkedin from "/public/assets/linkedin.png";
import dribble from "/public/assets/dribble.png";
import behance from "/public/assets/behance.png";
import google_plus from "/public/assets/google-plus.png";
import style from "./Rodape.module.css";
import Link from "next/link";


export default function Rodape(props) {

    const Thema_Escolhido = props.interruptor ? style.footer_dark : style.footer_light;

    return (
        <footer className={Thema_Escolhido} >
            <Image className={style.logo} src={Logo} alt="Logo" />
            <p className={style.p} >
                Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.
            </p>
            <section className={style.container_icones} >

                <Link href="#">
                    <Image className={style.icone} src={facebook} alt="logo do(a) facebook " />
                </Link>

                <Link href="#">
                    <Image className={style.icone} src={twitter} alt="logo do(a) twitter " />
                </Link>

                <Link href="#">
                    <Image className={style.icone} src={linkedin} alt="logo do(a) linkedin " />
                </Link>

                <Link href="#">
                    <Image className={style.icone} src={dribble} alt="logo do(a) dribble" />
                </Link>

                <Link href="#">
                    <Image className={style.icone} src={behance} alt="logo do(a) behance" />
                </Link>

                <Link href="#">
                    <Image className={style.icone} src={google_plus} alt="logo do(a) google_plus" />
                </Link>
            </section>

            <p className={style.ultimo_p} >
                Copyright 2022 &copy; <span>Eliel Reis</span>
            </p>
        </footer>
    );
};