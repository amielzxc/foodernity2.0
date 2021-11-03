import { Button, Typography, withStyles } from "@material-ui/core";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import Axios from "axios";

function UsersTable() {
  const users = useSelector((state) => state.users.value);

  return (
    <div style={{ height: 600, width: "100%" }}>
      <StyledDataGrid
        rows={users.map((row, index) => {
          const { ...rest } = row;
          return { id: index + 1, ...rest };
        })}
        columns={column}
        pagination={10}
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
    field: "profilePicture",
    headerName: "Image",
    sortable: false,
    width: 100,
    disableClickEventBubbling: true,

    renderCell: (params) => {
      return (
        <img
          src={params.row.profilePicture}
          alt="profile"
          style={{ width: "50px", height: "50px", margin: "10px" }}
        />
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
  },
  {
    field: "fullName",
    headerName: "Full Name",
    width: 250,
  },
  {
    field: "dateOfReg",
    headerName: "Registration Date",
    width: 200,
  },
  {
    field: "userStatus",
    headerName: "Status",
    width: 150,
    renderCell: (params) => {
      return (
        <Typography
          style={{
            color: params.row.userStatus === "active" ? "#66BB6A" : "red",
          }}
        >
          {String(params.row.userStatus).toUpperCase()}
        </Typography>
      );
    },
  },
  {
    field: "Action 1",
    headerName: "Action",
    width: 230,
    disableClickEventBubbling: true,
    sortable: false,
    renderCell: (params) => {
      const onSuspendClick = () => {
        if (
          window.confirm(
            `Are you sure you want to suspend user ${params.row.fullName}?`
          )
        ) {
          Axios.post("https://foodernity.herokuapp.com/user/suspendUsers", {
            userID: params.row.userID,
          }).then((response, err) => {
            if (err) {
              return console.log("err " + err);
            }
            setTimeout(() => window.location.reload(), 0);
          });
        }
      };

      const onUnsuspendCLick = () => {
        if (
          window.confirm(
            `Are you sure you want to unsuspend user ${params.row.fullName}?`
          )
        ) {
          Axios.post("https://foodernity.herokuapp.com/user/unsuspendUsers", {
            userID: params.row.userID,
          }).then((response, err) => {
            if (err) {
              return console.log("err " + err);
            }
            setTimeout(() => window.location.reload(), 0);
          });
        }
      };
      return params.row.userStatus === "active" ? (
        <Button variant="contained" color="secondary" onClick={onSuspendClick}>
          Suspend
        </Button>
      ) : (
        <Button
          style={{
            color: "white",
            backgroundColor: "#66BB6A",
            "&:hover": {
              backgroundColor: "#57A05A",
              "@media (hover: none)": {
                backgroundColor: "#66BB6A",
              },
            },
          }}
          variant="contained"
          color="primary"
          onClick={onUnsuspendCLick}
        >
          Unsuspend
        </Button>
      );
    },
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
    "& .MuiDataGrid-columnHeaderTitle": {
      fontWeight: "bold",
      textAlign: "center",
    },
  },
})(DataGrid);
