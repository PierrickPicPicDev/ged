<template>
  <header class="main-header">
    <span class="logo-mini">
      <a href="/">
        <img
          :src="`${publicPath}img/copilot-logo-white.svg`"
          alt="Logo"
          class="img-responsive center-block logo">
      </a>
    </span>
    <!-- Header Navbar -->
    <nav class="navbar navbar-static-top" role="navigation">
      <!-- Sidebar toggle button-->
      <a href="javascript:;" class="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>

      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <messages-menu></messages-menu>
          <notifications-menu></notifications-menu>
          <tasks-menu></tasks-menu>
          <user-menu :user="user"></user-menu>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState } from 'vuex';
import MessagesMenu from './MessagesMenu.vue';
import NotificationsMenu from './NotificationsMenu.vue';
import TasksMenu from './TasksMenu.vue';
import UserMenu from './UserMenu.vue';

export default {
  name: 'DashHeader',
  components: {
    MessagesMenu,
    NotificationsMenu,
    TasksMenu,
    UserMenu,
  },
  data: () => ({
    publicPath: process.env.BASE_URL,
  }),
  props: ['user'],
  computed: {
    ...mapState([
      'userInfo',
    ]),
  },
};
</script>
