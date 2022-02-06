<template>
  <div class="converter">
    <div class="container pt-5">
      <!-- <h1>Converter</h1> -->
      <div class="row">
        <div class="col-lg-6">
          <b-form class="my-5">
            <b-form-group
              class="mb-4"
              id="input-group-1"
              label="Grinder"
              label-for="input-1"
            >
              <v-select
                id="input-1"
                :options="['Commandante C40']"
              /> </b-form-group
            ><b-form-group
              class="mb-4"
              id="input-group-2"
              label="Brew method"
              label-for="input-2"
            >
              <v-select id="input-2" :options="['Filter']" /> </b-form-group
            ><b-form-group
              class="mb-4"
              id="input-group-3"
              label="Grind size"
              label-for="input-3"
            >
              <v-select id="input-3" :options="['Small']" />
            </b-form-group>

            <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0"
              >Advanced Options</b-form-checkbox
            >
          </b-form>
        </div>
        <div class="col-lg-6">
          <div
            class="h-100 w-100 p-3 d-flex flex-xl-row flex-column justify-content-lg-end align-items-center"
          >
            <img src="~/assets/images/grinder.png" />
            <div class="text-center px-3">
              <p class="mb-0">Filter medium fine between</p>
              <h3>25-35 clicks</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
