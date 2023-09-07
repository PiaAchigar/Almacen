import { Button } from "@chakra-ui/react";
const ButtonComplexa = (props) => {
  const { marg, color, size, backgroundColor, innerHTML,onClick  } = props;
  return (
    <Button textColor={color} width={size} backgroundColor={backgroundColor} m={marg} onClick={onClick}>
      {innerHTML}
    </Button>
  );
};

export default ButtonComplexa;
