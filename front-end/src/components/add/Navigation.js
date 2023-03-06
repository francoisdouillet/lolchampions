import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";

function Navigation({page, setPage}) {
    if (page === 0 || page === 3 || page === 1) {
      return <></>;
    }
    return (
      <Button>
        <ArrowBackIcon
          onClick={() => {
            setPage((page) => page - 1);
          }}
          className="navigation__button"
          sx={{
            width: "100%",
            height: "10%",
            left: 0,
          }}
        />
      </Button>
    );
  }

  export default Navigation