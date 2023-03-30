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
                  Edit Table
                </li>
              </ol>
            </nav>
        </div>
      </div>
      </div>
        <section class="section-table">
          <div class="container-fluid">
          <div class="card card-details">
            <div id="toolbar">
              <router-link 
                to="/tcComponent"
                type="button"
                class="btn btn-outline-info">UPDATE
              </router-link>  
            </div>
          <span class="counter pull-right"></span>
          <div class="table-wrapper-scroll-y table-wrapper-scroll-x my-custom-scrollbar">
            <div class="container">
              <div class="row">
                  <div class="col-md-12">
                      <div class="card">
                          <div class="card-block">
                              <div class="table-responsive">
                                  <table class="table table-striped table-bordered" id="example-1">
                                      <thead>
                                          <tr>
                                              <th style="display: none;">#</th>
                                              <th scope="col">No.</th>
                                              <th scope="col">Functional Location</th>
                                              <th scope="col">Part Number</th>
                                              <th scope="col">Serial Number</th>
                                              <th scope="col">Description</th>
                                              <th scope="col">MP Number</th>
                                              <th scope="col">Task</th>
                                              <th scope="col">Install Date</th>
                                              <th scope="col">TSN(HRS)</th>
                                              <th scope="col">TSN(CYC)</th>
                                              <th scope="col">Interval(HRS)</th>
                                              <th scope="col">Interval(CYC)</th>
                                              <th scope="col">Interval(DAYS)</th>
                                              <th scope="col">Interval(LDG)</th>
                                              <th scope="col">TSLA (HRS)</th>
                                              <th scope="col">TSLA (CYC)</th>
                                              <th scope="col">TSLA (DAYS)</th>
                                              <th scope="col">Life Remaining</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr>
                                              <th scope="row" style="display: none;">1</th>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">1</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">PK-GIK.24.31.01.MB.01</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">182820-3:70210</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">24997</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">HEAT EXCHANGER</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">2151010100</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">RST</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">2/18/2018</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">11697</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">7750</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span"></span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">2200</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span"></span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span"></span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span"></span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">2153</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span"></span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">47</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                          </tr>
                                          <tr>
                                              <th scope="row" style="display: none;">1</th>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">1</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">PK-GIK.24.31.01.MB.01</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">182820-3:70210</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">24997</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">HEAT EXCHANGER</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">2151010100</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">RST</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">2/18/2018</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">11697</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">7750</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span"></span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">2200</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span"></span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span"></span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span"></span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">2153</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span"></span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">47</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                          </tr>
                                          <tr>
                                              <th scope="row" style="display: none;">1</th>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">1</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">PK-GIK.24.31.01.MB.01</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">182820-3:70210</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">24997</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">HEAT EXCHANGER</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">2151010100</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">RST</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">2/18/2018</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">11697</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">7750</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span"></span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">2200</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span"></span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span"></span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span"></span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">2153</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span"></span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">47</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                          </tr>
                                          <tr>
                                              <th scope="row" style="display: none;">1</th>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">1</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">PK-GIK.24.31.01.MB.01</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">182820-3:70210</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">24997</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">HEAT EXCHANGER</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">2151010100</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">RST</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">2/18/2018</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">11697</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">7750</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span"></span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">2200</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span"></span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span"></span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span"></span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">2153</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span"></span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
                                              </td>
                                              <td 
                                                  class="tabledit-view-mode" 
                                                  style="cursor: pointer;">
                                                  <span class="tabledit-span">47</span>
                                                  <input class="tabledit-input form-control input-sm" 
                                                  type="text" 
                                                  name="ID" 
                                                  value="" 
                                                  style="display: none;" 
                                                  disabled="">
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
        </section>
        </section>
    </div>
</template>

<script>
    export default {
        name: "AppUpdate"
    }
</script>

<style scoped>
    
</style>