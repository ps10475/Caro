import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const myForm = React.memo((props) => {
  const [player, setPlayer] = useState({ p1: "", p2: "" });
  const { setStart, setPlayerName, start, setInitBoard } = props;

  const onChangeHandle = (e) => {
    setPlayer({
      ...player,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandle = (e) => {
    e.preventDefault();
    if(player.p1 === '' || player.p2===''){
      alert('=== STILL NOT SIGN YOUR NAME ===')
      return
    }
    setStart(true);
    setPlayerName(player);
  };
  return (
    <Form>
      <FormGroup>
        <Label for="p1">Player <span className="text-primary h4">X</span>  </Label>
        <Input
          type="text"
          name="p1"
          id="p1"
          value={player.p1}
          onChange={(e) => onChangeHandle(e)}
          disabled={start ? true : false}
        />
      </FormGroup>
      <FormGroup>
        <Label for="p2">Player <span className="text-danger h4">O</span> </Label>
        <Input
          type="text"
          name="p2"
          id="p2"
          value={player.p2}
          onChange={(e) => onChangeHandle(e)}
          disabled={start ? true : false}
        />
      </FormGroup>
      {!start ? (
        <Button
          className="d-block"
          size="lg"
          color="primary"
          type="submit"
          onClick={(e) => onSubmitHandle(e)}
        >
          Start
        </Button>
      ) : (
        <Button
          size="lg"
          color="danger"
          type="button"
          onClick={() => setInitBoard(10)}
        >
          Reset
        </Button>
      )}
    </Form>
  );
});

export default myForm;
