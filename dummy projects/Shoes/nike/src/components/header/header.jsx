import React from "react";
import {
  IconButton,
  Badge,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import logo from "../../assets/logo.svg";
import { HeartOutline, CartOutline } from "react-ionicons";
import { MenuBar } from "./menubar";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-row justify-between items-center w-[60%] h-[80px] mx-auto ">
      <div className="basis-1/4 pl-4 ">
        <img src={logo} alt="" className="w-[30%] h-[auto]" />
      </div>
      <div className="basis-1/4">
        <ul className="flex justify-around">
          <li>
            <Button
              variant="text"
              onClick={() => {
                navigate(`/`);
              }}>
              Home
            </Button>
          </li>
          <li>
            <Button variant="text" onClick={openDrawer}>
              Menu
            </Button>
          </li>
          <li>
            <Menu>
              <MenuHandler>
                <Button variant="text">Categories</Button>
              </MenuHandler>
              <MenuList>
                <MenuItem onClick={() => navigate(`/category`)}>
                  <div className="flex justify-between ">
                    <h1 className="text-gray-700">Football shoes</h1>
                    <h1 className="text-gray-500">(3)</h1>
                  </div>
                </MenuItem>
                <MenuItem onClick={() => navigate(`/category`)}>
                  <div className="flex justify-between ">
                    <h1 className="text-gray-700">Jordan</h1>
                    <h1 className="text-gray-500">(5)</h1>
                  </div>
                </MenuItem>
                <MenuItem onClick={() => navigate(`/category`)}>
                  <div className="flex justify-between ">
                    <h1 className="text-gray-700">Running Shoes</h1>
                    <h1 className="text-gray-500">(6)</h1>
                  </div>
                </MenuItem>
                <MenuItem onClick={() => navigate(`/category`)}>
                  <div className="flex justify-between ">
                    <h1 className="text-gray-700">Sneakers</h1>
                    <h1 className="text-gray-500">(5)</h1>
                  </div>
                </MenuItem>
              </MenuList>
            </Menu>
          </li>
          <li>
            <Button variant="text">Contact</Button>
          </li>
        </ul>
      </div>
      <div className="flex flex-row-reverse basis-1/4 pr-4 w-[15%]">
        <Badge content="5" className="">
          <IconButton variant="text" className="rounded-full">
            <HeartOutline />
          </IconButton>
          <IconButton
            variant="text"
            className="rounded-full"
            onClick={() => navigate("/cart")}>
            <CartOutline />
          </IconButton>
        </Badge>
      </div>
      <MenuBar open={open} closeDrawer={closeDrawer} />
    </div>
  );
}
