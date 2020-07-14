<template>
  <Header text="User Details" />
  <div class="form-section">
    <h3>Account</h3>
    <hr />
    <div class="row">
      <div class="col-4 offset-4">
        <TextField
          name="email"
          label="Email"
          type="email"
          v-model="state.user.email"
          :required="true"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-4 offset-2">
        <TextField
          name="password"
          label="New Password"
          type="password"
          v-model="state.user.password"
        />
      </div>
      <div class="col-4">
        <!-- TODO need to figure out validation for matching the passwords -->
        <TextField
          name="confirmPassword"
          label="Confirm New Password"
          type="password"
          v-model="state.confirmPassword"
        />
      </div>
    </div>
  </div>
  <div class="form-section">
    <h3>Personal</h3>
    <hr />
    <div class="row">
      <div class="col-4 offset-2">
        <TextField
          name="firstName"
          label="First Name"
          v-model="state.user.firstName"
          :required="true"
        />
      </div>
      <div class="col-4">
        <TextField
          name="lastName"
          label="Last Name"
          v-model="state.user.lastName"
          :required="true"
        />
      </div>
    </div>
  </div>
  <div class="form-section">
    <h3>Actions</h3>
    <hr />
    <div class="row">
      <div class="col-4 action-btn-container">
        <button class="btn btn-info">Cancel</button>
      </div>
      <div class="col-4 action-btn-container">
        <button class="btn btn-primary">Save</button>
      </div>
      <div class="col-4 action-btn-container">
        <button class="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/ui/Header';
  import TextField from '@/components/ui/form/TextField';
  import { onMounted, reactive } from 'vue';
  import { useRouter } from 'vue-router';
  import { getUser } from '@/service/UserService';

  const ID_NEW = 'new';

  export default {
    name: 'UserDetails',
    components: { Header, TextField },
    setup() {
      const router = useRouter();
      const state = reactive({
        user: {},
        oldUser: {},
        confirmPassword: ''
      });

      onMounted(async () => {
        const { id } = router.currentRoute.value.params;
        if (id !== ID_NEW) {
          const user = (await getUser(id)) ?? {};
          state.user = { ...user };
          state.oldUser = user;
        }
        // TODO do I need special logic for new users?
      });

      return {
        state
      };
    }
  };
</script>

<style scoped lang="scss">
  @import "../../assets/scss/form";

  .action-btn-container {
    display: flex;
    justify-content: center;
  }
</style>
