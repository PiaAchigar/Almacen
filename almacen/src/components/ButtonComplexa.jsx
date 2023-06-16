import { Button } from "@chakra-ui/react";
const ButtonComplexa = (props) => {
  const { color, size, backgroundColor, innerHTML } = props;
  return (
    <Button textColor={color} width={size} backgroundColor={backgroundColor}>
      {innerHTML}
    </Button>
  );
};

export default ButtonComplexa;
