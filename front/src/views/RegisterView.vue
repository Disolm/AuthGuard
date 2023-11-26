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
          <UiFormGroup>
              <UiCheckbox v-model="agree" name="agree" required>Я согласен с условиями</UiCheckbox>
          </UiFormGroup>

          <template #buttons>
              <UiButton variant="primary" type="submit">Зарегистрироваться</UiButton>
          </template>

          <template #append>
              Уже есть аккаунт?
              <UiLink :to="{name: 'login'}">Войдите</UiLink>
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
import UiCheckbox from "@/components/UiCheckbox.vue";
import UiButton from "@/components/UiButton.vue";
import UiLink from "@/components/UiLink.vue";
import UiAlert from "@/components/UiAlert.vue";
import {ref} from "vue";
import type {Ref} from 'vue'
import {router} from "@/router";
import UiTransitionFade from "@/components/UiTransitionFade.vue";
import {registerUser} from "@/api/authApi";
import {generateID} from "@/composables/generateID";
const email: Ref<string> = ref('');
const fullname: Ref<string>  = ref('');
const password: Ref<string>  = ref('');
const password2: Ref<string>  = ref('');
const agree: Ref<boolean> = ref(false);
const alert: Ref<string>  = ref('')


const validate = () => {
    if (password.value !== password2.value) {
        return 'Пароли не совпадают';
    }
    if (!agree.value) {
        return 'Требуется согласится с условиями';
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
        id: generateID(),
        name: fullname.value,
        email: email.value,
        password: password.value
    }

    const result = await registerUser(user);
    if (result) {
        await router.push({ name: 'login' });
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
