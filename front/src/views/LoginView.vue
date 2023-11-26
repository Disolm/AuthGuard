<template>
    <div class="login-view">
        <UiForm @handleSubmit="handleSubmit">
            <UiFormGroup label="Email">
                <UiInput v-model="email" name="email" type="email" placeholder="admin@admin.ru" required/>
            </UiFormGroup>
            <UiFormGroup label="Пароль">
                <UiInput v-model="password" name="password" type="password" placeholder="admin" required/>
            </UiFormGroup>

            <template #buttons>
                <UiButton variant="primary" type="submit" block>Войти</UiButton>
            </template>

            <template #append>
                Нет аккаунта?
                <UiLink :to="{ name: 'register' }" class="link">
                    Зарегистрируйтесь
                </UiLink>
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
import UiForm from "@/components/UiForm.vue";
import UiFormGroup from "@/components/UiFormGroup.vue";
import UiInput from "@/components/UiInput.vue";
import UiButton from "@/components/UiButton.vue";
import UiLink from "@/components/UiLink.vue";
import {ref, watch} from "vue";
import type {Ref} from 'vue'
import UiTransitionFade from "@/components/UiTransitionFade.vue";
import UiAlert from "@/components/UiAlert.vue";
import {router} from "@/router";
import {useAuthStore} from "@/stores/useAuthStore";

const email: Ref<string> = ref('');
const password: Ref<string> = ref('');
const alert: Ref<string> = ref('')
const handleSubmit = async () => {
    const authStore = useAuthStore()
    const result = await authStore.login(email.value, password.value);
    if (result?.success) {
        await router.push({ name: 'index' });
    } else {
        alert.value = 'Неверные учётные данные...';
    }
}
watch(() => email.value, () => {
    alert.value = ''
})
watch(() => password.value, () => {
    alert.value = ''
})
</script>

<style scoped lang="scss"></style>
