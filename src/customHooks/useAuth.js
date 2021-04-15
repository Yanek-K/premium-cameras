import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const useAuth = (props) => {
  const history = useHistory();
  const { currentUser } = useSelector(mapState);

  useEffect(() => {
    if (!currentUser) {
      history.push("/login");
    }
  }, [currentUser, history]);

  return currentUser;
};

export default useAuth;
