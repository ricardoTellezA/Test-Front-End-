import React, { useEffect} from 'react'
import { searchArtist } from '../../actions/searchActions'


//redux
import { useSelector, useDispatch } from 'react-redux';

import './Info.scss';


const Info = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        //consult appi
        const loadArtist = () => dispatch(searchArtist());
        loadArtist();
         /* eslint-disable */
    }, []);


    const info = useSelector(state => state.artists.artist[0]);
    
    

   return (
        <div>
            {!info ? 'Cargando...' : (
                <div className="cont" id="up" >
                    <h2>{info.strArtist}</h2>
                    <main className="container-info">
                        <article className="card">
                            <div className="content">
                                <img src={info.strArtistThumb} alt="" />
                                <p>Fundado: <span>{info.intFormedYear}</span></p>
                                <p>Genero: <span>{info.strGenre}</span></p>
                                <p>Ciudad: <span>{info.strCountry}</span></p>

                            </div>
                        </article>

                        <div className="container-information">
                            <h3>Información</h3>
                            <p className="informacion">{info.strBiographyES}</p>

                        </div>

                    </main>


                </div>



            )}


        </div>
    )
}

export default Info
