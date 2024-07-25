import style from "./SecaoBanner.module.css";

export default function Secao_Banner(props) {

    const Thema_Escholido = props.interruptor ? style.container_dark : style.container_light;

    return (
        <section className={Thema_Escholido} >
            <section className={style.sub_container} >
                <p className={style.p} >
                    BRANDING / UI / UX / TECNOLOGIA
                </p>
                <h2 className={style.h2} >
                    Agência de Branding
                </h2>
                <span>e design digital</span>
            </section>
        </section>
    );
};