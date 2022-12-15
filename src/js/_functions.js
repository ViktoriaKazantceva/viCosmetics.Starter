import { mobileCheck } from "./functions/mobile-check";
import { burger } from './functions/burger';
import { Slider } from './functions/slider';
import { headerHide } from './functions/header-hide';
import { menuHover } from './functions/menu-hover';
import { loading } from './functions/loading';
import { linkHover } from './functions/link-hover';
import { getBlockHeight } from './functions/block-height';

getBlockHeight('.header', '--header-height');
getBlockHeight('.footer', '--footer-height');
getBlockHeight('.menu_mobile', '--mobile-menu-height');
