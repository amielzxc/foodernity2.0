import { Button, IconButton, withStyles } from "@material-ui/core";
import { Details, VisibilityRounded } from "@material-ui/icons";
import { DataGrid } from "@mui/x-data-grid";
import { useRef } from "react";
import ItemDetails from "./Details";

function ReceiveDonationsTable() {
  const detailsRef = useRef(null);

  const onClick = (e) => {
    // console.log(e);
    const element = e.target;
    if (!element.textContent.startsWith("View ")) return;
    const childElement = element.firstElementChild;
    const id = childElement.textContent;
    console.log(id);
    detailsRef.current.showModal();
  };

  return (
    <>
      <div style={{ height: 600, width: "100%" }} onClick={onClick}>
        <StyledDataGrid
          rows={data}
          columns={column}
          pageSize={7}
          checkboxSelection={false}
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
    field: "imgLoc",
    headerName: "Image",
    sortable: false,
    width: 100,
    disableClickEventBubbling: true,

    renderCell: (params) => {
      return (
        <img
          src={params.row.imgLoc}
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
    field: "donationDonor",
    headerName: "Donor",
    width: 170,
  },
  {
    field: "donationQuantities",
    headerName: "Quantity",
    width: 160,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
  },
  {
    field: "1",
    headerName: "Action 1",
    width: 230,
    disableClickEventBubbling: true,
    sortable: false,
    renderCell: (params) => {
      const onClick = () => {
        return alert("accept donation " + params.row.id);
      };
      return params.row.status === "Pending" ? (
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
    headerName: "Action 2",
    width: 200,
    disableClickEventBubbling: true,
    sortable: false,
    renderCell: (params) => {
      const onClick = () => {
        return alert("mark as claimed donation " + params.row.id);
      };
      return params.row.status === "Accepted" ? (
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
          Mark as Claimed
        </Button>
      ) : (
        <Button variant="contained" color="default" disabled>
          Mark as Claimed
        </Button>
      );
    },
  },
  {
    field: "3",
    headerName: "Action 3",
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

const data = [
  {
    id: 1,
    imgLoc:
      "https://cdn.shopify.com/s/files/1/0024/9695/4415/products/eggplant_retail_720x.png?v=1587818753",
    donationName: "Pancit Canton",
    donationDonor: "Juan Dela Cruz",
    donationQuantities: 35,
    status: "Pending",
  },
  {
    id: 2,
    imgLoc:
      "https://cdn.shopify.com/s/files/1/0024/9695/4415/products/eggplant_retail_720x.png?v=1587818753",
    donationName: "Canned Goods",
    donationDonor: "Juan Dela Cruz",
    donationQuantities: 35,
    status: "Accepted",
  },
];
