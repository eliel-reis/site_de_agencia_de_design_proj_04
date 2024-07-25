import Card from "@/components/Card";
import style from "./SecaoExperienciaTrabalho.module.css";

export default function Secao_Experiencia_Trabalho(props) {

    const Thema_Escolhido = props.interruptor ? style.container_dark : style.container_light;

    return (
        <section className={Thema_Escolhido} >

            <section className={style.primeira_secao} >
                <h3>
                    Experiências De Trabalho
                </h3>
                <p>
                    Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de Sites e Marketing Digital, nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.
                </p>
            </section>

            <section className={style.segunda_secao} >
                <Card
                    data="JUNHO 2012 - 2016"
                    titulo="Web Designer"
                    sub_titulo="Pied Piper Startup."
                    texto="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores."
                />

                <Card
                    data="AGOSTO 2016 - 2019"
                    titulo="Product Designer"
                    sub_titulo="E Corp."
                    texto="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra."
                />

                <Card
                    data="FEVEREIRO 2019 - 2021"
                    titulo="Digital Consulting"
                    sub_titulo="Arasaka Inc."
                    texto="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução."
                />



            </section>
        </section>
    );
};