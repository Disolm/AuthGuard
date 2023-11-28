<template>
  <div class="register-view">
      <UiForm @handleSubmit="handleSubmit">
          <UiFormGroup label="Email">
              <UiInput v-model="email" name="email" type="email" required />
          </UiFormGroup>
          <UiFormGroup label="Имя">
              <UiInput v-model="fullname" name="fullname" required />
          </UiFormGroup>
          <UiFormGroup label="Пароль">
              <UiInput v-model="password" name="password" type="password" required minlength="6" />
          </UiFormGroup>
          <UiFormGroup label="Повтор пароля">
              <UiInput v-model="password2" type="password" required minlength="6" />
          </UiFormGroup>
          <UiFormGroup label="Роль">
              <UiDropdown :options="accessRightsArr()" v-model="accessRights" title="-"/>
          </UiFormGroup>

          <template #buttons>
              <UiButton variant="primary" type="submit">Зарегистрировать</UiButton>
          </template>

          <UiTransitionFade>
              <UiAlert v-if="alert" :text="alert">
                  {{ alert }}
              </UiAlert>
          </UiTransitionFade>
      </UiForm>
  </div>
</template>

<script lang="ts" setup>
import UiInput from "@/components/UiInput.vue";
import UiForm from "@/components/UiForm.vue";
import UiFormGroup from "@/components/UiFormGroup.vue";
import UiButton from "@/components/UiButton.vue";
import UiAlert from "@/components/UiAlert.vue";
import UiTransitionFade from "@/components/UiTransitionFade.vue";

import {ref} from "vue";
import type {Ref} from 'vue'
import {router} from "@/router";
import {registerUser} from "@/api/authApi";
import UiDropdown from "@/components/UiDropdown.vue";
import {accessRightsArr} from "@/composables/permanent";
const email: Ref<string> = ref('');
const fullname: Ref<string>  = ref('');
const password: Ref<string>  = ref('');
const password2: Ref<string>  = ref('');
const accessRights: Ref<string> = ref('');
const alert: Ref<string>  = ref('')


const validate = () => {
    if (password.value !== password2.value) {
        return 'Пароли не совпадают';
    }
    if (!accessRightsArr().map(option => option.text).includes(accessRights.value)) {
        return 'Не выбрана роль пользователя';
    }
};

const handleSubmit = async () => {
    const validationError = validate();
    if (validationError) {
        alert.value = validationError
    } else {
        alert.value = ''
    }
    const user = {
        id: Date.parse(new Date().toISOString()),
        name: fullname.value,
        email: email.value,
        password: password.value,
        accessRights: accessRights.value || 'none'
    }

    const result = await registerUser(user);
    if (result) {
        await router.push({ name: 'administrator' });
    } else {
        alert.value = 'error';
    }
};
</script>

<style scoped lang="scss">
.register-view {
    width: 400px;
}
</style>
