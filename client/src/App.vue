<template>
   <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <button class="nav-link active" href="#ttt" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
        type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
        <button class="nav-link" href="#qqqq" id="nav-notification-tab" data-bs-toggle="tab" data-bs-target="#nav-notification" 
        type="button" role="tab" aria-controls="nav-notification" aria-selected="false">Notifications</button>
        <button class="nav-link" href="#www" id="nav-notification-history-tab" data-bs-toggle="tab" data-bs-target="#nav-notification-history" 
        type="button" role="tab" aria-controls="nav-notification-history" aria-selected="false">Notification History Logs</button>
        <button class="nav-link" href="#task" id="nav-task-tab" data-bs-toggle="tab" data-bs-target="#nav-task" 
        type="button" role="tab" aria-controls="nav-task" aria-selected="false">Tasks</button>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
        <br>
        <div class="row">
          <div class="col-12">
            <h3>Register Notification</h3>
            <Index msg="Welcome to Notifications" />
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="nav-notification" role="tabpanel" aria-labelledby="nav-notification-tab" tabindex="1">
        <br>
        <div class="row">
          <div class="col-12">
            <Notification />
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="nav-notification-history" role="tabpanel" aria-labelledby="nav-notification-history-tab" tabindex="2">
        <br>
        <div class="row">
          <div class="col-12">
            <NotificationHistory />
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="nav-task" role="tabpanel" aria-labelledby="nav-task-tab" tabindex="3">
        <br>
        <div class="row">
          <div class="col-12">
            <Task />
          </div>
        </div>
      </div>
    </div>
</template> 

<script>
import Index from './components/Index.vue';
import NotificationHistory from './components/NotificationHistory.vue';
import Notification from './components/Notification.vue';
import Task from './components/Task.vue';

export default {
  name: 'App',
  components: {
    Index,
    NotificationHistory,
    Notification,
    Task
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 10px;
  background-color: #ffffff ;
}
</style>
