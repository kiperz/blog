/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */
html {
  font-family: sans-serif;
  line-height: 1.15;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
}

article,
aside,
footer,
header,
nav,
section {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

figcaption,
figure,
main {
  display: block;
}

figure {
  margin: 1em 40px;
}

hr {
  -webkit-box-sizing: content-box;
          box-sizing: content-box;
  height: 0;
  overflow: visible;
}

pre {
  font-family: monospace, monospace;
  font-size: 1em;
}

a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}

a:active,
a:hover {
  outline-width: 0;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}

b,
strong {
  font-weight: inherit;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

dfn {
  font-style: italic;
}

mark {
  background-color: #ff0;
  color: #000;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

audio,
video {
  display: inline-block;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

img {
  border-style: none;
}

svg:not(:root) {
  overflow: hidden;
}

button,
input,
optgroup,
select,
textarea {
  font-family: sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
html [type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

legend {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}

progress {
  display: inline-block;
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

details,
menu {
  display: block;
}

summary {
  display: list-item;
}

canvas {
  display: inline-block;
}

template {
  display: none;
}

[hidden] {
  display: none;
}

html {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

*,
*::before,
*::after {
  -webkit-box-sizing: inherit;
          box-sizing: inherit;
}

@-ms-viewport {
  width: device-width;
}

html {
  -ms-overflow-style: scrollbar;
  -webkit-tap-highlight-color: transparent;
}

body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.5;
  color: #292b2c;
  background-color: #fff;
}

[tabindex="-1"]:focus {
  outline: none !important;
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: .5rem;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

abbr[title],
abbr[data-original-title] {
  cursor: help;
}

address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}

ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

dt {
  font-weight: bold;
}

dd {
  margin-bottom: .5rem;
  margin-left: 0;
}

blockquote {
  margin: 0 0 1rem;
}

a {
  color: #0275d8;
  text-decoration: none;
}

a:focus, a:hover {
  color: #014c8c;
  text-decoration: underline;
}

a:not([href]):not([tabindex]) {
  color: inherit;
  text-decoration: none;
}

a:not([href]):not([tabindex]):focus, a:not([href]):not([tabindex]):hover {
  color: inherit;
  text-decoration: none;
}

a:not([href]):not([tabindex]):focus {
  outline: 0;
}

pre {
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
}

figure {
  margin: 0 0 1rem;
}

img {
  vertical-align: middle;
}

[role="button"] {
  cursor: pointer;
}

a,
area,
button,
[role="button"],
input,
label,
select,
summary,
textarea {
  -ms-touch-action: manipulation;
      touch-action: manipulation;
}

table {
  border-collapse: collapse;
  background-color: transparent;
}

caption {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color: #636c72;
  text-align: left;
  caption-side: bottom;
}

th {
  text-align: left;
}

label {
  display: inline-block;
  margin-bottom: .5rem;
}

button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

input,
button,
select,
textarea {
  line-height: inherit;
}

input[type="radio"]:disabled,
input[type="checkbox"]:disabled {
  cursor: not-allowed;
}

input[type="date"],
input[type="time"],
input[type="datetime-local"],
input[type="month"] {
  -webkit-appearance: listbox;
}

textarea {
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: .5rem;
  font-size: 1.5rem;
  line-height: inherit;
}

input[type="search"] {
  -webkit-appearance: none;
}

output {
  display: inline-block;
}

[hidden] {
  display: none !important;
}
/*# sourceMappingURL=bootstrap-reboot.css.map */
/*!
 * Bootstrap v4.0.0-alpha.6 (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors
 * Copyright 2011-2017 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */
html {
  font-family: sans-serif;
  line-height: 1.15;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
}

article,
aside,
footer,
header,
nav,
section {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

figcaption,
figure,
main {
  display: block;
}

figure {
  margin: 1em 40px;
}

hr {
  -webkit-box-sizing: content-box;
          box-sizing: content-box;
  height: 0;
  overflow: visible;
}

pre {
  font-family: monospace, monospace;
  font-size: 1em;
}

a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}

a:active,
a:hover {
  outline-width: 0;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}

b,
strong {
  font-weight: inherit;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

dfn {
  font-style: italic;
}

mark {
  background-color: #ff0;
  color: #000;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

audio,
video {
  display: inline-block;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

img {
  border-style: none;
}

svg:not(:root) {
  overflow: hidden;
}

button,
input,
optgroup,
select,
textarea {
  font-family: sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
html [type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

legend {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}

progress {
  display: inline-block;
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

details,
menu {
  display: block;
}

summary {
  display: list-item;
}

canvas {
  display: inline-block;
}

template {
  display: none;
}

[hidden] {
  display: none;
}

@media print {
  *,
  *::before,
  *::after,
  p::first-letter,
  div::first-letter,
  blockquote::first-letter,
  li::first-letter,
  p::first-line,
  div::first-line,
  blockquote::first-line,
  li::first-line {
    text-shadow: none !important;
    -webkit-box-shadow: none !important;
            box-shadow: none !important;
  }
  a,
  a:visited {
    text-decoration: underline;
  }
  abbr[title]::after {
    content: " (" attr(title) ")";
  }
  pre {
    white-space: pre-wrap !important;
  }
  pre,
  blockquote {
    border: 1px solid #999;
    page-break-inside: avoid;
  }
  thead {
    display: table-header-group;
  }
  tr,
  img {
    page-break-inside: avoid;
  }
  p,
  h2,
  h3 {
    orphans: 3;
    widows: 3;
  }
  h2,
  h3 {
    page-break-after: avoid;
  }
  .navbar {
    display: none;
  }
  .badge {
    border: 1px solid #000;
  }
  .table {
    border-collapse: collapse !important;
  }
  .table td,
  .table th {
    background-color: #fff !important;
  }
  .table-bordered th,
  .table-bordered td {
    border: 1px solid #ddd !important;
  }
}

html {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

*,
*::before,
*::after {
  -webkit-box-sizing: inherit;
          box-sizing: inherit;
}

@-ms-viewport {
  width: device-width;
}

html {
  -ms-overflow-style: scrollbar;
  -webkit-tap-highlight-color: transparent;
}

body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.5;
  color: #292b2c;
  background-color: #fff;
}

[tabindex="-1"]:focus {
  outline: none !important;
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: .5rem;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

abbr[title],
abbr[data-original-title] {
  cursor: help;
}

address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}

ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

dt {
  font-weight: bold;
}

dd {
  margin-bottom: .5rem;
  margin-left: 0;
}

blockquote {
  margin: 0 0 1rem;
}

a {
  color: #0275d8;
  text-decoration: none;
}

a:focus, a:hover {
  color: #014c8c;
  text-decoration: underline;
}

a:not([href]):not([tabindex]) {
  color: inherit;
  text-decoration: none;
}

a:not([href]):not([tabindex]):focus, a:not([href]):not([tabindex]):hover {
  color: inherit;
  text-decoration: none;
}

a:not([href]):not([tabindex]):focus {
  outline: 0;
}

pre {
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
}

figure {
  margin: 0 0 1rem;
}

img {
  vertical-align: middle;
}

[role="button"] {
  cursor: pointer;
}

a,
area,
button,
[role="button"],
input,
label,
select,
summary,
textarea {
  -ms-touch-action: manipulation;
      touch-action: manipulation;
}

table {
  border-collapse: collapse;
  background-color: transparent;
}

caption {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color: #636c72;
  text-align: left;
  caption-side: bottom;
}

th {
  text-align: left;
}

label {
  display: inline-block;
  margin-bottom: .5rem;
}

button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

input,
button,
select,
textarea {
  line-height: inherit;
}

input[type="radio"]:disabled,
input[type="checkbox"]:disabled {
  cursor: not-allowed;
}

input[type="date"],
input[type="time"],
input[type="datetime-local"],
input[type="month"] {
  -webkit-appearance: listbox;
}

textarea {
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: .5rem;
  font-size: 1.5rem;
  line-height: inherit;
}

input[type="search"] {
  -webkit-appearance: none;
}

output {
  display: inline-block;
}

[hidden] {
  display: none !important;
}

h1, h2, h3, h4, h5, h6,
.h1, .h2, .h3, .h4, .h5, .h6 {
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
}

h1, .h1 {
  font-size: 2.5rem;
}

h2, .h2 {
  font-size: 2rem;
}

h3, .h3 {
  font-size: 1.75rem;
}

h4, .h4 {
  font-size: 1.5rem;
}

h5, .h5 {
  font-size: 1.25rem;
}

h6, .h6 {
  font-size: 1rem;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
}

.display-1 {
  font-size: 6rem;
  font-weight: 300;
  line-height: 1.1;
}

.display-2 {
  font-size: 5.5rem;
  font-weight: 300;
  line-height: 1.1;
}

.display-3 {
  font-size: 4.5rem;
  font-weight: 300;
  line-height: 1.1;
}

.display-4 {
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 1.1;
}

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

small,
.small {
  font-size: 80%;
  font-weight: normal;
}

mark,
.mark {
  padding: 0.2em;
  background-color: #fcf8e3;
}

.list-unstyled {
  padding-left: 0;
  list-style: none;
}

.list-inline {
  padding-left: 0;
  list-style: none;
}

.list-inline-item {
  display: inline-block;
}

.list-inline-item:not(:last-child) {
  margin-right: 5px;
}

.initialism {
  font-size: 90%;
  text-transform: uppercase;
}

.blockquote {
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  border-left: 0.25rem solid #eceeef;
}

.blockquote-footer {
  display: block;
  font-size: 80%;
  color: #636c72;
}

.blockquote-footer::before {
  content: "\2014 \00A0";
}

.blockquote-reverse {
  padding-right: 1rem;
  padding-left: 0;
  text-align: right;
  border-right: 0.25rem solid #eceeef;
  border-left: 0;
}

.blockquote-reverse .blockquote-footer::before {
  content: "";
}

.blockquote-reverse .blockquote-footer::after {
  content: "\00A0 \2014";
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.img-thumbnail {
  padding: 0.25rem;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  max-width: 100%;
  height: auto;
}

.figure {
  display: inline-block;
}

.figure-img {
  margin-bottom: 0.5rem;
  line-height: 1;
}

.figure-caption {
  font-size: 90%;
  color: #636c72;
}

code,
kbd,
pre,
samp {
  font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

code {
  padding: 0.2rem 0.4rem;
  font-size: 90%;
  color: #bd4147;
  background-color: #f7f7f9;
  border-radius: 0.25rem;
}

a > code {
  padding: 0;
  color: inherit;
  background-color: inherit;
}

kbd {
  padding: 0.2rem 0.4rem;
  font-size: 90%;
  color: #fff;
  background-color: #292b2c;
  border-radius: 0.2rem;
}

kbd kbd {
  padding: 0;
  font-size: 100%;
  font-weight: bold;
}

pre {
  display: block;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 90%;
  color: #292b2c;
}

pre code {
  padding: 0;
  font-size: inherit;
  color: inherit;
  background-color: transparent;
  border-radius: 0;
}

.pre-scrollable {
  max-height: 340px;
  overflow-y: scroll;
}

.container {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-right: 15px;
  padding-left: 15px;
}

@media (min-width: 576px) {
  .container {
    padding-right: 15px;
    padding-left: 15px;
  }
}

@media (min-width: 768px) {
  .container {
    padding-right: 15px;
    padding-left: 15px;
  }
}

@media (min-width: 992px) {
  .container {
    padding-right: 15px;
    padding-left: 15px;
  }
}

@media (min-width: 1200px) {
  .container {
    padding-right: 15px;
    padding-left: 15px;
  }
}

@media (min-width: 576px) {
  .container {
    width: 540px;
    max-width: 100%;
  }
}

@media (min-width: 768px) {
  .container {
    width: 720px;
    max-width: 100%;
  }
}

@media (min-width: 992px) {
  .container {
    width: 960px;
    max-width: 100%;
  }
}

@media (min-width: 1200px) {
  .container {
    width: 1140px;
    max-width: 100%;
  }
}

.container-fluid {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-right: 15px;
  padding-left: 15px;
}

@media (min-width: 576px) {
  .container-fluid {
    padding-right: 15px;
    padding-left: 15px;
  }
}

@media (min-width: 768px) {
  .container-fluid {
    padding-right: 15px;
    padding-left: 15px;
  }
}

@media (min-width: 992px) {
  .container-fluid {
    padding-right: 15px;
    padding-left: 15px;
  }
}

@media (min-width: 1200px) {
  .container-fluid {
    padding-right: 15px;
    padding-left: 15px;
  }
}

.row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

@media (min-width: 576px) {
  .row {
    margin-right: -15px;
    margin-left: -15px;
  }
}

@media (min-width: 768px) {
  .row {
    margin-right: -15px;
    margin-left: -15px;
  }
}

@media (min-width: 992px) {
  .row {
    margin-right: -15px;
    margin-left: -15px;
  }
}

@media (min-width: 1200px) {
  .row {
    margin-right: -15px;
    margin-left: -15px;
  }
}

.no-gutters {
  margin-right: 0;
  margin-left: 0;
}

.no-gutters > .col,
.no-gutters > [class*="col-"] {
  padding-right: 0;
  padding-left: 0;
}

.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

@media (min-width: 576px) {
  .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl {
    padding-right: 15px;
    padding-left: 15px;
  }
}

@media (min-width: 768px) {
  .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl {
    padding-right: 15px;
    padding-left: 15px;
  }
}

@media (min-width: 992px) {
  .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl {
    padding-right: 15px;
    padding-left: 15px;
  }
}

@media (min-width: 1200px) {
  .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl {
    padding-right: 15px;
    padding-left: 15px;
  }
}

.col {
  -webkit-flex-basis: 0;
      -ms-flex-preferred-size: 0;
          flex-basis: 0;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
  max-width: 100%;
}

.col-auto {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
          flex: 0 0 auto;
  width: auto;
}

.col-1 {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 8.333333%;
      -ms-flex: 0 0 8.333333%;
          flex: 0 0 8.333333%;
  max-width: 8.333333%;
}

.col-2 {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 16.666667%;
      -ms-flex: 0 0 16.666667%;
          flex: 0 0 16.666667%;
  max-width: 16.666667%;
}

.col-3 {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 25%;
      -ms-flex: 0 0 25%;
          flex: 0 0 25%;
  max-width: 25%;
}

.col-4 {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 33.333333%;
      -ms-flex: 0 0 33.333333%;
          flex: 0 0 33.333333%;
  max-width: 33.333333%;
}

.col-5 {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 41.666667%;
      -ms-flex: 0 0 41.666667%;
          flex: 0 0 41.666667%;
  max-width: 41.666667%;
}

.col-6 {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 50%;
      -ms-flex: 0 0 50%;
          flex: 0 0 50%;
  max-width: 50%;
}

.col-7 {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 58.333333%;
      -ms-flex: 0 0 58.333333%;
          flex: 0 0 58.333333%;
  max-width: 58.333333%;
}

.col-8 {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 66.666667%;
      -ms-flex: 0 0 66.666667%;
          flex: 0 0 66.666667%;
  max-width: 66.666667%;
}

.col-9 {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 75%;
      -ms-flex: 0 0 75%;
          flex: 0 0 75%;
  max-width: 75%;
}

.col-10 {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 83.333333%;
      -ms-flex: 0 0 83.333333%;
          flex: 0 0 83.333333%;
  max-width: 83.333333%;
}

.col-11 {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 91.666667%;
      -ms-flex: 0 0 91.666667%;
          flex: 0 0 91.666667%;
  max-width: 91.666667%;
}

.col-12 {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 100%;
      -ms-flex: 0 0 100%;
          flex: 0 0 100%;
  max-width: 100%;
}

.pull-0 {
  right: auto;
}

.pull-1 {
  right: 8.333333%;
}

.pull-2 {
  right: 16.666667%;
}

.pull-3 {
  right: 25%;
}

.pull-4 {
  right: 33.333333%;
}

.pull-5 {
  right: 41.666667%;
}

.pull-6 {
  right: 50%;
}

.pull-7 {
  right: 58.333333%;
}

.pull-8 {
  right: 66.666667%;
}

.pull-9 {
  right: 75%;
}

.pull-10 {
  right: 83.333333%;
}

.pull-11 {
  right: 91.666667%;
}

.pull-12 {
  right: 100%;
}

.push-0 {
  left: auto;
}

.push-1 {
  left: 8.333333%;
}

.push-2 {
  left: 16.666667%;
}

.push-3 {
  left: 25%;
}

.push-4 {
  left: 33.333333%;
}

.push-5 {
  left: 41.666667%;
}

.push-6 {
  left: 50%;
}

.push-7 {
  left: 58.333333%;
}

.push-8 {
  left: 66.666667%;
}

.push-9 {
  left: 75%;
}

.push-10 {
  left: 83.333333%;
}

.push-11 {
  left: 91.666667%;
}

.push-12 {
  left: 100%;
}

.offset-1 {
  margin-left: 8.333333%;
}

.offset-2 {
  margin-left: 16.666667%;
}

.offset-3 {
  margin-left: 25%;
}

.offset-4 {
  margin-left: 33.333333%;
}

.offset-5 {
  margin-left: 41.666667%;
}

.offset-6 {
  margin-left: 50%;
}

.offset-7 {
  margin-left: 58.333333%;
}

.offset-8 {
  margin-left: 66.666667%;
}

.offset-9 {
  margin-left: 75%;
}

.offset-10 {
  margin-left: 83.333333%;
}

.offset-11 {
  margin-left: 91.666667%;
}

@media (min-width: 576px) {
  .col-sm {
    -webkit-flex-basis: 0;
        -ms-flex-preferred-size: 0;
            flex-basis: 0;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
    max-width: 100%;
  }
  .col-sm-auto {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
        -ms-flex: 0 0 auto;
            flex: 0 0 auto;
    width: auto;
  }
  .col-sm-1 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 8.333333%;
        -ms-flex: 0 0 8.333333%;
            flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }
  .col-sm-2 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 16.666667%;
        -ms-flex: 0 0 16.666667%;
            flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  .col-sm-3 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 25%;
        -ms-flex: 0 0 25%;
            flex: 0 0 25%;
    max-width: 25%;
  }
  .col-sm-4 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 33.333333%;
        -ms-flex: 0 0 33.333333%;
            flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .col-sm-5 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 41.666667%;
        -ms-flex: 0 0 41.666667%;
            flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
  .col-sm-6 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 50%;
        -ms-flex: 0 0 50%;
            flex: 0 0 50%;
    max-width: 50%;
  }
  .col-sm-7 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 58.333333%;
        -ms-flex: 0 0 58.333333%;
            flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }
  .col-sm-8 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 66.666667%;
        -ms-flex: 0 0 66.666667%;
            flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
  .col-sm-9 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 75%;
        -ms-flex: 0 0 75%;
            flex: 0 0 75%;
    max-width: 75%;
  }
  .col-sm-10 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 83.333333%;
        -ms-flex: 0 0 83.333333%;
            flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
  .col-sm-11 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 91.666667%;
        -ms-flex: 0 0 91.666667%;
            flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
  .col-sm-12 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 100%;
        -ms-flex: 0 0 100%;
            flex: 0 0 100%;
    max-width: 100%;
  }
  .pull-sm-0 {
    right: auto;
  }
  .pull-sm-1 {
    right: 8.333333%;
  }
  .pull-sm-2 {
    right: 16.666667%;
  }
  .pull-sm-3 {
    right: 25%;
  }
  .pull-sm-4 {
    right: 33.333333%;
  }
  .pull-sm-5 {
    right: 41.666667%;
  }
  .pull-sm-6 {
    right: 50%;
  }
  .pull-sm-7 {
    right: 58.333333%;
  }
  .pull-sm-8 {
    right: 66.666667%;
  }
  .pull-sm-9 {
    right: 75%;
  }
  .pull-sm-10 {
    right: 83.333333%;
  }
  .pull-sm-11 {
    right: 91.666667%;
  }
  .pull-sm-12 {
    right: 100%;
  }
  .push-sm-0 {
    left: auto;
  }
  .push-sm-1 {
    left: 8.333333%;
  }
  .push-sm-2 {
    left: 16.666667%;
  }
  .push-sm-3 {
    left: 25%;
  }
  .push-sm-4 {
    left: 33.333333%;
  }
  .push-sm-5 {
    left: 41.666667%;
  }
  .push-sm-6 {
    left: 50%;
  }
  .push-sm-7 {
    left: 58.333333%;
  }
  .push-sm-8 {
    left: 66.666667%;
  }
  .push-sm-9 {
    left: 75%;
  }
  .push-sm-10 {
    left: 83.333333%;
  }
  .push-sm-11 {
    left: 91.666667%;
  }
  .push-sm-12 {
    left: 100%;
  }
  .offset-sm-0 {
    margin-left: 0%;
  }
  .offset-sm-1 {
    margin-left: 8.333333%;
  }
  .offset-sm-2 {
    margin-left: 16.666667%;
  }
  .offset-sm-3 {
    margin-left: 25%;
  }
  .offset-sm-4 {
    margin-left: 33.333333%;
  }
  .offset-sm-5 {
    margin-left: 41.666667%;
  }
  .offset-sm-6 {
    margin-left: 50%;
  }
  .offset-sm-7 {
    margin-left: 58.333333%;
  }
  .offset-sm-8 {
    margin-left: 66.666667%;
  }
  .offset-sm-9 {
    margin-left: 75%;
  }
  .offset-sm-10 {
    margin-left: 83.333333%;
  }
  .offset-sm-11 {
    margin-left: 91.666667%;
  }
}

@media (min-width: 768px) {
  .col-md {
    -webkit-flex-basis: 0;
        -ms-flex-preferred-size: 0;
            flex-basis: 0;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
    max-width: 100%;
  }
  .col-md-auto {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
        -ms-flex: 0 0 auto;
            flex: 0 0 auto;
    width: auto;
  }
  .col-md-1 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 8.333333%;
        -ms-flex: 0 0 8.333333%;
            flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }
  .col-md-2 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 16.666667%;
        -ms-flex: 0 0 16.666667%;
            flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  .col-md-3 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 25%;
        -ms-flex: 0 0 25%;
            flex: 0 0 25%;
    max-width: 25%;
  }
  .col-md-4 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 33.333333%;
        -ms-flex: 0 0 33.333333%;
            flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .col-md-5 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 41.666667%;
        -ms-flex: 0 0 41.666667%;
            flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
  .col-md-6 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 50%;
        -ms-flex: 0 0 50%;
            flex: 0 0 50%;
    max-width: 50%;
  }
  .col-md-7 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 58.333333%;
        -ms-flex: 0 0 58.333333%;
            flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }
  .col-md-8 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 66.666667%;
        -ms-flex: 0 0 66.666667%;
            flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
  .col-md-9 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 75%;
        -ms-flex: 0 0 75%;
            flex: 0 0 75%;
    max-width: 75%;
  }
  .col-md-10 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 83.333333%;
        -ms-flex: 0 0 83.333333%;
            flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
  .col-md-11 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 91.666667%;
        -ms-flex: 0 0 91.666667%;
            flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
  .col-md-12 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 100%;
        -ms-flex: 0 0 100%;
            flex: 0 0 100%;
    max-width: 100%;
  }
  .pull-md-0 {
    right: auto;
  }
  .pull-md-1 {
    right: 8.333333%;
  }
  .pull-md-2 {
    right: 16.666667%;
  }
  .pull-md-3 {
    right: 25%;
  }
  .pull-md-4 {
    right: 33.333333%;
  }
  .pull-md-5 {
    right: 41.666667%;
  }
  .pull-md-6 {
    right: 50%;
  }
  .pull-md-7 {
    right: 58.333333%;
  }
  .pull-md-8 {
    right: 66.666667%;
  }
  .pull-md-9 {
    right: 75%;
  }
  .pull-md-10 {
    right: 83.333333%;
  }
  .pull-md-11 {
    right: 91.666667%;
  }
  .pull-md-12 {
    right: 100%;
  }
  .push-md-0 {
    left: auto;
  }
  .push-md-1 {
    left: 8.333333%;
  }
  .push-md-2 {
    left: 16.666667%;
  }
  .push-md-3 {
    left: 25%;
  }
  .push-md-4 {
    left: 33.333333%;
  }
  .push-md-5 {
    left: 41.666667%;
  }
  .push-md-6 {
    left: 50%;
  }
  .push-md-7 {
    left: 58.333333%;
  }
  .push-md-8 {
    left: 66.666667%;
  }
  .push-md-9 {
    left: 75%;
  }
  .push-md-10 {
    left: 83.333333%;
  }
  .push-md-11 {
    left: 91.666667%;
  }
  .push-md-12 {
    left: 100%;
  }
  .offset-md-0 {
    margin-left: 0%;
  }
  .offset-md-1 {
    margin-left: 8.333333%;
  }
  .offset-md-2 {
    margin-left: 16.666667%;
  }
  .offset-md-3 {
    margin-left: 25%;
  }
  .offset-md-4 {
    margin-left: 33.333333%;
  }
  .offset-md-5 {
    margin-left: 41.666667%;
  }
  .offset-md-6 {
    margin-left: 50%;
  }
  .offset-md-7 {
    margin-left: 58.333333%;
  }
  .offset-md-8 {
    margin-left: 66.666667%;
  }
  .offset-md-9 {
    margin-left: 75%;
  }
  .offset-md-10 {
    margin-left: 83.333333%;
  }
  .offset-md-11 {
    margin-left: 91.666667%;
  }
}

@media (min-width: 992px) {
  .col-lg {
    -webkit-flex-basis: 0;
        -ms-flex-preferred-size: 0;
            flex-basis: 0;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
    max-width: 100%;
  }
  .col-lg-auto {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
        -ms-flex: 0 0 auto;
            flex: 0 0 auto;
    width: auto;
  }
  .col-lg-1 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 8.333333%;
        -ms-flex: 0 0 8.333333%;
            flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }
  .col-lg-2 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 16.666667%;
        -ms-flex: 0 0 16.666667%;
            flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  .col-lg-3 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 25%;
        -ms-flex: 0 0 25%;
            flex: 0 0 25%;
    max-width: 25%;
  }
  .col-lg-4 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 33.333333%;
        -ms-flex: 0 0 33.333333%;
            flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .col-lg-5 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 41.666667%;
        -ms-flex: 0 0 41.666667%;
            flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
  .col-lg-6 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 50%;
        -ms-flex: 0 0 50%;
            flex: 0 0 50%;
    max-width: 50%;
  }
  .col-lg-7 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 58.333333%;
        -ms-flex: 0 0 58.333333%;
            flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }
  .col-lg-8 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 66.666667%;
        -ms-flex: 0 0 66.666667%;
            flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
  .col-lg-9 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 75%;
        -ms-flex: 0 0 75%;
            flex: 0 0 75%;
    max-width: 75%;
  }
  .col-lg-10 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 83.333333%;
        -ms-flex: 0 0 83.333333%;
            flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
  .col-lg-11 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 91.666667%;
        -ms-flex: 0 0 91.666667%;
            flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
  .col-lg-12 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 100%;
        -ms-flex: 0 0 100%;
            flex: 0 0 100%;
    max-width: 100%;
  }
  .pull-lg-0 {
    right: auto;
  }
  .pull-lg-1 {
    right: 8.333333%;
  }
  .pull-lg-2 {
    right: 16.666667%;
  }
  .pull-lg-3 {
    right: 25%;
  }
  .pull-lg-4 {
    right: 33.333333%;
  }
  .pull-lg-5 {
    right: 41.666667%;
  }
  .pull-lg-6 {
    right: 50%;
  }
  .pull-lg-7 {
    right: 58.333333%;
  }
  .pull-lg-8 {
    right: 66.666667%;
  }
  .pull-lg-9 {
    right: 75%;
  }
  .pull-lg-10 {
    right: 83.333333%;
  }
  .pull-lg-11 {
    right: 91.666667%;
  }
  .pull-lg-12 {
    right: 100%;
  }
  .push-lg-0 {
    left: auto;
  }
  .push-lg-1 {
    left: 8.333333%;
  }
  .push-lg-2 {
    left: 16.666667%;
  }
  .push-lg-3 {
    left: 25%;
  }
  .push-lg-4 {
    left: 33.333333%;
  }
  .push-lg-5 {
    left: 41.666667%;
  }
  .push-lg-6 {
    left: 50%;
  }
  .push-lg-7 {
    left: 58.333333%;
  }
  .push-lg-8 {
    left: 66.666667%;
  }
  .push-lg-9 {
    left: 75%;
  }
  .push-lg-10 {
    left: 83.333333%;
  }
  .push-lg-11 {
    left: 91.666667%;
  }
  .push-lg-12 {
    left: 100%;
  }
  .offset-lg-0 {
    margin-left: 0%;
  }
  .offset-lg-1 {
    margin-left: 8.333333%;
  }
  .offset-lg-2 {
    margin-left: 16.666667%;
  }
  .offset-lg-3 {
    margin-left: 25%;
  }
  .offset-lg-4 {
    margin-left: 33.333333%;
  }
  .offset-lg-5 {
    margin-left: 41.666667%;
  }
  .offset-lg-6 {
    margin-left: 50%;
  }
  .offset-lg-7 {
    margin-left: 58.333333%;
  }
  .offset-lg-8 {
    margin-left: 66.666667%;
  }
  .offset-lg-9 {
    margin-left: 75%;
  }
  .offset-lg-10 {
    margin-left: 83.333333%;
  }
  .offset-lg-11 {
    margin-left: 91.666667%;
  }
}

@media (min-width: 1200px) {
  .col-xl {
    -webkit-flex-basis: 0;
        -ms-flex-preferred-size: 0;
            flex-basis: 0;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
    max-width: 100%;
  }
  .col-xl-auto {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
        -ms-flex: 0 0 auto;
            flex: 0 0 auto;
    width: auto;
  }
  .col-xl-1 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 8.333333%;
        -ms-flex: 0 0 8.333333%;
            flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }
  .col-xl-2 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 16.666667%;
        -ms-flex: 0 0 16.666667%;
            flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  .col-xl-3 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 25%;
        -ms-flex: 0 0 25%;
            flex: 0 0 25%;
    max-width: 25%;
  }
  .col-xl-4 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 33.333333%;
        -ms-flex: 0 0 33.333333%;
            flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .col-xl-5 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 41.666667%;
        -ms-flex: 0 0 41.666667%;
            flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
  .col-xl-6 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 50%;
        -ms-flex: 0 0 50%;
            flex: 0 0 50%;
    max-width: 50%;
  }
  .col-xl-7 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 58.333333%;
        -ms-flex: 0 0 58.333333%;
            flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }
  .col-xl-8 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 66.666667%;
        -ms-flex: 0 0 66.666667%;
            flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
  .col-xl-9 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 75%;
        -ms-flex: 0 0 75%;
            flex: 0 0 75%;
    max-width: 75%;
  }
  .col-xl-10 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 83.333333%;
        -ms-flex: 0 0 83.333333%;
            flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
  .col-xl-11 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 91.666667%;
        -ms-flex: 0 0 91.666667%;
            flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
  .col-xl-12 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 100%;
        -ms-flex: 0 0 100%;
            flex: 0 0 100%;
    max-width: 100%;
  }
  .pull-xl-0 {
    right: auto;
  }
  .pull-xl-1 {
    right: 8.333333%;
  }
  .pull-xl-2 {
    right: 16.666667%;
  }
  .pull-xl-3 {
    right: 25%;
  }
  .pull-xl-4 {
    right: 33.333333%;
  }
  .pull-xl-5 {
    right: 41.666667%;
  }
  .pull-xl-6 {
    right: 50%;
  }
  .pull-xl-7 {
    right: 58.333333%;
  }
  .pull-xl-8 {
    right: 66.666667%;
  }
  .pull-xl-9 {
    right: 75%;
  }
  .pull-xl-10 {
    right: 83.333333%;
  }
  .pull-xl-11 {
    right: 91.666667%;
  }
  .pull-xl-12 {
    right: 100%;
  }
  .push-xl-0 {
    left: auto;
  }
  .push-xl-1 {
    left: 8.333333%;
  }
  .push-xl-2 {
    left: 16.666667%;
  }
  .push-xl-3 {
    left: 25%;
  }
  .push-xl-4 {
    left: 33.333333%;
  }
  .push-xl-5 {
    left: 41.666667%;
  }
  .push-xl-6 {
    left: 50%;
  }
  .push-xl-7 {
    left: 58.333333%;
  }
  .push-xl-8 {
    left: 66.666667%;
  }
  .push-xl-9 {
    left: 75%;
  }
  .push-xl-10 {
    left: 83.333333%;
  }
  .push-xl-11 {
    left: 91.666667%;
  }
  .push-xl-12 {
    left: 100%;
  }
  .offset-xl-0 {
    margin-left: 0%;
  }
  .offset-xl-1 {
    margin-left: 8.333333%;
  }
  .offset-xl-2 {
    margin-left: 16.666667%;
  }
  .offset-xl-3 {
    margin-left: 25%;
  }
  .offset-xl-4 {
    margin-left: 33.333333%;
  }
  .offset-xl-5 {
    margin-left: 41.666667%;
  }
  .offset-xl-6 {
    margin-left: 50%;
  }
  .offset-xl-7 {
    margin-left: 58.333333%;
  }
  .offset-xl-8 {
    margin-left: 66.666667%;
  }
  .offset-xl-9 {
    margin-left: 75%;
  }
  .offset-xl-10 {
    margin-left: 83.333333%;
  }
  .offset-xl-11 {
    margin-left: 91.666667%;
  }
}

.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
}

.table th,
.table td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #eceeef;
}

.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #eceeef;
}

.table tbody + tbody {
  border-top: 2px solid #eceeef;
}

.table .table {
  background-color: #fff;
}

.table-sm th,
.table-sm td {
  padding: 0.3rem;
}

.table-bordered {
  border: 1px solid #eceeef;
}

.table-bordered th,
.table-bordered td {
  border: 1px solid #eceeef;
}

.table-bordered thead th,
.table-bordered thead td {
  border-bottom-width: 2px;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}

.table-hover tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.075);
}

.table-active,
.table-active > th,
.table-active > td {
  background-color: rgba(0, 0, 0, 0.075);
}

.table-hover .table-active:hover {
  background-color: rgba(0, 0, 0, 0.075);
}

.table-hover .table-active:hover > td,
.table-hover .table-active:hover > th {
  background-color: rgba(0, 0, 0, 0.075);
}

.table-success,
.table-success > th,
.table-success > td {
  background-color: #dff0d8;
}

.table-hover .table-success:hover {
  background-color: #d0e9c6;
}

.table-hover .table-success:hover > td,
.table-hover .table-success:hover > th {
  background-color: #d0e9c6;
}

.table-info,
.table-info > th,
.table-info > td {
  background-color: #d9edf7;
}

.table-hover .table-info:hover {
  background-color: #c4e3f3;
}

.table-hover .table-info:hover > td,
.table-hover .table-info:hover > th {
  background-color: #c4e3f3;
}

.table-warning,
.table-warning > th,
.table-warning > td {
  background-color: #fcf8e3;
}

.table-hover .table-warning:hover {
  background-color: #faf2cc;
}

.table-hover .table-warning:hover > td,
.table-hover .table-warning:hover > th {
  background-color: #faf2cc;
}

.table-danger,
.table-danger > th,
.table-danger > td {
  background-color: #f2dede;
}

.table-hover .table-danger:hover {
  background-color: #ebcccc;
}

.table-hover .table-danger:hover > td,
.table-hover .table-danger:hover > th {
  background-color: #ebcccc;
}

.thead-inverse th {
  color: #fff;
  background-color: #292b2c;
}

.thead-default th {
  color: #464a4c;
  background-color: #eceeef;
}

.table-inverse {
  color: #fff;
  background-color: #292b2c;
}

.table-inverse th,
.table-inverse td,
.table-inverse thead th {
  border-color: #fff;
}

.table-inverse.table-bordered {
  border: 0;
}

.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
  -ms-overflow-style: -ms-autohiding-scrollbar;
}

.table-responsive.table-bordered {
  border: 0;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  line-height: 1.25;
  color: #464a4c;
  background-color: #fff;
  background-image: none;
  -webkit-background-clip: padding-box;
          background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
}

.form-control::-ms-expand {
  background-color: transparent;
  border: 0;
}

.form-control:focus {
  color: #464a4c;
  background-color: #fff;
  border-color: #5cb3fd;
  outline: none;
}

.form-control::-webkit-input-placeholder {
  color: #636c72;
  opacity: 1;
}

.form-control::-moz-placeholder {
  color: #636c72;
  opacity: 1;
}

.form-control:-ms-input-placeholder {
  color: #636c72;
  opacity: 1;
}

.form-control::placeholder {
  color: #636c72;
  opacity: 1;
}

.form-control:disabled, .form-control[readonly] {
  background-color: #eceeef;
  opacity: 1;
}

.form-control:disabled {
  cursor: not-allowed;
}

select.form-control:not([size]):not([multiple]) {
  height: calc(2.25rem + 2px);
}

select.form-control:focus::-ms-value {
  color: #464a4c;
  background-color: #fff;
}

.form-control-file,
.form-control-range {
  display: block;
}

.col-form-label {
  padding-top: calc(0.5rem - 1px * 2);
  padding-bottom: calc(0.5rem - 1px * 2);
  margin-bottom: 0;
}

.col-form-label-lg {
  padding-top: calc(0.75rem - 1px * 2);
  padding-bottom: calc(0.75rem - 1px * 2);
  font-size: 1.25rem;
}

.col-form-label-sm {
  padding-top: calc(0.25rem - 1px * 2);
  padding-bottom: calc(0.25rem - 1px * 2);
  font-size: 0.875rem;
}

.col-form-legend {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 0;
  font-size: 1rem;
}

.form-control-static {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 0;
  line-height: 1.25;
  border: solid transparent;
  border-width: 1px 0;
}

.form-control-static.form-control-sm, .input-group-sm > .form-control-static.form-control,
.input-group-sm > .form-control-static.input-group-addon,
.input-group-sm > .input-group-btn > .form-control-static.btn, .form-control-static.form-control-lg, .input-group-lg > .form-control-static.form-control,
.input-group-lg > .form-control-static.input-group-addon,
.input-group-lg > .input-group-btn > .form-control-static.btn {
  padding-right: 0;
  padding-left: 0;
}

.form-control-sm, .input-group-sm > .form-control,
.input-group-sm > .input-group-addon,
.input-group-sm > .input-group-btn > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}

select.form-control-sm:not([size]):not([multiple]), .input-group-sm > select.form-control:not([size]):not([multiple]),
.input-group-sm > select.input-group-addon:not([size]):not([multiple]),
.input-group-sm > .input-group-btn > select.btn:not([size]):not([multiple]) {
  height: 1.8125rem;
}

.form-control-lg, .input-group-lg > .form-control,
.input-group-lg > .input-group-addon,
.input-group-lg > .input-group-btn > .btn {
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}

select.form-control-lg:not([size]):not([multiple]), .input-group-lg > select.form-control:not([size]):not([multiple]),
.input-group-lg > select.input-group-addon:not([size]):not([multiple]),
.input-group-lg > .input-group-btn > select.btn:not([size]):not([multiple]) {
  height: 3.166667rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-text {
  display: block;
  margin-top: 0.25rem;
}

.form-check {
  position: relative;
  display: block;
  margin-bottom: 0.5rem;
}

.form-check.disabled .form-check-label {
  color: #636c72;
  cursor: not-allowed;
}

.form-check-label {
  padding-left: 1.25rem;
  margin-bottom: 0;
  cursor: pointer;
}

.form-check-input {
  position: absolute;
  margin-top: 0.25rem;
  margin-left: -1.25rem;
}

.form-check-input:only-child {
  position: static;
}

.form-check-inline {
  display: inline-block;
}

.form-check-inline .form-check-label {
  vertical-align: middle;
}

.form-check-inline + .form-check-inline {
  margin-left: 0.75rem;
}

.form-control-feedback {
  margin-top: 0.25rem;
}

.form-control-success,
.form-control-warning,
.form-control-danger {
  padding-right: 2.25rem;
  background-repeat: no-repeat;
  background-position: center right 0.5625rem;
  -webkit-background-size: 1.125rem 1.125rem;
          background-size: 1.125rem 1.125rem;
}

.has-success .form-control-feedback,
.has-success .form-control-label,
.has-success .col-form-label,
.has-success .form-check-label,
.has-success .custom-control {
  color: #5cb85c;
}

.has-success .form-control {
  border-color: #5cb85c;
}

.has-success .input-group-addon {
  color: #5cb85c;
  border-color: #5cb85c;
  background-color: #eaf6ea;
}

.has-success .form-control-success {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%235cb85c' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E");
}

.has-warning .form-control-feedback,
.has-warning .form-control-label,
.has-warning .col-form-label,
.has-warning .form-check-label,
.has-warning .custom-control {
  color: #f0ad4e;
}

.has-warning .form-control {
  border-color: #f0ad4e;
}

.has-warning .input-group-addon {
  color: #f0ad4e;
  border-color: #f0ad4e;
  background-color: white;
}

.has-warning .form-control-warning {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23f0ad4e' d='M4.4 5.324h-.8v-2.46h.8zm0 1.42h-.8V5.89h.8zM3.76.63L.04 7.075c-.115.2.016.425.26.426h7.397c.242 0 .372-.226.258-.426C6.726 4.924 5.47 2.79 4.253.63c-.113-.174-.39-.174-.494 0z'/%3E%3C/svg%3E");
}

.has-danger .form-control-feedback,
.has-danger .form-control-label,
.has-danger .col-form-label,
.has-danger .form-check-label,
.has-danger .custom-control {
  color: #d9534f;
}

.has-danger .form-control {
  border-color: #d9534f;
}

.has-danger .input-group-addon {
  color: #d9534f;
  border-color: #d9534f;
  background-color: #fdf7f7;
}

.has-danger .form-control-danger {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23d9534f' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23d9534f' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E");
}

.form-inline {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-flow: row wrap;
      -ms-flex-flow: row wrap;
          flex-flow: row wrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
}

.form-inline .form-check {
  width: 100%;
}

@media (min-width: 576px) {
  .form-inline label {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
        -ms-flex-pack: center;
            justify-content: center;
    margin-bottom: 0;
  }
  .form-inline .form-group {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
        -ms-flex: 0 0 auto;
            flex: 0 0 auto;
    -webkit-flex-flow: row wrap;
        -ms-flex-flow: row wrap;
            flex-flow: row wrap;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    margin-bottom: 0;
  }
  .form-inline .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
  }
  .form-inline .form-control-static {
    display: inline-block;
  }
  .form-inline .input-group {
    width: auto;
  }
  .form-inline .form-control-label {
    margin-bottom: 0;
    vertical-align: middle;
  }
  .form-inline .form-check {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
        -ms-flex-pack: center;
            justify-content: center;
    width: auto;
    margin-top: 0;
    margin-bottom: 0;
  }
  .form-inline .form-check-label {
    padding-left: 0;
  }
  .form-inline .form-check-input {
    position: relative;
    margin-top: 0;
    margin-right: 0.25rem;
    margin-left: 0;
  }
  .form-inline .custom-control {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
        -ms-flex-pack: center;
            justify-content: center;
    padding-left: 0;
  }
  .form-inline .custom-control-indicator {
    position: static;
    display: inline-block;
    margin-right: 0.25rem;
    vertical-align: text-bottom;
  }
  .form-inline .has-feedback .form-control-feedback {
    top: 0;
  }
}

.btn {
  display: inline-block;
  font-weight: normal;
  line-height: 1.25;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.btn:focus, .btn:hover {
  text-decoration: none;
}

.btn:focus, .btn.focus {
  outline: 0;
  -webkit-box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.25);
          box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.25);
}

.btn.disabled, .btn:disabled {
  cursor: not-allowed;
  opacity: .65;
}

.btn:active, .btn.active {
  background-image: none;
}

a.btn.disabled,
fieldset[disabled] a.btn {
  pointer-events: none;
}

.btn-primary {
  color: #fff;
  background-color: #0275d8;
  border-color: #0275d8;
}

.btn-primary:hover {
  color: #fff;
  background-color: #025aa5;
  border-color: #01549b;
}

.btn-primary:focus, .btn-primary.focus {
  -webkit-box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.5);
          box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.5);
}

.btn-primary.disabled, .btn-primary:disabled {
  background-color: #0275d8;
  border-color: #0275d8;
}

.btn-primary:active, .btn-primary.active,
.show > .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #025aa5;
  background-image: none;
  border-color: #01549b;
}

.btn-secondary {
  color: #292b2c;
  background-color: #fff;
  border-color: #ccc;
}

.btn-secondary:hover {
  color: #292b2c;
  background-color: #e6e6e6;
  border-color: #adadad;
}

.btn-secondary:focus, .btn-secondary.focus {
  -webkit-box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5);
          box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5);
}

.btn-secondary.disabled, .btn-secondary:disabled {
  background-color: #fff;
  border-color: #ccc;
}

.btn-secondary:active, .btn-secondary.active,
.show > .btn-secondary.dropdown-toggle {
  color: #292b2c;
  background-color: #e6e6e6;
  background-image: none;
  border-color: #adadad;
}

.btn-info {
  color: #fff;
  background-color: #5bc0de;
  border-color: #5bc0de;
}

.btn-info:hover {
  color: #fff;
  background-color: #31b0d5;
  border-color: #2aabd2;
}

.btn-info:focus, .btn-info.focus {
  -webkit-box-shadow: 0 0 0 2px rgba(91, 192, 222, 0.5);
          box-shadow: 0 0 0 2px rgba(91, 192, 222, 0.5);
}

.btn-info.disabled, .btn-info:disabled {
  background-color: #5bc0de;
  border-color: #5bc0de;
}

.btn-info:active, .btn-info.active,
.show > .btn-info.dropdown-toggle {
  color: #fff;
  background-color: #31b0d5;
  background-image: none;
  border-color: #2aabd2;
}

.btn-success {
  color: #fff;
  background-color: #5cb85c;
  border-color: #5cb85c;
}

.btn-success:hover {
  color: #fff;
  background-color: #449d44;
  border-color: #419641;
}

.btn-success:focus, .btn-success.focus {
  -webkit-box-shadow: 0 0 0 2px rgba(92, 184, 92, 0.5);
          box-shadow: 0 0 0 2px rgba(92, 184, 92, 0.5);
}

.btn-success.disabled, .btn-success:disabled {
  background-color: #5cb85c;
  border-color: #5cb85c;
}

.btn-success:active, .btn-success.active,
.show > .btn-success.dropdown-toggle {
  color: #fff;
  background-color: #449d44;
  background-image: none;
  border-color: #419641;
}

.btn-warning {
  color: #fff;
  background-color: #f0ad4e;
  border-color: #f0ad4e;
}

.btn-warning:hover {
  color: #fff;
  background-color: #ec971f;
  border-color: #eb9316;
}

.btn-warning:focus, .btn-warning.focus {
  -webkit-box-shadow: 0 0 0 2px rgba(240, 173, 78, 0.5);
          box-shadow: 0 0 0 2px rgba(240, 173, 78, 0.5);
}

.btn-warning.disabled, .btn-warning:disabled {
  background-color: #f0ad4e;
  border-color: #f0ad4e;
}

.btn-warning:active, .btn-warning.active,
.show > .btn-warning.dropdown-toggle {
  color: #fff;
  background-color: #ec971f;
  background-image: none;
  border-color: #eb9316;
}

.btn-danger {
  color: #fff;
  background-color: #d9534f;
  border-color: #d9534f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #c9302c;
  border-color: #c12e2a;
}

.btn-danger:focus, .btn-danger.focus {
  -webkit-box-shadow: 0 0 0 2px rgba(217, 83, 79, 0.5);
          box-shadow: 0 0 0 2px rgba(217, 83, 79, 0.5);
}

.btn-danger.disabled, .btn-danger:disabled {
  background-color: #d9534f;
  border-color: #d9534f;
}

.btn-danger:active, .btn-danger.active,
.show > .btn-danger.dropdown-toggle {
  color: #fff;
  background-color: #c9302c;
  background-image: none;
  border-color: #c12e2a;
}

.btn-outline-primary {
  color: #0275d8;
  background-image: none;
  background-color: transparent;
  border-color: #0275d8;
}

.btn-outline-primary:hover {
  color: #fff;
  background-color: #0275d8;
  border-color: #0275d8;
}

.btn-outline-primary:focus, .btn-outline-primary.focus {
  -webkit-box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.5);
          box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.5);
}

.btn-outline-primary.disabled, .btn-outline-primary:disabled {
  color: #0275d8;
  background-color: transparent;
}

.btn-outline-primary:active, .btn-outline-primary.active,
.show > .btn-outline-primary.dropdown-toggle {
  color: #fff;
  background-color: #0275d8;
  border-color: #0275d8;
}

.btn-outline-secondary {
  color: #ccc;
  background-image: none;
  background-color: transparent;
  border-color: #ccc;
}

.btn-outline-secondary:hover {
  color: #fff;
  background-color: #ccc;
  border-color: #ccc;
}

.btn-outline-secondary:focus, .btn-outline-secondary.focus {
  -webkit-box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5);
          box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5);
}

.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {
  color: #ccc;
  background-color: transparent;
}

.btn-outline-secondary:active, .btn-outline-secondary.active,
.show > .btn-outline-secondary.dropdown-toggle {
  color: #fff;
  background-color: #ccc;
  border-color: #ccc;
}

.btn-outline-info {
  color: #5bc0de;
  background-image: none;
  background-color: transparent;
  border-color: #5bc0de;
}

.btn-outline-info:hover {
  color: #fff;
  background-color: #5bc0de;
  border-color: #5bc0de;
}

.btn-outline-info:focus, .btn-outline-info.focus {
  -webkit-box-shadow: 0 0 0 2px rgba(91, 192, 222, 0.5);
          box-shadow: 0 0 0 2px rgba(91, 192, 222, 0.5);
}

.btn-outline-info.disabled, .btn-outline-info:disabled {
  color: #5bc0de;
  background-color: transparent;
}

.btn-outline-info:active, .btn-outline-info.active,
.show > .btn-outline-info.dropdown-toggle {
  color: #fff;
  background-color: #5bc0de;
  border-color: #5bc0de;
}

.btn-outline-success {
  color: #5cb85c;
  background-image: none;
  background-color: transparent;
  border-color: #5cb85c;
}

.btn-outline-success:hover {
  color: #fff;
  background-color: #5cb85c;
  border-color: #5cb85c;
}

.btn-outline-success:focus, .btn-outline-success.focus {
  -webkit-box-shadow: 0 0 0 2px rgba(92, 184, 92, 0.5);
          box-shadow: 0 0 0 2px rgba(92, 184, 92, 0.5);
}

.btn-outline-success.disabled, .btn-outline-success:disabled {
  color: #5cb85c;
  background-color: transparent;
}

.btn-outline-success:active, .btn-outline-success.active,
.show > .btn-outline-success.dropdown-toggle {
  color: #fff;
  background-color: #5cb85c;
  border-color: #5cb85c;
}

.btn-outline-warning {
  color: #f0ad4e;
  background-image: none;
  background-color: transparent;
  border-color: #f0ad4e;
}

.btn-outline-warning:hover {
  color: #fff;
  background-color: #f0ad4e;
  border-color: #f0ad4e;
}

.btn-outline-warning:focus, .btn-outline-warning.focus {
  -webkit-box-shadow: 0 0 0 2px rgba(240, 173, 78, 0.5);
          box-shadow: 0 0 0 2px rgba(240, 173, 78, 0.5);
}

.btn-outline-warning.disabled, .btn-outline-warning:disabled {
  color: #f0ad4e;
  background-color: transparent;
}

.btn-outline-warning:active, .btn-outline-warning.active,
.show > .btn-outline-warning.dropdown-toggle {
  color: #fff;
  background-color: #f0ad4e;
  border-color: #f0ad4e;
}

.btn-outline-danger {
  color: #d9534f;
  background-image: none;
  background-color: transparent;
  border-color: #d9534f;
}

.btn-outline-danger:hover {
  color: #fff;
  background-color: #d9534f;
  border-color: #d9534f;
}

.btn-outline-danger:focus, .btn-outline-danger.focus {
  -webkit-box-shadow: 0 0 0 2px rgba(217, 83, 79, 0.5);
          box-shadow: 0 0 0 2px rgba(217, 83, 79, 0.5);
}

.btn-outline-danger.disabled, .btn-outline-danger:disabled {
  color: #d9534f;
  background-color: transparent;
}

.btn-outline-danger:active, .btn-outline-danger.active,
.show > .btn-outline-danger.dropdown-toggle {
  color: #fff;
  background-color: #d9534f;
  border-color: #d9534f;
}

.btn-link {
  font-weight: normal;
  color: #0275d8;
  border-radius: 0;
}

.btn-link, .btn-link:active, .btn-link.active, .btn-link:disabled {
  background-color: transparent;
}

.btn-link, .btn-link:focus, .btn-link:active {
  border-color: transparent;
}

.btn-link:hover {
  border-color: transparent;
}

.btn-link:focus, .btn-link:hover {
  color: #014c8c;
  text-decoration: underline;
  background-color: transparent;
}

.btn-link:disabled {
  color: #636c72;
}

.btn-link:disabled:focus, .btn-link:disabled:hover {
  text-decoration: none;
}

.btn-lg, .btn-group-lg > .btn {
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}

.btn-sm, .btn-group-sm > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}

.btn-block {
  display: block;
  width: 100%;
}

.btn-block + .btn-block {
  margin-top: 0.5rem;
}

input[type="submit"].btn-block,
input[type="reset"].btn-block,
input[type="button"].btn-block {
  width: 100%;
}

.fade {
  opacity: 0;
  -webkit-transition: opacity 0.15s linear;
  -o-transition: opacity 0.15s linear;
  transition: opacity 0.15s linear;
}

.fade.show {
  opacity: 1;
}

.collapse {
  display: none;
}

.collapse.show {
  display: block;
}

tr.collapse.show {
  display: table-row;
}

tbody.collapse.show {
  display: table-row-group;
}

.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  -webkit-transition: height 0.35s ease;
  -o-transition: height 0.35s ease;
  transition: height 0.35s ease;
}

.dropup,
.dropdown {
  position: relative;
}

.dropdown-toggle::after {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 0.3em;
  vertical-align: middle;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-left: 0.3em solid transparent;
}

.dropdown-toggle:focus {
  outline: 0;
}

.dropup .dropdown-toggle::after {
  border-top: 0;
  border-bottom: 0.3em solid;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #292b2c;
  text-align: left;
  list-style: none;
  background-color: #fff;
  -webkit-background-clip: padding-box;
          background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}

.dropdown-divider {
  height: 1px;
  margin: 0.5rem 0;
  overflow: hidden;
  background-color: #eceeef;
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 3px 1.5rem;
  clear: both;
  font-weight: normal;
  color: #292b2c;
  text-align: inherit;
  white-space: nowrap;
  background: none;
  border: 0;
}

.dropdown-item:focus, .dropdown-item:hover {
  color: #1d1e1f;
  text-decoration: none;
  background-color: #f7f7f9;
}

.dropdown-item.active, .dropdown-item:active {
  color: #fff;
  text-decoration: none;
  background-color: #0275d8;
}

.dropdown-item.disabled, .dropdown-item:disabled {
  color: #636c72;
  cursor: not-allowed;
  background-color: transparent;
}

.show > .dropdown-menu {
  display: block;
}

.show > a {
  outline: 0;
}

.dropdown-menu-right {
  right: 0;
  left: auto;
}

.dropdown-menu-left {
  right: auto;
  left: 0;
}

.dropdown-header {
  display: block;
  padding: 0.5rem 1.5rem;
  margin-bottom: 0;
  font-size: 0.875rem;
  color: #636c72;
  white-space: nowrap;
}

.dropdown-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 990;
}

.dropup .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-bottom: 0.125rem;
}

.btn-group,
.btn-group-vertical {
  position: relative;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: middle;
}

.btn-group > .btn,
.btn-group-vertical > .btn {
  position: relative;
  -webkit-box-flex: 0;
  -webkit-flex: 0 1 auto;
      -ms-flex: 0 1 auto;
          flex: 0 1 auto;
}

.btn-group > .btn:hover,
.btn-group-vertical > .btn:hover {
  z-index: 2;
}

.btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,
.btn-group-vertical > .btn:focus,
.btn-group-vertical > .btn:active,
.btn-group-vertical > .btn.active {
  z-index: 2;
}

.btn-group .btn + .btn,
.btn-group .btn + .btn-group,
.btn-group .btn-group + .btn,
.btn-group .btn-group + .btn-group,
.btn-group-vertical .btn + .btn,
.btn-group-vertical .btn + .btn-group,
.btn-group-vertical .btn-group + .btn,
.btn-group-vertical .btn-group + .btn-group {
  margin-left: -1px;
}

.btn-toolbar {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
          justify-content: flex-start;
}

.btn-toolbar .input-group {
  width: auto;
}

.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {
  border-radius: 0;
}

.btn-group > .btn:first-child {
  margin-left: 0;
}

.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}

.btn-group > .btn:last-child:not(:first-child),
.btn-group > .dropdown-toggle:not(:first-child) {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}

.btn-group > .btn-group {
  float: left;
}

.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {
  border-radius: 0;
}

.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,
.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}

.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}

.btn-group .dropdown-toggle:active,
.btn-group.open .dropdown-toggle {
  outline: 0;
}

.btn + .dropdown-toggle-split {
  padding-right: 0.75rem;
  padding-left: 0.75rem;
}

.btn + .dropdown-toggle-split::after {
  margin-left: 0;
}

.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {
  padding-right: 0.375rem;
  padding-left: 0.375rem;
}

.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {
  padding-right: 1.125rem;
  padding-left: 1.125rem;
}

.btn-group-vertical {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
      -ms-flex-align: start;
          align-items: flex-start;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.btn-group-vertical .btn,
.btn-group-vertical .btn-group {
  width: 100%;
}

.btn-group-vertical > .btn + .btn,
.btn-group-vertical > .btn + .btn-group,
.btn-group-vertical > .btn-group + .btn,
.btn-group-vertical > .btn-group + .btn-group {
  margin-top: -1px;
  margin-left: 0;
}

.btn-group-vertical > .btn:not(:first-child):not(:last-child) {
  border-radius: 0;
}

.btn-group-vertical > .btn:first-child:not(:last-child) {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.btn-group-vertical > .btn:last-child:not(:first-child) {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}

.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {
  border-radius: 0;
}

.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,
.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}

[data-toggle="buttons"] > .btn input[type="radio"],
[data-toggle="buttons"] > .btn input[type="checkbox"],
[data-toggle="buttons"] > .btn-group > .btn input[type="radio"],
[data-toggle="buttons"] > .btn-group > .btn input[type="checkbox"] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}

.input-group {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
}

.input-group .form-control {
  position: relative;
  z-index: 2;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  width: 1%;
  margin-bottom: 0;
}

.input-group .form-control:focus, .input-group .form-control:active, .input-group .form-control:hover {
  z-index: 3;
}

.input-group-addon,
.input-group-btn,
.input-group .form-control {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.input-group-addon:not(:first-child):not(:last-child),
.input-group-btn:not(:first-child):not(:last-child),
.input-group .form-control:not(:first-child):not(:last-child) {
  border-radius: 0;
}

.input-group-addon,
.input-group-btn {
  white-space: nowrap;
  vertical-align: middle;
}

.input-group-addon {
  padding: 0.5rem 0.75rem;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.25;
  color: #464a4c;
  text-align: center;
  background-color: #eceeef;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}

.input-group-addon.form-control-sm,
.input-group-sm > .input-group-addon,
.input-group-sm > .input-group-btn > .input-group-addon.btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}

.input-group-addon.form-control-lg,
.input-group-lg > .input-group-addon,
.input-group-lg > .input-group-btn > .input-group-addon.btn {
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}

.input-group-addon input[type="radio"],
.input-group-addon input[type="checkbox"] {
  margin-top: 0;
}

.input-group .form-control:not(:last-child),
.input-group-addon:not(:last-child),
.input-group-btn:not(:last-child) > .btn,
.input-group-btn:not(:last-child) > .btn-group > .btn,
.input-group-btn:not(:last-child) > .dropdown-toggle,
.input-group-btn:not(:first-child) > .btn:not(:last-child):not(.dropdown-toggle),
.input-group-btn:not(:first-child) > .btn-group:not(:last-child) > .btn {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}

.input-group-addon:not(:last-child) {
  border-right: 0;
}

.input-group .form-control:not(:first-child),
.input-group-addon:not(:first-child),
.input-group-btn:not(:first-child) > .btn,
.input-group-btn:not(:first-child) > .btn-group > .btn,
.input-group-btn:not(:first-child) > .dropdown-toggle,
.input-group-btn:not(:last-child) > .btn:not(:first-child),
.input-group-btn:not(:last-child) > .btn-group:not(:first-child) > .btn {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}

.form-control + .input-group-addon:not(:first-child) {
  border-left: 0;
}

.input-group-btn {
  position: relative;
  font-size: 0;
  white-space: nowrap;
}

.input-group-btn > .btn {
  position: relative;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 0%;
      -ms-flex: 1 1 0%;
          flex: 1 1 0%;
}

.input-group-btn > .btn + .btn {
  margin-left: -1px;
}

.input-group-btn > .btn:focus, .input-group-btn > .btn:active, .input-group-btn > .btn:hover {
  z-index: 3;
}

.input-group-btn:not(:last-child) > .btn,
.input-group-btn:not(:last-child) > .btn-group {
  margin-right: -1px;
}

.input-group-btn:not(:first-child) > .btn,
.input-group-btn:not(:first-child) > .btn-group {
  z-index: 2;
  margin-left: -1px;
}

.input-group-btn:not(:first-child) > .btn:focus, .input-group-btn:not(:first-child) > .btn:active, .input-group-btn:not(:first-child) > .btn:hover,
.input-group-btn:not(:first-child) > .btn-group:focus,
.input-group-btn:not(:first-child) > .btn-group:active,
.input-group-btn:not(:first-child) > .btn-group:hover {
  z-index: 3;
}

.custom-control {
  position: relative;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  min-height: 1.5rem;
  padding-left: 1.5rem;
  margin-right: 1rem;
  cursor: pointer;
}

.custom-control-input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom-control-input:checked ~ .custom-control-indicator {
  color: #fff;
  background-color: #0275d8;
}

.custom-control-input:focus ~ .custom-control-indicator {
  -webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 3px #0275d8;
          box-shadow: 0 0 0 1px #fff, 0 0 0 3px #0275d8;
}

.custom-control-input:active ~ .custom-control-indicator {
  color: #fff;
  background-color: #8fcafe;
}

.custom-control-input:disabled ~ .custom-control-indicator {
  cursor: not-allowed;
  background-color: #eceeef;
}

.custom-control-input:disabled ~ .custom-control-description {
  color: #636c72;
  cursor: not-allowed;
}

.custom-control-indicator {
  position: absolute;
  top: 0.25rem;
  left: 0;
  display: block;
  width: 1rem;
  height: 1rem;
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  background-color: #ddd;
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-background-size: 50% 50%;
          background-size: 50% 50%;
}

.custom-checkbox .custom-control-indicator {
  border-radius: 0.25rem;
}

.custom-checkbox .custom-control-input:checked ~ .custom-control-indicator {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E");
}

.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-indicator {
  background-color: #0275d8;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E");
}

.custom-radio .custom-control-indicator {
  border-radius: 50%;
}

.custom-radio .custom-control-input:checked ~ .custom-control-indicator {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E");
}

.custom-controls-stacked {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
}

.custom-controls-stacked .custom-control {
  margin-bottom: 0.25rem;
}

.custom-controls-stacked .custom-control + .custom-control {
  margin-left: 0;
}

.custom-select {
  display: inline-block;
  max-width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  line-height: 1.25;
  color: #464a4c;
  vertical-align: middle;
  background: #fff url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right 0.75rem center;
  -webkit-background-size: 8px 10px;
          background-size: 8px 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  -moz-appearance: none;
  -webkit-appearance: none;
}

.custom-select:focus {
  border-color: #5cb3fd;
  outline: none;
}

.custom-select:focus::-ms-value {
  color: #464a4c;
  background-color: #fff;
}

.custom-select:disabled {
  color: #636c72;
  cursor: not-allowed;
  background-color: #eceeef;
}

.custom-select::-ms-expand {
  opacity: 0;
}

.custom-select-sm {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  font-size: 75%;
}

.custom-file {
  position: relative;
  display: inline-block;
  max-width: 100%;
  height: 2.5rem;
  margin-bottom: 0;
  cursor: pointer;
}

.custom-file-input {
  min-width: 14rem;
  max-width: 100%;
  height: 2.5rem;
  margin: 0;
  filter: alpha(opacity=0);
  opacity: 0;
}

.custom-file-control {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;
  height: 2.5rem;
  padding: 0.5rem 1rem;
  line-height: 1.5;
  color: #464a4c;
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}

.custom-file-control:lang(en)::after {
  content: "Choose file...";
}

.custom-file-control::before {
  position: absolute;
  top: -1px;
  right: -1px;
  bottom: -1px;
  z-index: 6;
  display: block;
  height: 2.5rem;
  padding: 0.5rem 1rem;
  line-height: 1.5;
  color: #464a4c;
  background-color: #eceeef;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0 0.25rem 0.25rem 0;
}

.custom-file-control:lang(en)::before {
  content: "Browse";
}

.nav {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.nav-link {
  display: block;
  padding: 0.5em 1em;
}

.nav-link:focus, .nav-link:hover {
  text-decoration: none;
}

.nav-link.disabled {
  color: #636c72;
  cursor: not-allowed;
}

.nav-tabs {
  border-bottom: 1px solid #ddd;
}

.nav-tabs .nav-item {
  margin-bottom: -1px;
}

.nav-tabs .nav-link {
  border: 1px solid transparent;
  border-top-right-radius: 0.25rem;
  border-top-left-radius: 0.25rem;
}

.nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {
  border-color: #eceeef #eceeef #ddd;
}

.nav-tabs .nav-link.disabled {
  color: #636c72;
  background-color: transparent;
  border-color: transparent;
}

.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #464a4c;
  background-color: #fff;
  border-color: #ddd #ddd #fff;
}

.nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}

.nav-pills .nav-link {
  border-radius: 0.25rem;
}

.nav-pills .nav-link.active,
.nav-pills .nav-item.show .nav-link {
  color: #fff;
  cursor: default;
  background-color: #0275d8;
}

.nav-fill .nav-item {
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  text-align: center;
}

.nav-justified .nav-item {
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 100%;
      -ms-flex: 1 1 100%;
          flex: 1 1 100%;
  text-align: center;
}

.tab-content > .tab-pane {
  display: none;
}

.tab-content > .active {
  display: block;
}

.navbar {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  padding: 0.5rem 1rem;
}

.navbar-brand {
  display: inline-block;
  padding-top: .25rem;
  padding-bottom: .25rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
}

.navbar-brand:focus, .navbar-brand:hover {
  text-decoration: none;
}

.navbar-nav {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.navbar-nav .nav-link {
  padding-right: 0;
  padding-left: 0;
}

.navbar-text {
  display: inline-block;
  padding-top: .425rem;
  padding-bottom: .425rem;
}

.navbar-toggler {
  -webkit-align-self: flex-start;
      -ms-flex-item-align: start;
          align-self: flex-start;
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}

.navbar-toggler:focus, .navbar-toggler:hover {
  text-decoration: none;
}

.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  content: "";
  background: no-repeat center center;
  -webkit-background-size: 100% 100%;
          background-size: 100% 100%;
}

.navbar-toggler-left {
  position: absolute;
  left: 1rem;
}

.navbar-toggler-right {
  position: absolute;
  right: 1rem;
}

@media (max-width: 575px) {
  .navbar-toggleable .navbar-nav .dropdown-menu {
    position: static;
    float: none;
  }
  .navbar-toggleable > .container {
    padding-right: 0;
    padding-left: 0;
  }
}

@media (min-width: 576px) {
  .navbar-toggleable {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
  }
  .navbar-toggleable .navbar-nav {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
        -ms-flex-direction: row;
            flex-direction: row;
  }
  .navbar-toggleable .navbar-nav .nav-link {
    padding-right: .5rem;
    padding-left: .5rem;
  }
  .navbar-toggleable > .container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
  }
  .navbar-toggleable .navbar-collapse {
    display: -webkit-box !important;
    display: -webkit-flex !important;
    display: -ms-flexbox !important;
    display: flex !important;
    width: 100%;
  }
  .navbar-toggleable .navbar-toggler {
    display: none;
  }
}

@media (max-width: 767px) {
  .navbar-toggleable-sm .navbar-nav .dropdown-menu {
    position: static;
    float: none;
  }
  .navbar-toggleable-sm > .container {
    padding-right: 0;
    padding-left: 0;
  }
}

@media (min-width: 768px) {
  .navbar-toggleable-sm {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
  }
  .navbar-toggleable-sm .navbar-nav {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
        -ms-flex-direction: row;
            flex-direction: row;
  }
  .navbar-toggleable-sm .navbar-nav .nav-link {
    padding-right: .5rem;
    padding-left: .5rem;
  }
  .navbar-toggleable-sm > .container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
  }
  .navbar-toggleable-sm .navbar-collapse {
    display: -webkit-box !important;
    display: -webkit-flex !important;
    display: -ms-flexbox !important;
    display: flex !important;
    width: 100%;
  }
  .navbar-toggleable-sm .navbar-toggler {
    display: none;
  }
}

@media (max-width: 991px) {
  .navbar-toggleable-md .navbar-nav .dropdown-menu {
    position: static;
    float: none;
  }
  .navbar-toggleable-md > .container {
    padding-right: 0;
    padding-left: 0;
  }
}

@media (min-width: 992px) {
  .navbar-toggleable-md {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
  }
  .navbar-toggleable-md .navbar-nav {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
        -ms-flex-direction: row;
            flex-direction: row;
  }
  .navbar-toggleable-md .navbar-nav .nav-link {
    padding-right: .5rem;
    padding-left: .5rem;
  }
  .navbar-toggleable-md > .container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
  }
  .navbar-toggleable-md .navbar-collapse {
    display: -webkit-box !important;
    display: -webkit-flex !important;
    display: -ms-flexbox !important;
    display: flex !important;
    width: 100%;
  }
  .navbar-toggleable-md .navbar-toggler {
    display: none;
  }
}

@media (max-width: 1199px) {
  .navbar-toggleable-lg .navbar-nav .dropdown-menu {
    position: static;
    float: none;
  }
  .navbar-toggleable-lg > .container {
    padding-right: 0;
    padding-left: 0;
  }
}

@media (min-width: 1200px) {
  .navbar-toggleable-lg {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
  }
  .navbar-toggleable-lg .navbar-nav {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
        -ms-flex-direction: row;
            flex-direction: row;
  }
  .navbar-toggleable-lg .navbar-nav .nav-link {
    padding-right: .5rem;
    padding-left: .5rem;
  }
  .navbar-toggleable-lg > .container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
  }
  .navbar-toggleable-lg .navbar-collapse {
    display: -webkit-box !important;
    display: -webkit-flex !important;
    display: -ms-flexbox !important;
    display: flex !important;
    width: 100%;
  }
  .navbar-toggleable-lg .navbar-toggler {
    display: none;
  }
}

.navbar-toggleable-xl {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-flex-wrap: nowrap;
      -ms-flex-wrap: nowrap;
          flex-wrap: nowrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
}

.navbar-toggleable-xl .navbar-nav .dropdown-menu {
  position: static;
  float: none;
}

.navbar-toggleable-xl > .container {
  padding-right: 0;
  padding-left: 0;
}

.navbar-toggleable-xl .navbar-nav {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
      -ms-flex-direction: row;
          flex-direction: row;
}

.navbar-toggleable-xl .navbar-nav .nav-link {
  padding-right: .5rem;
  padding-left: .5rem;
}

.navbar-toggleable-xl > .container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: nowrap;
      -ms-flex-wrap: nowrap;
          flex-wrap: nowrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
}

.navbar-toggleable-xl .navbar-collapse {
  display: -webkit-box !important;
  display: -webkit-flex !important;
  display: -ms-flexbox !important;
  display: flex !important;
  width: 100%;
}

.navbar-toggleable-xl .navbar-toggler {
  display: none;
}

.navbar-light .navbar-brand,
.navbar-light .navbar-toggler {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover,
.navbar-light .navbar-toggler:focus,
.navbar-light .navbar-toggler:hover {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-light .navbar-nav .nav-link {
  color: rgba(0, 0, 0, 0.5);
}

.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {
  color: rgba(0, 0, 0, 0.7);
}

.navbar-light .navbar-nav .nav-link.disabled {
  color: rgba(0, 0, 0, 0.3);
}

.navbar-light .navbar-nav .open > .nav-link,
.navbar-light .navbar-nav .active > .nav-link,
.navbar-light .navbar-nav .nav-link.open,
.navbar-light .navbar-nav .nav-link.active {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-light .navbar-toggler {
  border-color: rgba(0, 0, 0, 0.1);
}

.navbar-light .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}

.navbar-light .navbar-text {
  color: rgba(0, 0, 0, 0.5);
}

.navbar-inverse .navbar-brand,
.navbar-inverse .navbar-toggler {
  color: white;
}

.navbar-inverse .navbar-brand:focus, .navbar-inverse .navbar-brand:hover,
.navbar-inverse .navbar-toggler:focus,
.navbar-inverse .navbar-toggler:hover {
  color: white;
}

.navbar-inverse .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.5);
}

.navbar-inverse .navbar-nav .nav-link:focus, .navbar-inverse .navbar-nav .nav-link:hover {
  color: rgba(255, 255, 255, 0.75);
}

.navbar-inverse .navbar-nav .nav-link.disabled {
  color: rgba(255, 255, 255, 0.25);
}

.navbar-inverse .navbar-nav .open > .nav-link,
.navbar-inverse .navbar-nav .active > .nav-link,
.navbar-inverse .navbar-nav .nav-link.open,
.navbar-inverse .navbar-nav .nav-link.active {
  color: white;
}

.navbar-inverse .navbar-toggler {
  border-color: rgba(255, 255, 255, 0.1);
}

.navbar-inverse .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}

.navbar-inverse .navbar-text {
  color: rgba(255, 255, 255, 0.5);
}

.card {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.card-block {
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  padding: 1.25rem;
}

.card-title {
  margin-bottom: 0.75rem;
}

.card-subtitle {
  margin-top: -0.375rem;
  margin-bottom: 0;
}

.card-text:last-child {
  margin-bottom: 0;
}

.card-link:hover {
  text-decoration: none;
}

.card-link + .card-link {
  margin-left: 1.25rem;
}

.card > .list-group:first-child .list-group-item:first-child {
  border-top-right-radius: 0.25rem;
  border-top-left-radius: 0.25rem;
}

.card > .list-group:last-child .list-group-item:last-child {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.card-header {
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: #f7f7f9;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}

.card-header:first-child {
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
}

.card-footer {
  padding: 0.75rem 1.25rem;
  background-color: #f7f7f9;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}

.card-footer:last-child {
  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
}

.card-header-tabs {
  margin-right: -0.625rem;
  margin-bottom: -0.75rem;
  margin-left: -0.625rem;
  border-bottom: 0;
}

.card-header-pills {
  margin-right: -0.625rem;
  margin-left: -0.625rem;
}

.card-primary {
  background-color: #0275d8;
  border-color: #0275d8;
}

.card-primary .card-header,
.card-primary .card-footer {
  background-color: transparent;
}

.card-success {
  background-color: #5cb85c;
  border-color: #5cb85c;
}

.card-success .card-header,
.card-success .card-footer {
  background-color: transparent;
}

.card-info {
  background-color: #5bc0de;
  border-color: #5bc0de;
}

.card-info .card-header,
.card-info .card-footer {
  background-color: transparent;
}

.card-warning {
  background-color: #f0ad4e;
  border-color: #f0ad4e;
}

.card-warning .card-header,
.card-warning .card-footer {
  background-color: transparent;
}

.card-danger {
  background-color: #d9534f;
  border-color: #d9534f;
}

.card-danger .card-header,
.card-danger .card-footer {
  background-color: transparent;
}

.card-outline-primary {
  background-color: transparent;
  border-color: #0275d8;
}

.card-outline-secondary {
  background-color: transparent;
  border-color: #ccc;
}

.card-outline-info {
  background-color: transparent;
  border-color: #5bc0de;
}

.card-outline-success {
  background-color: transparent;
  border-color: #5cb85c;
}

.card-outline-warning {
  background-color: transparent;
  border-color: #f0ad4e;
}

.card-outline-danger {
  background-color: transparent;
  border-color: #d9534f;
}

.card-inverse {
  color: rgba(255, 255, 255, 0.65);
}

.card-inverse .card-header,
.card-inverse .card-footer {
  background-color: transparent;
  border-color: rgba(255, 255, 255, 0.2);
}

.card-inverse .card-header,
.card-inverse .card-footer,
.card-inverse .card-title,
.card-inverse .card-blockquote {
  color: #fff;
}

.card-inverse .card-link,
.card-inverse .card-text,
.card-inverse .card-subtitle,
.card-inverse .card-blockquote .blockquote-footer {
  color: rgba(255, 255, 255, 0.65);
}

.card-inverse .card-link:focus, .card-inverse .card-link:hover {
  color: #fff;
}

.card-blockquote {
  padding: 0;
  margin-bottom: 0;
  border-left: 0;
}

.card-img {
  border-radius: calc(0.25rem - 1px);
}

.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.25rem;
}

.card-img-top {
  border-top-right-radius: calc(0.25rem - 1px);
  border-top-left-radius: calc(0.25rem - 1px);
}

.card-img-bottom {
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}

@media (min-width: 576px) {
  .card-deck {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: row wrap;
        -ms-flex-flow: row wrap;
            flex-flow: row wrap;
  }
  .card-deck .card {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1 0 0%;
        -ms-flex: 1 0 0%;
            flex: 1 0 0%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
        -ms-flex-direction: column;
            flex-direction: column;
  }
  .card-deck .card:not(:first-child) {
    margin-left: 15px;
  }
  .card-deck .card:not(:last-child) {
    margin-right: 15px;
  }
}

@media (min-width: 576px) {
  .card-group {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: row wrap;
        -ms-flex-flow: row wrap;
            flex-flow: row wrap;
  }
  .card-group .card {
    -webkit-box-flex: 1;
    -webkit-flex: 1 0 0%;
        -ms-flex: 1 0 0%;
            flex: 1 0 0%;
  }
  .card-group .card + .card {
    margin-left: 0;
    border-left: 0;
  }
  .card-group .card:first-child {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  .card-group .card:first-child .card-img-top {
    border-top-right-radius: 0;
  }
  .card-group .card:first-child .card-img-bottom {
    border-bottom-right-radius: 0;
  }
  .card-group .card:last-child {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
  .card-group .card:last-child .card-img-top {
    border-top-left-radius: 0;
  }
  .card-group .card:last-child .card-img-bottom {
    border-bottom-left-radius: 0;
  }
  .card-group .card:not(:first-child):not(:last-child) {
    border-radius: 0;
  }
  .card-group .card:not(:first-child):not(:last-child) .card-img-top,
  .card-group .card:not(:first-child):not(:last-child) .card-img-bottom {
    border-radius: 0;
  }
}

@media (min-width: 576px) {
  .card-columns {
    -webkit-column-count: 3;
       -moz-column-count: 3;
            column-count: 3;
    -webkit-column-gap: 1.25rem;
       -moz-column-gap: 1.25rem;
            column-gap: 1.25rem;
  }
  .card-columns .card {
    display: inline-block;
    width: 100%;
    margin-bottom: 0.75rem;
  }
}

.breadcrumb {
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  list-style: none;
  background-color: #eceeef;
  border-radius: 0.25rem;
}

.breadcrumb::after {
  display: block;
  content: "";
  clear: both;
}

.breadcrumb-item {
  float: left;
}

.breadcrumb-item + .breadcrumb-item::before {
  display: inline-block;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  color: #636c72;
  content: "/";
}

.breadcrumb-item + .breadcrumb-item:hover::before {
  text-decoration: underline;
}

.breadcrumb-item + .breadcrumb-item:hover::before {
  text-decoration: none;
}

.breadcrumb-item.active {
  color: #636c72;
}

.pagination {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: 0.25rem;
}

.page-item:first-child .page-link {
  margin-left: 0;
  border-bottom-left-radius: 0.25rem;
  border-top-left-radius: 0.25rem;
}

.page-item:last-child .page-link {
  border-bottom-right-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.page-item.active .page-link {
  z-index: 2;
  color: #fff;
  background-color: #0275d8;
  border-color: #0275d8;
}

.page-item.disabled .page-link {
  color: #636c72;
  pointer-events: none;
  cursor: not-allowed;
  background-color: #fff;
  border-color: #ddd;
}

.page-link {
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #0275d8;
  background-color: #fff;
  border: 1px solid #ddd;
}

.page-link:focus, .page-link:hover {
  color: #014c8c;
  text-decoration: none;
  background-color: #eceeef;
  border-color: #ddd;
}

.pagination-lg .page-link {
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
}

.pagination-lg .page-item:first-child .page-link {
  border-bottom-left-radius: 0.3rem;
  border-top-left-radius: 0.3rem;
}

.pagination-lg .page-item:last-child .page-link {
  border-bottom-right-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
}

.pagination-sm .page-link {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}

.pagination-sm .page-item:first-child .page-link {
  border-bottom-left-radius: 0.2rem;
  border-top-left-radius: 0.2rem;
}

.pagination-sm .page-item:last-child .page-link {
  border-bottom-right-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
}

.badge {
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
}

.badge:empty {
  display: none;
}

.btn .badge {
  position: relative;
  top: -1px;
}

a.badge:focus, a.badge:hover {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}

.badge-pill {
  padding-right: 0.6em;
  padding-left: 0.6em;
  border-radius: 10rem;
}

.badge-default {
  background-color: #636c72;
}

.badge-default[href]:focus, .badge-default[href]:hover {
  background-color: #4b5257;
}

.badge-primary {
  background-color: #0275d8;
}

.badge-primary[href]:focus, .badge-primary[href]:hover {
  background-color: #025aa5;
}

.badge-success {
  background-color: #5cb85c;
}

.badge-success[href]:focus, .badge-success[href]:hover {
  background-color: #449d44;
}

.badge-info {
  background-color: #5bc0de;
}

.badge-info[href]:focus, .badge-info[href]:hover {
  background-color: #31b0d5;
}

.badge-warning {
  background-color: #f0ad4e;
}

.badge-warning[href]:focus, .badge-warning[href]:hover {
  background-color: #ec971f;
}

.badge-danger {
  background-color: #d9534f;
}

.badge-danger[href]:focus, .badge-danger[href]:hover {
  background-color: #c9302c;
}

.jumbotron {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #eceeef;
  border-radius: 0.3rem;
}

@media (min-width: 576px) {
  .jumbotron {
    padding: 4rem 2rem;
  }
}

.jumbotron-hr {
  border-top-color: #d0d5d8;
}

.jumbotron-fluid {
  padding-right: 0;
  padding-left: 0;
  border-radius: 0;
}

.alert {
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}

.alert-heading {
  color: inherit;
}

.alert-link {
  font-weight: bold;
}

.alert-dismissible .close {
  position: relative;
  top: -0.75rem;
  right: -1.25rem;
  padding: 0.75rem 1.25rem;
  color: inherit;
}

.alert-success {
  background-color: #dff0d8;
  border-color: #d0e9c6;
  color: #3c763d;
}

.alert-success hr {
  border-top-color: #c1e2b3;
}

.alert-success .alert-link {
  color: #2b542c;
}

.alert-info {
  background-color: #d9edf7;
  border-color: #bcdff1;
  color: #31708f;
}

.alert-info hr {
  border-top-color: #a6d5ec;
}

.alert-info .alert-link {
  color: #245269;
}

.alert-warning {
  background-color: #fcf8e3;
  border-color: #faf2cc;
  color: #8a6d3b;
}

.alert-warning hr {
  border-top-color: #f7ecb5;
}

.alert-warning .alert-link {
  color: #66512c;
}

.alert-danger {
  background-color: #f2dede;
  border-color: #ebcccc;
  color: #a94442;
}

.alert-danger hr {
  border-top-color: #e4b9b9;
}

.alert-danger .alert-link {
  color: #843534;
}

@-webkit-keyframes progress-bar-stripes {
  from {
    background-position: 1rem 0;
  }
  to {
    background-position: 0 0;
  }
}

@-o-keyframes progress-bar-stripes {
  from {
    background-position: 1rem 0;
  }
  to {
    background-position: 0 0;
  }
}

@keyframes progress-bar-stripes {
  from {
    background-position: 1rem 0;
  }
  to {
    background-position: 0 0;
  }
}

.progress {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  font-size: 0.75rem;
  line-height: 1rem;
  text-align: center;
  background-color: #eceeef;
  border-radius: 0.25rem;
}

.progress-bar {
  height: 1rem;
  color: #fff;
  background-color: #0275d8;
}

.progress-bar-striped {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  -webkit-background-size: 1rem 1rem;
          background-size: 1rem 1rem;
}

.progress-bar-animated {
  -webkit-animation: progress-bar-stripes 1s linear infinite;
       -o-animation: progress-bar-stripes 1s linear infinite;
          animation: progress-bar-stripes 1s linear infinite;
}

.media {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
      -ms-flex-align: start;
          align-items: flex-start;
}

.media-body {
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 0%;
      -ms-flex: 1 1 0%;
          flex: 1 1 0%;
}

.list-group {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
}

.list-group-item-action {
  width: 100%;
  color: #464a4c;
  text-align: inherit;
}

.list-group-item-action .list-group-item-heading {
  color: #292b2c;
}

.list-group-item-action:focus, .list-group-item-action:hover {
  color: #464a4c;
  text-decoration: none;
  background-color: #f7f7f9;
}

.list-group-item-action:active {
  color: #292b2c;
  background-color: #eceeef;
}

.list-group-item {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-flow: row wrap;
      -ms-flex-flow: row wrap;
          flex-flow: row wrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}

.list-group-item:first-child {
  border-top-right-radius: 0.25rem;
  border-top-left-radius: 0.25rem;
}

.list-group-item:last-child {
  margin-bottom: 0;
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.list-group-item:focus, .list-group-item:hover {
  text-decoration: none;
}

.list-group-item.disabled, .list-group-item:disabled {
  color: #636c72;
  cursor: not-allowed;
  background-color: #fff;
}

.list-group-item.disabled .list-group-item-heading, .list-group-item:disabled .list-group-item-heading {
  color: inherit;
}

.list-group-item.disabled .list-group-item-text, .list-group-item:disabled .list-group-item-text {
  color: #636c72;
}

.list-group-item.active {
  z-index: 2;
  color: #fff;
  background-color: #0275d8;
  border-color: #0275d8;
}

.list-group-item.active .list-group-item-heading,
.list-group-item.active .list-group-item-heading > small,
.list-group-item.active .list-group-item-heading > .small {
  color: inherit;
}

.list-group-item.active .list-group-item-text {
  color: #daeeff;
}

.list-group-flush .list-group-item {
  border-right: 0;
  border-left: 0;
  border-radius: 0;
}

.list-group-flush:first-child .list-group-item:first-child {
  border-top: 0;
}

.list-group-flush:last-child .list-group-item:last-child {
  border-bottom: 0;
}

.list-group-item-success {
  color: #3c763d;
  background-color: #dff0d8;
}

a.list-group-item-success,
button.list-group-item-success {
  color: #3c763d;
}

a.list-group-item-success .list-group-item-heading,
button.list-group-item-success .list-group-item-heading {
  color: inherit;
}

a.list-group-item-success:focus, a.list-group-item-success:hover,
button.list-group-item-success:focus,
button.list-group-item-success:hover {
  color: #3c763d;
  background-color: #d0e9c6;
}

a.list-group-item-success.active,
button.list-group-item-success.active {
  color: #fff;
  background-color: #3c763d;
  border-color: #3c763d;
}

.list-group-item-info {
  color: #31708f;
  background-color: #d9edf7;
}

a.list-group-item-info,
button.list-group-item-info {
  color: #31708f;
}

a.list-group-item-info .list-group-item-heading,
button.list-group-item-info .list-group-item-heading {
  color: inherit;
}

a.list-group-item-info:focus, a.list-group-item-info:hover,
button.list-group-item-info:focus,
button.list-group-item-info:hover {
  color: #31708f;
  background-color: #c4e3f3;
}

a.list-group-item-info.active,
button.list-group-item-info.active {
  color: #fff;
  background-color: #31708f;
  border-color: #31708f;
}

.list-group-item-warning {
  color: #8a6d3b;
  background-color: #fcf8e3;
}

a.list-group-item-warning,
button.list-group-item-warning {
  color: #8a6d3b;
}

a.list-group-item-warning .list-group-item-heading,
button.list-group-item-warning .list-group-item-heading {
  color: inherit;
}

a.list-group-item-warning:focus, a.list-group-item-warning:hover,
button.list-group-item-warning:focus,
button.list-group-item-warning:hover {
  color: #8a6d3b;
  background-color: #faf2cc;
}

a.list-group-item-warning.active,
button.list-group-item-warning.active {
  color: #fff;
  background-color: #8a6d3b;
  border-color: #8a6d3b;
}

.list-group-item-danger {
  color: #a94442;
  background-color: #f2dede;
}

a.list-group-item-danger,
button.list-group-item-danger {
  color: #a94442;
}

a.list-group-item-danger .list-group-item-heading,
button.list-group-item-danger .list-group-item-heading {
  color: inherit;
}

a.list-group-item-danger:focus, a.list-group-item-danger:hover,
button.list-group-item-danger:focus,
button.list-group-item-danger:hover {
  color: #a94442;
  background-color: #ebcccc;
}

a.list-group-item-danger.active,
button.list-group-item-danger.active {
  color: #fff;
  background-color: #a94442;
  border-color: #a94442;
}

.embed-responsive {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
}

.embed-responsive::before {
  display: block;
  content: "";
}

.embed-responsive .embed-responsive-item,
.embed-responsive iframe,
.embed-responsive embed,
.embed-responsive object,
.embed-responsive video {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.embed-responsive-21by9::before {
  padding-top: 42.857143%;
}

.embed-responsive-16by9::before {
  padding-top: 56.25%;
}

.embed-responsive-4by3::before {
  padding-top: 75%;
}

.embed-responsive-1by1::before {
  padding-top: 100%;
}

.close {
  float: right;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: .5;
}

.close:focus, .close:hover {
  color: #000;
  text-decoration: none;
  cursor: pointer;
  opacity: .75;
}

button.close {
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
}

.modal-open {
  overflow: hidden;
}

.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: none;
  overflow: hidden;
  outline: 0;
}

.modal.fade .modal-dialog {
  -webkit-transition: -webkit-transform 0.3s ease-out;
  transition: -webkit-transform 0.3s ease-out;
  -o-transition: -o-transform 0.3s ease-out;
  transition: transform 0.3s ease-out;
  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out, -o-transform 0.3s ease-out;
  -webkit-transform: translate(0, -25%);
       -o-transform: translate(0, -25%);
          transform: translate(0, -25%);
}

.modal.show .modal-dialog {
  -webkit-transform: translate(0, 0);
       -o-transform: translate(0, 0);
          transform: translate(0, 0);
}

.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: 10px;
}

.modal-content {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  background-color: #fff;
  -webkit-background-clip: padding-box;
          background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: #000;
}

.modal-backdrop.fade {
  opacity: 0;
}

.modal-backdrop.show {
  opacity: 0.5;
}

.modal-header {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #eceeef;
}

.modal-title {
  margin-bottom: 0;
  line-height: 1.5;
}

.modal-body {
  position: relative;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  padding: 15px;
}

.modal-footer {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
          justify-content: flex-end;
  padding: 15px;
  border-top: 1px solid #eceeef;
}

.modal-footer > :not(:first-child) {
  margin-left: .25rem;
}

.modal-footer > :not(:last-child) {
  margin-right: .25rem;
}

.modal-scrollbar-measure {
  position: absolute;
  top: -9999px;
  width: 50px;
  height: 50px;
  overflow: scroll;
}

@media (min-width: 576px) {
  .modal-dialog {
    max-width: 500px;
    margin: 30px auto;
  }
  .modal-sm {
    max-width: 300px;
  }
}

@media (min-width: 992px) {
  .modal-lg {
    max-width: 800px;
  }
}

.tooltip {
  position: absolute;
  z-index: 1070;
  display: block;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-break: auto;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  font-size: 0.875rem;
  word-wrap: break-word;
  opacity: 0;
}

.tooltip.show {
  opacity: 0.9;
}

.tooltip.tooltip-top, .tooltip.bs-tether-element-attached-bottom {
  padding: 5px 0;
  margin-top: -3px;
}

.tooltip.tooltip-top .tooltip-inner::before, .tooltip.bs-tether-element-attached-bottom .tooltip-inner::before {
  bottom: 0;
  left: 50%;
  margin-left: -5px;
  content: "";
  border-width: 5px 5px 0;
  border-top-color: #000;
}

.tooltip.tooltip-right, .tooltip.bs-tether-element-attached-left {
  padding: 0 5px;
  margin-left: 3px;
}

.tooltip.tooltip-right .tooltip-inner::before, .tooltip.bs-tether-element-attached-left .tooltip-inner::before {
  top: 50%;
  left: 0;
  margin-top: -5px;
  content: "";
  border-width: 5px 5px 5px 0;
  border-right-color: #000;
}

.tooltip.tooltip-bottom, .tooltip.bs-tether-element-attached-top {
  padding: 5px 0;
  margin-top: 3px;
}

.tooltip.tooltip-bottom .tooltip-inner::before, .tooltip.bs-tether-element-attached-top .tooltip-inner::before {
  top: 0;
  left: 50%;
  margin-left: -5px;
  content: "";
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}

.tooltip.tooltip-left, .tooltip.bs-tether-element-attached-right {
  padding: 0 5px;
  margin-left: -3px;
}

.tooltip.tooltip-left .tooltip-inner::before, .tooltip.bs-tether-element-attached-right .tooltip-inner::before {
  top: 50%;
  right: 0;
  margin-top: -5px;
  content: "";
  border-width: 5px 0 5px 5px;
  border-left-color: #000;
}

.tooltip-inner {
  max-width: 200px;
  padding: 3px 8px;
  color: #fff;
  text-align: center;
  background-color: #000;
  border-radius: 0.25rem;
}

.tooltip-inner::before {
  position: absolute;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}

.popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1060;
  display: block;
  max-width: 276px;
  padding: 1px;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-break: auto;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  font-size: 0.875rem;
  word-wrap: break-word;
  background-color: #fff;
  -webkit-background-clip: padding-box;
          background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
}

.popover.popover-top, .popover.bs-tether-element-attached-bottom {
  margin-top: -10px;
}

.popover.popover-top::before, .popover.popover-top::after, .popover.bs-tether-element-attached-bottom::before, .popover.bs-tether-element-attached-bottom::after {
  left: 50%;
  border-bottom-width: 0;
}

.popover.popover-top::before, .popover.bs-tether-element-attached-bottom::before {
  bottom: -11px;
  margin-left: -11px;
  border-top-color: rgba(0, 0, 0, 0.25);
}

.popover.popover-top::after, .popover.bs-tether-element-attached-bottom::after {
  bottom: -10px;
  margin-left: -10px;
  border-top-color: #fff;
}

.popover.popover-right, .popover.bs-tether-element-attached-left {
  margin-left: 10px;
}

.popover.popover-right::before, .popover.popover-right::after, .popover.bs-tether-element-attached-left::before, .popover.bs-tether-element-attached-left::after {
  top: 50%;
  border-left-width: 0;
}

.popover.popover-right::before, .popover.bs-tether-element-attached-left::before {
  left: -11px;
  margin-top: -11px;
  border-right-color: rgba(0, 0, 0, 0.25);
}

.popover.popover-right::after, .popover.bs-tether-element-attached-left::after {
  left: -10px;
  margin-top: -10px;
  border-right-color: #fff;
}

.popover.popover-bottom, .popover.bs-tether-element-attached-top {
  margin-top: 10px;
}

.popover.popover-bottom::before, .popover.popover-bottom::after, .popover.bs-tether-element-attached-top::before, .popover.bs-tether-element-attached-top::after {
  left: 50%;
  border-top-width: 0;
}

.popover.popover-bottom::before, .popover.bs-tether-element-attached-top::before {
  top: -11px;
  margin-left: -11px;
  border-bottom-color: rgba(0, 0, 0, 0.25);
}

.popover.popover-bottom::after, .popover.bs-tether-element-attached-top::after {
  top: -10px;
  margin-left: -10px;
  border-bottom-color: #f7f7f7;
}

.popover.popover-bottom .popover-title::before, .popover.bs-tether-element-attached-top .popover-title::before {
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  width: 20px;
  margin-left: -10px;
  content: "";
  border-bottom: 1px solid #f7f7f7;
}

.popover.popover-left, .popover.bs-tether-element-attached-right {
  margin-left: -10px;
}

.popover.popover-left::before, .popover.popover-left::after, .popover.bs-tether-element-attached-right::before, .popover.bs-tether-element-attached-right::after {
  top: 50%;
  border-right-width: 0;
}

.popover.popover-left::before, .popover.bs-tether-element-attached-right::before {
  right: -11px;
  margin-top: -11px;
  border-left-color: rgba(0, 0, 0, 0.25);
}

.popover.popover-left::after, .popover.bs-tether-element-attached-right::after {
  right: -10px;
  margin-top: -10px;
  border-left-color: #fff;
}

.popover-title {
  padding: 8px 14px;
  margin-bottom: 0;
  font-size: 1rem;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ebebeb;
  border-top-right-radius: calc(0.3rem - 1px);
  border-top-left-radius: calc(0.3rem - 1px);
}

.popover-title:empty {
  display: none;
}

.popover-content {
  padding: 9px 14px;
}

.popover::before,
.popover::after {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}

.popover::before {
  content: "";
  border-width: 11px;
}

.popover::after {
  content: "";
  border-width: 10px;
}

.carousel {
  position: relative;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-item {
  position: relative;
  display: none;
  width: 100%;
}

@media (-webkit-transform-3d) {
  .carousel-item {
    -webkit-transition: -webkit-transform 0.6s ease-in-out;
    transition: -webkit-transform 0.6s ease-in-out;
    -o-transition: -o-transform 0.6s ease-in-out;
    transition: transform 0.6s ease-in-out;
    transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out, -o-transform 0.6s ease-in-out;
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
    -webkit-perspective: 1000px;
            perspective: 1000px;
  }
}

@supports ((-webkit-transform: translate3d(0, 0, 0)) or (transform: translate3d(0, 0, 0))) {
  .carousel-item {
    -webkit-transition: -webkit-transform 0.6s ease-in-out;
    transition: -webkit-transform 0.6s ease-in-out;
    -o-transition: -o-transform 0.6s ease-in-out;
    transition: transform 0.6s ease-in-out;
    transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out, -o-transform 0.6s ease-in-out;
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
    -webkit-perspective: 1000px;
            perspective: 1000px;
  }
}

.carousel-item.active,
.carousel-item-next,
.carousel-item-prev {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.carousel-item-next,
.carousel-item-prev {
  position: absolute;
  top: 0;
}

@media (-webkit-transform-3d) {
  .carousel-item-next.carousel-item-left,
  .carousel-item-prev.carousel-item-right {
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
  }
  .carousel-item-next,
  .active.carousel-item-right {
    -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
  }
  .carousel-item-prev,
  .active.carousel-item-left {
    -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
  }
}

@supports ((-webkit-transform: translate3d(0, 0, 0)) or (transform: translate3d(0, 0, 0))) {
  .carousel-item-next.carousel-item-left,
  .carousel-item-prev.carousel-item-right {
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
  }
  .carousel-item-next,
  .active.carousel-item-right {
    -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
  }
  .carousel-item-prev,
  .active.carousel-item-left {
    -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
  }
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 0;
  bottom: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  width: 15%;
  color: #fff;
  text-align: center;
  opacity: 0.5;
}

.carousel-control-prev:focus, .carousel-control-prev:hover,
.carousel-control-next:focus,
.carousel-control-next:hover {
  color: #fff;
  text-decoration: none;
  outline: 0;
  opacity: .9;
}

.carousel-control-prev {
  left: 0;
}

.carousel-control-next {
  right: 0;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: transparent no-repeat center center;
  -webkit-background-size: 100% 100%;
          background-size: 100% 100%;
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M4 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M1.5 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
}

.carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 10px;
  left: 0;
  z-index: 15;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  padding-left: 0;
  margin-right: 15%;
  margin-left: 15%;
  list-style: none;
}

.carousel-indicators li {
  position: relative;
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 auto;
      -ms-flex: 1 0 auto;
          flex: 1 0 auto;
  max-width: 30px;
  height: 3px;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.5);
}

.carousel-indicators li::before {
  position: absolute;
  top: -10px;
  left: 0;
  display: inline-block;
  width: 100%;
  height: 10px;
  content: "";
}

.carousel-indicators li::after {
  position: absolute;
  bottom: -10px;
  left: 0;
  display: inline-block;
  width: 100%;
  height: 10px;
  content: "";
}

.carousel-indicators .active {
  background-color: #fff;
}

.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 20px;
  left: 15%;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center;
}

.align-baseline {
  vertical-align: baseline !important;
}

.align-top {
  vertical-align: top !important;
}

.align-middle {
  vertical-align: middle !important;
}

.align-bottom {
  vertical-align: bottom !important;
}

.align-text-bottom {
  vertical-align: text-bottom !important;
}

.align-text-top {
  vertical-align: text-top !important;
}

.bg-faded {
  background-color: #f7f7f7;
}

.bg-primary {
  background-color: #0275d8 !important;
}

a.bg-primary:focus, a.bg-primary:hover {
  background-color: #025aa5 !important;
}

.bg-success {
  background-color: #5cb85c !important;
}

a.bg-success:focus, a.bg-success:hover {
  background-color: #449d44 !important;
}

.bg-info {
  background-color: #5bc0de !important;
}

a.bg-info:focus, a.bg-info:hover {
  background-color: #31b0d5 !important;
}

.bg-warning {
  background-color: #f0ad4e !important;
}

a.bg-warning:focus, a.bg-warning:hover {
  background-color: #ec971f !important;
}

.bg-danger {
  background-color: #d9534f !important;
}

a.bg-danger:focus, a.bg-danger:hover {
  background-color: #c9302c !important;
}

.bg-inverse {
  background-color: #292b2c !important;
}

a.bg-inverse:focus, a.bg-inverse:hover {
  background-color: #101112 !important;
}

.border-0 {
  border: 0 !important;
}

.border-top-0 {
  border-top: 0 !important;
}

.border-right-0 {
  border-right: 0 !important;
}

.border-bottom-0 {
  border-bottom: 0 !important;
}

.border-left-0 {
  border-left: 0 !important;
}

.rounded {
  border-radius: 0.25rem;
}

.rounded-top {
  border-top-right-radius: 0.25rem;
  border-top-left-radius: 0.25rem;
}

.rounded-right {
  border-bottom-right-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.rounded-bottom {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.rounded-left {
  border-bottom-left-radius: 0.25rem;
  border-top-left-radius: 0.25rem;
}

.rounded-circle {
  border-radius: 50%;
}

.rounded-0 {
  border-radius: 0;
}

.clearfix::after {
  display: block;
  content: "";
  clear: both;
}

.d-none {
  display: none !important;
}

.d-inline {
  display: inline !important;
}

.d-inline-block {
  display: inline-block !important;
}

.d-block {
  display: block !important;
}

.d-table {
  display: table !important;
}

.d-table-cell {
  display: table-cell !important;
}

.d-flex {
  display: -webkit-box !important;
  display: -webkit-flex !important;
  display: -ms-flexbox !important;
  display: flex !important;
}

.d-inline-flex {
  display: -webkit-inline-box !important;
  display: -webkit-inline-flex !important;
  display: -ms-inline-flexbox !important;
  display: inline-flex !important;
}

@media (min-width: 576px) {
  .d-sm-none {
    display: none !important;
  }
  .d-sm-inline {
    display: inline !important;
  }
  .d-sm-inline-block {
    display: inline-block !important;
  }
  .d-sm-block {
    display: block !important;
  }
  .d-sm-table {
    display: table !important;
  }
  .d-sm-table-cell {
    display: table-cell !important;
  }
  .d-sm-flex {
    display: -webkit-box !important;
    display: -webkit-flex !important;
    display: -ms-flexbox !important;
    display: flex !important;
  }
  .d-sm-inline-flex {
    display: -webkit-inline-box !important;
    display: -webkit-inline-flex !important;
    display: -ms-inline-flexbox !important;
    display: inline-flex !important;
  }
}

@media (min-width: 768px) {
  .d-md-none {
    display: none !important;
  }
  .d-md-inline {
    display: inline !important;
  }
  .d-md-inline-block {
    display: inline-block !important;
  }
  .d-md-block {
    display: block !important;
  }
  .d-md-table {
    display: table !important;
  }
  .d-md-table-cell {
    display: table-cell !important;
  }
  .d-md-flex {
    display: -webkit-box !important;
    display: -webkit-flex !important;
    display: -ms-flexbox !important;
    display: flex !important;
  }
  .d-md-inline-flex {
    display: -webkit-inline-box !important;
    display: -webkit-inline-flex !important;
    display: -ms-inline-flexbox !important;
    display: inline-flex !important;
  }
}

@media (min-width: 992px) {
  .d-lg-none {
    display: none !important;
  }
  .d-lg-inline {
    display: inline !important;
  }
  .d-lg-inline-block {
    display: inline-block !important;
  }
  .d-lg-block {
    display: block !important;
  }
  .d-lg-table {
    display: table !important;
  }
  .d-lg-table-cell {
    display: table-cell !important;
  }
  .d-lg-flex {
    display: -webkit-box !important;
    display: -webkit-flex !important;
    display: -ms-flexbox !important;
    display: flex !important;
  }
  .d-lg-inline-flex {
    display: -webkit-inline-box !important;
    display: -webkit-inline-flex !important;
    display: -ms-inline-flexbox !important;
    display: inline-flex !important;
  }
}

@media (min-width: 1200px) {
  .d-xl-none {
    display: none !important;
  }
  .d-xl-inline {
    display: inline !important;
  }
  .d-xl-inline-block {
    display: inline-block !important;
  }
  .d-xl-block {
    display: block !important;
  }
  .d-xl-table {
    display: table !important;
  }
  .d-xl-table-cell {
    display: table-cell !important;
  }
  .d-xl-flex {
    display: -webkit-box !important;
    display: -webkit-flex !important;
    display: -ms-flexbox !important;
    display: flex !important;
  }
  .d-xl-inline-flex {
    display: -webkit-inline-box !important;
    display: -webkit-inline-flex !important;
    display: -ms-inline-flexbox !important;
    display: inline-flex !important;
  }
}

.flex-first {
  -webkit-box-ordinal-group: 0;
  -webkit-order: -1;
      -ms-flex-order: -1;
          order: -1;
}

.flex-last {
  -webkit-box-ordinal-group: 2;
  -webkit-order: 1;
      -ms-flex-order: 1;
          order: 1;
}

.flex-unordered {
  -webkit-box-ordinal-group: 1;
  -webkit-order: 0;
      -ms-flex-order: 0;
          order: 0;
}

.flex-row {
  -webkit-box-orient: horizontal !important;
  -webkit-box-direction: normal !important;
  -webkit-flex-direction: row !important;
      -ms-flex-direction: row !important;
          flex-direction: row !important;
}

.flex-column {
  -webkit-box-orient: vertical !important;
  -webkit-box-direction: normal !important;
  -webkit-flex-direction: column !important;
      -ms-flex-direction: column !important;
          flex-direction: column !important;
}

.flex-row-reverse {
  -webkit-box-orient: horizontal !important;
  -webkit-box-direction: reverse !important;
  -webkit-flex-direction: row-reverse !important;
      -ms-flex-direction: row-reverse !important;
          flex-direction: row-reverse !important;
}

.flex-column-reverse {
  -webkit-box-orient: vertical !important;
  -webkit-box-direction: reverse !important;
  -webkit-flex-direction: column-reverse !important;
      -ms-flex-direction: column-reverse !important;
          flex-direction: column-reverse !important;
}

.flex-wrap {
  -webkit-flex-wrap: wrap !important;
      -ms-flex-wrap: wrap !important;
          flex-wrap: wrap !important;
}

.flex-nowrap {
  -webkit-flex-wrap: nowrap !important;
      -ms-flex-wrap: nowrap !important;
          flex-wrap: nowrap !important;
}

.flex-wrap-reverse {
  -webkit-flex-wrap: wrap-reverse !important;
      -ms-flex-wrap: wrap-reverse !important;
          flex-wrap: wrap-reverse !important;
}

.justify-content-start {
  -webkit-box-pack: start !important;
  -webkit-justify-content: flex-start !important;
      -ms-flex-pack: start !important;
          justify-content: flex-start !important;
}

.justify-content-end {
  -webkit-box-pack: end !important;
  -webkit-justify-content: flex-end !important;
      -ms-flex-pack: end !important;
          justify-content: flex-end !important;
}

.justify-content-center {
  -webkit-box-pack: center !important;
  -webkit-justify-content: center !important;
      -ms-flex-pack: center !important;
          justify-content: center !important;
}

.justify-content-between {
  -webkit-box-pack: justify !important;
  -webkit-justify-content: space-between !important;
      -ms-flex-pack: justify !important;
          justify-content: space-between !important;
}

.justify-content-around {
  -webkit-justify-content: space-around !important;
      -ms-flex-pack: distribute !important;
          justify-content: space-around !important;
}

.align-items-start {
  -webkit-box-align: start !important;
  -webkit-align-items: flex-start !important;
      -ms-flex-align: start !important;
          align-items: flex-start !important;
}

.align-items-end {
  -webkit-box-align: end !important;
  -webkit-align-items: flex-end !important;
      -ms-flex-align: end !important;
          align-items: flex-end !important;
}

.align-items-center {
  -webkit-box-align: center !important;
  -webkit-align-items: center !important;
      -ms-flex-align: center !important;
          align-items: center !important;
}

.align-items-baseline {
  -webkit-box-align: baseline !important;
  -webkit-align-items: baseline !important;
      -ms-flex-align: baseline !important;
          align-items: baseline !important;
}

.align-items-stretch {
  -webkit-box-align: stretch !important;
  -webkit-align-items: stretch !important;
      -ms-flex-align: stretch !important;
          align-items: stretch !important;
}

.align-content-start {
  -webkit-align-content: flex-start !important;
      -ms-flex-line-pack: start !important;
          align-content: flex-start !important;
}

.align-content-end {
  -webkit-align-content: flex-end !important;
      -ms-flex-line-pack: end !important;
          align-content: flex-end !important;
}

.align-content-center {
  -webkit-align-content: center !important;
      -ms-flex-line-pack: center !important;
          align-content: center !important;
}

.align-content-between {
  -webkit-align-content: space-between !important;
      -ms-flex-line-pack: justify !important;
          align-content: space-between !important;
}

.align-content-around {
  -webkit-align-content: space-around !important;
      -ms-flex-line-pack: distribute !important;
          align-content: space-around !important;
}

.align-content-stretch {
  -webkit-align-content: stretch !important;
      -ms-flex-line-pack: stretch !important;
          align-content: stretch !important;
}

.align-self-auto {
  -webkit-align-self: auto !important;
      -ms-flex-item-align: auto !important;
              -ms-grid-row-align: auto !important;
          align-self: auto !important;
}

.align-self-start {
  -webkit-align-self: flex-start !important;
      -ms-flex-item-align: start !important;
          align-self: flex-start !important;
}

.align-self-end {
  -webkit-align-self: flex-end !important;
      -ms-flex-item-align: end !important;
          align-self: flex-end !important;
}

.align-self-center {
  -webkit-align-self: center !important;
      -ms-flex-item-align: center !important;
              -ms-grid-row-align: center !important;
          align-self: center !important;
}

.align-self-baseline {
  -webkit-align-self: baseline !important;
      -ms-flex-item-align: baseline !important;
          align-self: baseline !important;
}

.align-self-stretch {
  -webkit-align-self: stretch !important;
      -ms-flex-item-align: stretch !important;
              -ms-grid-row-align: stretch !important;
          align-self: stretch !important;
}

@media (min-width: 576px) {
  .flex-sm-first {
    -webkit-box-ordinal-group: 0;
    -webkit-order: -1;
        -ms-flex-order: -1;
            order: -1;
  }
  .flex-sm-last {
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
        -ms-flex-order: 1;
            order: 1;
  }
  .flex-sm-unordered {
    -webkit-box-ordinal-group: 1;
    -webkit-order: 0;
        -ms-flex-order: 0;
            order: 0;
  }
  .flex-sm-row {
    -webkit-box-orient: horizontal !important;
    -webkit-box-direction: normal !important;
    -webkit-flex-direction: row !important;
        -ms-flex-direction: row !important;
            flex-direction: row !important;
  }
  .flex-sm-column {
    -webkit-box-orient: vertical !important;
    -webkit-box-direction: normal !important;
    -webkit-flex-direction: column !important;
        -ms-flex-direction: column !important;
            flex-direction: column !important;
  }
  .flex-sm-row-reverse {
    -webkit-box-orient: horizontal !important;
    -webkit-box-direction: reverse !important;
    -webkit-flex-direction: row-reverse !important;
        -ms-flex-direction: row-reverse !important;
            flex-direction: row-reverse !important;
  }
  .flex-sm-column-reverse {
    -webkit-box-orient: vertical !important;
    -webkit-box-direction: reverse !important;
    -webkit-flex-direction: column-reverse !important;
        -ms-flex-direction: column-reverse !important;
            flex-direction: column-reverse !important;
  }
  .flex-sm-wrap {
    -webkit-flex-wrap: wrap !important;
        -ms-flex-wrap: wrap !important;
            flex-wrap: wrap !important;
  }
  .flex-sm-nowrap {
    -webkit-flex-wrap: nowrap !important;
        -ms-flex-wrap: nowrap !important;
            flex-wrap: nowrap !important;
  }
  .flex-sm-wrap-reverse {
    -webkit-flex-wrap: wrap-reverse !important;
        -ms-flex-wrap: wrap-reverse !important;
            flex-wrap: wrap-reverse !important;
  }
  .justify-content-sm-start {
    -webkit-box-pack: start !important;
    -webkit-justify-content: flex-start !important;
        -ms-flex-pack: start !important;
            justify-content: flex-start !important;
  }
  .justify-content-sm-end {
    -webkit-box-pack: end !important;
    -webkit-justify-content: flex-end !important;
        -ms-flex-pack: end !important;
            justify-content: flex-end !important;
  }
  .justify-content-sm-center {
    -webkit-box-pack: center !important;
    -webkit-justify-content: center !important;
        -ms-flex-pack: center !important;
            justify-content: center !important;
  }
  .justify-content-sm-between {
    -webkit-box-pack: justify !important;
    -webkit-justify-content: space-between !important;
        -ms-flex-pack: justify !important;
            justify-content: space-between !important;
  }
  .justify-content-sm-around {
    -webkit-justify-content: space-around !important;
        -ms-flex-pack: distribute !important;
            justify-content: space-around !important;
  }
  .align-items-sm-start {
    -webkit-box-align: start !important;
    -webkit-align-items: flex-start !important;
        -ms-flex-align: start !important;
            align-items: flex-start !important;
  }
  .align-items-sm-end {
    -webkit-box-align: end !important;
    -webkit-align-items: flex-end !important;
        -ms-flex-align: end !important;
            align-items: flex-end !important;
  }
  .align-items-sm-center {
    -webkit-box-align: center !important;
    -webkit-align-items: center !important;
        -ms-flex-align: center !important;
            align-items: center !important;
  }
  .align-items-sm-baseline {
    -webkit-box-align: baseline !important;
    -webkit-align-items: baseline !important;
        -ms-flex-align: baseline !important;
            align-items: baseline !important;
  }
  .align-items-sm-stretch {
    -webkit-box-align: stretch !important;
    -webkit-align-items: stretch !important;
        -ms-flex-align: stretch !important;
            align-items: stretch !important;
  }
  .align-content-sm-start {
    -webkit-align-content: flex-start !important;
        -ms-flex-line-pack: start !important;
            align-content: flex-start !important;
  }
  .align-content-sm-end {
    -webkit-align-content: flex-end !important;
        -ms-flex-line-pack: end !important;
            align-content: flex-end !important;
  }
  .align-content-sm-center {
    -webkit-align-content: center !important;
        -ms-flex-line-pack: center !important;
            align-content: center !important;
  }
  .align-content-sm-between {
    -webkit-align-content: space-between !important;
        -ms-flex-line-pack: justify !important;
            align-content: space-between !important;
  }
  .align-content-sm-around {
    -webkit-align-content: space-around !important;
        -ms-flex-line-pack: distribute !important;
            align-content: space-around !important;
  }
  .align-content-sm-stretch {
    -webkit-align-content: stretch !important;
        -ms-flex-line-pack: stretch !important;
            align-content: stretch !important;
  }
  .align-self-sm-auto {
    -webkit-align-self: auto !important;
        -ms-flex-item-align: auto !important;
                -ms-grid-row-align: auto !important;
            align-self: auto !important;
  }
  .align-self-sm-start {
    -webkit-align-self: flex-start !important;
        -ms-flex-item-align: start !important;
            align-self: flex-start !important;
  }
  .align-self-sm-end {
    -webkit-align-self: flex-end !important;
        -ms-flex-item-align: end !important;
            align-self: flex-end !important;
  }
  .align-self-sm-center {
    -webkit-align-self: center !important;
        -ms-flex-item-align: center !important;
                -ms-grid-row-align: center !important;
            align-self: center !important;
  }
  .align-self-sm-baseline {
    -webkit-align-self: baseline !important;
        -ms-flex-item-align: baseline !important;
            align-self: baseline !important;
  }
  .align-self-sm-stretch {
    -webkit-align-self: stretch !important;
        -ms-flex-item-align: stretch !important;
                -ms-grid-row-align: stretch !important;
            align-self: stretch !important;
  }
}

@media (min-width: 768px) {
  .flex-md-first {
    -webkit-box-ordinal-group: 0;
    -webkit-order: -1;
        -ms-flex-order: -1;
            order: -1;
  }
  .flex-md-last {
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
        -ms-flex-order: 1;
            order: 1;
  }
  .flex-md-unordered {
    -webkit-box-ordinal-group: 1;
    -webkit-order: 0;
        -ms-flex-order: 0;
            order: 0;
  }
  .flex-md-row {
    -webkit-box-orient: horizontal !important;
    -webkit-box-direction: normal !important;
    -webkit-flex-direction: row !important;
        -ms-flex-direction: row !important;
            flex-direction: row !important;
  }
  .flex-md-column {
    -webkit-box-orient: vertical !important;
    -webkit-box-direction: normal !important;
    -webkit-flex-direction: column !important;
        -ms-flex-direction: column !important;
            flex-direction: column !important;
  }
  .flex-md-row-reverse {
    -webkit-box-orient: horizontal !important;
    -webkit-box-direction: reverse !important;
    -webkit-flex-direction: row-reverse !important;
        -ms-flex-direction: row-reverse !important;
            flex-direction: row-reverse !important;
  }
  .flex-md-column-reverse {
    -webkit-box-orient: vertical !important;
    -webkit-box-direction: reverse !important;
    -webkit-flex-direction: column-reverse !important;
        -ms-flex-direction: column-reverse !important;
            flex-direction: column-reverse !important;
  }
  .flex-md-wrap {
    -webkit-flex-wrap: wrap !important;
        -ms-flex-wrap: wrap !important;
            flex-wrap: wrap !important;
  }
  .flex-md-nowrap {
    -webkit-flex-wrap: nowrap !important;
        -ms-flex-wrap: nowrap !important;
            flex-wrap: nowrap !important;
  }
  .flex-md-wrap-reverse {
    -webkit-flex-wrap: wrap-reverse !important;
        -ms-flex-wrap: wrap-reverse !important;
            flex-wrap: wrap-reverse !important;
  }
  .justify-content-md-start {
    -webkit-box-pack: start !important;
    -webkit-justify-content: flex-start !important;
        -ms-flex-pack: start !important;
            justify-content: flex-start !important;
  }
  .justify-content-md-end {
    -webkit-box-pack: end !important;
    -webkit-justify-content: flex-end !important;
        -ms-flex-pack: end !important;
            justify-content: flex-end !important;
  }
  .justify-content-md-center {
    -webkit-box-pack: center !important;
    -webkit-justify-content: center !important;
        -ms-flex-pack: center !important;
            justify-content: center !important;
  }
  .justify-content-md-between {
    -webkit-box-pack: justify !important;
    -webkit-justify-content: space-between !important;
        -ms-flex-pack: justify !important;
            justify-content: space-between !important;
  }
  .justify-content-md-around {
    -webkit-justify-content: space-around !important;
        -ms-flex-pack: distribute !important;
            justify-content: space-around !important;
  }
  .align-items-md-start {
    -webkit-box-align: start !important;
    -webkit-align-items: flex-start !important;
        -ms-flex-align: start !important;
            align-items: flex-start !important;
  }
  .align-items-md-end {
    -webkit-box-align: end !important;
    -webkit-align-items: flex-end !important;
        -ms-flex-align: end !important;
            align-items: flex-end !important;
  }
  .align-items-md-center {
    -webkit-box-align: center !important;
    -webkit-align-items: center !important;
        -ms-flex-align: center !important;
            align-items: center !important;
  }
  .align-items-md-baseline {
    -webkit-box-align: baseline !important;
    -webkit-align-items: baseline !important;
        -ms-flex-align: baseline !important;
            align-items: baseline !important;
  }
  .align-items-md-stretch {
    -webkit-box-align: stretch !important;
    -webkit-align-items: stretch !important;
        -ms-flex-align: stretch !important;
            align-items: stretch !important;
  }
  .align-content-md-start {
    -webkit-align-content: flex-start !important;
        -ms-flex-line-pack: start !important;
            align-content: flex-start !important;
  }
  .align-content-md-end {
    -webkit-align-content: flex-end !important;
        -ms-flex-line-pack: end !important;
            align-content: flex-end !important;
  }
  .align-content-md-center {
    -webkit-align-content: center !important;
        -ms-flex-line-pack: center !important;
            align-content: center !important;
  }
  .align-content-md-between {
    -webkit-align-content: space-between !important;
        -ms-flex-line-pack: justify !important;
            align-content: space-between !important;
  }
  .align-content-md-around {
    -webkit-align-content: space-around !important;
        -ms-flex-line-pack: distribute !important;
            align-content: space-around !important;
  }
  .align-content-md-stretch {
    -webkit-align-content: stretch !important;
        -ms-flex-line-pack: stretch !important;
            align-content: stretch !important;
  }
  .align-self-md-auto {
    -webkit-align-self: auto !important;
        -ms-flex-item-align: auto !important;
                -ms-grid-row-align: auto !important;
            align-self: auto !important;
  }
  .align-self-md-start {
    -webkit-align-self: flex-start !important;
        -ms-flex-item-align: start !important;
            align-self: flex-start !important;
  }
  .align-self-md-end {
    -webkit-align-self: flex-end !important;
        -ms-flex-item-align: end !important;
            align-self: flex-end !important;
  }
  .align-self-md-center {
    -webkit-align-self: center !important;
        -ms-flex-item-align: center !important;
                -ms-grid-row-align: center !important;
            align-self: center !important;
  }
  .align-self-md-baseline {
    -webkit-align-self: baseline !important;
        -ms-flex-item-align: baseline !important;
            align-self: baseline !important;
  }
  .align-self-md-stretch {
    -webkit-align-self: stretch !important;
        -ms-flex-item-align: stretch !important;
                -ms-grid-row-align: stretch !important;
            align-self: stretch !important;
  }
}

@media (min-width: 992px) {
  .flex-lg-first {
    -webkit-box-ordinal-group: 0;
    -webkit-order: -1;
        -ms-flex-order: -1;
            order: -1;
  }
  .flex-lg-last {
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
        -ms-flex-order: 1;
            order: 1;
  }
  .flex-lg-unordered {
    -webkit-box-ordinal-group: 1;
    -webkit-order: 0;
        -ms-flex-order: 0;
            order: 0;
  }
  .flex-lg-row {
    -webkit-box-orient: horizontal !important;
    -webkit-box-direction: normal !important;
    -webkit-flex-direction: row !important;
        -ms-flex-direction: row !important;
            flex-direction: row !important;
  }
  .flex-lg-column {
    -webkit-box-orient: vertical !important;
    -webkit-box-direction: normal !important;
    -webkit-flex-direction: column !important;
        -ms-flex-direction: column !important;
            flex-direction: column !important;
  }
  .flex-lg-row-reverse {
    -webkit-box-orient: horizontal !important;
    -webkit-box-direction: reverse !important;
    -webkit-flex-direction: row-reverse !important;
        -ms-flex-direction: row-reverse !important;
            flex-direction: row-reverse !important;
  }
  .flex-lg-column-reverse {
    -webkit-box-orient: vertical !important;
    -webkit-box-direction: reverse !important;
    -webkit-flex-direction: column-reverse !important;
        -ms-flex-direction: column-reverse !important;
            flex-direction: column-reverse !important;
  }
  .flex-lg-wrap {
    -webkit-flex-wrap: wrap !important;
        -ms-flex-wrap: wrap !important;
            flex-wrap: wrap !important;
  }
  .flex-lg-nowrap {
    -webkit-flex-wrap: nowrap !important;
        -ms-flex-wrap: nowrap !important;
            flex-wrap: nowrap !important;
  }
  .flex-lg-wrap-reverse {
    -webkit-flex-wrap: wrap-reverse !important;
        -ms-flex-wrap: wrap-reverse !important;
            flex-wrap: wrap-reverse !important;
  }
  .justify-content-lg-start {
    -webkit-box-pack: start !important;
    -webkit-justify-content: flex-start !important;
        -ms-flex-pack: start !important;
            justify-content: flex-start !important;
  }
  .justify-content-lg-end {
    -webkit-box-pack: end !important;
    -webkit-justify-content: flex-end !important;
        -ms-flex-pack: end !important;
            justify-content: flex-end !important;
  }
  .justify-content-lg-center {
    -webkit-box-pack: center !important;
    -webkit-justify-content: center !important;
        -ms-flex-pack: center !important;
            justify-content: center !important;
  }
  .justify-content-lg-between {
    -webkit-box-pack: justify !important;
    -webkit-justify-content: space-between !important;
        -ms-flex-pack: justify !important;
            justify-content: space-between !important;
  }
  .justify-content-lg-around {
    -webkit-justify-content: space-around !important;
        -ms-flex-pack: distribute !important;
            justify-content: space-around !important;
  }
  .align-items-lg-start {
    -webkit-box-align: start !important;
    -webkit-align-items: flex-start !important;
        -ms-flex-align: start !important;
            align-items: flex-start !important;
  }
  .align-items-lg-end {
    -webkit-box-align: end !important;
    -webkit-align-items: flex-end !important;
        -ms-flex-align: end !important;
            align-items: flex-end !important;
  }
  .align-items-lg-center {
    -webkit-box-align: center !important;
    -webkit-align-items: center !important;
        -ms-flex-align: center !important;
            align-items: center !important;
  }
  .align-items-lg-baseline {
    -webkit-box-align: baseline !important;
    -webkit-align-items: baseline !important;
        -ms-flex-align: baseline !important;
            align-items: baseline !important;
  }
  .align-items-lg-stretch {
    -webkit-box-align: stretch !important;
    -webkit-align-items: stretch !important;
        -ms-flex-align: stretch !important;
            align-items: stretch !important;
  }
  .align-content-lg-start {
    -webkit-align-content: flex-start !important;
        -ms-flex-line-pack: start !important;
            align-content: flex-start !important;
  }
  .align-content-lg-end {
    -webkit-align-content: flex-end !important;
        -ms-flex-line-pack: end !important;
            align-content: flex-end !important;
  }
  .align-content-lg-center {
    -webkit-align-content: center !important;
        -ms-flex-line-pack: center !important;
            align-content: center !important;
  }
  .align-content-lg-between {
    -webkit-align-content: space-between !important;
        -ms-flex-line-pack: justify !important;
            align-content: space-between !important;
  }
  .align-content-lg-around {
    -webkit-align-content: space-around !important;
        -ms-flex-line-pack: distribute !important;
            align-content: space-around !important;
  }
  .align-content-lg-stretch {
    -webkit-align-content: stretch !important;
        -ms-flex-line-pack: stretch !important;
            align-content: stretch !important;
  }
  .align-self-lg-auto {
    -webkit-align-self: auto !important;
        -ms-flex-item-align: auto !important;
                -ms-grid-row-align: auto !important;
            align-self: auto !important;
  }
  .align-self-lg-start {
    -webkit-align-self: flex-start !important;
        -ms-flex-item-align: start !important;
            align-self: flex-start !important;
  }
  .align-self-lg-end {
    -webkit-align-self: flex-end !important;
        -ms-flex-item-align: end !important;
            align-self: flex-end !important;
  }
  .align-self-lg-center {
    -webkit-align-self: center !important;
        -ms-flex-item-align: center !important;
                -ms-grid-row-align: center !important;
            align-self: center !important;
  }
  .align-self-lg-baseline {
    -webkit-align-self: baseline !important;
        -ms-flex-item-align: baseline !important;
            align-self: baseline !important;
  }
  .align-self-lg-stretch {
    -webkit-align-self: stretch !important;
        -ms-flex-item-align: stretch !important;
                -ms-grid-row-align: stretch !important;
            align-self: stretch !important;
  }
}

@media (min-width: 1200px) {
  .flex-xl-first {
    -webkit-box-ordinal-group: 0;
    -webkit-order: -1;
        -ms-flex-order: -1;
            order: -1;
  }
  .flex-xl-last {
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
        -ms-flex-order: 1;
            order: 1;
  }
  .flex-xl-unordered {
    -webkit-box-ordinal-group: 1;
    -webkit-order: 0;
        -ms-flex-order: 0;
            order: 0;
  }
  .flex-xl-row {
    -webkit-box-orient: horizontal !important;
    -webkit-box-direction: normal !important;
    -webkit-flex-direction: row !important;
        -ms-flex-direction: row !important;
            flex-direction: row !important;
  }
  .flex-xl-column {
    -webkit-box-orient: vertical !important;
    -webkit-box-direction: normal !important;
    -webkit-flex-direction: column !important;
        -ms-flex-direction: column !important;
            flex-direction: column !important;
  }
  .flex-xl-row-reverse {
    -webkit-box-orient: horizontal !important;
    -webkit-box-direction: reverse !important;
    -webkit-flex-direction: row-reverse !important;
        -ms-flex-direction: row-reverse !important;
            flex-direction: row-reverse !important;
  }
  .flex-xl-column-reverse {
    -webkit-box-orient: vertical !important;
    -webkit-box-direction: reverse !important;
    -webkit-flex-direction: column-reverse !important;
        -ms-flex-direction: column-reverse !important;
            flex-direction: column-reverse !important;
  }
  .flex-xl-wrap {
    -webkit-flex-wrap: wrap !important;
        -ms-flex-wrap: wrap !important;
            flex-wrap: wrap !important;
  }
  .flex-xl-nowrap {
    -webkit-flex-wrap: nowrap !important;
        -ms-flex-wrap: nowrap !important;
            flex-wrap: nowrap !important;
  }
  .flex-xl-wrap-reverse {
    -webkit-flex-wrap: wrap-reverse !important;
        -ms-flex-wrap: wrap-reverse !important;
            flex-wrap: wrap-reverse !important;
  }
  .justify-content-xl-start {
    -webkit-box-pack: start !important;
    -webkit-justify-content: flex-start !important;
        -ms-flex-pack: start !important;
            justify-content: flex-start !important;
  }
  .justify-content-xl-end {
    -webkit-box-pack: end !important;
    -webkit-justify-content: flex-end !important;
        -ms-flex-pack: end !important;
            justify-content: flex-end !important;
  }
  .justify-content-xl-center {
    -webkit-box-pack: center !important;
    -webkit-justify-content: center !important;
        -ms-flex-pack: center !important;
            justify-content: center !important;
  }
  .justify-content-xl-between {
    -webkit-box-pack: justify !important;
    -webkit-justify-content: space-between !important;
        -ms-flex-pack: justify !important;
            justify-content: space-between !important;
  }
  .justify-content-xl-around {
    -webkit-justify-content: space-around !important;
        -ms-flex-pack: distribute !important;
            justify-content: space-around !important;
  }
  .align-items-xl-start {
    -webkit-box-align: start !important;
    -webkit-align-items: flex-start !important;
        -ms-flex-align: start !important;
            align-items: flex-start !important;
  }
  .align-items-xl-end {
    -webkit-box-align: end !important;
    -webkit-align-items: flex-end !important;
        -ms-flex-align: end !important;
            align-items: flex-end !important;
  }
  .align-items-xl-center {
    -webkit-box-align: center !important;
    -webkit-align-items: center !important;
        -ms-flex-align: center !important;
            align-items: center !important;
  }
  .align-items-xl-baseline {
    -webkit-box-align: baseline !important;
    -webkit-align-items: baseline !important;
        -ms-flex-align: baseline !important;
            align-items: baseline !important;
  }
  .align-items-xl-stretch {
    -webkit-box-align: stretch !important;
    -webkit-align-items: stretch !important;
        -ms-flex-align: stretch !important;
            align-items: stretch !important;
  }
  .align-content-xl-start {
    -webkit-align-content: flex-start !important;
        -ms-flex-line-pack: start !important;
            align-content: flex-start !important;
  }
  .align-content-xl-end {
    -webkit-align-content: flex-end !important;
        -ms-flex-line-pack: end !important;
            align-content: flex-end !important;
  }
  .align-content-xl-center {
    -webkit-align-content: center !important;
        -ms-flex-line-pack: center !important;
            align-content: center !important;
  }
  .align-content-xl-between {
    -webkit-align-content: space-between !important;
        -ms-flex-line-pack: justify !important;
            align-content: space-between !important;
  }
  .align-content-xl-around {
    -webkit-align-content: space-around !important;
        -ms-flex-line-pack: distribute !important;
            align-content: space-around !important;
  }
  .align-content-xl-stretch {
    -webkit-align-content: stretch !important;
        -ms-flex-line-pack: stretch !important;
            align-content: stretch !important;
  }
  .align-self-xl-auto {
    -webkit-align-self: auto !important;
        -ms-flex-item-align: auto !important;
                -ms-grid-row-align: auto !important;
            align-self: auto !important;
  }
  .align-self-xl-start {
    -webkit-align-self: flex-start !important;
        -ms-flex-item-align: start !important;
            align-self: flex-start !important;
  }
  .align-self-xl-end {
    -webkit-align-self: flex-end !important;
        -ms-flex-item-align: end !important;
            align-self: flex-end !important;
  }
  .align-self-xl-center {
    -webkit-align-self: center !important;
        -ms-flex-item-align: center !important;
                -ms-grid-row-align: center !important;
            align-self: center !important;
  }
  .align-self-xl-baseline {
    -webkit-align-self: baseline !important;
        -ms-flex-item-align: baseline !important;
            align-self: baseline !important;
  }
  .align-self-xl-stretch {
    -webkit-align-self: stretch !important;
        -ms-flex-item-align: stretch !important;
                -ms-grid-row-align: stretch !important;
            align-self: stretch !important;
  }
}

.float-left {
  float: left !important;
}

.float-right {
  float: right !important;
}

.float-none {
  float: none !important;
}

@media (min-width: 576px) {
  .float-sm-left {
    float: left !important;
  }
  .float-sm-right {
    float: right !important;
  }
  .float-sm-none {
    float: none !important;
  }
}

@media (min-width: 768px) {
  .float-md-left {
    float: left !important;
  }
  .float-md-right {
    float: right !important;
  }
  .float-md-none {
    float: none !important;
  }
}

@media (min-width: 992px) {
  .float-lg-left {
    float: left !important;
  }
  .float-lg-right {
    float: right !important;
  }
  .float-lg-none {
    float: none !important;
  }
}

@media (min-width: 1200px) {
  .float-xl-left {
    float: left !important;
  }
  .float-xl-right {
    float: right !important;
  }
  .float-xl-none {
    float: none !important;
  }
}

.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

.fixed-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
}

.sticky-top {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1030;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  clip: auto;
}

.w-25 {
  width: 25% !important;
}

.w-50 {
  width: 50% !important;
}

.w-75 {
  width: 75% !important;
}

.w-100 {
  width: 100% !important;
}

.h-25 {
  height: 25% !important;
}

.h-50 {
  height: 50% !important;
}

.h-75 {
  height: 75% !important;
}

.h-100 {
  height: 100% !important;
}

.mw-100 {
  max-width: 100% !important;
}

.mh-100 {
  max-height: 100% !important;
}

.m-0 {
  margin: 0 0 !important;
}

.mt-0 {
  margin-top: 0 !important;
}

.mr-0 {
  margin-right: 0 !important;
}

.mb-0 {
  margin-bottom: 0 !important;
}

.ml-0 {
  margin-left: 0 !important;
}

.mx-0 {
  margin-right: 0 !important;
  margin-left: 0 !important;
}

.my-0 {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}

.m-1 {
  margin: 0.25rem 0.25rem !important;
}

.mt-1 {
  margin-top: 0.25rem !important;
}

.mr-1 {
  margin-right: 0.25rem !important;
}

.mb-1 {
  margin-bottom: 0.25rem !important;
}

.ml-1 {
  margin-left: 0.25rem !important;
}

.mx-1 {
  margin-right: 0.25rem !important;
  margin-left: 0.25rem !important;
}

.my-1 {
  margin-top: 0.25rem !important;
  margin-bottom: 0.25rem !important;
}

.m-2 {
  margin: 0.5rem 0.5rem !important;
}

.mt-2 {
  margin-top: 0.5rem !important;
}

.mr-2 {
  margin-right: 0.5rem !important;
}

.mb-2 {
  margin-bottom: 0.5rem !important;
}

.ml-2 {
  margin-left: 0.5rem !important;
}

.mx-2 {
  margin-right: 0.5rem !important;
  margin-left: 0.5rem !important;
}

.my-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}

.m-3 {
  margin: 1rem 1rem !important;
}

.mt-3 {
  margin-top: 1rem !important;
}

.mr-3 {
  margin-right: 1rem !important;
}

.mb-3 {
  margin-bottom: 1rem !important;
}

.ml-3 {
  margin-left: 1rem !important;
}

.mx-3 {
  margin-right: 1rem !important;
  margin-left: 1rem !important;
}

.my-3 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}

.m-4 {
  margin: 1.5rem 1.5rem !important;
}

.mt-4 {
  margin-top: 1.5rem !important;
}

.mr-4 {
  margin-right: 1.5rem !important;
}

.mb-4 {
  margin-bottom: 1.5rem !important;
}

.ml-4 {
  margin-left: 1.5rem !important;
}

.mx-4 {
  margin-right: 1.5rem !important;
  margin-left: 1.5rem !important;
}

.my-4 {
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}

.m-5 {
  margin: 3rem 3rem !important;
}

.mt-5 {
  margin-top: 3rem !important;
}

.mr-5 {
  margin-right: 3rem !important;
}

.mb-5 {
  margin-bottom: 3rem !important;
}

.ml-5 {
  margin-left: 3rem !important;
}

.mx-5 {
  margin-right: 3rem !important;
  margin-left: 3rem !important;
}

.my-5 {
  margin-top: 3rem !important;
  margin-bottom: 3rem !important;
}

.p-0 {
  padding: 0 0 !important;
}

.pt-0 {
  padding-top: 0 !important;
}

.pr-0 {
  padding-right: 0 !important;
}

.pb-0 {
  padding-bottom: 0 !important;
}

.pl-0 {
  padding-left: 0 !important;
}

.px-0 {
  padding-right: 0 !important;
  padding-left: 0 !important;
}

.py-0 {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.p-1 {
  padding: 0.25rem 0.25rem !important;
}

.pt-1 {
  padding-top: 0.25rem !important;
}

.pr-1 {
  padding-right: 0.25rem !important;
}

.pb-1 {
  padding-bottom: 0.25rem !important;
}

.pl-1 {
  padding-left: 0.25rem !important;
}

.px-1 {
  padding-right: 0.25rem !important;
  padding-left: 0.25rem !important;
}

.py-1 {
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important;
}

.p-2 {
  padding: 0.5rem 0.5rem !important;
}

.pt-2 {
  padding-top: 0.5rem !important;
}

.pr-2 {
  padding-right: 0.5rem !important;
}

.pb-2 {
  padding-bottom: 0.5rem !important;
}

.pl-2 {
  padding-left: 0.5rem !important;
}

.px-2 {
  padding-right: 0.5rem !important;
  padding-left: 0.5rem !important;
}

.py-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}

.p-3 {
  padding: 1rem 1rem !important;
}

.pt-3 {
  padding-top: 1rem !important;
}

.pr-3 {
  padding-right: 1rem !important;
}

.pb-3 {
  padding-bottom: 1rem !important;
}

.pl-3 {
  padding-left: 1rem !important;
}

.px-3 {
  padding-right: 1rem !important;
  padding-left: 1rem !important;
}

.py-3 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}

.p-4 {
  padding: 1.5rem 1.5rem !important;
}

.pt-4 {
  padding-top: 1.5rem !important;
}

.pr-4 {
  padding-right: 1.5rem !important;
}

.pb-4 {
  padding-bottom: 1.5rem !important;
}

.pl-4 {
  padding-left: 1.5rem !important;
}

.px-4 {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
}

.py-4 {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
}

.p-5 {
  padding: 3rem 3rem !important;
}

.pt-5 {
  padding-top: 3rem !important;
}

.pr-5 {
  padding-right: 3rem !important;
}

.pb-5 {
  padding-bottom: 3rem !important;
}

.pl-5 {
  padding-left: 3rem !important;
}

.px-5 {
  padding-right: 3rem !important;
  padding-left: 3rem !important;
}

.py-5 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}

.m-auto {
  margin: auto !important;
}

.mt-auto {
  margin-top: auto !important;
}

.mr-auto {
  margin-right: auto !important;
}

.mb-auto {
  margin-bottom: auto !important;
}

.ml-auto {
  margin-left: auto !important;
}

.mx-auto {
  margin-right: auto !important;
  margin-left: auto !important;
}

.my-auto {
  margin-top: auto !important;
  margin-bottom: auto !important;
}

@media (min-width: 576px) {
  .m-sm-0 {
    margin: 0 0 !important;
  }
  .mt-sm-0 {
    margin-top: 0 !important;
  }
  .mr-sm-0 {
    margin-right: 0 !important;
  }
  .mb-sm-0 {
    margin-bottom: 0 !important;
  }
  .ml-sm-0 {
    margin-left: 0 !important;
  }
  .mx-sm-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .my-sm-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .m-sm-1 {
    margin: 0.25rem 0.25rem !important;
  }
  .mt-sm-1 {
    margin-top: 0.25rem !important;
  }
  .mr-sm-1 {
    margin-right: 0.25rem !important;
  }
  .mb-sm-1 {
    margin-bottom: 0.25rem !important;
  }
  .ml-sm-1 {
    margin-left: 0.25rem !important;
  }
  .mx-sm-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  .my-sm-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .m-sm-2 {
    margin: 0.5rem 0.5rem !important;
  }
  .mt-sm-2 {
    margin-top: 0.5rem !important;
  }
  .mr-sm-2 {
    margin-right: 0.5rem !important;
  }
  .mb-sm-2 {
    margin-bottom: 0.5rem !important;
  }
  .ml-sm-2 {
    margin-left: 0.5rem !important;
  }
  .mx-sm-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  .my-sm-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .m-sm-3 {
    margin: 1rem 1rem !important;
  }
  .mt-sm-3 {
    margin-top: 1rem !important;
  }
  .mr-sm-3 {
    margin-right: 1rem !important;
  }
  .mb-sm-3 {
    margin-bottom: 1rem !important;
  }
  .ml-sm-3 {
    margin-left: 1rem !important;
  }
  .mx-sm-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  .my-sm-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .m-sm-4 {
    margin: 1.5rem 1.5rem !important;
  }
  .mt-sm-4 {
    margin-top: 1.5rem !important;
  }
  .mr-sm-4 {
    margin-right: 1.5rem !important;
  }
  .mb-sm-4 {
    margin-bottom: 1.5rem !important;
  }
  .ml-sm-4 {
    margin-left: 1.5rem !important;
  }
  .mx-sm-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .my-sm-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .m-sm-5 {
    margin: 3rem 3rem !important;
  }
  .mt-sm-5 {
    margin-top: 3rem !important;
  }
  .mr-sm-5 {
    margin-right: 3rem !important;
  }
  .mb-sm-5 {
    margin-bottom: 3rem !important;
  }
  .ml-sm-5 {
    margin-left: 3rem !important;
  }
  .mx-sm-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  .my-sm-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .p-sm-0 {
    padding: 0 0 !important;
  }
  .pt-sm-0 {
    padding-top: 0 !important;
  }
  .pr-sm-0 {
    padding-right: 0 !important;
  }
  .pb-sm-0 {
    padding-bottom: 0 !important;
  }
  .pl-sm-0 {
    padding-left: 0 !important;
  }
  .px-sm-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .py-sm-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .p-sm-1 {
    padding: 0.25rem 0.25rem !important;
  }
  .pt-sm-1 {
    padding-top: 0.25rem !important;
  }
  .pr-sm-1 {
    padding-right: 0.25rem !important;
  }
  .pb-sm-1 {
    padding-bottom: 0.25rem !important;
  }
  .pl-sm-1 {
    padding-left: 0.25rem !important;
  }
  .px-sm-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  .py-sm-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .p-sm-2 {
    padding: 0.5rem 0.5rem !important;
  }
  .pt-sm-2 {
    padding-top: 0.5rem !important;
  }
  .pr-sm-2 {
    padding-right: 0.5rem !important;
  }
  .pb-sm-2 {
    padding-bottom: 0.5rem !important;
  }
  .pl-sm-2 {
    padding-left: 0.5rem !important;
  }
  .px-sm-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .py-sm-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .p-sm-3 {
    padding: 1rem 1rem !important;
  }
  .pt-sm-3 {
    padding-top: 1rem !important;
  }
  .pr-sm-3 {
    padding-right: 1rem !important;
  }
  .pb-sm-3 {
    padding-bottom: 1rem !important;
  }
  .pl-sm-3 {
    padding-left: 1rem !important;
  }
  .px-sm-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .py-sm-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .p-sm-4 {
    padding: 1.5rem 1.5rem !important;
  }
  .pt-sm-4 {
    padding-top: 1.5rem !important;
  }
  .pr-sm-4 {
    padding-right: 1.5rem !important;
  }
  .pb-sm-4 {
    padding-bottom: 1.5rem !important;
  }
  .pl-sm-4 {
    padding-left: 1.5rem !important;
  }
  .px-sm-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .py-sm-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .p-sm-5 {
    padding: 3rem 3rem !important;
  }
  .pt-sm-5 {
    padding-top: 3rem !important;
  }
  .pr-sm-5 {
    padding-right: 3rem !important;
  }
  .pb-sm-5 {
    padding-bottom: 3rem !important;
  }
  .pl-sm-5 {
    padding-left: 3rem !important;
  }
  .px-sm-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .py-sm-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .m-sm-auto {
    margin: auto !important;
  }
  .mt-sm-auto {
    margin-top: auto !important;
  }
  .mr-sm-auto {
    margin-right: auto !important;
  }
  .mb-sm-auto {
    margin-bottom: auto !important;
  }
  .ml-sm-auto {
    margin-left: auto !important;
  }
  .mx-sm-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-sm-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
}

@media (min-width: 768px) {
  .m-md-0 {
    margin: 0 0 !important;
  }
  .mt-md-0 {
    margin-top: 0 !important;
  }
  .mr-md-0 {
    margin-right: 0 !important;
  }
  .mb-md-0 {
    margin-bottom: 0 !important;
  }
  .ml-md-0 {
    margin-left: 0 !important;
  }
  .mx-md-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .my-md-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .m-md-1 {
    margin: 0.25rem 0.25rem !important;
  }
  .mt-md-1 {
    margin-top: 0.25rem !important;
  }
  .mr-md-1 {
    margin-right: 0.25rem !important;
  }
  .mb-md-1 {
    margin-bottom: 0.25rem !important;
  }
  .ml-md-1 {
    margin-left: 0.25rem !important;
  }
  .mx-md-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  .my-md-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .m-md-2 {
    margin: 0.5rem 0.5rem !important;
  }
  .mt-md-2 {
    margin-top: 0.5rem !important;
  }
  .mr-md-2 {
    margin-right: 0.5rem !important;
  }
  .mb-md-2 {
    margin-bottom: 0.5rem !important;
  }
  .ml-md-2 {
    margin-left: 0.5rem !important;
  }
  .mx-md-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  .my-md-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .m-md-3 {
    margin: 1rem 1rem !important;
  }
  .mt-md-3 {
    margin-top: 1rem !important;
  }
  .mr-md-3 {
    margin-right: 1rem !important;
  }
  .mb-md-3 {
    margin-bottom: 1rem !important;
  }
  .ml-md-3 {
    margin-left: 1rem !important;
  }
  .mx-md-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  .my-md-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .m-md-4 {
    margin: 1.5rem 1.5rem !important;
  }
  .mt-md-4 {
    margin-top: 1.5rem !important;
  }
  .mr-md-4 {
    margin-right: 1.5rem !important;
  }
  .mb-md-4 {
    margin-bottom: 1.5rem !important;
  }
  .ml-md-4 {
    margin-left: 1.5rem !important;
  }
  .mx-md-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .my-md-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .m-md-5 {
    margin: 3rem 3rem !important;
  }
  .mt-md-5 {
    margin-top: 3rem !important;
  }
  .mr-md-5 {
    margin-right: 3rem !important;
  }
  .mb-md-5 {
    margin-bottom: 3rem !important;
  }
  .ml-md-5 {
    margin-left: 3rem !important;
  }
  .mx-md-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  .my-md-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .p-md-0 {
    padding: 0 0 !important;
  }
  .pt-md-0 {
    padding-top: 0 !important;
  }
  .pr-md-0 {
    padding-right: 0 !important;
  }
  .pb-md-0 {
    padding-bottom: 0 !important;
  }
  .pl-md-0 {
    padding-left: 0 !important;
  }
  .px-md-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .py-md-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .p-md-1 {
    padding: 0.25rem 0.25rem !important;
  }
  .pt-md-1 {
    padding-top: 0.25rem !important;
  }
  .pr-md-1 {
    padding-right: 0.25rem !important;
  }
  .pb-md-1 {
    padding-bottom: 0.25rem !important;
  }
  .pl-md-1 {
    padding-left: 0.25rem !important;
  }
  .px-md-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  .py-md-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .p-md-2 {
    padding: 0.5rem 0.5rem !important;
  }
  .pt-md-2 {
    padding-top: 0.5rem !important;
  }
  .pr-md-2 {
    padding-right: 0.5rem !important;
  }
  .pb-md-2 {
    padding-bottom: 0.5rem !important;
  }
  .pl-md-2 {
    padding-left: 0.5rem !important;
  }
  .px-md-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .py-md-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .p-md-3 {
    padding: 1rem 1rem !important;
  }
  .pt-md-3 {
    padding-top: 1rem !important;
  }
  .pr-md-3 {
    padding-right: 1rem !important;
  }
  .pb-md-3 {
    padding-bottom: 1rem !important;
  }
  .pl-md-3 {
    padding-left: 1rem !important;
  }
  .px-md-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .py-md-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .p-md-4 {
    padding: 1.5rem 1.5rem !important;
  }
  .pt-md-4 {
    padding-top: 1.5rem !important;
  }
  .pr-md-4 {
    padding-right: 1.5rem !important;
  }
  .pb-md-4 {
    padding-bottom: 1.5rem !important;
  }
  .pl-md-4 {
    padding-left: 1.5rem !important;
  }
  .px-md-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .py-md-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .p-md-5 {
    padding: 3rem 3rem !important;
  }
  .pt-md-5 {
    padding-top: 3rem !important;
  }
  .pr-md-5 {
    padding-right: 3rem !important;
  }
  .pb-md-5 {
    padding-bottom: 3rem !important;
  }
  .pl-md-5 {
    padding-left: 3rem !important;
  }
  .px-md-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .py-md-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .m-md-auto {
    margin: auto !important;
  }
  .mt-md-auto {
    margin-top: auto !important;
  }
  .mr-md-auto {
    margin-right: auto !important;
  }
  .mb-md-auto {
    margin-bottom: auto !important;
  }
  .ml-md-auto {
    margin-left: auto !important;
  }
  .mx-md-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-md-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
}

@media (min-width: 992px) {
  .m-lg-0 {
    margin: 0 0 !important;
  }
  .mt-lg-0 {
    margin-top: 0 !important;
  }
  .mr-lg-0 {
    margin-right: 0 !important;
  }
  .mb-lg-0 {
    margin-bottom: 0 !important;
  }
  .ml-lg-0 {
    margin-left: 0 !important;
  }
  .mx-lg-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .my-lg-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .m-lg-1 {
    margin: 0.25rem 0.25rem !important;
  }
  .mt-lg-1 {
    margin-top: 0.25rem !important;
  }
  .mr-lg-1 {
    margin-right: 0.25rem !important;
  }
  .mb-lg-1 {
    margin-bottom: 0.25rem !important;
  }
  .ml-lg-1 {
    margin-left: 0.25rem !important;
  }
  .mx-lg-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  .my-lg-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .m-lg-2 {
    margin: 0.5rem 0.5rem !important;
  }
  .mt-lg-2 {
    margin-top: 0.5rem !important;
  }
  .mr-lg-2 {
    margin-right: 0.5rem !important;
  }
  .mb-lg-2 {
    margin-bottom: 0.5rem !important;
  }
  .ml-lg-2 {
    margin-left: 0.5rem !important;
  }
  .mx-lg-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  .my-lg-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .m-lg-3 {
    margin: 1rem 1rem !important;
  }
  .mt-lg-3 {
    margin-top: 1rem !important;
  }
  .mr-lg-3 {
    margin-right: 1rem !important;
  }
  .mb-lg-3 {
    margin-bottom: 1rem !important;
  }
  .ml-lg-3 {
    margin-left: 1rem !important;
  }
  .mx-lg-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  .my-lg-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .m-lg-4 {
    margin: 1.5rem 1.5rem !important;
  }
  .mt-lg-4 {
    margin-top: 1.5rem !important;
  }
  .mr-lg-4 {
    margin-right: 1.5rem !important;
  }
  .mb-lg-4 {
    margin-bottom: 1.5rem !important;
  }
  .ml-lg-4 {
    margin-left: 1.5rem !important;
  }
  .mx-lg-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .my-lg-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .m-lg-5 {
    margin: 3rem 3rem !important;
  }
  .mt-lg-5 {
    margin-top: 3rem !important;
  }
  .mr-lg-5 {
    margin-right: 3rem !important;
  }
  .mb-lg-5 {
    margin-bottom: 3rem !important;
  }
  .ml-lg-5 {
    margin-left: 3rem !important;
  }
  .mx-lg-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  .my-lg-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .p-lg-0 {
    padding: 0 0 !important;
  }
  .pt-lg-0 {
    padding-top: 0 !important;
  }
  .pr-lg-0 {
    padding-right: 0 !important;
  }
  .pb-lg-0 {
    padding-bottom: 0 !important;
  }
  .pl-lg-0 {
    padding-left: 0 !important;
  }
  .px-lg-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .py-lg-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .p-lg-1 {
    padding: 0.25rem 0.25rem !important;
  }
  .pt-lg-1 {
    padding-top: 0.25rem !important;
  }
  .pr-lg-1 {
    padding-right: 0.25rem !important;
  }
  .pb-lg-1 {
    padding-bottom: 0.25rem !important;
  }
  .pl-lg-1 {
    padding-left: 0.25rem !important;
  }
  .px-lg-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  .py-lg-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .p-lg-2 {
    padding: 0.5rem 0.5rem !important;
  }
  .pt-lg-2 {
    padding-top: 0.5rem !important;
  }
  .pr-lg-2 {
    padding-right: 0.5rem !important;
  }
  .pb-lg-2 {
    padding-bottom: 0.5rem !important;
  }
  .pl-lg-2 {
    padding-left: 0.5rem !important;
  }
  .px-lg-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .py-lg-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .p-lg-3 {
    padding: 1rem 1rem !important;
  }
  .pt-lg-3 {
    padding-top: 1rem !important;
  }
  .pr-lg-3 {
    padding-right: 1rem !important;
  }
  .pb-lg-3 {
    padding-bottom: 1rem !important;
  }
  .pl-lg-3 {
    padding-left: 1rem !important;
  }
  .px-lg-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .py-lg-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .p-lg-4 {
    padding: 1.5rem 1.5rem !important;
  }
  .pt-lg-4 {
    padding-top: 1.5rem !important;
  }
  .pr-lg-4 {
    padding-right: 1.5rem !important;
  }
  .pb-lg-4 {
    padding-bottom: 1.5rem !important;
  }
  .pl-lg-4 {
    padding-left: 1.5rem !important;
  }
  .px-lg-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .py-lg-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .p-lg-5 {
    padding: 3rem 3rem !important;
  }
  .pt-lg-5 {
    padding-top: 3rem !important;
  }
  .pr-lg-5 {
    padding-right: 3rem !important;
  }
  .pb-lg-5 {
    padding-bottom: 3rem !important;
  }
  .pl-lg-5 {
    padding-left: 3rem !important;
  }
  .px-lg-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .py-lg-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .m-lg-auto {
    margin: auto !important;
  }
  .mt-lg-auto {
    margin-top: auto !important;
  }
  .mr-lg-auto {
    margin-right: auto !important;
  }
  .mb-lg-auto {
    margin-bottom: auto !important;
  }
  .ml-lg-auto {
    margin-left: auto !important;
  }
  .mx-lg-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-lg-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
}

@media (min-width: 1200px) {
  .m-xl-0 {
    margin: 0 0 !important;
  }
  .mt-xl-0 {
    margin-top: 0 !important;
  }
  .mr-xl-0 {
    margin-right: 0 !important;
  }
  .mb-xl-0 {
    margin-bottom: 0 !important;
  }
  .ml-xl-0 {
    margin-left: 0 !important;
  }
  .mx-xl-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .my-xl-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .m-xl-1 {
    margin: 0.25rem 0.25rem !important;
  }
  .mt-xl-1 {
    margin-top: 0.25rem !important;
  }
  .mr-xl-1 {
    margin-right: 0.25rem !important;
  }
  .mb-xl-1 {
    margin-bottom: 0.25rem !important;
  }
  .ml-xl-1 {
    margin-left: 0.25rem !important;
  }
  .mx-xl-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }
  .my-xl-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  .m-xl-2 {
    margin: 0.5rem 0.5rem !important;
  }
  .mt-xl-2 {
    margin-top: 0.5rem !important;
  }
  .mr-xl-2 {
    margin-right: 0.5rem !important;
  }
  .mb-xl-2 {
    margin-bottom: 0.5rem !important;
  }
  .ml-xl-2 {
    margin-left: 0.5rem !important;
  }
  .mx-xl-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }
  .my-xl-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  .m-xl-3 {
    margin: 1rem 1rem !important;
  }
  .mt-xl-3 {
    margin-top: 1rem !important;
  }
  .mr-xl-3 {
    margin-right: 1rem !important;
  }
  .mb-xl-3 {
    margin-bottom: 1rem !important;
  }
  .ml-xl-3 {
    margin-left: 1rem !important;
  }
  .mx-xl-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
  .my-xl-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  .m-xl-4 {
    margin: 1.5rem 1.5rem !important;
  }
  .mt-xl-4 {
    margin-top: 1.5rem !important;
  }
  .mr-xl-4 {
    margin-right: 1.5rem !important;
  }
  .mb-xl-4 {
    margin-bottom: 1.5rem !important;
  }
  .ml-xl-4 {
    margin-left: 1.5rem !important;
  }
  .mx-xl-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }
  .my-xl-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  .m-xl-5 {
    margin: 3rem 3rem !important;
  }
  .mt-xl-5 {
    margin-top: 3rem !important;
  }
  .mr-xl-5 {
    margin-right: 3rem !important;
  }
  .mb-xl-5 {
    margin-bottom: 3rem !important;
  }
  .ml-xl-5 {
    margin-left: 3rem !important;
  }
  .mx-xl-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }
  .my-xl-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
  .p-xl-0 {
    padding: 0 0 !important;
  }
  .pt-xl-0 {
    padding-top: 0 !important;
  }
  .pr-xl-0 {
    padding-right: 0 !important;
  }
  .pb-xl-0 {
    padding-bottom: 0 !important;
  }
  .pl-xl-0 {
    padding-left: 0 !important;
  }
  .px-xl-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .py-xl-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .p-xl-1 {
    padding: 0.25rem 0.25rem !important;
  }
  .pt-xl-1 {
    padding-top: 0.25rem !important;
  }
  .pr-xl-1 {
    padding-right: 0.25rem !important;
  }
  .pb-xl-1 {
    padding-bottom: 0.25rem !important;
  }
  .pl-xl-1 {
    padding-left: 0.25rem !important;
  }
  .px-xl-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }
  .py-xl-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }
  .p-xl-2 {
    padding: 0.5rem 0.5rem !important;
  }
  .pt-xl-2 {
    padding-top: 0.5rem !important;
  }
  .pr-xl-2 {
    padding-right: 0.5rem !important;
  }
  .pb-xl-2 {
    padding-bottom: 0.5rem !important;
  }
  .pl-xl-2 {
    padding-left: 0.5rem !important;
  }
  .px-xl-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
  .py-xl-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
  .p-xl-3 {
    padding: 1rem 1rem !important;
  }
  .pt-xl-3 {
    padding-top: 1rem !important;
  }
  .pr-xl-3 {
    padding-right: 1rem !important;
  }
  .pb-xl-3 {
    padding-bottom: 1rem !important;
  }
  .pl-xl-3 {
    padding-left: 1rem !important;
  }
  .px-xl-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }
  .py-xl-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .p-xl-4 {
    padding: 1.5rem 1.5rem !important;
  }
  .pt-xl-4 {
    padding-top: 1.5rem !important;
  }
  .pr-xl-4 {
    padding-right: 1.5rem !important;
  }
  .pb-xl-4 {
    padding-bottom: 1.5rem !important;
  }
  .pl-xl-4 {
    padding-left: 1.5rem !important;
  }
  .px-xl-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .py-xl-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  .p-xl-5 {
    padding: 3rem 3rem !important;
  }
  .pt-xl-5 {
    padding-top: 3rem !important;
  }
  .pr-xl-5 {
    padding-right: 3rem !important;
  }
  .pb-xl-5 {
    padding-bottom: 3rem !important;
  }
  .pl-xl-5 {
    padding-left: 3rem !important;
  }
  .px-xl-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
  .py-xl-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
  .m-xl-auto {
    margin: auto !important;
  }
  .mt-xl-auto {
    margin-top: auto !important;
  }
  .mr-xl-auto {
    margin-right: auto !important;
  }
  .mb-xl-auto {
    margin-bottom: auto !important;
  }
  .ml-xl-auto {
    margin-left: auto !important;
  }
  .mx-xl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .my-xl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }
}

.text-justify {
  text-align: justify !important;
}

.text-nowrap {
  white-space: nowrap !important;
}

.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.text-left {
  text-align: left !important;
}

.text-right {
  text-align: right !important;
}

.text-center {
  text-align: center !important;
}

@media (min-width: 576px) {
  .text-sm-left {
    text-align: left !important;
  }
  .text-sm-right {
    text-align: right !important;
  }
  .text-sm-center {
    text-align: center !important;
  }
}

@media (min-width: 768px) {
  .text-md-left {
    text-align: left !important;
  }
  .text-md-right {
    text-align: right !important;
  }
  .text-md-center {
    text-align: center !important;
  }
}

@media (min-width: 992px) {
  .text-lg-left {
    text-align: left !important;
  }
  .text-lg-right {
    text-align: right !important;
  }
  .text-lg-center {
    text-align: center !important;
  }
}

@media (min-width: 1200px) {
  .text-xl-left {
    text-align: left !important;
  }
  .text-xl-right {
    text-align: right !important;
  }
  .text-xl-center {
    text-align: center !important;
  }
}

.text-lowercase {
  text-transform: lowercase !important;
}

.text-uppercase {
  text-transform: uppercase !important;
}

.text-capitalize {
  text-transform: capitalize !important;
}

.font-weight-normal {
  font-weight: normal;
}

.font-weight-bold {
  font-weight: bold;
}

.font-italic {
  font-style: italic;
}

.text-white {
  color: #fff !important;
}

.text-muted {
  color: #636c72 !important;
}

a.text-muted:focus, a.text-muted:hover {
  color: #4b5257 !important;
}

.text-primary {
  color: #0275d8 !important;
}

a.text-primary:focus, a.text-primary:hover {
  color: #025aa5 !important;
}

.text-success {
  color: #5cb85c !important;
}

a.text-success:focus, a.text-success:hover {
  color: #449d44 !important;
}

.text-info {
  color: #5bc0de !important;
}

a.text-info:focus, a.text-info:hover {
  color: #31b0d5 !important;
}

.text-warning {
  color: #f0ad4e !important;
}

a.text-warning:focus, a.text-warning:hover {
  color: #ec971f !important;
}

.text-danger {
  color: #d9534f !important;
}

a.text-danger:focus, a.text-danger:hover {
  color: #c9302c !important;
}

.text-gray-dark {
  color: #292b2c !important;
}

a.text-gray-dark:focus, a.text-gray-dark:hover {
  color: #101112 !important;
}

.text-hide {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

.invisible {
  visibility: hidden !important;
}

.hidden-xs-up {
  display: none !important;
}

@media (max-width: 575px) {
  .hidden-xs-down {
    display: none !important;
  }
}

@media (min-width: 576px) {
  .hidden-sm-up {
    display: none !important;
  }
}

@media (max-width: 767px) {
  .hidden-sm-down {
    display: none !important;
  }
}

@media (min-width: 768px) {
  .hidden-md-up {
    display: none !important;
  }
}

@media (max-width: 991px) {
  .hidden-md-down {
    display: none !important;
  }
}

@media (min-width: 992px) {
  .hidden-lg-up {
    display: none !important;
  }
}

@media (max-width: 1199px) {
  .hidden-lg-down {
    display: none !important;
  }
}

@media (min-width: 1200px) {
  .hidden-xl-up {
    display: none !important;
  }
}

.hidden-xl-down {
  display: none !important;
}

.visible-print-block {
  display: none !important;
}

@media print {
  .visible-print-block {
    display: block !important;
  }
}

.visible-print-inline {
  display: none !important;
}

@media print {
  .visible-print-inline {
    display: inline !important;
  }
}

.visible-print-inline-block {
  display: none !important;
}

@media print {
  .visible-print-inline-block {
    display: inline-block !important;
  }
}

@media print {
  .hidden-print {
    display: none !important;
  }
}
/*# sourceMappingURL=bootstrap.css.map */