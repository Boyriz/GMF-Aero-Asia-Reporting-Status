<template>
  <div>
    <b-row>
      <b-alert v-model="showSuccessAlert" variant="success" dismissible>
        {{ alertMessage }}
      </b-alert>
    </b-row>
    <b-row>
      <OperatorField
        :total-operators="numberOfOperators"
        :active-operators="activeOperators"
        @totalOperatorsIsActive="setFilterTotalIsActive"
        @activeOperatorsIsActive="setFilterActiveIsActive"     
      ></OperatorField>
    </b-row>
    <b-row class="mt-3">
      <b-card>
        <b-row align-h="between">
          <b-col cols="6">
            <h3>{{ tableHeader }}</h3>
          </b-col>
          <b-col cols="2">
            <b-row>
              <b-col>
                <b-button
                    variant="primary"
                    id="show-btn"
                    @click="showCreateOperator"
                  >
                  <b-icon-plus class="text-white"></b-icon-plus>
                  <span class="h6 text-white">New Operator</span>
                </b-button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-table
            striped
            hover
            :items="items"
            :fields="fields"
            class="text-center"
          >
            <template #cell(operator)="data">
             {{ 
                `${data.item.operator}` 
             }}
            </template>
            <template #cell(actions)="data">
              <b-row>
                <b-col cols="7">
                  <b-icon-pencil-square
                    class="action=item"
                    variant="primary"
                    @click="getRowData(data.item.id)"
                  ></b-icon-pencil-square>
                </b-col>
                <b-col cols="1">
                  <b-icon-trash-fill
                    class="action-item"
                    variant="danger"
                    @click="showDeleteOperator(data.item.id)"
                  ></b-icon-trash-fill>
                </b-col>
              </b-row>
            </template>
          </b-table>
        </b-row>
      </b-card>
    </b-row>

    <!-- script for adding new operators -->
    <b-script
      ref="create-operator"
      size="xl"
      hide-footer
      title="New Operator"
    >
      <CreateComponent
        @closeCreateOperator="closeCreateOperator"
        @reloadTable="getOperatorData"
        @showSuccessAlert="showAlertCreate"
      ></CreateComponent>
      <!-- <create-component-form
        @closeCreateOperator="closeCreateOperator"
        @reloadTable="getOperatorData"
        @showSuccessAlert="showAlertCreate"
      ></create-component-form> -->
    </b-script>

    <!-- script for updating new operators -->
    <b-script
      ref="edit-operator"
      size="xl"
      hide-footer
      title="Edit Operator"
    >
      <EditComponent
        @closeEditOperator="closeEditOperator"
        @reloadTable="getOperatorData"
        @showSuccessAlert="showAlertUpdate"
        :id="id"
      ></EditComponent>
      <!-- <edit-component-form
        @closeEditOperator="closeEditOperator"
        @reloadTable="getOperatorData"
        @showSuccessAlert="showAlertUpdate"
        :id="id"
      ></edit-component-form> -->
    </b-script>

    <!-- script for deleting new operators -->
    <b-script
      ref="delete-operator"
      size="md"
      hide-footer
      title="Confirm Deletion"
    >
      <delete-component
        @closeDeleteOperator="closeDeleteOperator"
        @reloadTable="getOperatorData"
        @showDeleteAlert="showDeleteSuccessOperator"
        :id="id"
      ></delete-component>
    </b-script>

  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import OperatorField from './OperatorField.vue';
import CreateComponent from './CreateComponent.vue';
import EditComponent from './EditComponent.vue';
import DeleteComponent from './DeleteComponent.vue';

interface Operator {
  id: number;
  name: string;
}

export default defineComponent({
  components: { OperatorField, CreateComponent, EditComponent, DeleteComponent },
  data(): {
    fields: any[];
    items: Operator[];
    numberOfOperators: number;
    activeOperators: number;
    activeOperatorsData: Operator[];
    id: number;
    componentSearchTerm: string;
    tableHeader: string;
    showSuccessAlert: boolean;
    alertMessage: string;
  } {
    return {
      fields: [{ key: "id", label: "Operator", sortable: false }, "actions"],
      items: [],
      numberOfOperators: 0,
      activeOperators: 0,
      activeOperatorsData: [],
      id: 0,
      componentSearchTerm: "",
      tableHeader: "",
      showSuccessAlert: false,
      alertMessage: "",
    };
  },
  created() {
    this.getOperatorData();
  },
  methods: {
    showCreateOperator() {
      (this.$refs["create-operator"] as any).show();
    },
    closeCreateOperator() {
      (this.$refs["create-operator"] as any).hide();
    },
    getOperatorData() {
      axios
        .get<Operator[]>("http://localhost:5000/api/operators")
        .then((response) => {
          this.tableHeader = "Total Component";
          this.items = response.data;
          this.numberOfOperators = response.data.length;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getRowData(id: number) {
      (this.$refs["edit-operator"] as any).show();
      this.id = id;
    },
    closeEditOperator() {
      (this.$refs["edit-operator"] as any).hide();
    },
    setFilterTotalIsActive() {
      this.tableHeader = "Total Operators";
      this.getOperatorData();
    },
    setFilterActiveIsActive() {
      this.tableHeader = "Active Operators";
      this.items = this.activeOperatorsData;
    },
    showAlertCreate() {
      this.showSuccessAlert = true;
      this.alertMessage = "Operator was created succesfully!";
    },
    showAlertUpdate() {
      this.showSuccessAlert = true;
      this.alertMessage = "Customer was created succesfully!";
    },
    showDeleteOperator(id: number) {
      (this.$refs["delete-operator"] as any).show();
      this.id = id;
    },
    closeDeleteOperator() {
      (this.$refs["delete-operator"] as any).hide();
    },
    showDeleteSuccessOperator() {
      this.showSuccessAlert = true;
      this.alertMessage = "Operator was deleted successfully!";
    },
  },
});
</script>


<style>
.action-item:hover {
  cursor: pointer;
}
</style>

  