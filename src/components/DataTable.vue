<template>
    <div class="table-responsive">
        <table class="table table-stripe">
            <thead>
                <tr>
                    <th v-for="(column, index) in columns"
                        :key="index">{{ column.display }}</th>
                </tr>
            </thead>
            <tbody v-if="tableData.length > 0">
                <tr v-for="(dataObject, index) in tableData" :key="index">
                    <td v-for="(column, colIndex) in columns"
                        :key="colIndex"
                        v-html="formatColumn(dataObject, column)"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'data-table',
    props: {
        columns: {
            type: Array,
            required: true,
            default: () => []
        },
        tableData: {
            type: Array,
            required: true,
            default: () => []
        },
    },
    methods: {
        formatColumn(dataObject, column) {
            if (!column.data) {
                return;
            }
            let data = this.recompose(dataObject, column.data)
            if(typeof column.render !== 'undefined') {
                return column.render(data)
            }
            return data;
        },
        recompose(obj, string){
            let parts = string.split('.')
            let tempObj = obj[parts[0]]
            let objLength = parts.length
            if (objLength > 1) {
                for(let i = 1; objLength > i; i++) {
                    tempObj = tempObj[parts[i]]
                }
            }
            return tempObj;
        }

    }

}
</script>

