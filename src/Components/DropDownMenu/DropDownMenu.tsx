import React from "react";
import { Dropdown } from "react-bootstrap";
import { BiChevronDown } from "react-icons/bi";
import DropDownMenuStyles from "./DropDownMenuStyles.module.css";
const DropDownMenu = (): JSX.Element => {
  return (
    <>
      <Dropdown className={`h-100 ${DropDownMenuStyles.dropDown}`}>
        <Dropdown.Toggle
          variant="transparent"
          className={DropDownMenuStyles.dropDownToggleBtn}
          id="dropdown-basic"
        >
          دسته بندی ها
          <BiChevronDown className={DropDownMenuStyles.cheveronDownIcon} />
        </Dropdown.Toggle>

        <Dropdown.Menu className={DropDownMenuStyles.dropDownMenu}>
          <Dropdown.Item
            className={DropDownMenuStyles.dropDownItem}
            href="#/action-1"
          >
            پوشاک
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            className={DropDownMenuStyles.dropDownItem}
            href="#/actiop-0"
          >
            لوازم الکترونیکی
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            className={DropDownMenuStyles.dropDownItem}
            href="#/action-3"
          >
            آرایش و بهداشتی
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            className={DropDownMenuStyles.dropDownItem}
            href="#/action-3"
          >
            سوپرمارکت
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            className={DropDownMenuStyles.dropDownItem}
            href="#/action-3"
          >
            کتاب و هنر
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            className={DropDownMenuStyles.dropDownItem}
            href="#/action-3"
          >
            خانه و آشپزخانه
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default DropDownMenu;
