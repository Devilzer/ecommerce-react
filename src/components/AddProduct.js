import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function AddProduct() {
    return (
        <div className="add-product">
            <TextField required id="outlined-basic" label="Product Name" variant="outlined" />
            <TextField required id="outlined-basic" label="Description" variant="outlined" />
            <TextField required id="outlined-basic" label="Price" variant="outlined" />
            <TextField required id="outlined-basic" label="Rating" variant="outlined" />
            <TextField required id="outlined-basic" label="Image URL" variant="outlined" />  
            <Button variant="contained" color="primary">
            Add Product &nbsp;<i className="fas fa-plus"></i>
            </Button>
        </div>
    )
}

export default AddProduct;
