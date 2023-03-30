<template>
  <div>
      <section class="section-details-header"></section>
      <section class="section-details-content">
        <div class="container">
          <div class="row">
            <div class="col p-0 pl-3 pl-lg-0">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item active" aria-current="page">
                    Time Controlled
                  </li>
                  <li class="breadcrumb-item" aria-current="page">
                    Non-Time Controlled
                  </li>
                </ol>
              </nav>
          </div>
          </div>
        </div>
        <div class="row" id="textColor">
          <h1>Non-Time Controlled Database</h1>
        </div>
      </section>
      <section class="section-table">
        <div class="card card-details">
          <div class="select">
            <select class="form-control" id="locale">
              <option value="Time Controlled">Time Controlled</option>
              <option value="Non-Time Controlled" selected>Non-Time Controlled</option>
            </select>
          </div>
          <div id="toolbar">
            <router-link 
              to="/tcComponent-user"
              type="button"
              class="btn btn-outline-primary"> CONFIRM
            </router-link>
          </div>
          <div id="buttonBarUser">
              <router-link 
                  to="/"
                  type="button"
                  class="btn btn-outline-danger">PDF
              </router-link>
              <router-link 
                  to="/"
                  type="button"
                  class="btn btn-outline-success">EXCEL
              </router-link>
          </div>
        <span class="counter pull-right"></span>

        <div class="table-wrapper-scroll-y table-wrapper-scroll-x my-custom-scrollbar">
            <table class="table table-hover table-striped table-bordered table-sm results display nowrap" id="sortingTable">
              <tr>
                <th>
                  <ul>
                    <li><label><input type="checkbox" :checked="isAllSelected" @click="selectAllData">All</label></li>
                  </ul>
                </th>
                <th class="th-sm col-md-3 col-xs-3" @click="sortList('no')">No &#8597;</th>
                <th class="th-sm col-md-3 col-xs-3" @click="sortList('functionalLocation')"><searchBar @search="handleSearch" />Functional Location &#8597;</th>
                <th class="th-sm col-md-3 col-xs-3" @click="sortList('partNumber')"><searchBar @search="handleSearch" />Part Number &#8597;</th>
                <th class="th-sm col-md-3 col-xs-3" @click="sortList('serialNumber')"><searchBar @search="handleSearch" />Serial Number &#8597;</th>
                <th class="th-sm col-md-3 col-xs-5" @click="sortList('description')"><searchBar @search="handleSearch" />Description &#8597;</th>
                <th class="th-sm col-md-3 col-xs-5" @click="sortList('MPNumber')"><searchBar @search="handleSearch" />MP Number &#8597;</th>
                <th class="th-sm col-md-3 col-xs-5" @click="sortList('Task')"><searchBar @search="handleSearch" />Task &#8597;</th>
                <th class="th-sm col-md-3 col-xs-5" @click="sortList('installDate')"><searchBar @search="handleSearch" />Install Date &#8597;</th>
                <th class="th-sm col-md-3 col-xs-5" @click="sortList('tsnHRS')"><searchBar @search="handleSearch" />TSN (HRS) &#8597;</th>
                <th class="th-sm col-md-3 col-xs-5" @click="sortList('tsnCYC')"><searchBar @search="handleSearch" />TSN (CYC) &#8597;</th>
                <th class="th-sm col-md-3 col-xs-5" @click="sortList('intervalHRS')"><searchBar @search="handleSearch" />Interval (HRS) &#8597;</th>
                <th class="th-sm col-md-3 col-xs-5" @click="sortList('intervalCYC')"><searchBar @search="handleSearch" />Interval (CYC) &#8597;</th>
                <th class="th-sm col-md-3 col-xs-5" @click="sortList('intervalDAYS')"><searchBar @search="handleSearch" />Interval (DAYS) &#8597;</th>
                <th class="th-sm col-md-3 col-xs-5" @click="sortList('tslaHRS')"><searchBar @search="handleSearch" />TSLA (HRS) &#8597;</th>
                <th class="th-sm col-md-3 col-xs-5" @click="sortList('tslaCYC')"><searchBar @search="handleSearch" />TSLA (CYC) &#8597;</th>
                <th class="th-sm col-md-3 col-xs-5" @click="sortList('tslaDAYS')"><searchBar @search="handleSearch" />TSLA(DAYS) &#8597;</th>
                <th class="th-sm col-md-3 col-xs-5" @click="sortList('lifeRemaining')"><searchBar @search="handleSearch" />Life Remaining &#8597;</th>
              </tr>
              <tr v-for="(data, index) in sortedData" :key="index"><label><input type="checkbox" v-model="selectedDataids" :value="data.no" @click="select"></label>
                <td>{{ data.no }}</td>
                <td>{{ data.functionalLocation }}</td>
                <td>{{ data.partNumber }}</td>
                <td>{{ data.serialNumber }}</td>
                <td>{{ data.description }}</td>
                <td>{{ data.MPNumber }}</td>
                <td>{{ data.Task }}</td>
                <td>{{ data.installDate }}</td>
                <td>{{ data.tsnHRS }}</td>
                <td>{{ data.tsnCYC }}</td>
                <td>{{ data.intervalHRS }}</td>
                <td>{{ data.intervalCYC }}</td>
                <td>{{ data.intervalDAYS }}</td>
                <td>{{ data.tslaHRS }}</td>
                <td>{{ data.tslaCYC }}</td>
                <td>{{ data.tslaDAYS }}</td>
                <td>{{ data.lifeRemaining }}</td>
              </tr>
            </table>
        </div>
        </div>
      </section>
  </div>
</template>

<script>

import * as data from '@/table.ts'; 

  export default {
      name: "nontcComponent",
      components: {

        
      }, 
      computed: {
        originalData() {
          return [
          { no: 1, 
            functionalLocation: "PK-GIK.21.31.03.OV.AF", 
            partNumber: "182820-3:70210", 
            serialNumber: "24997", 
            description: "HEAT EXCHANGER", 
            MPNumber: "2151010100", 
            Task: "RST", 
            installDate: "2/18/2018", 
            tsnHRS: "11697",
            tsnCYC:"7750",
            intervalHRS: "",
            intervalCYC: "2200",
            intervalDAYS: "",
            tslaHRS: "",
            tslaCYC: "2153",
            tslaDAYS: "",
            lifeRemaining: "47"  },

            { no: 2, 
            functionalLocation: "PK-GNR.21.51.03.HE.AB.LH.FW", 
            partNumber: "1152682-2:07217", 
            serialNumber: "24997", 
            description: "RESCU 406 AFN EMERGENCY LOCATOR TRANSMTR", 
            MPNumber: "2151010100", 
            Task: "FCN", 
            installDate: "2/18/2018", 
            tsnHRS: "11697",
            tsnCYC:"7750",
            intervalHRS: "",
            intervalCYC: "2210",
            intervalDAYS: "",
            tslaHRS: "3456",
            tslaCYC: "2153",
            tslaDAYS: "9078",
            lifeRemaining: "47"  },

          { no: 3, 
            functionalLocation: "PK-GNR.23.26.01.LU", 
            partNumber: "182820-3:70210", 
            serialNumber: "24997", 
            description: "LF-ULB", 
            MPNumber: "2151010100", 
            Task: "RST", 
            installDate: "2/18/2018", 
            tsnHRS: "11697",
            tsnCYC:"7750",
            intervalHRS: "",
            intervalCYC: "3450",
            intervalDAYS: "",
            tslaHRS: "11234",
            tslaCYC: "",
            tslaDAYS: "678",
            lifeRemaining: "54"  },

            { no: 4, 
            functionalLocation: "PK-GNR.24.31.11.MB.EC.AF", 
            partNumber: "182820-3:70210", 
            serialNumber: "24997", 
            description: "MAIN BATTERY", 
            MPNumber: "2431030100", 
            Task: "DIS", 
            installDate: "7/5/2017", 
            tsnHRS: "12543",
            tsnCYC:"",
            intervalHRS: "4567",
            intervalCYC: "3214",
            intervalDAYS: "2345",
            tslaHRS: "7643",
            tslaCYC: "2153",
            tslaDAYS: "",
            lifeRemaining: "32"  },

          { no: 5, 
            functionalLocation: "PK-GNR.25.64.00.LR.02", 
            partNumber: "64356-101:70167", 
            serialNumber: "24997", 
            description: "RAFT, LIFE UNIT B737", 
            MPNumber: "2564020100", 
            Task: "FNC", 
            installDate: "8/20/2017", 
            tsnHRS: "5642",
            tsnCYC:"4443",
            intervalHRS: "54123",
            intervalCYC: "4325",
            intervalDAYS: "",
            tslaHRS: "11234",
            tslaCYC: "5434",
            tslaDAYS: "23451",
            lifeRemaining: "68"  },
        ];
      },
    },
    data() {
      return {
        sortedData:data.tables,
        tableData:data.tables,
        sortedbyASC: true,
        isAllSelected: false,
      };
    },
    mounted() {
      this.sortedData = this.originalData;
      console.log(this.sortedData);
    },
    methods: {
      sortList(sortBy) {
        if (this.sortedbyASC) {
          this.sortedData.sort((x, y) => (x[sortBy] > y[sortBy] ? -1 : 1));
          this.sortedbyASC = false;
        } else {
          this.sortedData.sort((x, y) => (x[sortBy] < y[sortBy] ? -1 : 1));
          this.sortedbyASC = true;
        }
      },
      selectAllData () {
        if (this.isAllSelected) {
          this.selectedDataids = []
          this.isAllSelected = false
        } else {
          this.selectedDataids = []
          for (var data in this.sortedData) {
            this.selectedDataids.push(this.sortedData[data].no)
          }
          this.isAllSelected = true
        }
      },
      select () {
        if (this.selectedDataids.length != this.sortedData.length) {
          this.isAllSelected = false
        } else {
          this.isAllSelected = true
        }
      },
      handleSearch(value){
        console.log(value);
        if(value && value.length > 0) {
          this.sortedData = this.tableData.filter(i => {
            const val = value.toLowerCase();
            const functionalLocation = i.functionalLocation && i.functionalLocation.toLowerCase();
            if(val && functionalLocation.indexOf(val) !== -1) {
              return true
            } 
            return false
          })
        } else {
          this.sortedData = this.tableData;
        }
      },
      
          // this.sortedData = this.originalData.filter(i => {
          //   const val = value.toLowerCase();
          //   const serialNumber = i.serialNumber && i.serialNumber.toLowerCase();
          //   if(val && serialNumber.indexOf(val) !== -1) {
          //     return true
          //   }
          //   return false
          // }),
          // this.sortedData = this.originalData.filter(i => {
          //   const val = value.toLowerCase();
          //   const MPNumber = i.MPNumber && i.MPNumber.toLowerCase();
          //   if(val && MPNumber.indexOf(val) !== -1) {
          //     return true
          //   }
          //   return false
          // }),
          // this.sortedData = this.originalData.filter(i => {
          //   const val = value.toLowerCase();
          //   const Task = i.Task && i.Task.toLowerCase();
          //   if(val && Task.indexOf(val) !== -1) {
          //     return true
          //   }
          //   return false
          // }),
          // this.sortedData = this.originalData.filter(i => {
          //   const val = value.toLowerCase();
          //   const installDate = i.installDate && i.installDate.toLowerCase();
          //   if(val && installDate.indexOf(val) !== -1) {
          //     return true
          //   }
          //   return false
          // }),
          // this.sortedData = this.originalData.filter(i => {
          //   const val = value.toLowerCase();
          //   const tsnHRS = i.tsnHRS && i.tsnHRS.toLowerCase();
          //   if(val && tsnHRS.indexOf(val) !== -1) {
          //     return true
          //   }
          //   return false
          // }),
          // this.sortedData = this.originalData.filter(i => {
          //   const val = value.toLowerCase();
          //   const tsnCYC = i.tsnCYC && i.tsnCYC.toLowerCase();
          //   if(val && tsnCYC.indexOf(val) !== -1) {
          //     return true
          //   }
          //   return false
          // }),
          // this.sortedData = this.originalData.filter(i => {
          //   const val = value.toLowerCase();
          //   const intervalHRS = i.intervalHRS && i.intervalHRS.toLowerCase();
          //   if(val && intervalHRS.indexOf(val) !== -1) {
          //     return true
          //   }
          //   return false
          // }),
          // this.sortedData = this.originalData.filter(i => {
          //   const val = value.toLowerCase();
          //   const intervalCYC = i.intervalCYC && i.intervalCYC.toLowerCase();
          //   if(val && intervalCYC.indexOf(val) !== -1) {
          //     return true
          //   }
          //   return false
          // }),
          // this.sortedData = this.originalData.filter(i => {
          //   const val = value.toLowerCase();
          //   const intervalDAYS = i.intervalDAYS && i.intervalDAYS.toLowerCase();
          //   if(val && intervalDAYS.indexOf(val) !== -1) {
          //     return true
          //   }
          //   return false
          // }),
          // this.sortedData = this.originalData.filter(i => {
          //   const val = value.toLowerCase();
          //   const tslaHRS = i.tslaHRS && i.tslaHRS.toLowerCase();
          //   if(val && tslaHRS.indexOf(val) !== -1) {
          //     return true
          //   }
          //   return false
          // }),
          // this.sortedData = this.originalData.filter(i => {
          //   const val = value.toLowerCase();
          //   const tslaCYC = i.tslaCYC && i.tslaCYC.toLowerCase();
          //   if(val && tslaCYC.indexOf(val) !== -1) {
          //     return true
          //   }
          //   return false
          // }),
          // this.sortedData = this.originalData.filter(i => {
          //   const val = value.toLowerCase();
          //   const tslaDAYS = i.tslaDAYS && i.tslaDAYS.toLowerCase();
          //   if(val && tslaDAYS.indexOf(val) !== -1) {
          //     return true
          //   }
          //   return false
          // }),
          // this.sortedData = this.originalData.filter(i => {
          //   const val = value.toLowerCase();
          //   const lifeRemaining = i.lifeRemaining && i.lifeRemaining.toLowerCase();
          //   if(val && lifeRemaining.indexOf(val) !== -1) {
          //     return true
          //   }
          //   return false
          // })
    },
  };
</script>

<style scoped>
table {
font-family: arial, sans-serif;
border-collapse: collapse;
width: 100%;
}

td,
th {
border: 1px solid #dddddd;
text-align: left;
padding: 8px;
}

th:hover {
cursor: pointer;
background: rgb(229, 255, 211);
}

tr:nth-child(even) {
background-color: #f3f3f3;
}
</style>