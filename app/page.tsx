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
  age: number;
  religion: string;
  country: string;
  color: string;
}

const originalRows: food[] = [
  { name: "Ali", age: 15, religion: "Islam", country: "USA", color: "Red" },
  { name: "Saira", age: 24, religion: "Islam", country: "USA", color: "Green" },
  { name: "Ahmed", age: 31, religion: "Islam", country: "UK", color: "Red" },
  { name: "Aamna", age: 43, religion: "Christianity", country: "UAE", color: "Red" },
  { name: "Qasim", age: 56, religion: "Islam", country: "UK", color: "Green" },
  { name: "Komal", age: 63, religion: "Christianity", country: "UAE", color: "Red" }
];


export default function BasicTable() {
  const [rows, setRows] = useState<food[]>(originalRows);
  const [searched, setSearched] = useState<string>("");


  const requestSearch = (searchedVal: string) => {
    const filteredRows = originalRows.filter((row) => {
      return (
        row.name.toLowerCase().includes(searchedVal.toLowerCase())
      ||row.age.toString().includes(searchedVal.toLowerCase())
      ||row.religion.toLowerCase().includes(searchedVal.toLowerCase())
      ||row.country.toLowerCase().includes(searchedVal.toLowerCase())
      ||row.color.toLowerCase().includes(searchedVal.toLowerCase())
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

        <TableContainer className={`!p-[1.5rem] ${(rows.length===0)&&`invisible`}`}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="!font-bold !text-base"> Name </TableCell>
                <TableCell className="!font-bold !text-base" align="right"> Age </TableCell>
                <TableCell className="!font-bold !text-base" align="right"> Religion </TableCell>
                <TableCell className="!font-bold !text-base" align="right"> Country </TableCell>
                <TableCell className="!font-bold !text-base" align="right"> Color </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row"> {row.name} </TableCell>
                  <TableCell align="right"> {row.age} </TableCell>
                  <TableCell align="right"> {row.religion} </TableCell>
                  <TableCell align="right"> {row.country} </TableCell>
                  <TableCell align="right"> {row.color} </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </Paper>

    </div>
  )
}