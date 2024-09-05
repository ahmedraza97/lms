import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

export default function CustomAccor({ data, expanded, handleChange }) {
  const { pageLabel, links} = data;

  return (
    <div style={{width:'100%'}} >
      <Accordion 
        sx={{ bgcolor: "transparent", boxShadow: "none", px: 0 ,}}
        expanded={expanded === pageLabel}
        onChange={handleChange(pageLabel)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography>{pageLabel}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {
              links.map((e,i)=>{
                return(
                  <NavLink
                  key={e.name}
                  to={`${e.path}`}
      
                  style={{textDecoration:"none",textAlign:"left",paddingLeft:15,color:"grey"}}
                >
                  {e.name}
                </NavLink>
                )
              })
            }
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
