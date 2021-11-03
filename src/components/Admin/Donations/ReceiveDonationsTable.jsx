import { Button, Typography, withStyles } from "@material-ui/core";
import { DataGrid } from "@mui/x-data-grid";
import { useRef } from "react";
import ItemDetails from "./Details";
import Axios from "axios";

import { useSelector } from "react-redux";
function ReceiveDonationsTable() {
  const donations = useSelector((state) => state.donations.value);
  const detailsRef = useRef(null);

  const onClick = (e) => {
    const element = e.target;
    if (!element.textContent.startsWith("View ")) return;
    const childElement = element.firstElementChild;
    const id = childElement.textContent;
    detailsRef.current.showModal(id);
  };

  return (
    <>
      <div style={{ height: 600, width: "100%" }} onClick={onClick}>
        <StyledDataGrid
          rows={donations.map((row) => {
            const { donationID, ...rest } = row;
            return { id: donationID, ...rest };
          })}
          columns={column}
          pageSize={7}
        />
      </div>
      <ItemDetails ref={detailsRef} />
    </>
  );
}

export default ReceiveDonationsTable;

const column = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
    type: "number",
  },
  {
    field: "imgPath",
    headerName: "Image",
    sortable: false,
    width: 100,
    disableClickEventBubbling: true,

    renderCell: (params) => {
      return (
        <img
          src={params.row.imgPath}
          alt="donation"
          style={{ width: "50px", height: "50px", margin: "10px" }}
        />
      );
    },
  },
  {
    field: "donationName",
    headerName: "Donation",
    width: 170,
  },
  {
    field: "fullName",
    headerName: "Donor",
    width: 170,
  },
  {
    field: "donationQuantities",
    headerName: "Quantity",
    width: 160,
    type: "number",
    renderCell: (params) => {
      const str = params.row.donationQuantities;
      let trimmed = str.slice(1, str.length - 1);
      let splitted = trimmed.split(", ");
      let total = splitted.reduce((acc, val) => acc + Number(val), 0);

      return <Typography>{Number(total)}</Typography>;
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,

    renderCell: (params) => {
      return (
        <Typography
          style={{
            color: params.row.status === "pending" ? "#2196f3" : "#66BB6A",
          }}
        >
          {params.row.status}
        </Typography>
      );
    },
  },
  {
    field: "1",
    headerName: "Accept Donations",
    width: 230,
    disableClickEventBubbling: true,
    sortable: false,
    renderCell: (params) => {
      const onClick = () => {
        const obj = { donationID: params.row.id };
        Axios.post(
          "https://foodernity.herokuapp.com/donations/acceptDonations",
          obj
        )
          .then((response, err) => {
            if (err) {
              return console.log("err" + err);
            }
            setTimeout(() => window.location.reload(), 0);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      return params.row.status === "pending" ? (
        <Button variant="contained" color="primary" onClick={onClick}>
          Accept Donation
        </Button>
      ) : (
        <Button variant="contained" color="default" disabled>
          Donation Accepted
        </Button>
      );
    },
  },
  {
    field: "2",
    headerName: "Receive Donations",
    width: 200,
    disableClickEventBubbling: true,
    sortable: false,
    renderCell: (params) => {
      const onClick = () => {
        const obj = { donationID: params.row.id };

        Axios.post(
          "https://foodernity.herokuapp.com/donations/receiveDonations",
          obj
        )
          .then((response, err) => {
            if (err) {
              return console.log("err" + err);
            }
            const str1 = params.row.donationQuantities;
            let trimmed1 = str1.slice(1, str1.length - 1);
            let qtyArr = trimmed1.split(", ");

            const str2 = params.row.donationCategories;
            let trimmed2 = str2.slice(1, str2.length - 1);
            let categArr = trimmed2.split(", ");
            console.log({
              categArr: categArr,
              qtyArr: qtyArr,
            });
            Axios.post("https://foodernity.herokuapp.com/stocks/addStocks", {
              categArr: categArr,
              qtyArr: qtyArr,
            }).then((response, err) => {
              if (err) {
                return console.log("err" + err);
              }
              setTimeout(() => window.location.reload(), 1000);
            });
          })
          .catch((error) => {
            console.log(error);
          });
      };
      return params.row.status === "accepted" ? (
        <Button
          style={{
            color: "white",
            backgroundColor: "#66BB6A",
            "&:hover": {
              backgroundColor: "#57A05A",
              // Reset on touch devices, it doesn't add specificity
              "@media (hover: none)": {
                backgroundColor: "#66BB6A",
              },
            },
          }}
          variant="contained"
          color="primary"
          onClick={onClick}
        >
          Mark as Received
        </Button>
      ) : (
        <Button variant="contained" color="default" disabled>
          Mark as Received
        </Button>
      );
    },
  },
  {
    field: "3",
    headerName: "View more",
    width: 200,
    // disableClickEventBubbling: true,
    sortable: false,
    renderCell: (params) => {
      const onClick = () => {
        return params.row.donationName;
      };
      return (
        <Button variant="contained" color="secondary" onClick={onClick}>
          View <span style={{ display: "none" }}>{params.row.id}</span>
        </Button>
      );
    },
  },
];

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
