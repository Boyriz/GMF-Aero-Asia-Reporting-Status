<template>
    <div class="m-3">
      <h3>Data Table</h3>
      <div class="d-flex justify-content-between my-3">

        <div>
          <input type="search" v-model="search" class="form-control" placeholder="Search here..." />
        </div>
      </div>
  
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th rowspan="2">ID</th>
            <th v-for="(col, index) in columns" :key="'col.name' + index" scope="col">
              <div class="d-flex justify-content-between">
                <div>{{ col.text }}</div>
                <div>
                  <template v-if="sort.column === col.name && sort.by === 'asc'">
                    <i
                      class="fas fa-sort-up"
                      @click="sort = { column: col.name, by: 'desc' }"
                    ></i>
                  </template>
                  <template v-else-if="sort.column === col.name && sort.by === 'desc'">
                    <i
                      class="fas fa-sort-down"
                      @click="sort = { column: col.name, by: '' }"
                    ></i>
                  </template>
                  <template v-else>
                    <i
                      class="fas fa-sort"
                      @click="sort = { column: col.name, by: 'asc' }"
                    ></i>
                  </template>
                </div>
              </div>
            </th>
          </tr>
          <tr>
            <th v-for="(col, index) in columns" :key="index" scope="col">
              <input
                type="search"
                v-model="filter"
                class="form-control"
                :placeholder="`Filter ${col.name}...`"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(entry, index) in filteredEntries" :key="index">
            <td>{{ entry.id }}</td>
            <td v-for="(column, index) in columns" :key="index">
              {{ entry.name }}
            </td>

          </tr>
        </tbody>
      </table>
  
      <div class="d-flex align-items-center" style="margin-top: -17px;">
        <div class="me-2">Show</div>
        <select class="form-select" v-model="limitPerPage" style="width: 80px;">
          <option :value="5">5</option>
          <option :value="10">10</option>
          <option :value="25">25</option>
          <option :value="50">50</option>
          <option :value="100">100</option>
        </select>
        <div class="ms-2">from {{ pageActive }} to {{ totalPages }} </div>
      </div>
  
      <div>
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link text-dark" href="#" @click.prevent="pageActive = 1">&#171;</a>
          </li>
          <li class="page-item">
            <a class="page-link text-dark" href="#" @click.prevent="pageActive = (pageActive > 1) ? pageActive - 1 : pageActive">&#8249;</a>
          </li>
          <li v-for="(page, index) in renderPagination" :key="index" :class="['page-item', { disabled: isNaN(page), active: page === pageActive }]">
            <a :class="['page-link', { 'text-dark': page !== pageActive }]" href="#" @click.prevent="pageActive = page">{{ page }}</a>
          </li>
          <li class="page-item">
            <a
              class="page-link text-dark"
              href="#"
              @click.prevent="pageActive = (pageActive < totalPages) ? pageActive + 1 : pageActive"
            >
              &#8250;
            </a>
          </li>
          <li class="page-item">
            <a class="page-link text-dark" href="#" @click.prevent="pageActive = totalPages">&#187;</a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Entry {
  id: number;
  name?: string;
  position?: string;
  office?: string;
  extension?: string;
  startdate?: string;
  salary?: number;
  [key: string]: string | number | undefined
}

interface Columns {
    name: string;
    text: string;
}


export default defineComponent({
    name: "DataTable",
    data() {
        return {
            columns: [
                {name: 'name', text:'Name'}, 
                {name: 'position', text: 'Position'}, 
                {name: 'office', text: 'Office'}, 
                {name: 'extension', text: 'Extension'}, 
                {name: 'startdate', text: 'Start Date'}, 
                {name: 'salary', text: 'Salary'}
            ] as Columns[],
            entries: [] as Entry[],
            search: "",
            filter: {} as Partial<Entry>,
            pageActive: 1,
            limitPerPage: 10,
            amount: {
                salaryPerPage: 0,
                allSalaries: 0,
            },
            sort: {
                column: 'id',
                by: 'asc',
            },
        }
    },
    computed: {
        tableData(): { columns: Columns[], entries: Entry[] } {
            return {
                columns: this.columns,
                entries: this.entries
            }
        },
        filteredEntries(): Entry[] {
            let newEntries = this.entries.slice()
            if (this.search.length >= 2) {
                newEntries = newEntries.filter(entry => {
                    const values = Object.values(entry).filter(value => typeof value === 'string')
                    return values.some(value => {
                        if (typeof value === 'string') {
                            return value.toLowerCase().includes(this.search.toLowerCase())
                        } else {
                            return false
                        }
                    })
                })
            }
        
            if (Object.keys(this.filter).length > 0) {
              newEntries = newEntries.filter((entry: Entry) => {
                return Object.entries(this.filter).every(([key, value]) =>  entry[key as keyof Entry] === value)
              })
            }
        
            const startIndex = (this.pageActive - 1) * this.limitPerPage
            newEntries = newEntries.sort((a, b) => {
              const order = this.sort.by === 'asc' ? 1 : -1
              const aValue = a[this.sort.column]
              const bValue = b[this.sort.column]
              if (typeof aValue === 'string' && typeof bValue === 'string') {  // Narrow down to string types using typeof and type guard
                return order * aValue.localeCompare(bValue)
              }
              if (typeof aValue === 'number' && typeof bValue === 'number') {  // add another if block for number types
                return order * (aValue - bValue)  // By default sort numbers without locale
              }
              return 0
            }).slice(startIndex, startIndex + this.limitPerPage)
            
        
            // this.amount.salaryPerPage = newEntries.reduce((acc, entry) => acc + entry.salary!, 0)
            // this.amount.allSalaries = this.entries.reduce((acc, entry) => acc + entry.salary!, 0)
            return newEntries
        },
        totalPages(): number {
            return Math.ceil(this.filteredEntries.length / this.limitPerPage)
        },
        renderPagination(): number[] {
            const from = Math.max(1, this.pageActive - 2)
            const to = Math.min(from + 4, this.totalPages)
            const result = []
            for (let i = from; i <= to; i++) {
                result.push(i)
            }
            return result
            },
        checks(): number[] {
            return this.filteredEntries.filter(i => i.checked!).map(i => i.id)
        }
    },
    created() {
        
        this.entries = [
            {id: 1, name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', extension: '5421', startdate: '2011-04-25', salary: 320800 },
            {id: 2, name: 'Garrett Winters', position: 'Accountant', office: 'Tokyo', extension: '5421', startdate: '2011-04-25', salary: 320800 },
            {id: 3, name:'Ashton Cox', position:'Junior Technical Author', office:'San Francisco', extension:'1562', startdate:'2009-01-12', salary: 86000},
            {id: 4, name:'Cedric Kelly', position:'Senior Javascript Developer', office:'Edinburgh', extension:'6224', startdate:'2012-03-29', salary: 433060},
            {id: 5, name:'Airi Satou', position:'Accountant', office:'Tokyo', extension:'5407', startdate:'2008-11-28', salary: 162700},
            {id: 6, name:'Brielle Williamson', position:'Integration Specialist', office:'New York', extension:'4804', startdate:'2012-12-02', salary: 372000},
            {id: 7, name:'Herrod Chandler', position:'Sales Assistant', office:'San Francisco', extension:'9608', startdate:'2012-08-06', salary: 137500},
            {id: 8, name:'Rhona Davidson', position:'Integration Specialist', office:'Tokyo', extension:'6200', startdate:'2010-10-14', salary: 327900},
            {id: 9, name:'Colleen Hurst', position:'Javascript Developer', office:'San Francisco', extension:'2360', startdate:'2009-09-15', salary: 205500},
            {id: 10, name:'Sonya Frost', position:'Software Engineer', office:'Edinburgh', extension:'1667', startdate:'2008-12-13', salary: 103600},
        ]
    }, 
})
</script>