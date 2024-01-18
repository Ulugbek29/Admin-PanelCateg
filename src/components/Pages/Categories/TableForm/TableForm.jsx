import React, { useEffect } from "react";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { categoriesServices } from "../../../../services/categories";
import CategoryCreate from "./Create/CategoryCreate";
import CategoryUpdate from "./Edit/CategoryUpdate";



export default function TableForm() {
  const { control, handleSubmit , reset} = useForm();
  const navigate = useNavigate();
 const {id} = useParams()


  useEffect(()=> {
   if(id) return getUserData()
  },[id])


  console.log(id)
  const onSubmit = (value) => {

    const data = {
      ...value
    }


  if(id) return updateCategory(data)
   
    
  createUser(data)
    
   
    console.log(data);
  };




  // Fetch single user
  const getUserData = () => {
    categoriesServices.getSingleId(id)
    .then((res)=>{
      // const {} = res
      reset(res)
      console.log(res)
    })
    .catch((err)=> console.log(err))
  }



  // Create 
  const createUser = (data) => {
    categoriesServices.post(data)
    .then(res=> console.log(res))
    .catch(err => console.log(err))
  }


  //Update

  const updateCategory = (data) => {
    categoriesServices.update(data, id)
    .then(res => {
      console.log(res)
      navigate(-1)
    })
  }

  const backToThePreviousPage = () => {
    navigate(-1);
  };


  return (
    <Box sx={{ width: "100%" }}>
      <form onSubmit={handleSubmit(onSubmit)} >
        
        {id ? <CategoryUpdate control={control} updateCategory={updateCategory} backToThePreviousPage={backToThePreviousPage}/> 
        : <CategoryCreate control={control} backToThePreviousPage={backToThePreviousPage}/>}
      </form>
    </Box>
  );
}
