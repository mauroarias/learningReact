import './ScenarionsView.css'
import MUIDataTable from "mui-datatables";
import React from 'react';

const ScenarionsView = (props) => {
    const columns = ["Name", "type", "id", "endDate", "parameter 1", "parameter 2", "perso"];
    
    const selectingRowHandler = (event) => {
        console.log(event)
    }
    
    const options = {
        filterType: 'checkbox',
        pagination: false,
        download: false,
        print: false,
        filter: false,
        sort: false,
        onRowsDelete: (rowsDeleted, dataRows) => {
            // onDelete(dataRows);
        },
        onRowClick: {selectingRowHandler}
    };

    return (
      <div>
        <MUIDataTable
          columns={columns}
          data={props.data}
          title='senarios list'
          options={options}
        />
      </div>
    );
}

export default ScenarionsView;