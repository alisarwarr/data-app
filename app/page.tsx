'use client';


import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SearchBar from 'material-ui-search-bar';


interface food {
  name: string;
  gender: string;
  age: number;
  religion: string;
  country: string;
}

const originalRows: food[] = [
  { name: "Ali", gender: "male", age: 15, religion: "Islam", country: "USA" },
  { name: "Saira", gender: "female", age: 24, religion: "Islam", country: "USA" },
  { name: "Ahmed", gender: "male", age: 31, religion: "Islam", country: "UK" },
  { name: "Aamna", gender: "female", age: 43, religion: "Christianity", country: "UAE" },
  { name: "Qasim", gender: "male", age: 56, religion: "Islam", country: "UK" },
  { name: "Komal", gender: "female", age: 63, religion: "Christianity", country: "UAE" }
];


export default function BasicTable() {
  const [rows, setRows] = useState<food[]>(originalRows);
  const [searched, setSearched] = useState<string>("");


  const requestSearch = (searchedVal: string) => {
    const filteredRows = originalRows.filter((row) => {
      return (
        row.name.toLowerCase().includes(searchedVal.toLowerCase())
      ||row.gender.toLowerCase().includes(searchedVal.toLowerCase())
      ||row.age.toString().includes(searchedVal.toLowerCase())
      ||row.religion.toLowerCase().includes(searchedVal.toLowerCase())
      ||row.country.toLowerCase().includes(searchedVal.toLowerCase())
      )
    });

    setRows(filteredRows);
  }


  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  }


  return (
    <div className={`
      overflow-x-hidden overflow-y-auto
      h-[100%] w-[100%] absolute top-0 bottom-0
      flex items-center justify-center flex-col bg-[#b9b5b5]
    `}>

      <Paper elevation={3}>

        <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />

        <TableContainer className="!p-[1.5rem]">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="!font-bold !text-base"> Name </TableCell>
                <TableCell className="!font-bold !text-base" align="right"> Gender </TableCell>
                <TableCell className="!font-bold !text-base" align="right"> Age </TableCell>
                <TableCell className="!font-bold !text-base" align="right"> Religion </TableCell>
                <TableCell className="!font-bold !text-base" align="right"> Country </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row"> {row.name} </TableCell>
                  <TableCell align="right"> {row.gender} </TableCell>
                  <TableCell align="right"> {row.age} </TableCell>
                  <TableCell align="right"> {row.religion} </TableCell>
                  <TableCell align="right"> {row.country} </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </Paper>

    </div>
  )
}