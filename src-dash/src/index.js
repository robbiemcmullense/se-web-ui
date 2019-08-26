/* eslint-disable import/prefer-default-export */

import { defineCustomElements, applyPolyfills } from "@se/web-ui/loader";
// Add custom element definition to the windows

applyPolyfills().then(() => {
  defineCustomElements(window);
});

import About from "./components/About.react";
import App from "./components/App.react";
import Authentication from "./components/Authentication.react";
import Block from "./components/Block.react";
import BlockContent from "./components/BlockContent.react";
import BlockFooter from "./components/BlockFooter.react";
import BlockHeader from "./components/BlockHeader.react";
import Breadcrumb from "./components/Breadcrumb.react";
import BreadcrumbItem from "./components/BreadcrumbItem.react";
import Button from "./components/Button.react";
import Checkbox from "./components/Checkbox.react";
import Chip from "./components/Chip.react";
import Container from "./components/Container.react";
import Dialog from "./components/Dialog.react";
import DialogContent from "./components/DialogContent.react";
import DialogFooter from "./components/DialogFooter.react";
import DialogHeader from "./components/DialogHeader.react";
import Divider from "./components/Divider.react";
import Dropdown from "./components/Dropdown.react";
import Fab from "./components/Fab.react";
import FormField from "./components/FormField.react";
import Header from "./components/Header.react";
import Icon from "./components/Icon.react";
import IconEcostruxure from "./components/IconEcostruxure.react";
import IconLifeison from "./components/IconLifeison.react";
import IconSchneider from "./components/IconSchneider.react";
import Link from "./components/Link.react";
import List from "./components/List.react";
import ListGroup from "./components/ListGroup.react";
import ListItem from "./components/ListItem.react";
import Loading from "./components/Loading.react";
import Radio from "./components/Radio.react";
import RadioGroup from "./components/RadioGroup.react";
import Sidemenu from "./components/Sidemenu.react";
import SidemenuItem from "./components/SidemenuItem.react";
import Slider from "./components/Slider.react";
import Snackbar from "./components/Snackbar.react";
import Tabbar from "./components/Tabbar.react";
import Tooltip from "./components/Tooltip.react";
import TooltipContent from "./components/TooltipContent.react";
import TooltipFooter from "./components/TooltipFooter.react";
import TooltipHeader from "./components/TooltipHeader.react";
import VisualLinear from "./components/VisualLinear.react";
import VisualRadial from "./components/VisualRadial.react";

export { About, App, Authentication, Block, BlockContent, BlockFooter, BlockHeader, Breadcrumb, BreadcrumbItem, Button, Checkbox, Chip, Container, Dialog, DialogContent, DialogFooter, DialogHeader, Divider, Dropdown, Fab, FormField, Header, Icon, IconEcostruxure, IconLifeison, IconSchneider, Link, List, ListGroup, ListItem, Loading, Radio, RadioGroup, Sidemenu, SidemenuItem, Slider, Snackbar, Tabbar, Tooltip, TooltipContent, TooltipFooter, TooltipHeader, VisualLinear, VisualRadial };