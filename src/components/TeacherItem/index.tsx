import React from 'react';
import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://scontent.fmaa3-1.fna.fbcdn.net/v/t1.0-1/p240x240/95566434_2961005317311561_2454439982778023936_o.jpg?_nc_cat=108&_nc_sid=dbb9e7&_nc_ohc=QurmEhSPN6EAX-DVPFh&_nc_ht=scontent.fmaa3-1.fna&_nc_tp=6&oh=385758e78ce6177aa9a37c76b9939412&oe=5F5841B2" alt="Jonathas Germano" />
                        <div>
                            <strong>Jonathas Germano</strong>
                            <span>Programação</span>
                        </div>
                    </header>

                    <p>
                        Entusiasta das melhores tecnologias web existentes na atualidade. <br/><br/> Se diverte recriando aplicações de grande uso no mercado e sempre cria algo novo baseado no que falta nos apps existentes. Mais de 1600 alunos já passaram por sua tutoria e desenvolvem projetos tão loucos quanto o próprio.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 80,00</strong>
                        </p>

                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato 
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;