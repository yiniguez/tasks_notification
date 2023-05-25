<template>
  
  <div class="aa">
  </div>
  <form class="row align-items-center" @submit.prevent="addNotification">
    <div class="col-md-4">
      <label class="visually-hidden" for="autoSizingInput">Message</label>
      <input type="text" class="form-control" id="autoSizingInput" placeholder="Message" v-model="message">
    </div>
    <div class="col-md-4">
      <label class="visually-hidden" for="autoSizingSelect">Category</label>
      <select class="form-select" id="autoSizingSelect" v-model="category">
        <option v-for="category in categories" v-bind:value="category._id">
          {{ category.name }} 
        </option>
      </select>
    </div>
    
    <div class="col-auto">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>

</template>

<script>
import { useToast } from "vue-toastification";
export default {
  name: 'Index',
 
  data() {
    return {
      category: '',
      message: '',
      categories:[],
      baseUrl: 'http://localhost:4000/api',
    }
  },
  created(){
    this.getCategories();
  },
  methods: {
    async getCategories() { 
      const response = await this.axios.get(`${this.baseUrl}/category/get`);
      this.categories = response.data;
      console.log(response);
      const toast = useToast();
      toast.success("Categories loaded!", {
        timeout: 2000
      });
    },
    async addNotification() { 
      if(this.category && this.message) {
        let response = await this.axios.post(`${this.baseUrl}/notification/add`, { 'category': this.category, 'message': this.message});
        console.log(response);
        const toast = useToast();
        toast.success("Notification successfully registered!", {
          timeout: 2000
        });
      }
    }
  },
  props: {
    msg: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
