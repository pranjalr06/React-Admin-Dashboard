import { Box, IconButton, Typography } from '@mui/material'
import React from 'react';
import {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import { db } from "../../firebase-config";
import {
collection,
getDocs,
addDoc,
updateDoc,
deleteDoc,
doc} from "firebase/firestore";
import Swal from "sweetalert2"; 
import { useAppStore } from '../../appStore';

const products = [
    {
      value: 'Mobile',
      label: 'Mobile',
    },
    {
      value: 'Earphones',
      label: 'Earphones',
    },
    {
      value: 'Laptop',
      label: 'Laptop',
    },
    {
      value: 'Food',
      label: 'Food',
    },
    {
        value: 'Accessories',
        label: 'Accessories',
    },
    {
        value: 'Electronics',
        label: 'Electronics',
      },
  ];

const EditProduct = ({fid,  closeEvent}) => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    const empCollectionRef = collection(db, "products");
    const setRows = useAppStore((state) => state.setRows); 

    useEffect(() => {
      console.log("FID: " + fid.id);
      setName(fid.name);
      setPrice(fid.price);
      setCategory(fid.category);
    }, []);

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    const createUser = async() => {
        const userDoc = doc(db,"products", fid.id);
        const newFields ={
            name:name,
            price: Number(price),
            category: category,
            date: String(new Date()),
        };
        await updateDoc (userDoc, newFields);
        getUsers();
        closeEvent();
        Swal.fire("Submitted!","Your data has been Updated","success");
    }

    const getUsers = async () => {
        const data = await getDocs(empCollectionRef);
        setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };

  return (
    <>
        <Box sx={{ m:2}}/>
            <Typography variant ='h5' align="enter">
                Edit Product
            </Typography>
            <IconButton
                style={{position:"absolute", top:"0" , right:"0"}}
                onClick={closeEvent}
            >
                <CloseIcon/>            
            </IconButton>   
            <Box height={20}/>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField 
                        id="outlined-basic" 
                        onChange={handleNameChange} 
                        value={name} 
                        label="Name" 
                        variant="outlined" 
                        size='small' 
                        sx={{minWidth:"100%"}}
                    />
                </Grid>    

                <Grid item xs={6}>
                    <TextField 
                        id="outlined-basic" 
                        type='number' 
                        onChange={handlePriceChange} 
                        value={price} 
                        label="Price" 
                        variant="outlined" 
                        size='small' 
                        sx={{minWidth:"100%"}}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                  <CurrencyRupeeOutlinedIcon />
                                </InputAdornment>
                            )
                        }}
                    />
                </Grid> 

                <Grid item xs={6}>
                    <TextField 
                        id="outlined-basic" 
                        onChange={handleCategoryChange} 
                        value={category} label="Category" 
                        variant="outlined" 
                        size='small'
                        select
                        sx={{minWidth:"100%"}}
                    >
                        {products.map((option) => (
                            <MenuItem key = {option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid> 

                <Grid item xs={12}>
                    <Typography variant="h5" align='center'>
                        <Button variant="contained" onClick={createUser}>
                            Submit
                        </Button>
                    </Typography>
                </Grid>
                        
            </Grid> 
        <Box sx={{m:4}}/>
    </>
  )
}

export default EditProduct
