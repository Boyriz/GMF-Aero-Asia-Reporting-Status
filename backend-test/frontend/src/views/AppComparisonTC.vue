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
                <h1>Time Controlled Database</h1>
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
                                        <th class="th-sm">Functional Location</th>
                                        <th class="th-sm col-md-2 col-xs-2">Part Number</th>
                                        <th class="th-sm col-md-2 col-xs-2">Serial Number</th>
                                        <th class="th-sm col-md-3 col-xs-3">Description</th>
                                        <th class="th-sm col-md-2 col-xs-2">MP Number</th>
                                        <th class="th-sm col-md-3 col-xs-3">Task</th>
                                        <th class="th-sm col-md-2 col-xs-2">Install Date</th>
                                        <th class="th-sm col-md-3 col-xs-3">TSN(HRS)</th>
                                        <th class="th-sm col-md-3 col-xs-3">TSN(CYC)</th>
                                        <th class="th-sm col-md-2 col-xs-2">Interval(HRS)</th>
                                        <th class="th-sm col-md-3 col-xs-3">Interval(CYC)</th>
                                        <th class="th-sm col-md-3 col-xs-3">Interval(DAYS)</th>
                                        <th class="th-sm col-md-3 col-xs-3">Interval(LDG)</th>
                                        <th class="th-sm col-md-2 col-xs-2">TSLA (HRS)</th>
                                        <th class="th-sm col-md-2 col-xs-2">TSLA (CYC)</th>
                                        <th class="th-sm col-md-2 col-xs-2">TSLA (DAYS)</th>
                                        <th class="th-sm col-md-3 col-xs-3">Life Remaining</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td class="active">
                                        <input type="checkbox" class="select-item checkbox" name="select-item" value="1000">
                                    </td>
                                    <th scope="row">1</th>
                                    <td>PK-GIK.21.31.03.OV.AF</td>
                                    <td>182820-3:70210</td>
                                    <td>24997</td>
                                    <td>HEAT EXCHANGER</td>
                                    <td>2151010100</td>
                                    <td>RST</td>
                                    <td>2/18/2018</td>
                                    <td>11697</td>
                                    <td>7750</td>
                                    <td></td>
                                    <td>2200</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>2153</td>
                                    <td></td>
                                    <td>47</td>
                                    </tr>
                                    <tr>
                                    <td class="active">
                                        <input type="checkbox" class="select-item checkbox" name="select-item" value="1000">
                                    </td>
                                    <th scope="row">2</th>
                                    <td>PK-GIK.21.31.03.OV.AW</td>
                                    <td>182820-3:70210</td>
                                    <td>24997</td>
                                    <td>RESCU 406 AFN</td>
                                    <td>2151010100</td>
                                    <td>RST</td>
                                    <td>2/18/2018</td>
                                    <td>11697</td>
                                    <td>7750</td>
                                    <td></td>
                                    <td>2200</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>2153</td>
                                    <td></td>
                                    <td>47</td>
                                    </tr>
                                    <tr>
                                    <td class="active">
                                        <input type="checkbox" class="select-item checkbox" name="select-item" value="1000">
                                    </td>
                                    <th scope="row">3</th>
                                    <td>PK-GIK.21.31.03.OV.FN</td>
                                    <td>182820-3:70210</td>
                                    <td>24997</td>
                                    <td>LF-ULB</td>
                                    <td>2151010100</td>
                                    <td>RST</td>
                                    <td>2/18/2018</td>
                                    <td>11697</td>
                                    <td>7750</td>
                                    <td></td>
                                    <td>2200</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>2153</td>
                                    <td></td>
                                    <td>47</td>
                                    </tr>
                                    <tr>
                                    <td class="active">
                                        <input type="checkbox" class="select-item checkbox" name="select-item" value="1000">
                                    </td>
                                    <th scope="row">4</th>
                                    <td>PK-GNR.23.71.00.VR</td>
                                    <td>182820-3:70210</td>
                                    <td>24997</td>
                                    <td>UNDERWATER LOCATOR BEACON 90-DAYS</td>
                                    <td>2151010100</td>
                                    <td>RST</td>
                                    <td>2/18/2018</td>
                                    <td>11697</td>
                                    <td>7750</td>
                                    <td></td>
                                    <td>2200</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>2153</td>
                                    <td></td>
                                    <td>47</td>
                                    </tr>
                                    <tr>
                                    <td class="active">
                                        <input type="checkbox" class="select-item checkbox" name="select-item" value="1000">
                                    </td>
                                    <th scope="row">5</th>
                                    <td>PK-GIK.21.31.03.OV.AF</td>
                                    <td>182820-3:70210</td>
                                    <td>24997</td>
                                    <td>HEAT EXCHANGER</td>
                                    <td>2151010100</td>
                                    <td>RST</td>
                                    <td>2/18/2018</td>
                                    <td>11697</td>
                                    <td>7750</td>
                                    <td></td>
                                    <td>2200</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>2153</td>
                                    <td></td>
                                    <td>47</td>
                                    </tr>
                                    <tr>
                                    <td class="active">
                                        <input type="checkbox" class="select-item checkbox" name="select-item" value="1000">
                                    </td>
                                    <th scope="row">6</th>
                                    <td>PK-GIK.21.31.03.OV.AF</td>
                                    <td>182820-3:70210</td>
                                    <td>24997</td>
                                    <td>HEAT EXCHANGER</td>
                                    <td>2151010100</td>
                                    <td>RST</td>
                                    <td>2/18/2018</td>
                                    <td>11697</td>
                                    <td>7750</td>
                                    <td></td>
                                    <td>2200</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>2153</td>
                                    <td></td>
                                    <td>47</td>
                                    </tr>
                                    <tr>
                                    <td class="active">
                                        <input type="checkbox" class="select-item checkbox" name="select-item" value="1000">
                                    </td>
                                    <th scope="row">7</th>
                                    <td>PK-GIK.21.31.03.OV.AF</td>
                                    <td>182820-3:70210</td>
                                    <td>24997</td>
                                    <td>HEAT EXCHANGER</td>
                                    <td>2151010100</td>
                                    <td>RST</td>
                                    <td>2/18/2018</td>
                                    <td>11697</td>
                                    <td>7750</td>
                                    <td></td>
                                    <td>2200</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>2153</td>
                                    <td></td>
                                    <td>47</td>
                                    </tr>
                                    <tr>
                                    <td class="active">
                                        <input type="checkbox" class="select-item checkbox" name="select-item" value="1000">
                                    </td>
                                    <th scope="row">8</th>
                                    <td>PK-GIK.21.31.03.OV.AF</td>
                                    <td>182820-3:70210</td>
                                    <td>24997</td>
                                    <td>HEAT EXCHANGER</td>
                                    <td>2151010100</td>
                                    <td>RST</td>
                                    <td>2/18/2018</td>
                                    <td>11697</td>
                                    <td>7750</td>
                                    <td></td>
                                    <td>2200</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>2153</td>
                                    <td></td>
                                    <td>47</td>
                                    </tr>
                                    <tr>
                                    <td class="active">
                                        <input type="checkbox" class="select-item checkbox" name="select-item" value="1000">
                                    </td>
                                    <th scope="row">1</th>
                                    <td>PK-GIK.21.31.03.OV.AF</td>
                                    <td>182820-3:70210</td>
                                    <td>24997</td>
                                    <td>HEAT EXCHANGER</td>
                                    <td>2151010100</td>
                                    <td>RST</td>
                                    <td>2/18/2018</td>
                                    <td>11697</td>
                                    <td>7750</td>
                                    <td></td>
                                    <td>2200</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>2153</td>
                                    <td></td>
                                    <td>47</td>
                                    </tr>
                                    <tr>
                                    <td class="active">
                                        <input type="checkbox" class="select-item checkbox" name="select-item" value="1000">
                                    </td>
                                    <th scope="row">9</th>
                                    <td>PK-GIK.21.31.03.OV.AF</td>
                                    <td>182820-3:70210</td>
                                    <td>24997</td>
                                    <td>HEAT EXCHANGER</td>
                                    <td>2151010100</td>
                                    <td>RST</td>
                                    <td>2/18/2018</td>
                                    <td>11697</td>
                                    <td>7750</td>
                                    <td></td>
                                    <td>2200</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>2153</td>
                                    <td></td>
                                    <td>47</td>
                                    </tr>
                                    <tr>
                                    <td class="active">
                                        <input type="checkbox" class="select-item checkbox" name="select-item" value="1000">
                                    </td>
                                    <th scope="row">10</th>
                                    <td>PK-GIK.21.31.03.OV.AF</td>
                                    <td>182820-3:70210</td>
                                    <td>24997</td>
                                    <td>HEAT EXCHANGER</td>
                                    <td>2151010100</td>
                                    <td>RST</td>
                                    <td>2/18/2018</td>
                                    <td>11697</td>
                                    <td>7750</td>
                                    <td></td>
                                    <td>2200</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>2153</td>
                                    <td></td>
                                    <td>47</td>
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
                                                            <input type="text" id="fl" placeholder="Functional Location">
                                                            <input type="text" id="pn" placeholder="Part Number">
                                                            <input type="text" id="sn" placeholder="Serial Number">
                                                            <input type="text" id="desc" placeholder="Description">
                                                            <input type="text" id="mp" placeholder="MP Number">
                                                            <input type="text" id="task" placeholder="Task">
                                                            <input type="text" id="installDate" placeholder="Install Date">
                                                            <input type="text" id="tsnHRS" placeholder="Time Since New (HRS)">
                                                            <input type="text" id="tsnCYC" placeholder="Time Since New (CYC)">
                                                            <input type="text" id="interval(HRS)" placeholder="Interval (HRS)">
                                                            <input type="text" id="interval(CYC)" placeholder="Interval (CYC)">
                                                            <input type="text" id="intervalDAYS" placeholder="Interval(DAYS)">
                                                            <input type="text" id="tslaHRS" placeholder="Time Since Last Accomplishment(HRS)">
                                                            <input type="text" id="tslaCYC" placeholder="Time Since Last Accomplishment(CYC)">
                                                            <input type="text" id="tslaDAYS" placeholder="Time Since Last Accomplishment(DAYS)">
                                                            <input type="text" id="lr" placeholder="Life Remaining">
                                                            
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