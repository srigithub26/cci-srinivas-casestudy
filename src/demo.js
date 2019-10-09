import React from 'react';
import MaterialTable from 'material-table';
import TextField from '@material-ui/core/TextField';

export default function MaterialTableDemo() {
  return (
    <div>
      <h2 align="center">Vehicle</h2>
    <h3 align="center"><TextField align="center"
        id="standard-search"
        label="Search vehicles"
        type="search"
        margin="normal"
      /></h3>
    <MaterialTable
    title=""
      columns={[
        {
          title: 'Name',
          field: 'name',
        },
        { title: 'Cost in credits', field: 'cost_in_credits' },
        { title: 'Length', field: 'length' },
      ]}
      data={query =>
        new Promise((resolve, reject) => {
          let url = 'https://swapi.co/api/vehicles/'
          url += '?page=3'
          url +='&format=json'
          console.log(url);
          fetch(url)
            .then(response => response.json())
            .then(result => {
              resolve({
                data: result.results,
                page: result.count,
               
              })
            })
        })
      }
      options={{
        search:true
      }}
    />
    </div>
  );
}
