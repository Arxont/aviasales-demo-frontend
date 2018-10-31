import React from "react";
import { DropdownList, DropdownListWithFlyAnyWhere } from "./UI/Dropdown";
import Calendar from "./UI/Calendar";
import Header from "./NewHeader";

export default function Test() {
  return (
    <div>
      <DropdownList />
      <DropdownListWithFlyAnyWhere />
      <Header />
    </div>
  );
}
