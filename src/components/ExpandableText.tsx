import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  if (!children) return null;
  if (children.length <= 300) return <Text>{children}</Text>;

  const [isExpanded, setExpansion] = useState(false);
  const description_raw = !isExpanded
    ? children.substring(0, 300) + "..."
    : children;

  return (
    <Text>
      {description_raw}
      <Button
        marginLeft={2}
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpansion(!isExpanded)}
      >
        {isExpanded ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
