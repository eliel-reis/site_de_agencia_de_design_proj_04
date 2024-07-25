"use client";
import { useState } from "react";


import styles from "./page.module.css";
import Topo from "@/components/Topo";
import Secao_Banner from "@/components/SecaoBanner";
import Secao_Experiencia_Trabalho from "@/components/SecaoExperienciaTrabalho";
import Rodape from "@/components/Rodape";

export default function Home() {

  const [btn, set_btn] = useState(false);

  return (
    <main className={styles.main}>
      <Topo interruptor={btn} set_interruptor={set_btn} />
      <Secao_Banner interruptor={btn} />

      <Secao_Experiencia_Trabalho interruptor={btn} />


      <Rodape interruptor={btn} />
    </main>
  );
}
