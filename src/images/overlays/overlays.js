import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

export function EllipseLeftToRightBottom (fill) {
  const svg = (
    <svg width='1439' height='240' viewBox='0 0 1439 240' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M0 240V0C115 34.4725 317.5 98.9325 491.5 127.311C638 151.204 820.5 164.398 991.5 166.538C1128.3 168.25 1346.5 160.594 1438.5 156.553V240H0Z' fill={fill} />
    </svg>
  )
  const svgString = encodeURIComponent(renderToStaticMarkup(svg))
  return `url("data:image/svg+xml,${svgString}")`
};
export function EllipseLeftToRightTop (fill, Topcolor) {
  Topcolor = Topcolor || fill
  const svg = (
    <svg width='1439' height='238' viewBox='0 0 1439 238' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M1439 0V238C1373.5 213.333 1270.5 185.667 1129.5 151.333C988.5 117 815 96 601 77.6667C429.8 63 129 65.7778 0 69V0H1439Z' fill={Topcolor} />
    </svg>
  )
  const svgString = encodeURIComponent(renderToStaticMarkup(svg))
  return `url("data:image/svg+xml,${svgString}")`
};
export function EllipseRightToLeftBottom (fill) {
  const svg = (
    <svg width='1440' height='240' viewBox='0 0 1440 240' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0)'>
        <path d='M1440 149.527V0C1294.83 49.8423 898.9 149.527 476.5 149.527H0.5V240H1440V149.527Z' fill={fill} />
      </g>
      <defs>
        <clipPath id='clip0'>
          <rect width='1440' height='240' transform='matrix(-1 0 0 1 1440 0)' fill={fill} />
        </clipPath>
      </defs>
    </svg>
  )
  const svgString = encodeURIComponent(renderToStaticMarkup(svg))
  return `url("data:image/svg+xml,${svgString}")`
};
export function EllipseRightToLeftTop (fill, Topcolor) {
  Topcolor = Topcolor || fill
  const svg = (
    <svg width='1439' height='240' viewBox='0 0 1439 240' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M0 0V240C65.5 215.968 168.5 189.012 309.5 155.562C450.5 122.111 624 101.651 838 83.7889C1009.2 69.4993 1310 72.2057 1439 75.3451V0H0Z' fill={Topcolor} />
    </svg>
  )
  const svgString = encodeURIComponent(renderToStaticMarkup(svg))
  return `url("data:image/svg+xml,${svgString}")`
};
export function ReduceLeftToRightBottom (fill) {
  const svg = (
    <svg width='1438' height='240' viewBox='0 0 1438 240' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M1439.85 149.527V0C1294.68 49.8423 898.747 149.527 476.347 149.527H0.34668V240H1439.85V149.527Z' fill={fill} />
    </svg>
  )
  const svgString = encodeURIComponent(renderToStaticMarkup(svg))
  return `url("data:image/svg+xml,${svgString}")`
};
export function ReduceLeftToRightTop (fill, Topcolor) {
  Topcolor = Topcolor || fill
  const svg = (
    <svg width='1440' height='240' viewBox='0 0 1440 240' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M1444 237.5V8.2016e-05L-3 0V84.1742C687.4 232.314 1249.33 248.116 1444 237.5Z' fill={fill} />
    </svg>
  )
  const svgString = encodeURIComponent(renderToStaticMarkup(svg))
  return `url("data:image/svg+xml,${svgString}")`
};
export function ReduceRightToLeftBottom (fill) {
  const svg = (
    <svg width='1440' height='240' viewBox='0 0 1440 240' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M0 149.527V0C145.167 49.8423 541.1 149.527 963.5 149.527H1439.5V240H0V149.527Z' fill={fill} />
    </svg>
  )
  const svgString = encodeURIComponent(renderToStaticMarkup(svg))
  return `url("data:image/svg+xml,${svgString}")`
};
export function ReduceRightToLeftTop (fill, Topcolor) {
  Topcolor = Topcolor || fill
  const svg = (
    <svg width='1440' height='240' viewBox='0 0 1440 240' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M-3 237.5V8.2016e-05L1444 0V84.1742C753.6 232.314 191.667 248.116 -3 237.5Z' fill={Topcolor} />
    </svg>
  )
  const svgString = encodeURIComponent(renderToStaticMarkup(svg))
  return `url("data:image/svg+xml,${svgString}")`
};
export function HeaderOverlay1 (fill) {
  const svg = (
    <svg width='1440' height='524' viewBox='0 0 1440 524' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0)'>
        <path d='M1440 523.2V0C1375.6 85 1258.3 279.5 1176.3 385.5C1102.9 480.4 1001.3 491.2 962.5 486.5L665.3 466C619 461.7 505.9 451.8 423.6 447C320.7 441 316.7 440.5 249.8 412C196.3 389.2 154.2 334.8 139.9 310.5L0 42.5V523.2H1440Z' fill={fill} />
        <path d='M1338.3 327.8C1363.8 275 1376.7 248 1390.4 219.4C1403 193 1416.2 165.8 1440 116.2V113.9L1438.2 113C1413.7 163.8 1400.5 191.4 1387.7 218.1C1374 246.7 1361 273.7 1335.6 326.5C1329.5 339.1 1322.1 350.7 1313.5 361.3C1317.3 358.3 1320.9 355.1 1324.4 351.8C1329.6 344.2 1334.3 336.2 1338.3 327.8Z' fill='#0073B4' />
        <path d='M121.1 431.8C156.9 486.3 217.5 519.1 280.9 519.1C284.1 519.1 287.3 519 290.5 518.8C408.1 512.6 595.7 502.8 713.3 496.6C730.5 496.4 767.3 491.7 796.9 475.1L791.3 474.7C763 489.2 729.3 493.5 713.2 493.6C595.5 499.8 408 509.6 290.3 515.8C224.5 519.2 160.7 486.4 123.6 430.1C90.7 380.1 73.4 353.5 56.7 327.8C41.8 304.9 26.5 281.3 0 241V246.4C24.9 284.4 39.8 307.2 54.2 329.4C70.9 355.2 88.2 381.8 121.1 431.8Z' fill='#0073B4' />
        <path d='M1187.1 425.8H1138.2C1137 426.8 1135.8 427.8 1134.7 428.8H1187.3C1233 426.4 1275.3 406.5 1306.1 374.3C1302.5 376.6 1298.8 378.8 1295 380.9C1265.6 407.4 1227.8 423.7 1187.1 425.8Z' fill='#0073B4' />
        <path d='M1304.1 372C1303.1 373 1302.1 374.1 1301.1 375.1C1304.7 372.9 1308.3 370.6 1311.8 368.1C1313.2 366.5 1314.6 364.9 1315.9 363.2C1312.1 366.3 1308.1 369.2 1304.1 372Z' fill='#0073B4' />
        <path d='M315.7 491.6C258.2 488.7 204.2 457.9 171.5 408.3C124.7 337.3 57.8 235.5 0 147.7V151.4C57.4 238.5 123.5 339 169.8 409.4C192.7 444.2 226.1 469.8 263.8 483.3C280.5 488.5 298 491.4 315.7 491.6Z' fill='#B890FF' />
        <path d='M1277.8 386.8C1261.5 394.3 1244 399.3 1225.8 401.6C1250.4 399.5 1273.9 392.3 1295 380.8C1298.8 378.8 1302.5 376.6 1306.1 374.2C1333.5 356.7 1356.1 331.7 1370.8 301.2C1395.8 249.5 1400.7 240.4 1405.4 231.7C1410.1 222.9 1415 213.9 1440 162L1438.2 161.1C1413.2 212.9 1408.3 222 1403.6 230.7C1398.9 239.5 1393.9 248.5 1369 300.3C1355.8 327.9 1335.9 350.9 1311.9 367.9C1308.4 370.4 1304.9 372.7 1301.2 374.9C1293.7 379.5 1285.9 383.5 1277.8 386.8Z' fill='#B890FF' />
        <path d='M1304.1 372C1308.2 369.2 1312.1 366.3 1315.9 363.2C1336 346.8 1352.7 326 1364.4 301.7C1389.7 249.3 1396.2 235.6 1403.2 221C1409.8 207.3 1416.5 193.1 1440 144.4V140.6L1438.8 140C1414.1 191.2 1407.2 205.8 1400.5 219.8C1393.5 234.3 1386.9 248.1 1361.7 300.5C1352.3 320 1339.6 337.3 1324.4 351.7C1320.9 355 1317.3 358.2 1313.5 361.2C1285.3 383.9 1250.4 397.8 1213.1 399.7L1162.2 402.2C1161.2 403.3 1160.3 404.3 1159.3 405.3L1213.3 402.5C1217.5 402.3 1221.7 401.9 1225.8 401.4C1244 399.2 1261.5 394.1 1277.8 386.6C1287 382.6 1295.8 377.6 1304.1 372Z' fill='#B890FF' />
        <path d='M317.5 494.6C320.6 494.6 323.7 494.5 326.8 494.3C440.9 488.3 622.8 478.8 737 472.8C739.6 472.6 743.6 472.3 748.3 471.7L728.3 470.3C613.8 476.3 438 485.5 326.7 491.4C323 491.6 319.3 491.7 315.7 491.6C298 491.4 280.5 488.5 263.9 483.2C224.2 470.6 188.9 444.5 165.1 408.2C120 339.9 56.3 243.1 0 157.7V163.1C55.6 247.6 118.2 342.7 162.5 410C197.2 462.8 256 494.6 317.5 494.6Z' fill='#B890FF' />
      </g>
      <defs>
        <clipPath id='clip0'>
          <rect width='1440' height='523.2' fill={fill} />
        </clipPath>
      </defs>
    </svg>
  )
  const svgString = encodeURIComponent(renderToStaticMarkup(svg))
  return `url("data:image/svg+xml,${svgString}")`
};
export function HeaderOverlay2 (fill) {
  const svg = (
    <svg width='1440' height='524' viewBox='0 0 1440 524' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0)'>
        <path d='M1440 523.2V42.5L1300.1 310.5C1285.8 334.8 1243.7 389.2 1190.2 412C1123.3 440.5 1119.3 441 1016.4 447C934.1 451.8 821 461.7 774.7 466L477.5 486.5C438.7 491.2 337.1 480.4 263.7 385.5C181.7 279.5 64.4 85 0 0V523.2H1440Z' fill={fill} />
        <path d='M101.7 327.8C76.2 275 63.3 248 49.6 219.4C37 193 23.8 165.8 0 116.2V113.9L1.8 113C26.3 163.8 39.5 191.4 52.3 218.1C66 246.7 79 273.7 104.4 326.5C110.5 339.1 117.9 350.7 126.5 361.3C122.7 358.3 119.1 355.1 115.6 351.8C110.4 344.2 105.7 336.2 101.7 327.8Z' fill='#0073B4' />
        <path d='M1318.9 431.8C1283.1 486.3 1222.5 519.1 1159.1 519.1C1155.9 519.1 1152.7 519 1149.5 518.8C1031.9 512.6 844.3 502.8 726.7 496.6C709.5 496.4 672.7 491.7 643.1 475.1L648.7 474.7C677 489.2 710.7 493.5 726.8 493.6C844.5 499.8 1032 509.6 1149.7 515.8C1215.5 519.2 1279.3 486.4 1316.4 430.1C1349.3 380.1 1366.6 353.5 1383.3 327.8C1398.2 304.9 1413.5 281.3 1440 241V246.4C1415.1 284.4 1400.2 307.2 1385.8 329.4C1369.1 355.2 1351.8 381.8 1318.9 431.8Z' fill='#0073B4' />
        <path d='M252.9 425.8H301.8C303 426.8 304.2 427.8 305.3 428.8H252.7C207 426.4 164.7 406.5 133.9 374.3C137.5 376.6 141.2 378.8 145 380.9C174.4 407.4 212.2 423.7 252.9 425.8Z' fill='#0073B4' />
        <path d='M135.9 372C136.9 373 137.9 374.1 138.9 375.1C135.3 372.9 131.7 370.6 128.2 368.1C126.8 366.5 125.4 364.9 124.1 363.2C127.9 366.3 131.9 369.2 135.9 372Z' fill='#0073B4' />
        <path d='M1124.3 491.6C1181.8 488.7 1235.8 457.9 1268.5 408.3C1315.3 337.3 1382.2 235.5 1440 147.7V151.4C1382.6 238.5 1316.5 339 1270.2 409.4C1247.3 444.2 1213.9 469.8 1176.2 483.3C1159.5 488.5 1142 491.4 1124.3 491.6Z' fill='#B890FF' />
        <path d='M162.2 386.8C178.5 394.3 196 399.3 214.2 401.6C189.6 399.5 166.1 392.3 145 380.8C141.2 378.8 137.5 376.6 133.9 374.2C106.5 356.7 83.9 331.7 69.2 301.2C44.2 249.5 39.3 240.4 34.6 231.7C30 223 25.1 214 0.0999756 162.1L1.89998 161.2C26.9 213 31.8 222.1 36.5 230.8C41.2 239.6 46.2 248.6 71.1 300.4C84.3 328 104.2 351 128.2 368C131.7 370.5 135.2 372.8 138.9 375C146.3 379.5 154.1 383.5 162.2 386.8Z' fill='#B890FF' />
        <path d='M135.9 372C131.8 369.2 127.9 366.3 124.1 363.2C104 346.8 87.3 326 75.6 301.7C50.3 249.3 43.8 235.6 36.8 221C30.2 207.3 23.5 193.1 0 144.4V140.6L1.2 140C25.9 191.2 32.8 205.8 39.5 219.8C46.5 234.3 53.1 248.1 78.3 300.5C87.7 320 100.4 337.3 115.6 351.7C119.1 355 122.7 358.2 126.5 361.2C154.7 383.9 189.6 397.8 226.9 399.7L277.8 402.2C278.8 403.3 279.7 404.3 280.7 405.3L226.7 402.5C222.5 402.3 218.3 401.9 214.2 401.4C196 399.2 178.5 394.1 162.2 386.6C153 382.6 144.2 377.6 135.9 372Z' fill='#B890FF' />
        <path d='M1122.5 494.6C1119.4 494.6 1116.3 494.5 1113.2 494.3C999.1 488.3 817.2 478.8 703 472.8C700.4 472.6 696.4 472.3 691.7 471.7L711.7 470.3C826.2 476.3 1002 485.5 1113.3 491.4C1117 491.6 1120.7 491.7 1124.3 491.6C1142 491.4 1159.5 488.5 1176.1 483.2C1215.8 470.6 1251.1 444.5 1274.9 408.2C1319.9 339.8 1383.6 243 1439.9 157.6V163C1384.3 247.5 1321.7 342.5 1277.4 409.9C1242.8 462.8 1184 494.6 1122.5 494.6Z' fill='#B890FF' />
      </g>
      <defs>
        <clipPath id='clip0'>
          <rect width='1440' height='523.2' fill={fill} />
        </clipPath>
      </defs>
    </svg>
  )
  const svgString = encodeURIComponent(renderToStaticMarkup(svg))
  return `url("data:image/svg+xml,${svgString}")`
};
