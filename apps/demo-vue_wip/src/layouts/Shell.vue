<template>
  <se-container direction="column" postion="absolute">
    <se-header app-title="Test Advisor"></se-header>
    <se-tabbar color="primary">
      <nav slot="start">Tenant: <a class="dropdown"> test </a></nav>
      <nav>
        <router-link
          :to="{ name: 'home' }"
          @click.native="open = false"
          exact-active-class="active"
        >
          Home
        </router-link>
        <router-link
          :to="{ name: 'dashboard' }"
          @click.native="open = false"
          active-class="active"
        >
          Dashboard
        </router-link>
        <router-link
          :to="{ name: 'icons' }"
          @click.native="open = false"
          active-class="active"
        >
          Icons
        </router-link>
      </nav>
      <nav slot="end">
        <a>End</a>
      </nav>
    </se-tabbar>
    <slot />
  </se-container>
</template>
