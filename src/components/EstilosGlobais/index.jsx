import { createGlobalStyle } from "styled-components";

import SourceSans from "/SourceSans3-ExtraBold.ttf"
import Roboto from "/Roboto-Black.ttf"
import RobotoRegular from "/Roboto-Regular.ttf"
import RobotoLight from "/Roboto-Light.ttf"
import RobotoBold from "/Roboto-Bold.ttf"

const EstilosGlobais = createGlobalStyle`
@font-face {
    font-family:'SourceSans';
    src: local('Source Sans 3'), local('SourceSans'), url(${SourceSans});
}
@font-face {
    font-family: 'Roboto';
    src: url(${Roboto});
}
@font-face {
    font-family: 'Roboto-Regular';
    src: url(${RobotoRegular});
}
@font-face {
    font-family: 'Roboto-Light';
    src: url(${RobotoLight});
}
@font-face {
	font-family: 'Roboto-Bold';
	src: url(${RobotoBold});
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
body{
	background-color:rgba(0, 0, 0, 0.9);
}
::-webkit-scrollbar{
	width: 10px;
	height:10px;
}
::-webkit-scrollbar-thumb{
	background-color:rgba(34, 113, 209, 1);
	border-radius:100vw;
}
::-webkit-scrollbar-track{
	border-radius:100vw;
	background-color:rgba(34, 113, 209, 0.17);
	margin: 5px 20px;
}

`

export default EstilosGlobais