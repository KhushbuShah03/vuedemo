<template>
  <div>
    <div class="viewport">
      <md-toolbar :md-elevation="1">
        <span class="md-title">Notes</span>
      </md-toolbar>
      <div v-for="note in notes">
      <md-list class="md-double-line">
      <md-list-item >
      <div class="md-list-item-text">
      <span>{{note.title}}</span>
      <span>{{note.body}}</span>
      </div>
      <md-button class="md-icon-button md-list-action" @click="deleteData(note.id)">
      <md-icon>close</md-icon>
      </md-button>
      <md-button class="md-icon-button md-list-action" @click="changeToUpdateMode(note.title,note.body,note.id)">
      <md-icon>edit</md-icon>
      </md-button>
      </md-list-item>
      </md-list>
       </div>
    </div>
    <div class="viewportRight form">
     <div class="actions md-layout md-alignment-right">
        <md-button class="md-raised md-primary" @click="insertModeOn">Add Notes</md-button>
      </div>
      <div v-if="view">
      <label v-if="isUpdate">Edit Note of {{id}}</label>
<label v-else>Add New Note</label>
        <md-field>
          <label>Title</label>
           <md-input v-model="title" autofocus/>
        </md-field>

        <md-field>
          <label>Body</label>
           <md-textarea v-model="body" />
        </md-field>
      </div>

      <div class="actions md-layout md-alignment-right">
        <md-button class="md-raised md-primary" @click="isUpdate?updateData():insertData()">Save</md-button>
      </div>
      <div class="background"/>
    </div>
  </div>
</template>


<script>
export default {
  name: 'notes',
  data() {
    return {
      notes: [{id: 1, title: 'Test', body: 'Body'}],
      isValidate: false,
      body: '',
      title: '',
      id:'',
      view:false,
      isUpdate:false
    }
  },
  methods: {
    async insertData() {
      this.isValidate = await validate(this.title);
      if (this.isValidate) {
        const newNote = {
          id: this.notes.length + 1,
          title: this.title,
          body: this.body
        }
        this.notes.push(newNote);
        this.body='';
        this.title='';
      } else {
     alert('Enter Title Detail')
      }
    },
    async deleteData(id) {
      this.isValidate = await validate(id)
      if (this.isValidate) {
        const findIndex = this.notes.filter(
          x => x.id.toString() === id.toString()
        )
        this.notes.splice(findIndex[0].id - 1, 1)
      } else {
      }
    },
    async updateData() {
      this.isValidate = await validate(this.title)
      if (this.isValidate) {
        this.notes.map(x => {
          if (x.id.toString() === this.id.toString()) {
            x.title = this.title,
            x.body=this.body
          }
          return x;
        })
      } else {
        alert('Enter Title')
      }
    },
    changeToUpdateMode(title,body,id){
    this.title=title;
    this.body=body;
    this.id=id;
    this.isUpdate=true;
    },
    insertModeOn(){
    this.view=true;
    this.isUpdate=false;
    this.title='';
    this.body='';
    this.id='';
    }
  }
}
const validate = async(value) => {
  return value || value !== '' ? true : false
}
</script>


<style lang="scss" scoped>
.viewport {
  width: 40%;
  max-width: 40vw;
  display: inline-block;
  vertical-align: top;
  overflow: auto;
  border: 1px solid rgba(#000, 0.12);
}
.viewportRight {
  width: 60%;
  max-width: 60vw;
  display: inline-block;
  vertical-align: top;
  overflow: auto;
  border: 1px solid rgba(#000, 0.12);
}
</style>