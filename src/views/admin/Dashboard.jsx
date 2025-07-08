import { useEffect } from 'react';
// Import CSS directly in your component
import '/asset/css/plugin.min.css?url';
import '/asset/css/style.css?url';

export default function Dashboard() {

    return (
        <>
            <meta charSet="UTF-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta httpEquiv="X-UA-Compatible" content="ie=edge"></meta>
            <title>StrikingDash</title>

            {/* <link rel="stylesheet" href="asset/css/plugin.min.css"></link>

            <link rel="stylesheet" href="asset/css/style.css"></link> */}

            <link rel="icon" type="image/png" sizes="16x16" href="asset/img/favicon.png"></link>

            <div className="layout-light side-menu overlayScroll">
                <div className="mobile-search">
                    <form className="search-form">
                        <span data-feather="search"></span>
                        <input className="form-control mr-sm-2 box-shadow-none" type="text" placeholder="Search..."></input>
                    </form>
                </div>

                <div className="mobile-author-actions"></div>

                {/* Header */}

                <main className="main-content">
                    {/* sidebar */}

                    <div className="contents">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="breadcrumb-main">
                                        <h4 className="text-capitalize breadcrumb-title">Ecommerce Dashboard</h4>
                                        <div className="breadcrumb-action justify-content-center flex-wrap">
                                            <div className="action-btn">
                                                <div className="form-group mb-0">
                                                    <div className="input-container icon-left position-relative">
                                                        <span className="input-icon icon-left">
                                                            <span data-feather="calendar"></span>
                                                        </span>
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-default date-ranger"
                                                            name="date-ranger"
                                                            placeholder="Oct 30, 2019 - Nov 30, 2019"
                                                        ></input>
                                                        <span className="input-icon icon-right">
                                                            <span data-feather="chevron-down"></span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown action-btn">
                                                <button
                                                    className="btn btn-sm btn-default btn-white dropdown-toggle"
                                                    type="button"
                                                    id="dropdownMenu2"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    <i className="la la-download"></i> Export
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                                    <span className="dropdown-item">Export With</span>
                                                    <div className="dropdown-divider"></div>
                                                    <a href="" className="dropdown-item">
                                                        <i className="la la-print"></i> Printer
                                                    </a>
                                                    <a href="" className="dropdown-item">
                                                        <i className="la la-file-pdf"></i> PDF
                                                    </a>
                                                    <a href="" className="dropdown-item">
                                                        <i className="la la-file-text"></i> Google Sheets
                                                    </a>
                                                    <a href="" className="dropdown-item">
                                                        <i className="la la-file-excel"></i> Excel (XLSX)
                                                    </a>
                                                    <a href="" className="dropdown-item">
                                                        <i className="la la-file-csv"></i> CSV
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="dropdown action-btn">
                                                <button
                                                    className="btn btn-sm btn-default btn-white dropdown-toggle"
                                                    type="button"
                                                    id="dropdownMenu3"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    <i className="la la-share"></i> Share
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenu3">
                                                    <span className="dropdown-item">Share Link</span>
                                                    <div className="dropdown-divider"></div>
                                                    <a href="" className="dropdown-item">
                                                        <i className="la la-facebook"></i> Facebook
                                                    </a>
                                                    <a href="" className="dropdown-item">
                                                        <i className="la la-twitter"></i> Twitter
                                                    </a>
                                                    <a href="" className="dropdown-item">
                                                        <i className="la la-google"></i> Google
                                                    </a>
                                                    <a href="" className="dropdown-item">
                                                        <i className="la la-feed"></i> Feed
                                                    </a>
                                                    <a href="" className="dropdown-item">
                                                        <i className="la la-instagram"></i> Instagram
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="action-btn">
                                                <a href="" className="btn btn-sm btn-primary btn-add">
                                                    <i className="la la-plus"></i> Add New
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-md-6 col-ssm-12 mb-30">
                                    <div className="ap-po-details radius-xl d-flex justify-content-between bg-white p-25">
                                        <div>
                                            <div className="overview-content">
                                                <h1>7,461</h1>
                                                <p>Orders</p>
                                                <div className="ap-po-details-time">
                                                    <span className="color-success">
                                                        <i className="las la-arrow-up"></i>
                                                        <strong>25%</strong>
                                                    </span>
                                                    <small>Since last week</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ap-po-timeChart">
                                            <div className="overview-single__chart d-md-flex align-items-end">
                                                <div className="parentContainer">
                                                    <div>
                                                        <canvas id="mychart8"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-md-6 col-ssm-12 mb-30">
                                    <div className="ap-po-details radius-xl d-flex justify-content-between bg-white p-25">
                                        <div>
                                            <div className="overview-content">
                                                <h1>$28,947</h1>
                                                <p>Revenue</p>
                                                <div className="ap-po-details-time">
                                                    <span className="color-success">
                                                        <i className="las la-arrow-up"></i>
                                                        <strong>25%</strong>
                                                    </span>
                                                    <small>Since last week</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ap-po-timeChart">
                                            <div className="overview-single__chart d-md-flex align-items-end">
                                                <div className="parentContainer">
                                                    <div>
                                                        <canvas id="mychart9"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-md-6 col-ssm-12 mb-30">
                                    <div className="ap-po-details radius-xl d-flex justify-content-between bg-white p-25">
                                        <div>
                                            <div className="overview-content">
                                                <h1>$3,241</h1>
                                                <p>Avg. Order Value</p>
                                                <div className="ap-po-details-time">
                                                    <span className="color-danger">
                                                        <i className="las la-arrow-down"></i>
                                                        <strong>25%</strong>
                                                    </span>
                                                    <small>Since last week</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ap-po-timeChart">
                                            <div className="overview-single__chart d-md-flex align-items-end">
                                                <div className="parentContainer">
                                                    <div>
                                                        <canvas id="mychart10"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-md-6 col-ssm-12 mb-30">
                                    <div className="ap-po-details radius-xl d-flex justify-content-between bg-white p-25">
                                        <div>
                                            <div className="overview-content">
                                                <h1>45.32k</h1>
                                                <p>Unique visitors</p>
                                                <div className="ap-po-details-time">
                                                    <span className="color-success">
                                                        <i className="las la-arrow-up"></i>
                                                        <strong>35%</strong>
                                                    </span>
                                                    <small>Since last week</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ap-po-timeChart">
                                            <div className="overview-single__chart d-md-flex align-items-end">
                                                <div className="parentContainer">
                                                    <div>
                                                        <canvas id="mychart11"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-6 mb-30">
                                    <div className="card broder-0">
                                        <div className="card-header">
                                            <h6>Total Revenue</h6>
                                            <div className="card-extra">
                                                <ul className="card-tab-links nav-tabs nav mr-3" role="tablist">
                                                    <li>
                                                        <a
                                                            href="#tl_revenue-week"
                                                            data-toggle="tab"
                                                            id="tl_revenue-week-tab"
                                                            role="tab"
                                                            aria-selected="false"
                                                        >
                                                            Week
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#tl_revenue-month"
                                                            data-toggle="tab"
                                                            id="tl_revenue-month-tab"
                                                            role="tab"
                                                            aria-selected="false"
                                                        >
                                                            Month
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="active"
                                                            href="#tl_revenue-year"
                                                            data-toggle="tab"
                                                            id="tl_revenue-year-tab"
                                                            role="tab"
                                                            aria-selected="true"
                                                        >
                                                            Year
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className="dropdown dropleft">
                                                    <a
                                                        href="#"
                                                        role="button"
                                                        id="revenue1"
                                                        data-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <span data-feather="more-horizontal"></span>
                                                    </a>
                                                    <div className="dropdown-menu" aria-labelledby="revenue1">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Something else here
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-body pt-0">
                                            <div className="tab-content">
                                                <div
                                                    className="tab-pane fade"
                                                    id="tl_revenue-week"
                                                    role="tabpanel"
                                                    aria-labelledby="tl_revenue-week-tab"
                                                >
                                                    <div className="revenue-labels">
                                                        <div>
                                                            <strong className="text-primary">$72,848</strong>
                                                            <span>Current Period</span>
                                                        </div>
                                                        <div>
                                                            <strong>$52,458</strong>
                                                            <span>Previous Period</span>
                                                        </div>
                                                    </div>

                                                    <div className="wp-chart">
                                                        <div className="parentContainer">
                                                            <div>
                                                                <canvas id="myChart6W"></canvas>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="tab-pane fade"
                                                    id="tl_revenue-month"
                                                    role="tabpanel"
                                                    aria-labelledby="tl_revenue-month-tab"
                                                >
                                                    <div className="revenue-labels">
                                                        <div>
                                                            <strong className="text-primary">$72,848</strong>
                                                            <span>Current Period</span>
                                                        </div>
                                                        <div>
                                                            <strong>$52,458</strong>
                                                            <span>Previous Period</span>
                                                        </div>
                                                    </div>

                                                    <div className="wp-chart">
                                                        <div className="parentContainer">
                                                            <div>
                                                                <canvas id="myChart6M"></canvas>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="tab-pane fade active show"
                                                    id="tl_revenue-year"
                                                    role="tabpanel"
                                                    aria-labelledby="tl_revenue-year-tab"
                                                >
                                                    <div className="revenue-labels">
                                                        <div>
                                                            <strong className="text-primary">$72,848</strong>
                                                            <span>Current Period</span>
                                                        </div>
                                                        <div>
                                                            <strong>$52,458</strong>
                                                            <span>Previous Period</span>
                                                        </div>
                                                    </div>

                                                    <div className="wp-chart">
                                                        <div className="parentContainer">
                                                            <div>
                                                                <canvas id="myChart6"></canvas>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-6 mb-30">
                                    <div className="card border-0">
                                        <div className="card-header">
                                            <h6>Source of Revenue Generated</h6>
                                            <div className="card-extra">
                                                <ul className="card-tab-links nav-tabs nav mr-3">
                                                    <li>
                                                        <a
                                                            href="#s_revenue-today"
                                                            className="active"
                                                            data-toggle="tab"
                                                            id="s_revenue-today-tab"
                                                            role="tab"
                                                            area-controls="s_revenue-table"
                                                            aria-selected="true"
                                                        >
                                                            Today
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#s_revenue-week"
                                                            data-toggle="tab"
                                                            id="s_revenue-week-tab"
                                                            role="tab"
                                                            area-controls="s_revenue-table"
                                                            aria-selected="false"
                                                        >
                                                            Week
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#s_revenue-month"
                                                            data-toggle="tab"
                                                            id="s_revenue-month-tab"
                                                            role="tab"
                                                            area-controls="s_revenue-table"
                                                            aria-selected="false"
                                                        >
                                                            Month
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#s_revenue-year"
                                                            data-toggle="tab"
                                                            id="s_revenue-year-tab"
                                                            role="tab"
                                                            area-controls="s_revenue-table"
                                                            aria-selected="false"
                                                        >
                                                            Year
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className="dropdown dropleft">
                                                    <a
                                                        href="#"
                                                        role="button"
                                                        id="action"
                                                        data-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <span data-feather="more-horizontal"></span>
                                                    </a>
                                                    <div className="dropdown-menu" aria-labelledby="action">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Something else here
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body p-0">
                                            <div className="tab-content">
                                                <div
                                                    className="tab-pane fade active show"
                                                    id="s_revenue-today"
                                                    role="tabpanel"
                                                    aria-labelledby="s_revenue-today-tab"
                                                >
                                                    <div className="table-responsive table-revenue">
                                                        <table className="table--default table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Name of Source</th>
                                                                    <th>Visitors</th>
                                                                    <th>Page View</th>
                                                                    <th>Revenue</th>
                                                                    <th>Trend</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Direct</td>
                                                                    <td>3,256</td>
                                                                    <td>12,156</td>
                                                                    <td>$2,225</td>
                                                                    <td>
                                                                        <div className="d-flex justify-content-end">
                                                                            <canvas id="lineChartSm1"></canvas>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Email</td>
                                                                    <td>4,658</td>
                                                                    <td>21,584</td>
                                                                    <td>$9,753</td>
                                                                    <td>
                                                                        <div className="d-flex justify-content-end">
                                                                            <canvas id="lineChartSm2"></canvas>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Organic Search</td>
                                                                    <td>1,698</td>
                                                                    <td>7,956%</td>
                                                                    <td>1,159</td>
                                                                    <td>
                                                                        <div className="d-flex justify-content-end">
                                                                            <canvas id="lineChartSm3"></canvas>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Referral</td>
                                                                    <td>2,856</td>
                                                                    <td>8,256</td>
                                                                    <td>1,456</td>
                                                                    <td>
                                                                        <div className="d-flex justify-content-end">
                                                                            <canvas id="lineChartSm4"></canvas>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Social Media</td>
                                                                    <td>9,456</td>
                                                                    <td>36,478</td>
                                                                    <td>13,852</td>
                                                                    <td>
                                                                        <div className="d-flex justify-content-end">
                                                                            <canvas id="lineChartSm5"></canvas>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div
                                                    className="tab-pane fade"
                                                    id="s_revenue-week"
                                                    role="tabpanel"
                                                    aria-labelledby="s_revenue-week-tab"
                                                >
                                                    <div className="table-responsive table-revenue">
                                                        <table className="table--default table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Name of Source</th>
                                                                    <th>Visitors</th>
                                                                    <th>Page View</th>
                                                                    <th>Revenue</th>
                                                                    <th>Trend</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Direct</td>
                                                                    <td>3,256</td>
                                                                    <td>12,156</td>
                                                                    <td>$2,225</td>
                                                                    <td>
                                                                        <div className="d-flex justify-content-end">
                                                                            <canvas id="lineChartSm1"></canvas>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Email</td>
                                                                    <td>4,658</td>
                                                                    <td>21,584</td>
                                                                    <td>$9,753</td>
                                                                    <td>
                                                                        <div className="d-flex justify-content-end">
                                                                            <canvas id="lineChartSm2"></canvas>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Organic Search</td>
                                                                    <td>1,698</td>
                                                                    <td>7,956%</td>
                                                                    <td>1,159</td>
                                                                    <td>
                                                                        <div className="d-flex justify-content-end">
                                                                            <canvas id="lineChartSm3"></canvas>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Referral</td>
                                                                    <td>2,856</td>
                                                                    <td>8,256</td>
                                                                    <td>1,456</td>
                                                                    <td>
                                                                        <div className="d-flex justify-content-end">
                                                                            <canvas id="lineChartSm4"></canvas>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Social Media</td>
                                                                    <td>9,456</td>
                                                                    <td>36,478</td>
                                                                    <td>13,852</td>
                                                                    <td>
                                                                        <div className="d-flex justify-content-end">
                                                                            <canvas id="lineChartSm5"></canvas>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div
                                                    className="tab-pane fade"
                                                    id="s_revenue-month"
                                                    role="tabpanel"
                                                    aria-labelledby="s_revenue-month-tab"
                                                >
                                                    <div className="table-responsive table-revenue">
                                                        <table className="table--default table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Name of Source</th>
                                                                    <th>Visitors</th>
                                                                    <th>Page View</th>
                                                                    <th>Revenue</th>
                                                                    <th>Trend</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Direct</td>
                                                                    <td>3,256</td>
                                                                    <td>12,156</td>
                                                                    <td>$2,225</td>
                                                                    <td>
                                                                        <div className="d-flex justify-content-end">
                                                                            <canvas id="lineChartSm1"></canvas>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Email</td>
                                                                    <td>4,658</td>
                                                                    <td>21,584</td>
                                                                    <td>$9,753</td>
                                                                    <td>
                                                                        <div className="d-flex justify-content-end">
                                                                            <canvas id="lineChartSm2"></canvas>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Organic Search</td>
                                                                    <td>1,698</td>
                                                                    <td>7,956%</td>
                                                                    <td>1,159</td>
                                                                    <td>
                                                                        <div className="d-flex justify-content-end">
                                                                            <canvas id="lineChartSm3"></canvas>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Referral</td>
                                                                    <td>2,856</td>
                                                                    <td>8,256</td>
                                                                    <td>1,456</td>
                                                                    <td>
                                                                        <div className="d-flex justify-content-end">
                                                                            <canvas id="lineChartSm4"></canvas>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Social Media</td>
                                                                    <td>9,456</td>
                                                                    <td>36,478</td>
                                                                    <td>13,852</td>
                                                                    <td>
                                                                        <div className="d-flex justify-content-end">
                                                                            <canvas id="lineChartSm5"></canvas>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div
                                                    className="tab-pane fade"
                                                    id="s_revenue-year"
                                                    role="tabpanel"
                                                    aria-labelledby="s_revenue-year-tab"
                                                >
                                                    <div className="table-responsive table-revenue">
                                                        <table className="table--default table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Name of Source</th>
                                                                    <th>Visitors</th>
                                                                    <th>Page View</th>
                                                                    <th>Revenue</th>
                                                                    <th>Trend</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Direct</td>
                                                                    <td>3,256</td>
                                                                    <td>12,156</td>
                                                                    <td>$2,225</td>
                                                                    <td>
                                                                        <div className="d-flex justify-content-end">
                                                                            <canvas id="lineChartSm1"></canvas>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Email</td>
                                                                    <td>4,658</td>
                                                                    <td>21,584</td>
                                                                    <td>$9,753</td>
                                                                    <td>
                                                                        <div className="d-flex justify-content-end">
                                                                            <canvas id="lineChartSm2"></canvas>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Organic Search</td>
                                                                    <td>1,698</td>
                                                                    <td>7,956%</td>
                                                                    <td>1,159</td>
                                                                    <td>
                                                                        <div className="d-flex justify-content-end">
                                                                            <canvas id="lineChartSm3"></canvas>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Referral</td>
                                                                    <td>2,856</td>
                                                                    <td>8,256</td>
                                                                    <td>1,456</td>
                                                                    <td>
                                                                        <div className="d-flex justify-content-end">
                                                                            <canvas id="lineChartSm4"></canvas>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Social Media</td>
                                                                    <td>9,456</td>
                                                                    <td>36,478</td>
                                                                    <td>13,852</td>
                                                                    <td>
                                                                        <div className="d-flex justify-content-end">
                                                                            <canvas id="lineChartSm5"></canvas>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-4 mb-30">
                                    <div className="card border-0">
                                        <div className="card-header">
                                            <h6>Top Selling Products</h6>
                                            <div className="card-extra">
                                                <ul className="card-tab-links nav-tabs nav mr-3" role="tablist">
                                                    <li>
                                                        <a
                                                            className="active"
                                                            href="#t_selling-today"
                                                            data-toggle="tab"
                                                            id="t_selling-today-tab"
                                                            role="tab"
                                                            aria-selected="true"
                                                        >
                                                            Today
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#t_selling-week"
                                                            data-toggle="tab"
                                                            id="t_selling-week-tab"
                                                            role="tab"
                                                            aria-selected="true"
                                                        >
                                                            Week
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#t_selling-month"
                                                            data-toggle="tab"
                                                            id="t_selling-month-tab"
                                                            role="tab"
                                                            aria-selected="true"
                                                        >
                                                            Month
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#t_selling-year"
                                                            data-toggle="tab"
                                                            id="t_selling-year-tab"
                                                            role="tab"
                                                            aria-selected="true"
                                                        >
                                                            Year
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className="dropdown dropleft">
                                                    <a
                                                        href="#"
                                                        role="button"
                                                        id="todo12"
                                                        data-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <span data-feather="more-horizontal"></span>
                                                    </a>
                                                    <div className="dropdown-menu" aria-labelledby="todo12">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Something else here
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body p-0">
                                            <div className="tab-content">
                                                <div
                                                    className="tab-pane fade active show"
                                                    id="t_selling-today"
                                                    role="tabpanel"
                                                    aria-labelledby="t_selling-today-tab"
                                                >
                                                    <div className="selling-table-wrap">
                                                        <div className="table-responsive">
                                                            <table className="table--default table">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Prduct Name</th>
                                                                        <th>Price</th>
                                                                        <th>Sold</th>
                                                                        <th>Revenue</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>Samsung Galaxy S8 256GB</td>
                                                                        <td>$289</td>
                                                                        <td>339</td>
                                                                        <td>$60,258</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Half Sleeve Shirt</td>
                                                                        <td>$29</td>
                                                                        <td>136</td>
                                                                        <td>$2,483</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Marco Shoes</td>
                                                                        <td>$59</td>
                                                                        <td>448</td>
                                                                        <td>$19,758</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>15" Mackbook Pro</td>
                                                                        <td>$1,299</td>
                                                                        <td>159</td>
                                                                        <td>$197,458</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Apple iPhone X</td>
                                                                        <td>$899</td>
                                                                        <td>146</td>
                                                                        <td>115,254</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="tab-pane fade"
                                                    id="t_selling-week"
                                                    role="tabpanel"
                                                    aria-labelledby="t_selling-week-tab"
                                                >
                                                    <div className="selling-table-wrap">
                                                        <div className="table-responsive">
                                                            <table className="table--default table">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Prduct Name</th>
                                                                        <th>Price</th>
                                                                        <th>Sold</th>
                                                                        <th>Revenue</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>Samsung Galaxy S8 256GB</td>
                                                                        <td>$289</td>
                                                                        <td>339</td>
                                                                        <td>$60,258</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Half Sleeve Shirt</td>
                                                                        <td>$29</td>
                                                                        <td>136</td>
                                                                        <td>$2,483</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Marco Shoes</td>
                                                                        <td>$59</td>
                                                                        <td>448</td>
                                                                        <td>$19,758</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>15" Mackbook Pro</td>
                                                                        <td>$1,299</td>
                                                                        <td>159</td>
                                                                        <td>$197,458</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Apple iPhone X</td>
                                                                        <td>$899</td>
                                                                        <td>146</td>
                                                                        <td>115,254</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="tab-pane fade"
                                                    id="t_selling-month"
                                                    role="tabpanel"
                                                    aria-labelledby="t_selling-month-tab"
                                                >
                                                    <div className="selling-table-wrap">
                                                        <div className="table-responsive">
                                                            <table className="table--default table">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Prduct Name</th>
                                                                        <th>Price</th>
                                                                        <th>Sold</th>
                                                                        <th>Revenue</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>Samsung Galaxy S8 256GB</td>
                                                                        <td>$289</td>
                                                                        <td>339</td>
                                                                        <td>$60,258</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Half Sleeve Shirt</td>
                                                                        <td>$29</td>
                                                                        <td>136</td>
                                                                        <td>$2,483</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Marco Shoes</td>
                                                                        <td>$59</td>
                                                                        <td>448</td>
                                                                        <td>$19,758</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>15" Mackbook Pro</td>
                                                                        <td>$1,299</td>
                                                                        <td>159</td>
                                                                        <td>$197,458</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Apple iPhone X</td>
                                                                        <td>$899</td>
                                                                        <td>146</td>
                                                                        <td>115,254</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="tab-pane fade"
                                                    id="t_selling-year"
                                                    role="tabpanel"
                                                    aria-labelledby="t_selling-year-tab"
                                                >
                                                    <div className="selling-table-wrap">
                                                        <div className="table-responsive">
                                                            <table className="table--default table">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Prduct Name</th>
                                                                        <th>Price</th>
                                                                        <th>Sold</th>
                                                                        <th>Revenue</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>Samsung Galaxy S8 256GB</td>
                                                                        <td>$289</td>
                                                                        <td>339</td>
                                                                        <td>$60,258</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Half Sleeve Shirt</td>
                                                                        <td>$29</td>
                                                                        <td>136</td>
                                                                        <td>$2,483</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Marco Shoes</td>
                                                                        <td>$59</td>
                                                                        <td>448</td>
                                                                        <td>$19,758</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>15" Mackbook Pro</td>
                                                                        <td>$1,299</td>
                                                                        <td>159</td>
                                                                        <td>$197,458</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Apple iPhone X</td>
                                                                        <td>$899</td>
                                                                        <td>146</td>
                                                                        <td>115,254</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-4 mb-30">
                                    <div className="card border-0">
                                        <div className="card-header">
                                            <h6>Sales by Location</h6>
                                            <div className="card-extra">
                                                <ul className="card-tab-links nav-tabs nav mr-3">
                                                    <li>
                                                        <a
                                                            href="#sb_location-today"
                                                            className="active"
                                                            data-toggle="tab"
                                                            id="sb_location-today-tab"
                                                            role="tab"
                                                            area-controls="sb_location-table"
                                                            aria-selected="true"
                                                        >
                                                            Today
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#sb_location-week"
                                                            data-toggle="tab"
                                                            id="sb_location-week-tab"
                                                            role="tab"
                                                            area-controls="sb_location-table"
                                                            aria-selected="false"
                                                        >
                                                            Week
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#sb_location-month"
                                                            data-toggle="tab"
                                                            id="sb_location-month-tab"
                                                            role="tab"
                                                            area-controls="sb_location-table"
                                                            aria-selected="false"
                                                        >
                                                            Month
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#sb_location-year"
                                                            data-toggle="tab"
                                                            id="sb_location-year-tab"
                                                            role="tab"
                                                            area-controls="sb_location-table"
                                                            aria-selected="false"
                                                        >
                                                            Year
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className="dropdown dropleft">
                                                    <a
                                                        href="#"
                                                        role="button"
                                                        id="somethings"
                                                        data-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <span data-feather="more-horizontal"></span>
                                                    </a>
                                                    <div className="dropdown-menu" aria-labelledby="somethings">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Something else here
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="tab-content">
                                                <div
                                                    className="tab-pane fade active show"
                                                    id="sb_location-today"
                                                    role="tabpanel"
                                                    aria-labelledby="sb_location-today-tab"
                                                >
                                                    <div className="d-flex align-items-center justify-content-center">
                                                        <div className="regions-svg">
                                                            <div id="region-map"></div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="table-responsive table-top-location">
                                                            <table className="table--default table-borderless mb-0 table">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Top Location</th>
                                                                        <th>Order</th>
                                                                        <th>Revenue</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>United States</td>
                                                                        <td>457</td>
                                                                        <td>$26,457</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Australia</td>
                                                                        <td>658</td>
                                                                        <td>$44,658</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Canada</td>
                                                                        <td>698</td>
                                                                        <td>$101,698</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Japan</td>
                                                                        <td>856</td>
                                                                        <td>$2,856</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="tab-pane fade"
                                                    id="sb_location-week"
                                                    role="tabpanel"
                                                    aria-labelledby="sb_location-week-tab"
                                                >
                                                    <div className="d-flex align-items-center justify-content-center">
                                                        <div className="regions-svg">
                                                            <div id="region-map_W"></div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="table-responsive table-top-location">
                                                            <table className="table--default table-borderless mb-0 table">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Top Location</th>
                                                                        <th>Order</th>
                                                                        <th>Revenue</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>United States</td>
                                                                        <td>457</td>
                                                                        <td>$26,457</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Australia</td>
                                                                        <td>658</td>
                                                                        <td>$44,658</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Canada</td>
                                                                        <td>698</td>
                                                                        <td>$101,698</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Japan</td>
                                                                        <td>856</td>
                                                                        <td>$2,856</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="tab-pane fade"
                                                    id="sb_location-month"
                                                    role="tabpanel"
                                                    aria-labelledby="sb_location-month-tab"
                                                >
                                                    <div className="d-flex align-items-center justify-content-center">
                                                        <div className="regions-svg">
                                                            <div id="region-map_M"></div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="table-responsive table-top-location">
                                                            <table className="table--default table-borderless mb-0 table">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Top Location</th>
                                                                        <th>Order</th>
                                                                        <th>Revenue</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>United States</td>
                                                                        <td>457</td>
                                                                        <td>$26,457</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Australia</td>
                                                                        <td>658</td>
                                                                        <td>$44,658</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Canada</td>
                                                                        <td>698</td>
                                                                        <td>$101,698</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Japan</td>
                                                                        <td>856</td>
                                                                        <td>$2,856</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="tab-pane fade"
                                                    id="sb_location-year"
                                                    role="tabpanel"
                                                    aria-labelledby="sb_location-year-tab"
                                                >
                                                    <div className="d-flex align-items-center justify-content-center">
                                                        <div className="regions-svg">
                                                            <div id="region-map_Y"></div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="table-responsive table-top-location">
                                                            <table className="table--default table-borderless mb-0 table">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Top Location</th>
                                                                        <th>Order</th>
                                                                        <th>Revenue</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>United States</td>
                                                                        <td>457</td>
                                                                        <td>$26,457</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Australia</td>
                                                                        <td>658</td>
                                                                        <td>$44,658</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Canada</td>
                                                                        <td>698</td>
                                                                        <td>$101,698</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Japan</td>
                                                                        <td>856</td>
                                                                        <td>$2,856</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-4 mb-30">
                                    <div className="revenue-device-chart">
                                        <div className="card broder-0">
                                            <div className="card-header">
                                                <h6>Revenue By Device</h6>
                                                <div className="card-extra">
                                                    <ul className="card-tab-links nav-tabs nav" role="tablist">
                                                        <li>
                                                            <a
                                                                className="active"
                                                                href="#rb_device-today"
                                                                data-toggle="tab"
                                                                id="rb_device-today-tab"
                                                                role="tab"
                                                                aria-selected="true"
                                                            >
                                                                Today
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#rb_device-week"
                                                                data-toggle="tab"
                                                                id="rb_device-week-tab"
                                                                role="tab"
                                                                aria-selected="false"
                                                            >
                                                                Week
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="#rb_device-month"
                                                                data-toggle="tab"
                                                                id="rb_device-month-tab"
                                                                role="tab"
                                                                aria-selected="false"
                                                            >
                                                                Month
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="card-body">
                                                <div className="tab-content">
                                                    <div
                                                        className="tab-pane fade active show"
                                                        id="rb_device-today"
                                                        role="tabpanel"
                                                        aria-labelledby="rb_device-today-tab"
                                                    >
                                                        <div className="revenue-pieChart-wrap">
                                                            <div>
                                                                <canvas id="chartDoughnut3"></canvas>
                                                            </div>
                                                        </div>
                                                        <div className="revenue-chart-legend-list">
                                                            <div className="revenue-chart-legend d-flex justify-content-between">
                                                                <div className="revenue-chart-legend__label">
                                                                    <span className="label-dot dot-success"></span>
                                                                    <span>Desktop</span>
                                                                </div>
                                                                <div className="revenue-chart-legend__data">
                                                                    <span>$83</span>
                                                                </div>
                                                                <div className="revenue-chart-legend__percentage">
                                                                    <span>45%</span>
                                                                </div>
                                                            </div>

                                                            <div className="revenue-chart-legend d-flex justify-content-between">
                                                                <div className="revenue-chart-legend__label">
                                                                    <span className="label-dot dot-info"></span>
                                                                    <span>Mobile</span>
                                                                </div>
                                                                <div className="revenue-chart-legend__data">
                                                                    <span>$70</span>
                                                                </div>
                                                                <div className="revenue-chart-legend__percentage">
                                                                    <span>30%</span>
                                                                </div>
                                                            </div>

                                                            <div className="revenue-chart-legend d-flex justify-content-between">
                                                                <div className="revenue-chart-legend__label">
                                                                    <span className="label-dot dot-warning"></span>
                                                                    <span>Tablets</span>
                                                                </div>
                                                                <div className="revenue-chart-legend__data">
                                                                    <span>$20</span>
                                                                </div>
                                                                <div className="revenue-chart-legend__percentage">
                                                                    <span>25%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="tab-pane fade"
                                                        id="rb_device-week"
                                                        role="tabpanel"
                                                        aria-labelledby="rb_device-week-tab"
                                                    >
                                                        <div className="revenue-pieChart-wrap">
                                                            <div>
                                                                <canvas id="chartDoughnut3W"></canvas>
                                                            </div>
                                                        </div>
                                                        <div className="revenue-chart-legend-list">
                                                            <div className="revenue-chart-legend d-flex justify-content-between">
                                                                <div className="revenue-chart-legend__label">
                                                                    <span className="label-dot dot-success"></span>
                                                                    <span>Desktop</span>
                                                                </div>
                                                                <div className="revenue-chart-legend__data">
                                                                    <span>$483</span>
                                                                </div>
                                                                <div className="revenue-chart-legend__percentage">
                                                                    <span>45%</span>
                                                                </div>
                                                            </div>

                                                            <div className="revenue-chart-legend d-flex justify-content-between">
                                                                <div className="revenue-chart-legend__label">
                                                                    <span className="label-dot dot-info"></span>
                                                                    <span>Mobile</span>
                                                                </div>
                                                                <div className="revenue-chart-legend__data">
                                                                    <span>$870</span>
                                                                </div>
                                                                <div className="revenue-chart-legend__percentage">
                                                                    <span>30%</span>
                                                                </div>
                                                            </div>

                                                            <div className="revenue-chart-legend d-flex justify-content-between">
                                                                <div className="revenue-chart-legend__label">
                                                                    <span className="label-dot dot-warning"></span>
                                                                    <span>Tablets</span>
                                                                </div>
                                                                <div className="revenue-chart-legend__data">
                                                                    <span>$420</span>
                                                                </div>
                                                                <div className="revenue-chart-legend__percentage">
                                                                    <span>25%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="tab-pane fade"
                                                        id="rb_device-month"
                                                        role="tabpanel"
                                                        aria-labelledby="rb_device-month-tab"
                                                    >
                                                        <div className="revenue-pieChart-wrap">
                                                            <div>
                                                                <canvas id="chartDoughnut3M"></canvas>
                                                            </div>
                                                        </div>
                                                        <div className="revenue-chart-legend-list">
                                                            <div className="revenue-chart-legend d-flex justify-content-between">
                                                                <div className="revenue-chart-legend__label">
                                                                    <span className="label-dot dot-success"></span>
                                                                    <span>Desktop</span>
                                                                </div>
                                                                <div className="revenue-chart-legend__data">
                                                                    <span>$5,870</span>
                                                                </div>
                                                                <div className="revenue-chart-legend__percentage">
                                                                    <span>45%</span>
                                                                </div>
                                                            </div>

                                                            <div className="revenue-chart-legend d-flex justify-content-between">
                                                                <div className="revenue-chart-legend__label">
                                                                    <span className="label-dot dot-info"></span>
                                                                    <span>Mobile</span>
                                                                </div>
                                                                <div className="revenue-chart-legend__data">
                                                                    <span>$4,483</span>
                                                                </div>
                                                                <div className="revenue-chart-legend__percentage">
                                                                    <span>30%</span>
                                                                </div>
                                                            </div>

                                                            <div className="revenue-chart-legend d-flex justify-content-between">
                                                                <div className="revenue-chart-legend__label">
                                                                    <span className="label-dot dot-warning"></span>
                                                                    <span>Tablets</span>
                                                                </div>
                                                                <div className="revenue-chart-legend__data">
                                                                    <span>$2,420</span>
                                                                </div>
                                                                <div className="revenue-chart-legend__percentage">
                                                                    <span>25%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Footer */}
                </main>

                <div className="overlay-dark-sidebar"></div>
                <div className="customizer-overlay"></div>

                {/* <script src="asset/js/plugins.min.js"></script>
                <script src="asset/js/script.min.js"></script> */}
            </div>
        </>
    );
}
