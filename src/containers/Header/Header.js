import classes from './Header.module.css'
import logo from '../../assets/F1-logo.png';
import TRANSLATIONS from '../../utils/translations'
import { useDispatch, useSelector } from 'react-redux';
import { saveChampionData } from '../../actions/AppActions'
import { useHistory } from 'react-router-dom';

const Header = (props) => {
    const championData = useSelector(state => state.championData)
    const dispatch = useDispatch();
    const history = useHistory()

    function onClickBack (){
        dispatch(saveChampionData(null))
        history.push('/champions')
    }

    return (
        <header className={classes.header}>
            <div className={classes['border-bottom']}>
                <img src={logo} alt="logo" className={classes.logo} />
            </div>
            <div className={classes.navHeading}>
                {!championData && <label className={classes.labelStyle}>{TRANSLATIONS.F1_CHAMPIONS}</label>}
                {championData && Object.keys(championData).length &&
                    (<button className="back-button" onClick={onClickBack}>
                        <i className="fas fa-chevron-left" style={{fontSize:'25px'}}></i> 
                    <label className={classes['button-label']}>
                        {`${championData.season} - ${TRANSLATIONS.FORMULA_1_CHAMPIONSHIP}`}</label>
                        </button>)}
            </div>
        </header>
    )
}

export default Header;