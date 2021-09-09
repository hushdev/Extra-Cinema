<template>
  <div class="upload-wrap">
    <Header />
    <section class="wrap bg-black">
      <div class="container">
        <arrow-back href="for-holders" />
        <h1 class="text-white text-semi-bold">
          <img
            src="@/assets/images/uploadNew/download.svg"
            alt="Загрузить фильм"
          />
          <span>Загрузить фильм</span>
        </h1>
        <div class="row">
          <form @input="validate">
            <div class="left">
              <div class="text-regular text-white p-SM">Название фильма</div>
              <div class="text-regular text-white p-SM">Жанр</div>
              <div class="text-regular text-white p-SM">Загрузить фильм</div>
              <div class="text-regular text-white p-SM">
                Загрузить изображение
              </div>
              <div class="text-regular text-white p-SM">Формат</div>
              <div class="text-regular text-white p-SM">Длительность</div>
              <div class="text-regular text-white p-SM">Описание</div>
            </div>
            <div class="right">
              <div
                class="
                  input-wrap input-wrap-mobile
                  text-regular text-white
                  p-SM
                "
              >
                Название фильма
              </div>
              <div class="input-wrap">
                <input
                  v-model="name"
                  type="text"
                  class="text-regular text-gray"
                  placeholder="Введите название"
                />
              </div>
              <div
                class="
                  input-wrap input-wrap-mobile
                  text-regular text-white
                  p-SM
                "
              >
                Жанр
              </div>

              <div class="input-wrap">
                <input
                  v-model="genre"
                  type="text"
                  class="text-regular text-gray"
                  placeholder="Введите название жанра"
                />
              </div>
              <div
                class="
                  input-wrap input-wrap-mobile
                  text-regular text-white
                  p-SM
                "
              >
                Загрузить фильм
              </div>

              <div class="input-wrap text-regular text-gray p-SM">
                <span id="text">{{ file }}</span>
                <img
                  id="file-icon"
                  src="@/assets/images/uploadNew/file.svg"
                  alt="Загрузить файл"
                />
                <input
                  @change="setFile"
                  type="file"
                  id="file"
                  ref="video"
                  accept="video/*"
                />
              </div>

              <div
                class="
                  input-wrap input-wrap-mobile
                  text-regular text-white
                  p-SM
                "
              >
                Загрузить изображение
              </div>
              <div class="input-wrap text-regular text-gray p-SM">
                <span id="text">{{ image }}</span>
                <img
                  id="file-icon"
                  src="@/assets/images/uploadNew/file.svg"
                  alt="Загрузить файл"
                />
                <input
                  @change="setImage"
                  type="file"
                  id="file"
                  ref="image"
                  accept="image/*"
                />
              </div>

              <div
                class="
                  input-wrap input-wrap-mobile
                  text-regular text-white
                  p-SM
                "
              >
                Формат
              </div>
              <div class="dark">
                <div
                  class="input-wrap select dark"
                  :class="{ 'show-dropdown': showDropdown }"
                >
                  <div class="dropdown">
                    <svg
                      @click="showDropdown = !showDropdown"
                      :class="{ rotate: showDropdown }"
                      width="10"
                      height="5"
                      viewBox="0 0 9 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.459961 3.92L4.35996 0.0200043L8.25996 3.92H0.459961Z"
                        fill="white"
                      />
                    </svg>
                    <div class="title text-regular text-white p-SM">
                      <span
                        v-if="type !== '2 D'"
                        @click="
                          type = '2 D';
                          showDropdown = false;
                        "
                        >{{ type }}</span
                      >
                      <span
                        v-if="type !== '3 D'"
                        @click="
                          type = '3 D';
                          showDropdown = false;
                        "
                        >{{ type }}</span
                      >
                    </div>
                  </div>
                  <div
                    v-if="showDropdown"
                    class="dropdown text-regular text-white p-SM"
                  >
                    <span
                      v-if="type !== '2 D'"
                      @click="
                        type = '2 D';
                        showDropdown = false;
                      "
                      >2 D</span
                    >
                    <span
                      v-if="type !== '3 D'"
                      @click="
                        type = '3 D';
                        showDropdown = false;
                      "
                      >3 D</span
                    >
                  </div>
                </div>
              </div>
              <div
                class="
                  input-wrap input-wrap-mobile
                  text-regular text-white
                  p-SM
                "
              >
                Длительность
              </div>

              <div class="dark">
                <div class="input-wrap">
                  <input
                    v-model="time"
                    type="text"
                    class="text-regular text-gray"
                    placeholder="Длительность сеанса"
                  />
                  <span class="text-white text-regular p-SM">мин.</span>
                </div>
              </div>
              <div
                class="
                  input-wrap input-wrap-mobile
                  text-regular text-white
                  p-SM
                "
              >
                Описание
              </div>
              <div class="dark">
                <div class="input-wrap textarea">
                  <textarea
                    v-model="overview"
                    type="text"
                    class="text-regular text-gray"
                    placeholder="Краткое описание фильма"
                  />
                </div>
              </div>
            </div>
          </form>
          <Btn
            fluid
            text="Загрузить"
            :disabled="btnDisabled"
            @click.native="saveToDB"
          />
        </div>
        <router-link to class="link">
          <div class="btn-decor">
            <img :src="SettingsIcon" alt="Служба поддержки" />
          </div>
          <div class="btn-text text-white text-semi-bold">Служба поддержки</div>
        </router-link>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArrowBack from "@/components/ArrowBack";
import Btn from "@/components/Btn";
import SettingsIcon from "@/assets/images/cinema-for-halls-page/settings_icon.svg";
import axios from "axios";

export default {
  components: { Header, Footer, ArrowBack, Btn },
  data: () => ({
    SettingsIcon,
    showDropdown: false,
    name: "",
    genre: "",
    file: "Выберите фильм",
    image: "Выберите картину",
    time: "",
    overview: "",
    type: "2 D", //or '3 D',
    btnDisabled: true,
    // genre should be multiple select with genres.title as option, genres.id as option value, genres_id as model
    genres_id: [],
    genres: [],
  }),
  mounted() {
    this.getGenres();
  },
  methods: {
    setFile(e) {
      var file = e.target.files || e.dataTransfer.files;
      if (!file.length) return;
      this.file = file[0].name;
    },
    setImage(e) {
      var image = e.target.files || e.dataTransfer.files;
      if (!image.length) return;
      this.image = image[0].name;
    },
    validate() {
      if (
        this.name.length > 3 &&
        this.genre.length > 3 &&
        this.time &&
        this.overview.length > 3
      ) {
        this.btnDisabled = false;
      } else {
        this.btnDisabled = true;
      }
    },
    getGenres() {
      axios
        .post("/api/genres")
        .then((res) => {
          this.genres = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    saveToDB() {
      var format_id = this.type == "2 D" ? "1" : "2";
      var fData = new FormData();

      fData.append("image", this.$refs.image.files[0]);
      fData.append("file", this.$refs.video.files[0]);
      fData.append("token", this.$store.getters.getAuthToken);
      fData.append("title", this.name);
      fData.append("description", this.overview);
      fData.append("duration", this.time);
      fData.append("format_id", format_id);
      fData.append("genres_id", this.genres_id);

      axios
        .post("/api/films/store", fData)
        .then((res) => {
          this.$router.push("/cinema").catch(() => {});
        })
        .catch((err) => {
          if (err.response.status == 422) {
            console.log("validaion error");
          }
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  .container {
    position: relative;
    padding: 87px 15px 121px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      display: flex;
      align-items: center;
      img {
        margin-right: 20px;
      }
    }
    .row {
      margin-top: 70px;
      background: #161616;
      width: 100%;
      padding: 44px;
      border-radius: 10px;
      form {
        display: flex;
        align-items: stretch;
        width: 100%;
        border: 1px solid #444444;
        border-radius: 10px;
        margin-bottom: 32px;
        .left {
          padding: 0 20px;
          max-width: 199px;
          width: 100%;
          border-right: 1px solid #444444;
          div {
            padding: 15px 0;
            border-bottom: 1px solid #444444;
            &:last-child {
              border-bottom: 0;
            }
          }
        }

        .right {
          padding: 0 20px;
          width: 100%;

          .dark {
            padding: 7.5px 0;
            border-bottom: 1px solid #444444;
            &:last-child {
              border-bottom: 0;
            }
            .input-wrap {
              background: #252424;
              border-radius: 5px;
              padding: 7.9px 12px;
              position: relative;
            }
          }
          .textarea {
            height: 114px;
            textarea {
              resize: none;
              height: 100%;
            }
          }
          .select {
            flex-direction: column;
          }
          .show-dropdown {
            height: 65px;
            justify-content: space-between;
          }
          .input-wrap {
            padding: 16px 0;
            border-bottom: 1px solid #444444;
            display: flex;
            align-items: center !important;
            justify-content: space-between;
            position: relative;
            #file {
              position: absolute;
              width: 100%;
              height: 100%;
              opacity: 0;
              cursor: pointer;
              top: 0;
              left: 0;
            }
            #file-icon {
              position: absolute;
              right: 0;
              top: 20px;
            }
            &:last-child {
              border-bottom: 0;
            }
            span#text {
              font-size: 14px;
              color: #797979;
            }
            input,
            textarea {
              background: transparent;
              border: 0;
              outline: 0;
              font-size: 14px;
              width: 100%;
              color: #ffffff;
            }
          }
          .input-wrap-mobile {
            display: none;
          }
          .select {
            position: relative;
            .dropdown {
              width: 100%;
              align-items: center;
              display: flex;
              justify-content: space-between;
              cursor: pointer;
              svg {
                position: absolute;
                transform: rotate(180deg);
                transition: 0.2s;
                top: 14px;
                right: 14px;
              }
              .rotate {
                transform: rotate(0);
              }
            }
          }
        }
      }
      button {
        position: relative;
        &:after {
          content: "";
          width: 18px;
          height: 18px;
          background: url("../../assets/images/uploadNew/download.svg")
            no-repeat;
          background-size: contain;
          position: absolute;
          top: 13px;
          right: 15px;
        }
      }
    }
    .link {
      width: 100%;
      height: 86px;
      display: flex;
      align-items: center;
      background: #27ae60;
      border-radius: 10px;
      text-decoration: none;
      transition: 0.2s;
      margin-top: 49px;
      &:hover {
        background: #279e48;
        .btn-decor {
          background: #ffffff;
          img {
            filter: brightness(0%);
          }
        }
      }
      .btn-decor {
        border-radius: 10px;
        background: #444444;
        box-shadow: 10px 13px 25px rgba(0, 0, 0, 0.26);
        height: 86px;
        width: 86px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.2s;
        img {
          transition: 0.2s;
        }
      }
      .btn-text {
        width: calc(100% - 86px);
        text-align: center;
        font-size: 18px;
      }
    }
  }
}

@media (max-width: 580px) {
  .wrap {
    .container {
      padding: 68px 30px 46px 30px !important;
      h1 {
        img {
          width: 15px;
          height: 15px;
          margin-right: 10px;
        }
      }
      .row {
        background: transparent;
        padding: 0 !important;
        margin-top: 30px;
        form {
          border: 0;
          .left {
            display: none;
          }
          .right {
            padding: 0 !important;

            .input-wrap-mobile {
              display: block !important;
            }
            .input-wrap {
              padding: 10px 0 !important;
              input,
              textarea {
                font-size: 12px !important;
              }
              #file-icon {
                top: 13px !important;
              }
            }
            .dark {
              .input-wrap {
                padding: 10px 10px !important;
              }
            }
          }
        }
      }
    }
  }
}

//other for components
@media (max-width: 834px) {
  .wrap {
    .container {
      .row {
        padding: 34px;
      }
      .link {
        max-width: 269px;
        width: 100%;
        border-radius: 0;
        height: 50px;
        .btn-decor {
          height: 50px;
          width: 50px;
          border-radius: 0;
          img {
            width: 30px;
            height: 30px;
          }
        }
        .btn-text {
          text-align: left;
          padding-left: 15px;
          font-size: 12px;
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .wrap {
    .container {
      .row {
        button {
          &::after {
            top: 8px;
            right: 8px;
            width: 15px;
            height: 15px;
          }
        }
      }
    }
  }
}
</style>