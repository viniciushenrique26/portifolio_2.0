import React from "react";
import Image from "../assets/fotosperfil.png";
import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
              <h1 className="text-[55px] font-bold leading-[0.8] lg:text-[110px]">
                Vinicius <span>Slavov</span>
              </h1>
            
              <div className="mb-6 text-[36px] lg:text-[55px] font-secondary font-semibold uppercase leading-[1]">
                <span className=" text-white mr-4">Eu sou</span>
                <TypeAnimation
                  sequence={[
                    "Desenvolvedor",
                    2000,
                    "UX/UI",
                    2000,
                    "Criativo",
                    2000, 
                    "Diferente",
                    2000,
                  ]}
                  speed={50}
                  className="text-blue-800"
                  wrapper="span"
                  repeat={Infinity}
                />
              </div>
              <p className="mb-8 max-w-lg mx-auto lg:mx-0">
                Sou um Cientista da Computação entusiasta de Front-end e UX Design.
                Sou apaixonado por criar interfaces elegantes e funcionais que
                tornam a experiência do usuário agradável e fácil e acessível.
              </p>
              <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
                <button className="btn btn-lg">Contato</button>
                <a href="#" className="text-gradient btn-link">
                  Meu portifólio
                </a>
              </div>
              <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 ">
                <a href="https://www.linkedin.com/in/vinicius-slavov-934737185/" target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/viniciushenrique26" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.behance.net/vinciushenrique6" target="_blank" rel="noreferrer">
                  <FaBehance />
                </a>
              </div> 
          </div>
              <div className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
                <img src={Image} alt="Imagem do banner" />
              </div> 
          
        </div>
      </div>
    </section>
  );
};

export default Banner;
