import React from "react";
import { Dropdown } from "semantic-ui-react";
import { country } from "./Arrays";

const DropdownExampleSearchSelection = () => (
  <Dropdown
    placeholder="Select Country"
    fluid
    search
    selection
    options={country}
  />
);

export default DropdownExampleSearchSelection;
