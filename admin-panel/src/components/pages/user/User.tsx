import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import DataGridShared from "../../shared/DataGridShared";

const User: React.FC = () => {
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Full Name",
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
      editable: true,
    },
    {
      field: "gender",
      headerName: "Gender",
      sortable: false,
      width: 160,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 150,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleCall(params.row.phone)}
        >
          Call
        </Button>
      ),
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }

        const response = await axios.get(
          "https://hack4bengal-427818.df.r.appspot.com/api/v1/user/all",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        const users = response.data.data.users.map((user: any) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          gender: user.gender,
          phone: user.phone,
        }));
        setRows(users);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCall = (phone: string) => {
    console.log(`Calling ${phone}`);
  };

  return (
    <div className="">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <DataGridShared rows={rows} columns={columns} />
      )}
    </div>
  );
};

export default User;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Button } from "@mui/material";
// import { GridColDef } from "@mui/x-data-grid";
// import DataGridShared from "../../shared/DataGridShared";
// import { CallsApi, Configuration } from "@dynopii/callchimp";

// // Configuration for Callchimp API
// const config = new Configuration({
//   basePath: "https://api.callchimp.ai/v1",
//   apiKey: "tkiVbR8o", // Replace with your actual API key
// });

// const callsApi = new CallsApi(config);

// const User: React.FC = () => {
//   const [rows, setRows] = useState<any[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   const columns: GridColDef[] = [
//     {
//       field: "name",
//       headerName: "Full Name",
//       width: 150,
//       editable: true,
//     },
//     {
//       field: "email",
//       headerName: "Email",
//       width: 250,
//       editable: true,
//     },
//     {
//       field: "gender",
//       headerName: "Gender",
//       sortable: false,
//       width: 160,
//     },
//     {
//       field: "phone",
//       headerName: "Phone",
//       width: 150,
//       editable: true,
//     },
//     {
//       field: "action",
//       headerName: "Action",
//       sortable: false,
//       width: 150,
//       renderCell: (params) => (
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() => handleCall(params.row.phone)}
//         >
//           Call
//         </Button>
//       ),
//     },
//   ];

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           throw new Error("No token found");
//         }

//         const response = await axios.get(
//           "https://hack4bengal-427818.df.r.appspot.com/api/v1/user/all",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//               "Content-Type": "application/json",
//               "Access-Control-Allow-Origin": "*",
//             },
//           }
//         );
//         const users = response.data.data.users.map((user: any) => ({
//           id: user.id,
//           name: user.name,
//           email: user.email,
//           gender: user.gender,
//           phone: user.phone,
//         }));
//         setRows(users);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleCall = async (phone: string) => {
//     try {
//       const response = await callsApi.createCall({
//         phoneNumber: phone,
//         // You can add additional parameters like `callerId` if required
//       });
//       console.log("Call initiated successfully:", response);
//       // Optionally handle success feedback to the user
//     } catch (error) {
//       console.error("Error initiating call:", error);
//       // Handle error feedback to the user
//     }
//   };

//   return (
//     <div className="">
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <DataGridShared rows={rows} columns={columns} />
//       )}
//     </div>
//   );
// };

// export default User;
