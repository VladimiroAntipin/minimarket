import ReelCard from '../ReelCard/ReelCard';
import styles from './styles.module.css';
import cashback from '../../images/cashback.avif';
import coupon from '../../images/coupon.webp';
import sticker from '../../images/sticker.avif';
import favourite from '../../images/favourite.png';

const Reels = () => {
    return ( 
        <div className={styles.reels}>
            <div className={styles.title}>
                    <span>Минимаркет -&nbsp;</span>
                    <span>продукты&nbsp;</span>
                    <span>с доставкой!</span>  
            </div>

            <div className={styles.cards}>
                <ReelCard image={cashback} imageAlt={'cashback'}/>
                <ReelCard image={coupon} imageAlt={'coupon'}/>
                <ReelCard image={sticker} imageAlt={'sticker'}/>
                <ReelCard image={favourite} imageAlt={'favourite'}/>
            </div>
        </div>
     );
}
 
export default Reels;