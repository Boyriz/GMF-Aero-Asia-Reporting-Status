<template>
    <div>
        <section class="section-details-header"></section>
        <section class="section-details-content">
            <div class="container">
                <div class="row">
                    <div class="col p-0 pl-3 pl-lg-0">
                        <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item" aria-current="page">
                            Time Controlled
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">
                            Non-Time Controlled
                            </li>
                        </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="row" id="textColor">
                <h1>NON-Time Controlled Database</h1>
            </div>
                <section class="section-table">
                <div class="container-fluid">
                    <div class="card card-details">
                        <div class="col-xs-6">
                            <h2 class="sub-header">RECENT DATA</h2>
                            <div class="form-group pull-right mb-0">
                                <input type="text" class="search form-control" placeholder="What you looking for?">
                            </div>
                            <span class="counter pull-right"></span>
                            <div class="table-responsive table-wrapper-scroll-y table-wrapper-scroll-x my-custom-scrollbar">
                            <table class="table table-striped table-hover table-bordered table-sm results display nowrap" cellspacing="0" width="100%">
                                <thead>
                                    <tr>
                                        <th class="active">
                                            <input type="checkbox" class="select-all checkbox" name="select-all">
                                        </th>
                                        <th class="th-sm">No.</th>
                                        <th class="th-sm">ATA</th>
                                        <th class="th-sm col-md-5 col-xs-5">MPD</th>
                                        <th class="th-sm">Doc.Type</th>
                                        <th class="th-sm col-md-2 col-xs-2">Document No.</th>
                                        <th class="th-sm col-md-3 col-xs-3">Doc. Part.</th>
                                        <th class="th-sm">Doc. Version</th>
                                        <th class="th-sm">Task</th>
                                        <th class="th-sm col-md-2 col-xs-2">Equpiment No.</th>
                                        <th class="th-sm col-md-3 col-xs-3">Part Number</th>
                                        <th class="th-sm col-md-2 col-xs-2">Serial Number</th>
                                        <th class="th-sm col-md-3 col-xs-3">Description</th>
                                        <th class="th-sm col-md-2 col-xs-2">Functional Location</th>
                                        <th class="th-sm col-md-2 col-xs-2">Interval(HRS)</th>
                                        <th class="th-sm col-md-3 col-xs-3">Interval(CYC)</th>
                                        <th class="th-sm col-md-3 col-xs-3">Interval(DAYS)</th>
                                        <th class="th-sm col-md-3 col-xs-3">Interval(LDG)</th>
                                        <th class="th-sm col-md-3 col-xs-3">TSN(HRS)</th>
                                        <th class="th-sm col-md-3 col-xs-3">TSN(CYC)</th>
                                        <th class="th-sm col-md-3 col-xs-3">TSN(DAYS)</th>
                                        <th class="th-sm col-md-3 col-xs-3">TSO(HRS)</th>
                                        <th class="th-sm col-md-3 col-xs-3">TSO(CYC)</th>
                                        <th class="th-sm col-md-3 col-xs-3">TSO(DAYS)</th>
                                        <th class="th-sm col-md-3 col-xs-3">TST(HRS)</th>
                                        <th class="th-sm col-md-3 col-xs-3">TST(CYC)</th>
                                        <th class="th-sm col-md-3 col-xs-3">TST(DAYS)</th>
                                        <th class="th-sm col-md-3 col-xs-3">TSI(HRS)</th>
                                        <th class="th-sm col-md-3 col-xs-3">TSI(CYC)</th>
                                        <th class="th-sm col-md-3 col-xs-3">TSI(DAYS)</th>
                                        <th class="th-sm col-md-3 col-xs-3">life Remaining</th>
                                        <th class="th-sm col-md-3 col-xs-3">Unit</th>
                                        <th class="th-sm col-md-3 col-xs-3">Notification No</th>
                                        <th class="th-sm col-md-3 col-xs-3">Maintenance Plan</th>
                                        <th class="th-sm col-md-3 col-xs-3">Maintenance Item</th>
                                        <th class="th-sm col-md-3 col-xs-3">Notification Type</th>
                                        <th class="th-sm col-md-3 col-xs-3">Maintenance plan cat</th>
                                        <th class="th-sm col-md-3 col-xs-3">Install Date</th>
                                        <th class="th-sm col-md-3 col-xs-3">Next Due</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="active">
                                        <input type="checkbox" class="select-item checkbox" name="select-item" value="1000">
                                        </td>
                                        <th scope="row">1</th>
                                        <td>21</td>
                                        <td>MPD 21-100-00,MRB 21-100-00</td>
                                        <td>AMI</td>
                                        <td>10000004904</td>
                                        <td>000</td>
                                        <td>01</td>
                                        <td>RST</td>
                                        <td>12326232</td>
                                        <td>2119160-3:64547</td>
                                        <td>2119160-01167</td>
                                        <td>VALVE AY, OUTFLOW VALVE ASSY</td>
                                        <td>PK-GIK.21.31.03.OV.AF</td>
                                        <td>7500</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>14958</td>
                                        <td>2255</td>
                                        <td></td>
                                        <td>14958</td>
                                        <td>2255</td>
                                        <td></td>
                                        <td>14958</td>
                                        <td>2255</td>
                                        <td>1886</td>
                                        <td>14958</td>
                                        <td>2255</td>
                                        <td>1882</td>
                                        <td>6785</td>
                                        <td>HRS</td>
                                        <td>19120131</td>
                                        <td>100000607838</td>
                                        <td>611759</td>
                                        <td>B6</td>
                                        <td>02</td>
                                        <td>11/17/2017</td>
                                        <td>6/16/2024</td>
                                    </tr>
                                    <tr>
                                        <td class="active">
                                        <input type="checkbox" class="select-item checkbox" name="select-item" value="1001">
                                        </td>
                                        <th scope="row">2</th>
                                        <td>21</td>
                                        <td>MPD 21-100-00,MRB 21-100-00</td>
                                        <td>AMI</td>
                                        <td>10000004904</td>
                                        <td>000</td>
                                        <td>01</td>
                                        <td>RST</td>
                                        <td>12258893</td>
                                        <td>2119160-3:64547</td>
                                        <td>2119160-01904</td>
                                        <td>VALVE , CAB. AIR</td>
                                        <td>PK-GIK.21.31.03.OV.FW</td>
                                        <td>7500</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>22173</td>
                                        <td>3178</td>
                                        <td>2549</td>
                                        <td>22173</td>
                                        <td>3178</td>
                                        <td>2549</td>
                                        <td>22173</td>
                                        <td>2349</td>
                                        <td>1986</td>
                                        <td>14858</td>
                                        <td>2205</td>
                                        <td>1812</td>
                                        <td>6766</td>
                                        <td>HRS</td>
                                        <td>19114131</td>
                                        <td>100070609838</td>
                                        <td>6207560</td>
                                        <td>B7</td>
                                        <td>08</td>
                                        <td>1/20/2016</td>
                                        <td>6/16/2024</td>
                                    </tr>
                                    <tr>
                                        <td class="active">
                                        <input type="checkbox" class="select-item checkbox" name="select-item" value="1002">
                                        </td>
                                        <th scope="row">3</th>
                                        <td>21</td>
                                        <td>MPD 21-100-00,MRB 21-100-00</td>
                                        <td>AMI</td>
                                        <td>10000004904</td>
                                        <td>000</td>
                                        <td>01</td>
                                        <td>RST</td>
                                        <td>12258893</td>
                                        <td>2119160-3:64547</td>
                                        <td>2119160-01904</td>
                                        <td>CONVERTR, OZONE</td>
                                        <td>PK-GIK.24.31.01.MB.01</td>
                                        <td>7500</td>
                                        <td></td>
                                        <td>4562</td>
                                        <td></td>
                                        <td>22173</td>
                                        <td>3178</td>
                                        <td>2549</td>
                                        <td>22173</td>
                                        <td>3178</td>
                                        <td>2549</td>
                                        <td>22173</td>
                                        <td>2349</td>
                                        <td>1986</td>
                                        <td>14858</td>
                                        <td>2205</td>
                                        <td>1812</td>
                                        <td>6766</td>
                                        <td>HRS</td>
                                        <td>19114131</td>
                                        <td>100070609838</td>
                                        <td>6207560</td>
                                        <td>B7</td>
                                        <td>08</td>
                                        <td>12/25/2018</td>
                                        <td>5/24/2023</td>
                                    </tr>
                                    <tr>
                                        <td class="active">
                                        <input type="checkbox" class="select-item checkbox" name="select-item" value="1003">
                                        </td>
                                        <th scope="row">4</th>
                                        <td>21</td>
                                        <td>CASR 91.207,MPD 23-110-00,MRB 23-110-00</td>
                                        <td>AMI</td>
                                        <td>10000004904</td>
                                        <td>000</td>
                                        <td>02</td>
                                        <td>FCN</td>
                                        <td>12258893</td>
                                        <td>2119160-3:64547</td>
                                        <td>2119160-01904</td>
                                        <td>FCDC BATTERY</td>
                                        <td>PK-GIK.21.31.03.OV.FW</td>
                                        <td>7500</td>
                                        <td></td>
                                        <td>1825</td>
                                        <td></td>
                                        <td>22173</td>
                                        <td>3178</td>
                                        <td>2549</td>
                                        <td>22173</td>
                                        <td>3178</td>
                                        <td>2549</td>
                                        <td>22173</td>
                                        <td>2349</td>
                                        <td>1986</td>
                                        <td>14858</td>
                                        <td>2205</td>
                                        <td>1812</td>
                                        <td>6766</td>
                                        <td>HRS</td>
                                        <td>19114131</td>
                                        <td>100070609838</td>
                                        <td>6207560</td>
                                        <td>B7</td>
                                        <td>08</td>
                                        <td>8/19/2021</td>
                                        <td>11/30/2023</td>
                                    </tr>
                                    <tr>
                                        <td class="active">
                                        <input type="checkbox" class="select-item checkbox" name="select-item" value="1001">
                                        </td>
                                        <th scope="row">5</th>
                                        <td>21</td>
                                        <td>MPD 21-100-00,MRB 21-100-00</td>
                                        <td>AMI</td>
                                        <td>10000004904</td>
                                        <td>000</td>
                                        <td>01</td>
                                        <td>FCN</td>
                                        <td>12258893</td>
                                        <td>2119160-3:64547</td>
                                        <td>2119160-01904</td>
                                        <td>UNDERWATER LOCATOR BEACON 90-DAYS</td>
                                        <td>PK-GIK.21.31.03.OV.FW</td>
                                        <td>7500</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>22173</td>
                                        <td>3178</td>
                                        <td>2549</td>
                                        <td>22173</td>
                                        <td>3178</td>
                                        <td>2549</td>
                                        <td>22173</td>
                                        <td>2349</td>
                                        <td>1986</td>
                                        <td>14858</td>
                                        <td>2205</td>
                                        <td>1812</td>
                                        <td>6766</td>
                                        <td>HRS</td>
                                        <td>19114131</td>
                                        <td>100070609838</td>
                                        <td>6207560</td>
                                        <td>B7</td>
                                        <td>08</td>
                                        <td>1/20/2016</td>
                                        <td>6/16/2024</td>
                                    </tr>
                                    <tr>
                                        <td class="active">
                                        <input type="checkbox" class="select-item checkbox" name="select-item" value="1001">
                                        </td>
                                        <th scope="row">6</th>
                                        <td>21</td>
                                        <td>MPD 21-100-00,MRB 21-100-00</td>
                                        <td>AMI</td>
                                        <td>10000004904</td>
                                        <td>000</td>
                                        <td>01</td>
                                        <td>RST</td>
                                        <td>12258893</td>
                                        <td>2119160-3:64547</td>
                                        <td>2119160-01904</td>
                                        <td>SMOKE HOOD - PBE</td>
                                        <td>PK-GIK.25.64.96.PB.OH.07</td>
                                        <td>7500</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>22173</td>
                                        <td>3178</td>
                                        <td>2549</td>
                                        <td>22173</td>
                                        <td>3178</td>
                                        <td>2549</td>
                                        <td>22173</td>
                                        <td>2349</td>
                                        <td>1986</td>
                                        <td>14858</td>
                                        <td>2205</td>
                                        <td>1812</td>
                                        <td>6766</td>
                                        <td>HRS</td>
                                        <td>19114131</td>
                                        <td>100070609838</td>
                                        <td>6207560</td>
                                        <td>B7</td>
                                        <td>08</td>
                                        <td>1/20/2016</td>
                                        <td>6/16/2024</td>
                                    </tr>
                                    <tr>
                                        <td class="active">
                                        <input type="checkbox" class="select-item checkbox" name="select-item" value="1001">
                                        </td>
                                        <th scope="row">7</th>
                                        <td>21</td>
                                        <td>HONEYWELL CMM 25-60-13</td>
                                        <td>AMI</td>
                                        <td>10000004904</td>
                                        <td>000</td>
                                        <td>01</td>
                                        <td>RST</td>
                                        <td>12258893</td>
                                        <td>2119160-3:64547</td>
                                        <td>2119160-01904</td>
                                        <td>VALVE , CAB. AIR</td>
                                        <td>PK-GIK.21.31.03.OV.FW</td>
                                        <td>7500</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>22173</td>
                                        <td>3178</td>
                                        <td>2549</td>
                                        <td>22173</td>
                                        <td>3178</td>
                                        <td>2549</td>
                                        <td>22173</td>
                                        <td>2349</td>
                                        <td>1986</td>
                                        <td>14858</td>
                                        <td>2205</td>
                                        <td>1812</td>
                                        <td>6766</td>
                                        <td>HRS</td>
                                        <td>19114131</td>
                                        <td>100070609838</td>
                                        <td>6207560</td>
                                        <td>B7</td>
                                        <td>08</td>
                                        <td>1/20/2016</td>
                                        <td>6/16/2024</td>
                                    </tr>
                                    <tr>
                                        <td class="active">
                                        <input type="checkbox" class="select-item checkbox" name="select-item" value="1001">
                                        </td>
                                        <th scope="row">8</th>
                                        <td>21</td>
                                        <td>MPD 21-150-00,MPD 21-160-00,MPD 21-170-00,MRB</td>
                                        <td>AMI</td>
                                        <td>10000004904</td>
                                        <td>000</td>
                                        <td>01</td>
                                        <td>RST</td>
                                        <td>12258893</td>
                                        <td>2119160-3:64547</td>
                                        <td>2119160-01904</td>
                                        <td>VALVE , CAB. AIR</td>
                                        <td>PK-GIK.21.31.03.OV.FW</td>
                                        <td>7500</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>22173</td>
                                        <td>3178</td>
                                        <td>2549</td>
                                        <td>22173</td>
                                        <td>3178</td>
                                        <td>2549</td>
                                        <td>22173</td>
                                        <td>2349</td>
                                        <td>1986</td>
                                        <td>14858</td>
                                        <td>2205</td>
                                        <td>1812</td>
                                        <td>6766</td>
                                        <td>HRS</td>
                                        <td>19114131</td>
                                        <td>100070609838</td>
                                        <td>6207560</td>
                                        <td>B7</td>
                                        <td>08</td>
                                        <td>1/20/2016</td>
                                        <td>6/16/2024</td>
                                    </tr>
                                    <tr>
                                        <td class="active">
                                        <input type="checkbox" class="select-item checkbox" name="select-item" value="1001">
                                        </td>
                                        <th scope="row">9</th>
                                        <td>21</td>
                                        <td>MPD 21-100-00,MRB 21-100-00</td>
                                        <td>AMI</td>
                                        <td>10000004904</td>
                                        <td>000</td>
                                        <td>01</td>
                                        <td>RST</td>
                                        <td>12258893</td>
                                        <td>2119160-3:64547</td>
                                        <td>2119160-01904</td>
                                        <td>VALVE , CAB. AIR</td>
                                        <td>PK-GIK.21.31.03.OV.FW</td>
                                        <td>7500</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>22173</td>
                                        <td>3178</td>
                                        <td>2549</td>
                                        <td>22173</td>
                                        <td>3178</td>
                                        <td>2549</td>
                                        <td>22173</td>
                                        <td>2349</td>
                                        <td>1986</td>
                                        <td>14858</td>
                                        <td>2205</td>
                                        <td>1812</td>
                                        <td>6766</td>
                                        <td>HRS</td>
                                        <td>19114131</td>
                                        <td>100070609838</td>
                                        <td>6207560</td>
                                        <td>B7</td>
                                        <td>08</td>
                                        <td>1/20/2016</td>
                                        <td>6/16/2024</td>
                                    </tr>
                                    <tr>
                                        <td class="active">
                                        <input type="checkbox" class="select-item checkbox" name="select-item" value="1001">
                                        </td>
                                        <th scope="row">10</th>
                                        <td>21</td>
                                        <td>MPD 21-100-00,MRB 21-100-00</td>
                                        <td>AMI</td>
                                        <td>10000004904</td>
                                        <td>000</td>
                                        <td>01</td>
                                        <td>RST</td>
                                        <td>12258893</td>
                                        <td>2119160-3:64547</td>
                                        <td>2119160-01904</td>
                                        <td>HEAT EXCHANGER</td>
                                        <td>PK-GIK.21.52.00.HE.LH</td>
                                        <td>7500</td>
                                        <td></td>
                                        <td>470</td>
                                        <td></td>
                                        <td>22173</td>
                                        <td>24737</td>
                                        <td>2549</td>
                                        <td>22173</td>
                                        <td>3178</td>
                                        <td>2549</td>
                                        <td>22173</td>
                                        <td>2349</td>
                                        <td>1986</td>
                                        <td>14858</td>
                                        <td>2205</td>
                                        <td>1812</td>
                                        <td>6766</td>
                                        <td>HRS</td>
                                        <td>19114131</td>
                                        <td>100070609838</td>
                                        <td>6207560</td>
                                        <td>B7</td>
                                        <td>08</td>
                                        <td>1/20/2016</td>
                                        <td>6/16/2024</td>
                                    </tr>
                                    <tr>
                                        <td class="active">
                                        <input type="checkbox" class="select-item checkbox" name="select-item" value="1001">
                                        </td>
                                        <th scope="row">11</th>
                                        <td>21</td>
                                        <td>HONEYWELL CMM 25-60-13</td>
                                        <td>AMI</td>
                                        <td>10000004904</td>
                                        <td>000</td>
                                        <td>01</td>
                                        <td>RST</td>
                                        <td>12258893</td>
                                        <td>2119160-3:64547</td>
                                        <td>2119160-01904</td>
                                        <td>VALVE , CAB. AIR</td>
                                        <td>PK-GIK.21.31.03.OV.FW</td>
                                        <td>7500</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>22173</td>
                                        <td>3178</td>
                                        <td>2549</td>
                                        <td>22173</td>
                                        <td>3178</td>
                                        <td>2549</td>
                                        <td>22173</td>
                                        <td>2349</td>
                                        <td>1986</td>
                                        <td>14858</td>
                                        <td>2205</td>
                                        <td>1812</td>
                                        <td>6766</td>
                                        <td>HRS</td>
                                        <td>19114131</td>
                                        <td>100070609838</td>
                                        <td>6207560</td>
                                        <td>B7</td>
                                        <td>08</td>
                                        <td>1/20/2016</td>
                                        <td>6/16/2024</td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                        <div class="col-xs-6">
                            <h2 class="sub-header">DATA LAST UPDATE</h2>
                                <span class="counter pull-right"></span>
                                <div class="table-wrapper-scroll-y table-wrapper-scroll-x my-custom-scrollbar">
                                    <div class="container">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="card">
                                                <div class="card-block">
                                                    <div class="table-responsive table-wrapper-scroll-y table-wrapper-scroll-x my-custom-scrollbar">
                                                        <form>
                                                            <input type="text" id="id" placeholder="No.">
                                                            <input type="text" id="ata" placeholder="ATA">
                                                            <input type="text" id="mpd" placeholder="MPD">
                                                            <input type="text" id="docType" placeholder="Doc. Type">
                                                            <input type="text" id="docNo" placeholder="Document No">
                                                            <input type="text" id="docPart" placeholder="Doc. Part">
                                                            <input type="text" id="docVersion" placeholder="Doc. Version">
                                                            <input type="text" id="task" placeholder="Task">
                                                            <input type="text" id="eqpNo" placeholder="Equipment No.">
                                                            <input type="text" id="pn" placeholder="Part Number">
                                                            <input type="text" id="sn" placeholder="Serial Number">
                                                            <input type="text" id="desc" placeholder="Description">
                                                            <input type="text" id="fl" placeholder="Functional Location">
                                                            <input type="text" id="intervalHRS" placeholder="Interval(HRS)">
                                                            <input type="text" id="intervalCYC" placeholder="Interval(CYC)">
                                                            <input type="text" id="intervalDAYS" placeholder="Interval(DAYS)">
                                                            <input type="text" id="intervalLDG" placeholder="Interval(LDG)">
                                                            <input type="text" id="tsnHRS" placeholder="TSN(HRS)">
                                                            <input type="text" id="tsnCYC" placeholder="TSN(CYC)">
                                                            <input type="text" id="tsnDAYS" placeholder="TSN(DAYS)">
                                                            <input type="text" id="tsoHRS" placeholder="TSO(HRS)">
                                                            <input type="text" id="tsoCYC" placeholder="TSO(CYC)">
                                                            <input type="text" id="tsoDAYS" placeholder="TSO(DAYS)">
                                                            <input type="text" id="tsoHRS" placeholder="TST(HRS)">
                                                            <input type="text" id="tstCYC" placeholder="TST(CYC)">
                                                            <input type="text" id="tstDAYS" placeholder="TST(DAYS)">
                                                            <input type="text" id="tsiHRS" placeholder="TSI(HRS)">
                                                            <input type="text" id="tsiCYC" placeholder="TST(CYC)">
                                                            <input type="text" id="tsiDAYS" placeholder="TSI(DAYS)">
                                                            <input type="text" id="lr" placeholder="Life Remaining">
                                                            <input type="text" id="unit" placeholder="Unit">
                                                            <input type="text" id="nn" placeholder="Notification No.">
                                                            <input type="text" id="mp" placeholder="Maintenance Plan">
                                                            <input type="text" id="mi" placeholder="Maintenance Item">
                                                            <input type="text" id="nt" placeholder="Notification Type">
                                                            <input type="text" id="mpc" placeholder="Maintenance Plan Cat">
                                                            <input type="text" id="installDate" placeholder="Install Date">
                                                            <input type="text" id="nextDue" placeholder="Next Due"> 
                                                            <input type="button" class="add-row" value="Add Row">
                                                        </form>
                                                        <button type="button" class="delete-row">Delete Row</button>
                                                        <table class="table table-striped table-bordered" id="example-1">
                                                            <thead>
                                                                <tr>
                                                                    <th class="active">
                                                                        <input type="checkbox" class="select-all checkbox" name="select-all">
                                                                    </th>
                                                                    <th style="display: none;">#</th>
                                                                    <th class="th-sm"></th>
                                                                    <th class="th-sm">No.</th>
                                                                    <th class="th-sm">ATA</th>
                                                                    <th class="th-sm col-md-5 col-xs-5">MPD</th>
                                                                    <th class="th-sm">Doc.Type</th>
                                                                    <th class="th-sm col-md-2 col-xs-2">Document No.</th>
                                                                    <th class="th-sm col-md-3 col-xs-3">Doc. Part.</th>
                                                                    <th class="th-sm">Doc. Version</th>
                                                                    <th class="th-sm">Task</th>
                                                                    <th class="th-sm col-md-2 col-xs-2">Equpiment No.</th>
                                                                    <th class="th-sm col-md-3 col-xs-3">Part Number</th>
                                                                    <th class="th-sm col-md-2 col-xs-2">Serial Number</th>
                                                                    <th class="th-sm col-md-3 col-xs-3">Description</th>
                                                                    <th class="th-sm col-md-2 col-xs-2">Functional Location</th>
                                                                    <th class="th-sm col-md-2 col-xs-2">Interval(HRS)</th>
                                                                    <th class="th-sm col-md-3 col-xs-3">Interval(CYC)</th>
                                                                    <th class="th-sm col-md-3 col-xs-3">Interval(DAYS)</th>
                                                                    <th class="th-sm col-md-3 col-xs-3">Interval(LDG)</th>
                                                                    <th class="th-sm col-md-3 col-xs-3">TSN(HRS)</th>
                                                                    <th class="th-sm col-md-3 col-xs-3">TSN(CYC)</th>
                                                                    <th class="th-sm col-md-3 col-xs-3">TSN(DAYS)</th>
                                                                    <th class="th-sm col-md-3 col-xs-3">TSO(HRS)</th>
                                                                    <th class="th-sm col-md-3 col-xs-3">TSO(CYC)</th>
                                                                    <th class="th-sm col-md-3 col-xs-3">TSO(DAYS)</th>
                                                                    <th class="th-sm col-md-3 col-xs-3">TST(HRS)</th>
                                                                    <th class="th-sm col-md-3 col-xs-3">TST(CYC)</th>
                                                                    <th class="th-sm col-md-3 col-xs-3">TST(DAYS)</th>
                                                                    <th class="th-sm col-md-3 col-xs-3">TSI(HRS)</th>
                                                                    <th class="th-sm col-md-3 col-xs-3">TSI(CYC)</th>
                                                                    <th class="th-sm col-md-3 col-xs-3">TSI(DAYS)</th>
                                                                    <th class="th-sm col-md-3 col-xs-3">life Remaining</th>
                                                                    <th class="th-sm col-md-3 col-xs-3">Unit</th>
                                                                    <th class="th-sm col-md-3 col-xs-3">Notification No</th>
                                                                    <th class="th-sm col-md-3 col-xs-3">Maintenance Plan</th>
                                                                    <th class="th-sm col-md-3 col-xs-3">Maintenance Item</th>
                                                                    <th class="th-sm col-md-3 col-xs-3">Notification Type</th>
                                                                    <th class="th-sm col-md-3 col-xs-3">Maintenance plan cat</th>
                                                                    <th class="th-sm col-md-3 col-xs-3">Install Date</th>
                                                                    <th class="th-sm col-md-3 col-xs-3">Next Due</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row" style="display: none;"></th>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span"></span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <th scope="row" style="display: none;">1</th>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">1</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td class="tabledit-view-mode"><span class="tabledit-span">21</span>
                                                                    </td>
                                                                    <td class="tabledit-view-mode"><span class="tabledit-span">MPD 21-100-00,MRB 21-100-00</span>
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">AMI</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">10000004904</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">000</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    `<td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">01</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">RST</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">12326232</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2119160-3:64547</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2119160-01167</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">VALVE AY, OUTFLOW VALVE ASSY</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">PK-GIK.21.31.03.OV.AF</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">7500</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span"></span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">4562</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span"></span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">22173</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">3178</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2549</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">22173</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2349</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">1986</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">14858</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2206</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">1812</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">6766</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">HRS</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">19114131</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">1000706099838</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">6207560</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">B7</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">100000607838</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">611759</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">A3</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">02</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">11/17/2017</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">6/16/2024</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                <th scope="row" style="display: none;"></th>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span"></span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                <th scope="row" style="display: none;">2</th>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td class="tabledit-view-mode"><span class="tabledit-span">21</span>
                                                                    </td>
                                                                    <td class="tabledit-view-mode"><span class="tabledit-span">MPD 21-100-00,MRB 21-100-00</span>
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">AMI</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">10000004904</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">000</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">01</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">FCN</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">12258893</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2119160-3:64547</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2119160-01904</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">UNDERWATER LOCATOR BEACON 90-DAYS</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">PK-GIK.21.31.03.OV.FW</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">7500</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span"></span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span"></span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span"></span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">22173</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">3178</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2549</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">22173</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2349</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">1986</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">14858</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2206</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">1812</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">6766</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">HRS</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">19114131</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">1000706099838</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">6207560</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">B7</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">100000607838</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">611759</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">A3</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">02</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">1/20/2016</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">3/13/2024</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                <th scope="row" style="display: none;"></th>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span"></span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                <th scope="row" style="display: none;">3</th>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">3</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td class="tabledit-view-mode"><span class="tabledit-span">21</span>
                                                                    </td>
                                                                    <td class="tabledit-view-mode"><span class="tabledit-span">MPD 21-100-00,MRB 21-100-00</span>
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">AMI</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">10000004904</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">000</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    `<td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">01</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">FCN</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">12258893</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2119160-3:64547</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2119160-01904</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">UNDERWATER LOCATOR BEACON 90-DAYS</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">PK-GIK.21.31.03.OV.FW</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">7500</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span"></span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span"></span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span"></span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">22173</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">3178</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2549</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">22173</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2349</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">1986</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">14858</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2206</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">1812</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">6766</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">HRS</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">19114131</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">1000706099838</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">6207560</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">B7</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">100000607838</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">611759</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">A3</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">02</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">1/20/2016</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">3/13/2024</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                <th scope="row" style="display: none;"></th>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span"></span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                <th scope="row" style="display: none;">4</th>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">4</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td class="tabledit-view-mode"><span class="tabledit-span">21</span>
                                                                    </td>
                                                                    <td class="tabledit-view-mode"><span class="tabledit-span">MPD 21-100-00,MRB 21-100-00</span>
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">AMI</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">10000004904</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">000</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    `<td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">01</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">FCN</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">12258893</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2119160-3:64547</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2119160-01904</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">UNDERWATER LOCATOR BEACON 90-DAYS</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">PK-GIK.21.31.03.OV.FW</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">7500</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span"></span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span"></span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span"></span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">22173</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">3178</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2549</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">22173</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2349</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">1986</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">14858</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2206</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">1812</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">6766</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">HRS</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">19114131</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">1000706099838</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">6207560</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">B7</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">100000607838</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">611759</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">A3</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">02</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">1/20/2016</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">3/13/2024</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                <th scope="row" style="display: none;"></th>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span"></span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                <th scope="row" style="display: none;">5</th>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">5</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td class="tabledit-view-mode"><span class="tabledit-span">21</span>
                                                                    </td>
                                                                    <td class="tabledit-view-mode"><span class="tabledit-span">MPD 21-100-00,MRB 21-100-00</span>
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">AMI</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">10000004904</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">000</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    `<td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">01</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">FCN</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">12258893</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2119160-3:64547</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2119160-01904</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">UNDERWATER LOCATOR BEACON 90-DAYS</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">PK-GIK.21.31.03.OV.FW</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">7500</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span"></span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span"></span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span"></span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">22173</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">3178</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2549</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">22173</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2349</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">1986</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">14858</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2206</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">1812</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">6766</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">HRS</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">19114131</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">1000706099838</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">6207560</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">B7</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">100000607838</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">611759</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">A3</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">02</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">1/20/2016</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">3/13/2024</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                <th scope="row" style="display: none;"></th>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span"></span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                <th scope="row" style="display: none;">6</th>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">6</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td class="tabledit-view-mode"><span class="tabledit-span">21</span>
                                                                    </td>
                                                                    <td class="tabledit-view-mode"><span class="tabledit-span">MPD 21-100-00,MRB 21-100-00</span>
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">AMI</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">10000004904</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">000</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    `<td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">01</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">FCN</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">12258893</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2119160-3:64547</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2119160-01904</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">UNDERWATER LOCATOR BEACON 90-DAYS</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">PK-GIK.21.31.03.OV.FW</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">7500</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span"></span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span"></span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span"></span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">22173</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">3178</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2549</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">22173</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2349</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">1986</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">14858</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2206</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">1812</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">6766</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">HRS</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">19114131</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">1000706099838</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">6207560</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">B7</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">100000607838</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">611759</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">A3</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">02</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">1/20/2016</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">3/13/2024</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                <th scope="row" style="display: none;"></th>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span"></span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                <th scope="row" style="display: none;">7</th>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">7</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td class="tabledit-view-mode"><span class="tabledit-span">21</span>
                                                                    </td>
                                                                    <td class="tabledit-view-mode"><span class="tabledit-span">MPD 21-100-00,MRB 21-100-00</span>
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">AMI</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">10000004904</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">000</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    `<td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">01</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">FCN</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">12258893</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2119160-3:64547</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2119160-01904</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">UNDERWATER LOCATOR BEACON 90-DAYS</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">PK-GIK.21.31.03.OV.FW</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">7500</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span"></span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span"></span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span"></span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">22173</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">3178</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2549</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">22173</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2349</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">1986</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">14858</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">2206</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">1812</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">6766</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">HRS</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">19114131</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">1000706099838</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">6207560</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">B7</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">100000607838</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">611759</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">A3</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">02</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">1/20/2016</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
                                                                    </td>
                                                                    <td 
                                                                        class="tabledit-view-mode" 
                                                                        style="cursor: pointer;">
                                                                        <span class="tabledit-span">3/13/2024</span>
                                                                        <input class="tabledit-input form-control input-sm" 
                                                                        type="text" 
                                                                        name="ID" 
                                                                        value="" 
                                                                        style="display: none;">
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
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </div>
</template>

<script lang="ts">
    export default {
        name: "AppComparisonTC"
    }
</script>

<style scoped>
    
</style>