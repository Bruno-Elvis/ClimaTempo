import { Image } from 'react-native';

import um from '../../assets/icons/weather/1.png';
import umN from '../../assets/icons/weather/1n.png';
import dois from '../../assets/icons/weather/2.png';
import doisN from '../../assets/icons/weather/2n.png';
import doisR from '../../assets/icons/weather/2r.png';
import doisRn from '../../assets/icons/weather/2rn.png';
import tres from '../../assets/icons/weather/3.png';
import tresN from '../../assets/icons/weather/3n.png';
import tresTM from '../../assets/icons/weather/3TM.png';
import quatro from '../../assets/icons/weather/4.png';
import quatroN from '../../assets/icons/weather/4n.png';
import quatroR from '../../assets/icons/weather/4r.png';
import quatroRN from '../../assets/icons/weather/4rn.png';
import quatroT from '../../assets/icons/weather/4t.png';
import quatroTN from '../../assets/icons/weather/4tn.png';
import cinco from '../../assets/icons/weather/5.png';
import cincoN from '../../assets/icons/weather/5n.png';
import seis from '../../assets/icons/weather/6.png';
import seisN from '../../assets/icons/weather/6n.png';
import sete from '../../assets/icons/weather/7.png';
import seteN from '../../assets/icons/weather/7n.png';
import oito from '../../assets/icons/weather/8.png';
import oitoN from '../../assets/icons/weather/8n.png';
import nove from '../../assets/icons/weather/9.png';
import noveN from '../../assets/icons/weather/9n.png';

/**
 *
 * @param {import("react-native").ImageProps} props
 */
export default function IconWeather({ iconType, props }) {

    return (
        (iconType === '1') ? <Image source={um} {...props} /> :
        (iconType === '1n') ? <Image source={umN} {...props} /> :
        (iconType === '2') ? <Image source={dois} {...props} /> :
        (iconType === '2n') ? <Image source={doisN} {...props} /> :
        (iconType === '2r') ? <Image source={doisR} {...props} /> :
        (iconType === '2rn') ? <Image source={doisRn} {...props} /> :
        (iconType === '3') ? <Image source={tres} {...props} /> :
        (iconType === '3n') ? <Image source={tresN} {...props} /> :
        (iconType === '3TM') ? <Image source={tresTM} {...props} /> :
        (iconType === '4') ? <Image source={quatro} {...props} /> :
        (iconType === '4n') ? <Image source={quatroN} {...props} /> :
        (iconType === '4r') ? <Image source={quatroR} {...props} /> :
        (iconType === '4rn') ? <Image source={quatroRN} {...props} /> :
        (iconType === '4t') ? <Image source={quatroT} {...props} /> :
        (iconType === '4tn') ? <Image source={quatroTN} {...props} /> :
        (iconType === '5') ? <Image source={cinco} {...props} /> :
        (iconType === '5n') ? <Image source={cincoN} {...props} /> :
        (iconType === '6') ? <Image source={seis} {...props} /> :
        (iconType === '6n') ? <Image source={seisN} {...props} /> :
        (iconType === '7') ? <Image source={sete} {...props} /> :
        (iconType === '7n') ? <Image source={seteN} {...props} /> :
        (iconType === '8') ? <Image source={oito} {...props} /> :
        (iconType === '8n') ? <Image source={oitoN} {...props} /> :
        (iconType === '9') ? <Image source={nove} {...props} /> :
        (iconType === '9n') ? <Image source={noveN} {...props} /> :
        null

    );

}
