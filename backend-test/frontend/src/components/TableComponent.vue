<!-- <template>
    <div>
        <div class="d-flex justify-content-between align-content-center mb-2">
            <div class="d-flex">
                <div>
                    <div class="d-flex align-items-center ml-4">
                        <label for="registration" class="text-nowrap mr-2 mb-0"
                            >Per Page</label
                        >
                        <select v-model="registration" class="form-control form-control-sm">
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div class="d-flex align-items-center ml-4">
                        <label for="paginate" class="text-nowrap mr-2 mb-0"
                            >FilterBy Class</label>
                        <select class="form-control form-control-sm">
                            <option value="">All Class</option>
                            <option value="1">Class 1</option>
                        </select>
                    </div>
                </div>

                <div>
                    <div class="d-flex align-items-center ml-4">
                        <label for="paginate" class="text-nowrap mr-2 mb-0"
                            >Section</label
                        >
                        <select class="form-control form-control-sm">
                            <option value="">Select a Section</option>
                            <option value="1">Section A</option>
                        </select>
                    </div>
                </div>

                <div>
                    <div class="dropdown ml-4">
                        <button
                            class="btn btn-secondary dropdown-toggle"
                            data-toggle="dropdown"
                        >
                            With Checked (1)
                        </button>
                        <div class="dropdown-menu">
                            <a
                                href="#"
                                class="dropdown-item"
                                type="button"
                            >
                                Delete
                            </a>

                            <a
                                href="#"
                                class="dropdown-item"
                                type="button"
                            >
                                Export
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <input v-model.lazy="search"
                    type="search"
                    class="form-control"
                    placeholder="Search by name,email,phone,or address..."
                />
            </div>
        </div>

        <div class="col-md-10 mb-2">
            <div>
                You are currently selecting all
                <strong>10</strong> items.
            </div>
            <div>
                You have selected <strong>10</strong> items, Do you want to
                Select All <strong>25</strong>?
                <a href="" class="ml-2">Select All</a>
            </div>
        </div>

        <div class="card-body table-responsive p-0">
            <table class="table table-hover">
                <tbody>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th>
                            Operator
                        </th>
                        <th>Registration</th>
                        <th>AC Type</th>
                        <th>Action</th>
                    </tr>

                    <tr v-for="Operator in oper" :key="Operator.id">
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td>{{ Operator.operator }}</td>
                        <td>
                            <button class="btn btn-danger btn-sm">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="row mt-4">
            <div class="col-sm-6 offset-5">
                <pagination :data="oper" @pagination-change-page="getOperator"></pagination>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

interface Registration {
    id: number;
    registration: string;
}

interface Operator {
    id: number;
    operator: string;
}

interface AircraftType {
    id: number;
    acType: string;
}


export default {
    name: "TableComponent",
    data(): { 
        regis: Registration[] | undefined, 
        oper: Operator[] | undefined, 
        ac: AircraftType[] | undefined,
        registration: string,
        search: string,
    } { 
        return {
            regis:undefined,
            oper: undefined,
            ac: undefined,
            registration: "",
            search: "",
        }
    },

    methods: {
        getOperator(): void {
            axios.get('http://localhost:5000/api/operators')
            .then((response) => {
                this.oper = response.data;
            });
        },

        getRegistration(): Registration {
            return {
                id: 1,
                registration: ""
            }
        }
    },

    watch:{
        paginate: function(value: unknown){
            if (typeof value === 'number') {
                this.getOperator();
            }
        },
        search: function(value: unknown){
            if (typeof value === 'string') {
                this.getOperator();
            }
        },
        selectedRegistration : function(value: unknown){
            axios.get('http://localhost:5000/api/actypes')
            .then(response => {
                this.ac = response.data;
            });
            if (typeof value === 'string') {
                this.getOperator();
            }
        },
        selectedSection: function(value: unknown){
            if (typeof value === 'number') {
                this.getOperator();
            }
        }
    },

    mounted() {
        axios.get('http://localhost:5000/api/registrations')
        .then( res => {
            this.regis = res.data;
            console.warn(res.data)
        })
    },
}
</script> -->

<!-- <template>
    <div>
 
      <div class="d-flex justify-content-between align-content-center mb-2">
        <div class="d-flex">
          <div>
            <div class="d-flex align-items-center ml-4">
              <label for="registration" class="text-nowrap mr-2 mb-0">Per Page</label>
              <select v-model="perPage" class="form-control form-control-sm">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
            </div>
          </div>
          <div>
            <div class="d-flex align-items-center ml-4">
              <label for="paginate" class="text-nowrap mr-2 mb-0">FilterBy Class</label>
              <select v-model="classFilter" class="form-control form-control-sm">
                <option value="">All Class</option>
                <option value="1">Class 1</option>
              </select>
            </div>
          </div>
          <div>
            <div class="d-flex align-items-center ml-4">
              <label for="paginate" class="text-nowrap mr-2 mb-0">Section</label>
              <select v-model="sectionFilter" class="form-control form-control-sm">
                <option value="">Select a Section</option>
                <option value="1">Section A</option>
              </select>
            </div>
          </div>
          <div>
            <div class="dropdown ml-4">
              <button class="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                With Checked ({{ selectedRows.length }})
              </button>
              <div class="dropdown-menu">
                <a href="#" class="dropdown-item" type="button" @click.prevent="deleteSelected">Delete</a>
                <a href="#" class="dropdown-item" type="button" @click.prevent="exportSelected">Export</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <input v-model.lazy="searchTerm" type="search" class="form-control" placeholder="Search by name,email,phone,or address..." />
        </div>
      </div>
      
     
      <div class="col-md-10 mb-2">
        <div>You are currently selecting all <strong>{{ selectedRows.length }}</strong> items.</div>
        <div>You have selected <strong>{{ selectedRows.length }}</strong> items, Do you want to Select All <strong>{{ totalRows }}</strong>? <a href="" class="ml-2" @click.prevent="selectAll()">Select All</a></div>
      </div>

      <div class="card-body table-responsive p-0">
        <table class="table table-hover">
          <tbody>
            <tr>
              <th><input type="checkbox" @click="selectAll()" /></th>
              <th>Operator</th>
              <th>Registration</th>
              <th>AC Type</th>
              <th>Action</th>
            </tr>
            <tr v-for="operator in filteredOperators">
              <td><input type="checkbox" :value="operator.id" v-model="selectedRows" /></td>
              <td>{{ operator.operator }}</td>
              <td>{{ operator.registration }}</td>
              <td>{{ operator.acType }}</td>
              <td><button class="btn btn-danger btn-sm"><i class="fa fa-trash" aria-hidden="true"></i></button></td>
            </tr>
          </tbody>
        </table>
      </div>
      
   
      <div class="row mt-4">
        <div class="col-sm-6 offset-5">
          <pagination :current-page="currentPage" :total-pages="totalPages" @page-changed="setCurrentPage"/>
        </div>
      </div>
    </div>
  </template> -->
  
  <!-- <script lang="ts">
  import axios from 'axios'
  </script> -->
  
  

