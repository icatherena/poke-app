import React, { useEffect, useState } from "react";
import { Fab, Tooltip} from "@mui/material";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
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
    } else if (props.type === "list") {
      setRedirectUrl(`/list`)
      setIcon(<FormatListBulletedIcon fontSize="small" color="primary" />);
      setTooltipName("Volver a la lista");
    }
  }, [props.pokemon]);

  return (
    <Tooltip title={tooltipName} arrow>
      <Fab size="small" href={redirectUrl}>
        {icon}
      </Fab>
    </Tooltip>
  );
};

export default FloatingButton;
