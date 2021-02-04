<template>
  <ul class="sidebar-menu">
    <li class="header">TOOLS</li>
    <router-link
      custom
      v-slot="{ href , route, isActive, isExactActive, navigate }"
      to="/"
    >
      <li class="pageLink" :class="{ active: isExactActive , 'router-active-link': isActive }">
        <a :href="href" @click="navigate">
          <i class="fa fa-desktop"></i>
          <span class="page">Dashboard</span>
        </a>
      </li>
    </router-link>
    <router-link to="/tables" custom v-slot="{ href , route, isActive, navigate }">
      <li class="pageLink" :class="{ active: isActive , 'router-active-link': isActive }">
        <a :href="href" @click="navigate">
          <i class="fa fa-table"></i>
          <span class="page">Tables</span>
        </a>
      </li>
    </router-link>

    <li class="header">ME</li>
    <router-link custom v-slot="{ href , route, isActive, navigate }" to="/tasks">
      <li class="pageLink" :class="{ active: isActive , 'router-active-link': isActive }">
        <a :href="href" @click="navigate">
          <i class="fa fa-tasks"></i>
          <span class="page">Tasks</span>
        </a>
      </li>
    </router-link>
    <router-link custom v-slot="{ href , route, isActive, navigate }" to="/setting">
      <li class="pageLink" :class="{ active: isActive , 'router-active-link': isActive }">
        <a :href="href" @click="navigate">
          <i class="fa fa-cog"></i>
          <span class="page">Settings</span>
        </a>
      </li>
    </router-link>
    <li class="treeview">
      <a href="#">
        <i class="fa fa-folder-o"></i>
        <span class="treeview-title">Files</span>
        <span class="pull-right-container pull-right">
          <i class="fa fa-angle-left fa-fw"></i>
        </span>
      </a>
      <ul class="treeview-menu">
        <li>
          <a href="#">
            <i class="fa fa-file-word-o"></i> Item 1
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-file-picture-o"></i> Item 2
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-file-pdf-o"></i> Item 3
          </a>
        </li>
      </ul>
    </li>

    <li class="header">LOGS</li>
    <router-link custom v-slot="{ href , route, isActive, navigate }" to="/access">
      <li class="pageLink" :class="{ active: isActive , 'router-active-link': isActive }">
        <a :href="href" @click="navigate">
          <i class="fa fa-book"></i>
          <span class="page">Access</span>
        </a>
      </li>
    </router-link>
    <router-link custom v-slot="{ href , route, isActive, navigate }" to="/server">
      <li class="pageLink" :class="{ active: isActive , 'router-active-link': isActive }">
        <a :href="href" @click="navigate">
          <i class="fa fa-hdd-o"></i>
          <span class="page">Server</span>
        </a>
      </li>
    </router-link>
    <router-link custom v-slot="{ href , route, isActive, navigate }" to="/repos">
      <li class="pageLink" :class="{ active: isActive , 'router-active-link': isActive }">
        <a :href="href" @click="navigate">
          <i class="fa fa-heart"></i>
          <span class="page">Repos</span>
          <small class="label pull-right bg-green">AJAX</small>
        </a>
      </li>
    </router-link>

    <li class="header">PAGES</li>
    <router-link custom v-slot="{ href , route, isActive, navigate }" to="/login">
      <li class="pageLink" :class="{ active: isActive , 'router-active-link': isActive }">
        <a :href="href" @click="navigate">
          <i class="fa fa-circle-o text-yellow"></i>
          <span class="page"> Login</span>
        </a>
      </li>
    </router-link>
    <router-link custom v-slot="{ href , route, isActive, navigate }" to="/404">
      <li class="pageLink" :class="{ active: isActive , 'router-active-link': isActive }">
        <a :href="href" @click="navigate">
          <i class="fa fa-circle-o text-red"></i>
          <span class="page"> 404</span>
        </a>
      </li>
    </router-link>
  </ul>
</template>
<script>
export default {
  name: 'SidebarMenu',
};
</script>
<style>
/* override default */
.sidebar-menu > li > a {
  padding: 12px 15px 12px 15px;
}

.sidebar-menu li.active > a > .fa-angle-left,
.sidebar-menu li.active > a > .pull-right-container > .fa-angle-left {
  animation-name: rotate;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
}

.treeview-title {
  z-index: 1;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-90deg);
  }
}
</style>
