<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        v-for="(col, index) in columns"
        :key="col.label"
        :prop="theadList[index]"
        :label="col.label"
      >
        <template slot-scope="scope">
          <el-button v-if="col.type === 'buttonDelete'">Delete</el-button>
          <div v-if="col.type !== 'buttonDelete'">
            {{ scope.row[col.prop] }}
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import Sortable from "sortable";

export default {
  mounted() {
    const el = document.querySelector(".el-table__header-wrapper tr");
    Sortable.create(el, {
      animation: 180,
      delay: 0,
      onEnd: evt => {
        const oldItem = this.theadList[evt.oldIndex];
        this.theadList.splice(evt.oldIndex, 1);
        this.theadList.splice(evt.newIndex, 0, oldItem);
      }
    });
  },
  created() {
    this.theadList = this.columns.map(ele => ele.prop);
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles"
        }
      ],
      columns: [
        {
          prop: "date",
          label: "Date"
        },
        {
          prop: "name",
          label: "Name"
        },
        {
          prop: "address",
          label: "Address"
        },
        {
          prop: "deleteFn",
          label: "Delete Item",
          type: "buttonDelete"
        }
      ],
      theadList: []
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>
