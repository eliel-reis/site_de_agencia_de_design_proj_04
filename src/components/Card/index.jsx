import style from "./Card.module.css";

export default function Card(props) {

    const Thema_Escolhido = props.interruptor ? style.container_dark : style.container_light;

    return (
        <section className={Thema_Escolhido} >
            <p className={style.p} >
                {props.data}
            </p>
            <h3 className={style.h3} >
                {props.titulo}
            </h3>
            <p className={style.p} >
                {props.sub_titulo}
            </p>

            <section>
                <p className={style.p_segunda_secao} >
                    {props.texto}
                </p>
            </section>
        </section>
    );
};