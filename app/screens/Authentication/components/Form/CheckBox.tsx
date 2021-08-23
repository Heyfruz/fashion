import React, { useState } from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

import { Box, Text } from "../../../../components/Theme";

interface CheckBoxProps {
  label: string;
}

function CheckBox({ label }: CheckBoxProps): JSX.Element | null {
  const [checked, setChecked] = useState(false);

  return (
    <RectButton
      onPress={() => {
        setChecked(!checked);
      }}>
      <Box flexDirection="row" alignItems="center">
        <Box
          height={20}
          width={20}
          borderRadius="s"
          justifyContent="center"
          alignItems="center"
          borderWidth={1}
          borderColor="primary"
          marginRight="s"
          backgroundColor={checked ? "primary" : "white"}>
          <Icon name="check" color="white" />
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </RectButton>
  );
}
export default CheckBox;
