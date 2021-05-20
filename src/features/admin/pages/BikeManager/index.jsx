import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MainTable from '../../components/MainTable';
import productApi from '../../../../api/productApi';

BikeManager.propTypes = {

};

function BikeManager(props) {

    useEffect(() => {
        fetchDataFormApi();
    }, []);

    const [bike, setBike] = useState();
    const fetchDataFormApi = async () => {
        const response = await productApi.getAll();
        const bikeFormApi = response.data;
        setBike(bikeFormApi);
    }

    const deleteABike = (id) => {
        console.log(id);
    }



    return (
        <div id="page-wrapper">
            <div id="page-inner">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Bike Manager</h2>
                        <h5>Welcome Johnny Đéo , còn cái nịt... còn đúng cái nịt! </h5>
                    </div>
                </div>
                {/* /. ROW  */}
                {/* {console.log(bike)} */}
                <MainTable bikes={bike} deleteABike={deleteABike} />
            </div>
        </div>
    );
}

export default BikeManager;