import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
const First = ()=>{
    var data = [{name:"Deepu",age:20,place:"Chalakudy"},
              {name:"Ashwin",age:24,place:"pkd"},
              {name:"Goutham",age:21,place:"Thrissur"},
              {name:"anaj",age:26,place:"kochi"},
    ]

  return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>name</TableCell>
                    <TableCell>age</TableCell>
                    <TableCell>place</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((v,i)=>{
                    return(
                        <TableRow key={i}>
                            <TableCell>{v.name}</TableCell>
                            <TableCell>{v.age}</TableCell>
                            <TableCell>{v.place}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
export default First
