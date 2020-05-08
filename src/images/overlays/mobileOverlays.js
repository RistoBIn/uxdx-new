import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

export function EllipseLeftToRightBottom (fill) {
  const svg = (
    <svg width='360' height='79' viewBox='0 0 360 79' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M0 79V0C28.78 12.0601 79.4578 34.6113 123.003 44.5393C159.666 52.8983 205.339 57.5144 248.133 58.263C282.369 58.8618 336.976 56.1836 360 54.7697V79H0Z' fill={fill} />
    </svg>
  )
  const svgString = encodeURIComponent(renderToStaticMarkup(svg))
  return `url("data:image/svg+xml,${svgString}")`
};
export function EllipseLeftToRightTop (fill, Topcolor) {
  Topcolor = Topcolor || fill
  const svg = (
    <svg width='360' height='84' viewBox='0 0 360 84' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M360 0V84C343.614 74.6918 317.846 64.2516 282.571 51.2956C247.297 38.3396 203.892 30.4151 150.354 23.4969C107.525 17.9623 32.2724 19.0105 3.05176e-05 20.2264V0H360Z' fill={Topcolor} />
    </svg>
  )
  const svgString = encodeURIComponent(renderToStaticMarkup(svg))
  return `url("data:image/svg+xml,${svgString}")`
};
export function EllipseRightToLeftBottom (fill) {
  const svg = (
    <svg width='360' height='85' viewBox='0 0 360 85' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M360 85V0C331.22 12.0601 280.542 34.6113 236.997 44.5393C200.334 52.8983 154.661 57.5144 111.867 58.263C77.6309 58.8618 23.024 56.1836 0 54.7697V85H360Z' fill={fill} />
    </svg>
  )
  const svgString = encodeURIComponent(renderToStaticMarkup(svg))
  return `url("data:image/svg+xml,${svgString}")`
};
export function EllipseRightToLeftTop (fill, Topcolor) {
  Topcolor = Topcolor || fill
  const svg = (
    <svg width='360' height='91' viewBox='0 0 360 91' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M0 0.5V91C16.3864 81.6918 42.1543 71.2516 77.4288 58.2956C112.703 45.3396 156.108 37.4151 209.646 30.4969C252.475 24.9623 327.728 26.0105 360 27.2264V0.5H0Z' fill={Topcolor} />
    </svg>
  )
  const svgString = encodeURIComponent(renderToStaticMarkup(svg))
  return `url("data:image/svg+xml,${svgString}")`
};
export function ReduceLeftToRightBottom (fill) {
  const svg = (
    <svg width='358' height='82' viewBox='0 0 358 82' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M358 50.1465V0C314.617 15.6152 256.691 28.3105 215.67 36.0547C174.649 43.7988 105.535 48.623 97.3313 49.0039C89.1271 49.3848 62.8986 49.8926 38.1618 49.6387C18.3724 49.4355 4.47501 47.7767 0 46.9727V81.5H358V50.1465Z' fill={fill} />
    </svg>
  )
  const svgString = encodeURIComponent(renderToStaticMarkup(svg))
  return `url("data:image/svg+xml,${svgString}")`
};
export function ReduceLeftToRightTop (fill, Topcolor) {
  Topcolor = Topcolor || fill
  const svg = (
    <svg width='360' height='94' viewBox='0 0 360 94' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M360 94L359.751 0H0V20.7388L20.884 26.8952C71.7265 43.3943 213.688 72.4526 240.041 77.2546C284.917 85.4316 329.047 89.8547 360 94Z' fill={Topcolor} />
    </svg>
  )
  const svgString = encodeURIComponent(renderToStaticMarkup(svg))
  return `url("data:image/svg+xml,${svgString}")`
};
export function ReduceRightToLeftBottom (fill) {
  const svg = (
    <svg width='358' height='73' viewBox='0 0 358 73' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M0 50.1465V0C43.3826 15.6152 101.309 28.3105 142.33 36.0547C183.351 43.7988 252.465 48.623 260.669 49.0039C268.873 49.3848 295.101 49.8926 319.838 49.6387C339.628 49.4355 353.525 47.7767 358 46.9727V72.5H0V50.1465Z' fill={fill} />
    </svg>
  )
  const svgString = encodeURIComponent(renderToStaticMarkup(svg))
  return `url("data:image/svg+xml,${svgString}")`
};
export function ReduceRightToLeftTop (fill, Topcolor) {
  Topcolor = Topcolor || fill
  const svg = (
    <svg width='360' height='91' viewBox='0 0 360 91' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M0 91V0H360V17.7388L339.116 23.8952C288.273 40.3943 146.312 69.4526 119.959 74.2546C75.0829 82.4316 30.953 86.8547 0 91Z' fill={Topcolor} />
    </svg>
  )
  const svgString = encodeURIComponent(renderToStaticMarkup(svg))
  return `url("data:image/svg+xml,${svgString}")`
};
export function HeaderOverlay1 (fill) {
  const svg = (
    <svg width='1440' height='704' viewBox='0 0 1440 704' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M271.3 505.9L0.0999756 167.1V703.5H720.1H1440.1V489.7C1417.8 502.6 1381.6 509.9 1366.3 511.9C1132.3 547.5 655.5 620 620.4 624.8C576.5 630.8 536.6 634.9 496.7 628.8C456.8 622.7 428.9 614.7 377 592.5C335.5 574.8 289.3 527.4 271.3 505.9Z' fill={fill} />
      <path d='M345.5 596.9C246.9 596.9 148.1 547.2 81.7 462.2L0.0999756 356.3V349.6L84.9 459.7C157.9 553 267.9 602.1 374.4 591.4L381.4 594.4C370.4 595.6 356.5 596.9 345.5 596.9Z' fill='#0073B4' />
      <path d='M269.3 503.3C208.8 488.6 141.9 420.8 111 383L0.0999756 241.4V234.6L114.2 380.6C144.7 418 210.2 483.8 265.4 498.6L269.3 503.3Z' fill='#B890FF' />
      <path d='M319.9 554.6C229.8 548.9 137.5 454.2 101.3 404.3L0 270.7L0.1 257.5L107.8 399.5C143.3 448.4 230.3 534.7 310.7 546.3L319.9 554.6Z' fill='#B890FF' />
      <path d='M709.2 684.5C691.8 684.5 671.6 683.1 650.8 679.5C619.5 674 577.3 661 548.3 631.8L558.5 631.4C608.5 677.9 704.8 680.4 746.1 674C861.2 656.1 982.5 635.5 1099.8 615.6C1217.7 595.5 1324.3 577.2 1440 559.3V567.5C1324.4 585.4 1219.1 603.6 1101.2 623.6C983.9 643.6 862.5 664.2 747.4 682C737.5 683.4 724.4 684.5 709.2 684.5Z' fill='#1CBBFF' />
    </svg>
  )
  const svgString = encodeURIComponent(renderToStaticMarkup(svg))
  return `url("data:image/svg+xml,${svgString}")`
};
export function HeaderOverlay2 (fill) {
  const svg = (
    <svg width='1440' height='519' viewBox='0 0 1440 519' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M1168.8 336.6L1440 0.600006V519H0V320.6C22.4 333.4 58.8 340.6 73.6 342.6C307.6 377.8 784.4 449.8 819.6 454.6C863.6 460.6 903.2 464.6 943.2 458.6C983.2 452.6 1011.2 444.6 1062.8 422.6C1104.4 405 1150.8 357.8 1168.8 336.6Z' fill={fill} />
      <path d='M1098.4 423C1087.6 423 1078.4 421.8 1067.6 420.6L1073.2 417.8C1176 427.8 1286 379.4 1359.2 287L1440 183V189.4L1362.4 289.4C1296 373.4 1197.2 423 1098.4 423Z' fill='#0073B4' />
      <path d='M1174.8 329L1178.4 324.6C1233.2 311 1299.6 245 1330.4 207.8L1440 69V75.4L1333.2 210.6C1302 248.2 1232.4 317.8 1174.8 329Z' fill='#B890FF' />
      <path d='M1124.8 381L1134.8 371.8C1173.2 363 1204.4 351.4 1249.6 316.2C1287.6 286.6 1319.2 250.6 1336.4 227.4L1440 91.4V104.6L1342.8 231.8C1306.8 281.4 1217.6 374.2 1124.8 381Z' fill='#B890FF' />
      <path d='M742.8 510.2C724.8 510.2 708.8 509 696.8 507C578 489 452.8 467.8 332 447.4C217.6 428.2 112 410.2 0 393V385C112 402.2 218.8 420.6 332.8 439.8C454 460.2 578.8 481.4 697.6 499.4C718.8 502.6 754 504.6 789.6 499C831.6 492.6 860.4 478.6 882.4 461.4L893.2 461.8C855.2 499.4 791.6 510.2 742.8 510.2Z' fill='#1CBBFF' />
    </svg>
  )
  const svgString = encodeURIComponent(renderToStaticMarkup(svg))
  return `url("data:image/svg+xml,${svgString}")`
};
