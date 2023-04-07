import React, { useEffect, useState } from "react";
import { Fab, Tooltip} from "@mui/material";
/* import HomeIcon from '@mui/icons-material/Home'; */
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const FloatingButton = (props) => {
  const [redirectUrl, setRedirectUrl] = useState();
  const [icon, setIcon] = useState();
  const [tooltipName, setTooltipName] = useState();

  useEffect(() => {
    if (props.type === "next") {
      setRedirectUrl(`/description/${parseInt(props.pokemon.id) + 1}`);
      setIcon(<NavigateNextIcon fontSize="large" color="primary" />);
      setTooltipName("Siguiente");
    } else if (props.type === "prev") {
      setRedirectUrl(`/description/${parseInt(props.pokemon.id) - 1}`);
      setIcon(<NavigateBeforeIcon fontSize="large" color="primary" />);
      setTooltipName("Anterior");
    } /* else if (props.type === "home") {
      setRedirectUrl(`/`)
      setIcon(<HomeIcon fontSize="large" color="primary" />);
    } */
  }, [props.pokemon]);

  return (
    <Tooltip title={tooltipName} arrow>
      <Fab size="large" href={redirectUrl}>
        {icon}
      </Fab>
    </Tooltip>
  );
};

export default FloatingButton;
