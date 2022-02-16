import React from 'react';
import { Icon } from '@iconify/react';
import { MainCard } from './MainCard';
import pic3 from '../../styles/img/pic3.svg'
import pic4 from '../../styles/img/pic4.svg'
import pitch from '../../styles/img/pitch.svg'


export const MainScreen = () => {
    return (
    <div>

        <div className="main__container">


            <div className="main__WhitePart">
                <div className="main__Brand">
                <div><Icon icon="emojione-monotone:soccer-ball" className="main__icon" /></div>
                <div className="main__font">LabSoccer</div>
                </div>
                <MainCard />
                <div className="main__footer">Powered by Junior Medrano 💻</div>
            </div>
            <div className="main__GreenPart">
                <div>
                    <img src={pic4} className="main__img"/>
                </div>
                {/* <div>
                    <img src={pitch} className="main__img"/>
                </div> */}
                
            </div>





        </div>











    </div>
    )
}
