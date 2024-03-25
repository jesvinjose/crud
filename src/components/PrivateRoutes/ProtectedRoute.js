import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseurl } from "../../urls/BaseUrl";

const ProtectedRoute = ({ Component }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          // If token is not found, navigate to login page
          navigate("/login");
          return;
        }
        const headers = {
          "x-access-token": token,
        };

        const response = await axios.get(`${baseurl}/protected`, {
          headers: headers,
        });
        console.log(response.status,"-------------------");

        const result = response.data;
        if (response.status === 200) {
          return <Outlet />;
        }
        navigate("/login");
      } catch (error) {
        console.error("Error fetching block status of user:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectedRoute;
