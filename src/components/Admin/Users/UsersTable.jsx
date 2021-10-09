import { Chip, withStyles } from "@material-ui/core";
import { DataGrid } from "@mui/x-data-grid";

function UsersTable() {
  return (
    <div style={{ height: 600, width: "100%" }}>
      <StyledDataGrid
        // autoPageSize
        rows={data}
        columns={column}
        pageSize={7}
        checkboxSelection={false}
      />
    </div>
  );
}

const column = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
    type: "number",
  },
  {
    field: "name",
    headerName: "Name",
    width: 170,
  },
];

export default UsersTable;

const StyledDataGrid = withStyles({
  root: {
    "& .MuiDataGrid-renderingZone": {
      maxHeight: "none !important",
    },
    "& .MuiDataGrid-cell": {
      lineHeight: "unset !important",
      maxHeight: "none !important",
      whiteSpace: "normal",
      justifyContent: "flex-start",
      alignItems: "center",
      display: "flex",
    },
    "& .MuiDataGrid-row": {
      maxHeight: "none !important",
    },
    // '& .MuiDataGrid-columnHeaderTitleContainer': {
    //    display: 'flex',
    //    justifyContent: 'center',
    // },
    "& .MuiDataGrid-columnHeaderTitle": {
      fontWeight: "bold",
      textAlign: "center",
    },
  },
})(DataGrid);

const data = [
  {
    id: 1,
    name: "Juan dela cruz",
  },
];
