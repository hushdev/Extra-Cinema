<template>
  <div class="form">
      <p class="text-white text-medium">ТУТ ДОЛЖНА БЫТЬ ФОРМА, НО ЕЕ ПОКА НЕТ</p>
      <Btn text="Отправить" fluid/>
  </div>
</template>

<script>
import Btn from "@/components/Btn";
export default {
  components: { Btn },
};
</script>

<style lang="scss" scoped>
.form {
    margin: 92px auto 80px auto;
    padding: 41px 81px 38px 45px;
    background: #161616;
    border-radius: 10px;
    max-width: 920px;
    width: 100%;
    min-height: 70vh;
    .btn {
      margin-top: 34px;
    }
}
</style>