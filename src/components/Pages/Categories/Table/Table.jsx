import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { categoriesServices } from "../../../../services/categories";
import ButtonsPopOver from "../../../ButtonsPopOver/ButtonsPopOver";
import ErrorModal from "../../../ErrorModal/ErrorModal";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";



export default function BasicTable() {
  const [tableData, setTableData] = useState([]);
const [openModal, setOpenModal] = useState({status: false, id: null})
const navigate = useNavigate()

const closeErrorModal =() => {
    setOpenModal((prev) => ({...prev, status: false}))
}

const navigateToEditForm = (id) => {
  navigate(`/categories/${id}`)
}


console.log(openModal)
const columns = [
    { key: "id", title: "№" },
    {
      key: "fio",
      title: "F.I.O",
      render: (itemObj) => {
        const fio = `${itemObj.lastName}.${itemObj.firstName}.${itemObj.maidenName}`;
        return fio;
      },
    },
    { key: "age", title: "Age" },
    { key: "username", title: "Username" },
    { key: "region", title: "Region", 
    render: (itemObj=> {
      const address = `${itemObj.city}`
      return address
    })
      },
      { key: "email", title: "Email" },
    {
      key: "actions",
      title: "Actions",
      render: (itemObj) => {
        return (
          <div className="flex flex-col gap-2">
            <ButtonsPopOver  id={itemObj.id} setOpenModal={setOpenModal} navigateToEditForm={navigateToEditForm}/>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    gelAllData();
  }, []);

  const gelAllData = () => {
    categoriesServices
      .get()
      .then((res) => setTableData(res))
      .catch((err) => console.log(err));
  };

  function deleteData (id) {
    categoriesServices.delete(id)
    .then(res => gelAllData())
  }




  console.log(tableData);

  return (
  <>
    <div className="">
    <Button variant="contained" onClick={()=> navigate("create")}>Create</Button>
    </div>
    <div className="w-full bg-white p-4 rounded-lg">
    
      <TableContainer sx={{backgroundColor: "white"}} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column, i) => {
                return (
                  <TableCell key={i} align="center">
                    {column.title}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {columns.map((column, i) => {
                  return (
                    <TableCell key={i} align="center">
                      {column.render ? column.render(row) : row[column.key]}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
                      
     {openModal.status && <ErrorModal openErrorPopUp={openModal} closeErrorModal={closeErrorModal} deleteData={deleteData}/> }
    </div>
    
  </>
  );
}
