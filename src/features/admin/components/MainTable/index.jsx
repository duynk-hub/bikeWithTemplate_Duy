import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CreateABike from '../CreateABike';
import UpdateABike from '../UpdateABike';

MainTable.propTypes = {
    bikes: PropTypes.array,
    deleteABike: PropTypes.func.isRequired,
    updateABike: PropTypes.func.isRequired,
};

MainTable.defaultProps = {
    bikes: [],
};

function MainTable({ bikes, deleteABike, updateABike }) {

    const [open, setOpen] = useState(false);
    const [isUpdate, setIsUpdate] = useState(true);
    const [updateBike, setUpdateBike] = useState({});


    const handleCreate = () => {
        setOpen(true);
        setIsUpdate(false);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleDelete = (id) => {
        if (deleteABike) {
            deleteABike(id);
        };
    }

    const handleUpdate = (bike) => {
        setUpdateBike(bike);
        setOpen(true);
        setIsUpdate(true);
    }

    return (
        <div className="row">
            <div className="col-md-12">
                {/* Advanced Tables */}

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <a onClick={handleCreate} className="btn icon-btn btn-success" href="#" style={{}} >
                            <span className="glyphicon btn-glyphicon glyphicon-plus img-circle text-success " />
                                    Create A New Bike
                        </a>
                        {/* Bikes Managers Tables */}

                    </div>
                    <div className="panel-body">
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>image</th>
                                        <th>name</th>
                                        <th>maker</th>
                                        <th>description</th>
                                        <th>price</th>
                                        <th>Quantity</th>
                                        <th>Category</th>
                                        <th>Delete</th>
                                        <th>Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bikes.map((bike) => (
                                        <tr class="gradeU" key={bike.id}>
                                            <td>{bike.id}</td>
                                            <td><img width="50px" height="50px" src={bike.image} className="img-fluid" alt="This a pic" /></td>
                                            <td>{bike.name}</td>
                                            <td>{bike.maker}</td>
                                            <td>{bike.description}</td>
                                            <td>{bike.price}</td>
                                            <td>{bike.quantity}</td>
                                            <td>{bike.category}</td>
                                            <td><button onClick={() => handleDelete(bike.id)} class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
                                            <td><button onClick={() => handleUpdate(bike)} class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button>

                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/*End Advanced Tables */}
            </div>
            <Dialog disableBackdropClick
                disableEscapeKeyDown
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogContent>
                    {isUpdate ? <UpdateABike bike={updateBike} /> : <CreateABike />}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                                </Button>
                </DialogActions>
            </Dialog>

        </div>
    );
}

export default MainTable;


 // const tmpData = [<tr class="even gradeC">
    //     <td>Trident</td>
    //     <td>Internet Explorer 5.0</td>
    //     <td>Win 95+</td>
    //     <td class="center">5</td>
    //     <td class="center">C</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>

    // </tr>,
    // <tr class="odd gradeA">
    //     <td>Trident</td>
    //     <td>Internet Explorer 5.5</td>
    //     <td>Win 95+</td>
    //     <td class="center">5.5</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="even gradeA">
    //     <td>Trident</td>
    //     <td>Internet Explorer 6</td>
    //     <td>Win 98+</td>
    //     <td class="center">6</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="odd gradeA">
    //     <td>Trident</td>
    //     <td>Internet Explorer 7</td>
    //     <td>Win XP SP2+</td>
    //     <td class="center">7</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="even gradeA">
    //     <td>Trident</td>
    //     <td>AOL browser (AOL desktop)</td>
    //     <td>Win XP</td>
    //     <td class="center">6</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Gecko</td>
    //     <td>Firefox 1.0</td>
    //     <td>Win 98+ / OSX.2+</td>
    //     <td class="center">1.7</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Gecko</td>
    //     <td>Firefox 1.5</td>
    //     <td>Win 98+ / OSX.2+</td>
    //     <td class="center">1.8</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Gecko</td>
    //     <td>Firefox 2.0</td>
    //     <td>Win 98+ / OSX.2+</td>
    //     <td class="center">1.8</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Gecko</td>
    //     <td>Firefox 3.0</td>
    //     <td>Win 2k+ / OSX.3+</td>
    //     <td class="center">1.9</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Gecko</td>
    //     <td>Camino 1.0</td>
    //     <td>OSX.2+</td>
    //     <td class="center">1.8</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Gecko</td>
    //     <td>Camino 1.5</td>
    //     <td>OSX.3+</td>
    //     <td class="center">1.8</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Gecko</td>
    //     <td>Netscape 7.2</td>
    //     <td>Win 95+ / Mac OS 8.6-9.2</td>
    //     <td class="center">1.7</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Gecko</td>
    //     <td>Netscape Browser 8</td>
    //     <td>Win 98SE+</td>
    //     <td class="center">1.7</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Gecko</td>
    //     <td>Netscape Navigator 9</td>
    //     <td>Win 98+ / OSX.2+</td>
    //     <td class="center">1.8</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Gecko</td>
    //     <td>Mozilla 1.0</td>
    //     <td>Win 95+ / OSX.1+</td>
    //     <td class="center">1</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Gecko</td>
    //     <td>Mozilla 1.1</td>
    //     <td>Win 95+ / OSX.1+</td>
    //     <td class="center">1.1</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Gecko</td>
    //     <td>Mozilla 1.2</td>
    //     <td>Win 95+ / OSX.1+</td>
    //     <td class="center">1.2</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Gecko</td>
    //     <td>Mozilla 1.3</td>
    //     <td>Win 95+ / OSX.1+</td>
    //     <td class="center">1.3</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Gecko</td>
    //     <td>Mozilla 1.4</td>
    //     <td>Win 95+ / OSX.1+</td>
    //     <td class="center">1.4</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Gecko</td>
    //     <td>Mozilla 1.5</td>
    //     <td>Win 95+ / OSX.1+</td>
    //     <td class="center">1.5</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Gecko</td>
    //     <td>Mozilla 1.6</td>
    //     <td>Win 95+ / OSX.1+</td>
    //     <td class="center">1.6</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Gecko</td>
    //     <td>Mozilla 1.7</td>
    //     <td>Win 98+ / OSX.1+</td>
    //     <td class="center">1.7</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Gecko</td>
    //     <td>Mozilla 1.8</td>
    //     <td>Win 98+ / OSX.1+</td>
    //     <td class="center">1.8</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Gecko</td>
    //     <td>Seamonkey 1.1</td>
    //     <td>Win 98+ / OSX.2+</td>
    //     <td class="center">1.8</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Gecko</td>
    //     <td>Epiphany 2.20</td>
    //     <td>Gnome</td>
    //     <td class="center">1.8</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Webkit</td>
    //     <td>Safari 1.2</td>
    //     <td>OSX.3</td>
    //     <td class="center">125.5</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Webkit</td>
    //     <td>Safari 1.3</td>
    //     <td>OSX.3</td>
    //     <td class="center">312.8</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Webkit</td>
    //     <td>Safari 2.0</td>
    //     <td>OSX.4+</td>
    //     <td class="center">419.3</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Webkit</td>
    //     <td>Safari 3.0</td>
    //     <td>OSX.4+</td>
    //     <td class="center">522.1</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Webkit</td>
    //     <td>OmniWeb 5.5</td>
    //     <td>OSX.4+</td>
    //     <td class="center">420</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Webkit</td>
    //     <td>iPod Touch / iPhone</td>
    //     <td>iPod</td>
    //     <td class="center">420.1</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Webkit</td>
    //     <td>S60</td>
    //     <td>S60</td>
    //     <td class="center">413</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Presto</td>
    //     <td>Opera 7.0</td>
    //     <td>Win 95+ / OSX.1+</td>
    //     <td class="center">-</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Presto</td>
    //     <td>Opera 7.5</td>
    //     <td>Win 95+ / OSX.2+</td>
    //     <td class="center">-</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Presto</td>
    //     <td>Opera 8.0</td>
    //     <td>Win 95+ / OSX.2+</td>
    //     <td class="center">-</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Presto</td>
    //     <td>Opera 8.5</td>
    //     <td>Win 95+ / OSX.2+</td>
    //     <td class="center">-</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Presto</td>
    //     <td>Opera 9.0</td>
    //     <td>Win 95+ / OSX.3+</td>
    //     <td class="center">-</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Presto</td>
    //     <td>Opera 9.2</td>
    //     <td>Win 88+ / OSX.3+</td>
    //     <td class="center">-</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Presto</td>
    //     <td>Opera 9.5</td>
    //     <td>Win 88+ / OSX.3+</td>
    //     <td class="center">-</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Presto</td>
    //     <td>Opera for Wii</td>
    //     <td>Wii</td>
    //     <td class="center">-</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Presto</td>
    //     <td>Nokia N800</td>
    //     <td>N800</td>
    //     <td class="center">-</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Presto</td>
    //     <td>Nintendo DS browser</td>
    //     <td>Nintendo DS</td>
    //     <td class="center">8.5</td>
    //     <td class="center">
    //         C/A<sup>1</sup>
    //     </td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeC">
    //     <td>KHTML</td>
    //     <td>Konqureror 3.1</td>
    //     <td>KDE 3.1</td>
    //     <td class="center">3.1</td>
    //     <td class="center">C</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>KHTML</td>
    //     <td>Konqureror 3.3</td>
    //     <td>KDE 3.3</td>
    //     <td class="center">3.3</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>KHTML</td>
    //     <td>Konqureror 3.5</td>
    //     <td>KDE 3.5</td>
    //     <td class="center">3.5</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeX">
    //     <td>Tasman</td>
    //     <td>Internet Explorer 4.5</td>
    //     <td>Mac OS 8-9</td>
    //     <td class="center">-</td>
    //     <td class="center">X</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeC">
    //     <td>Tasman</td>
    //     <td>Internet Explorer 5.1</td>
    //     <td>Mac OS 7.6-9</td>
    //     <td class="center">1</td>
    //     <td class="center">C</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeC">
    //     <td>Tasman</td>
    //     <td>Internet Explorer 5.2</td>
    //     <td>Mac OS 8-X</td>
    //     <td class="center">1</td>
    //     <td class="center">C</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Misc</td>
    //     <td>NetFront 3.1</td>
    //     <td>Embedded devices</td>
    //     <td class="center">-</td>
    //     <td class="center">C</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeA">
    //     <td>Misc</td>
    //     <td>NetFront 3.4</td>
    //     <td>Embedded devices</td>
    //     <td class="center">-</td>
    //     <td class="center">A</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeX">
    //     <td>Misc</td>
    //     <td>Dillo 0.8</td>
    //     <td>Embedded devices</td>
    //     <td class="center">-</td>
    //     <td class="center">X</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeX">
    //     <td>Misc</td>
    //     <td>Links</td>
    //     <td>Text only</td>
    //     <td class="center">-</td>
    //     <td class="center">X</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeX">
    //     <td>Misc</td>
    //     <td>Lynx</td>
    //     <td>Text only</td>
    //     <td class="center">-</td>
    //     <td class="center">X</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeC">
    //     <td>Misc</td>
    //     <td>IE Mobile</td>
    //     <td>Windows Mobile 6</td>
    //     <td class="center">-</td>
    //     <td class="center">C</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeC">
    //     <td>Misc</td>
    //     <td>PSP browser</td>
    //     <td>PSP</td>
    //     <td class="center">-</td>
    //     <td class="center">C</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // <tr class="gradeU">
    //     <td>Other browsers</td>
    //     <td>All others</td>
    //     <td>-</td>
    //     <td class="center">-</td>
    //     <td class="center">U</td>
    //     <td><button class="btn btn-danger"><i class="fa fa-pencil"></i> Delete</button></td>
    //     <td><button class="btn btn-primary"><i class="fa fa-edit "></i> Edit</button></td>
    // </tr>,
    // ];
