import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import './productCard.scss';
import Grid from '@mui/material/Grid';
import product from './image/product.png';
import vector from './image/vector.png';

export default function Card () {

    return (
        <div className='card'>
            <div >Головна / Каталог / Кава Melitta Bella Crema Bio (750 г), зерно</div>
            <div className='card__wrapper'>
                <div className='carusel'>Карусель</div>
                <div >
                    <img className='card__image' src={product} alt="Product" />
                </div>
                <div className='card__description'>
                    <h1>Кава Melitta Bella Crema Bio (750 г), зерно</h1>
                    <div className='card__description_available'>
                        <div>
                            <img className='icon_vector' src={vector} alt="Available" />
                            <span className='card_description-available-item'>В наявності</span>
                        </div>
                        <p> Артикул:<span>  CP-0803</span>
                           
                        </p>
                    </div>
                    <h3>Опис</h3>
                    <p className='card__content'>При описі аромату в першу чергу описується його характер: солодкий, насичений, пряний, освіжаючий, а також називаються чотирма дескрипторами. Учасник може порекомендувати суддям спосіб, яким краще оцінювати аромат кави. Наприклад: він тримає судину в руках і пропонує суддям у такий спосіб ознайомитися з ароматом.</p>
                    <div className='price'>
                        <h4 className='price__title'>Ціна</h4>
                        <div className='price__amount'>
                            <h2 className='price__now'>953 грн</h2>
                            <p className='price__old'>1 253 грн</p>
                        </div>
                    </div>
                    <div>
                    <ButtonGroup variant="contained" aria-label="outlined button group">
                        <Button>One</Button>
                        <p>1</p>
                        <Button>Three</Button>
                    </ButtonGroup>
                    </div>

                </div>
            </div>
        </div>
        

    )
}