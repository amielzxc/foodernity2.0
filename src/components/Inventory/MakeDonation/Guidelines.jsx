import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { check1, check2, check3 } from "../../../store/Inventory/guidelines";
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  text_bold: {
    fontWeight: "bold",
  },
  container__description: {
    margin: "10px 0px 20px 0px",
  },
});

export default function ActionsInAccordionSummary() {
  const classes = useStyles();
  const guidelines = useSelector((state) => state.guidelines.value);
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <Typography variant="h5" component="h3" className={classes.text_bold}>
        Guidelines for Posting Donations
      </Typography>
      <div className={classes.container__description}>
        <Typography variant="body1" component="p">
          Before proceeding to post a donation, you must adhere to the
          guidelines first to protect you and the safety of others as well. The
          guidelines to acknowledge are as follows:
        </Typography>
      </div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={
              <Checkbox
                checked={guidelines[0]}
                onChange={() => {
                  dispatch(check1());
                }}
              />
            }
            label="I acknowledge that I am donating foods that are in the following:"
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">...</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions2-content"
          id="additional-actions2-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={
              <Checkbox
                checked={guidelines[1]}
                onChange={() => {
                  dispatch(check2());
                }}
              />
            }
            label="I acknowledge that I am not donating foods that are in the following:"
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">...</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions3-content"
          id="additional-actions3-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={
              <Checkbox
                checked={guidelines[2]}
                onChange={() => {
                  dispatch(check3());
                }}
              />
            }
            label="I acknowledge that I practice safe food handling practices:"
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">...</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
