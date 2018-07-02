import * as React from "react";

const HeatMap: React.SFC<object> = (props: object) => (
  <svg
    fill="currentColor"
    id="图层_1"
    viewBox="0 0 1024 1024"
    width="1em"
    height="1em"
    {...props}
  >
    <path className="st0" d="M482.6 648.3h58.8L512 597.6z" />
    <path
      className="st0"
      d="M325.7 744h372.6L512 422 325.7 744zm214-194.1l57 98.4C609 669.5 593.6 696 569 696H455c-24.6 0-39.9-26.5-27.7-47.7l57-98.4c6.1-10.6 16.9-15.9 27.7-15.9s21.5 5.3 27.7 15.9z"
    />
    <path
      className="st0"
      d="M165.3 832.1h693.4L512 231.9 165.3 832.1zM539.7 358l227.9 394c12.3 21.3-3.1 48-27.7 48H284.1c-24.7 0-40.1-26.7-27.7-48l227.9-394c6.2-10.7 17-16 27.7-16 10.8 0 21.6 5.3 27.7 16z"
    />
    <path d="M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-790.4-23.9L512 231.9 858.7 832H165.3z" />
    <path d="M484.3 358l-228 394c-12.3 21.3 3.1 48 27.7 48h455.8c24.7 0 40.1-26.7 27.7-48L539.7 358c-6.2-10.7-17-16-27.7-16-10.8 0-21.6 5.3-27.7 16zm214 386H325.7L512 422l186.3 322z" />
    <path d="M484.3 549.9l-57 98.4C415 669.5 430.4 696 455 696h114c24.6 0 39.9-26.5 27.7-47.7l-57-98.4c-6.1-10.6-16.9-15.9-27.7-15.9s-21.5 5.3-27.7 15.9zm57.1 98.4h-58.7l29.4-50.7 29.3 50.7z" />
  </svg>
);

HeatMap.displayName = "HeatMap";

export default HeatMap;